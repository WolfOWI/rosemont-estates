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

// If form has been submitted (log in button press)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // SQL: Find user by email
    $sql = "SELECT * from user WHERE email = ?";

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

        // Fetch user data
        $user = $result->fetch_assoc();

        // If password matches
        if($password === $user['password']){

            // Store user information in session
            $_SESSION['firstName'] = $user["firstName"];

            echo json_encode(["message" => "Welcome " . $user["firstName"] . " " . $user["lastName"]]);

            // Redirect to home page
            // header("Location: ../../src/pages/HomePage.jsx");

            exit(); // Terminate the script to ensure redirection
        } else {
            echo json_encode(["message" => "The username or password you have entered is incorrect. Please check your details and try again."]);
        }
    } else {
        echo json_encode(["message" => "The username or password you have entered is incorrect. Please check your details and try again."]);
    }

    $stmt->close();
    $conn->close();
}

?>
