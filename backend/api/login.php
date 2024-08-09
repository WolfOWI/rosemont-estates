<?php
// Login Functionality

// SETUP
// -----------------------------------------
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start(); // Start Session
require '../config/config.php'; // Include the config file

// Allow CORS
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Allow preflight request
    http_response_code(204);
    exit;
}
// -----------------------------------------


// Decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Get values from the form
$email = $data['email'];
$password = $data['password'];
$userType = $data['userType'];

// TODO Determine what kind of user wants to log in?

// If form has been submitted (log in button press)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Standard user or agent entity?
    if ($userType === "user") {
        // SQL: Find user by email
        $sql = "SELECT * from user WHERE email = ?";
        $userTypePlaceholder = "customer";
    }
    else if ($userType === "agent") {
        // SQL: Find agent by email
        $sql = "SELECT * from agent WHERE email = ?";
        $userTypePlaceholder = "agency";
    }

    // Prepare SQL statement
    $stmt = $conn->prepare($sql);

    // Add the values to the SQL statement
    $stmt->bind_param("s", $email);

    // Execute SQL
    $stmt->execute();

    // Store result 
    $result = $stmt->get_result();

    // If user exists
    if($result->num_rows > 0){

        // Fetch person (user/agent) data
        $person = $result->fetch_assoc();

        // If password matches
        if($password === $person['password']){

            // Store person information in session
            $_SESSION['firstName'] = $person["firstName"];

            echo json_encode(["message" => "Welcome " . $person["firstName"] . " " . $person["lastName"]]);

            // TODO Redirect to home page
            // header("Location: ../../src/pages/HomePage.jsx");

            exit(); // Terminate the script to ensure redirection
        } else {
            echo json_encode(["message" => "The username or password you have entered does not match our $userTypePlaceholder records. Please check your details and that you've selected the correct account type."]);
        }
    } else {
        echo json_encode(["message" => "The username or password you have entered does not match our $userTypePlaceholder records. Please check your details and that you've selected the correct account type."]);
    }

    $stmt->close();
    $conn->close();
}

?>
