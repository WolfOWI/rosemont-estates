<?php 
// Sign Up Functionality

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
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$phone = $data['phone'];
$email = $data['email'];
$password = $data['password'];
$userType = $data['userType'];




// If form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Standard user or agent entity?
    if ($userType === "user") {
        // User Create SQL Statement
        $sql = "INSERT INTO user (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)";
    }
    else if ($userType === "agent") {
        // Agent Create SQL Statement (Default of realEstateId 1, which means 'none')
        $sql = "INSERT INTO agent (realEstateId, firstName, lastName, phone, email, password) VALUES (1, ?, ?, ?, ?, ?)";
        
    }

    // Prepare SQL statement
    $stmt = $conn->prepare($sql);

    // Add form values to statement
    $stmt->bind_param("sssss", $firstName, $lastName, $phone, $email, $password);
    

    // TODO Check if email & phone exists?

    // If statement was successfully executed
    if ($stmt->execute()) {
        echo json_encode(["message" => "Registration Successful!"]);
        
    } else {
        echo json_encode(["message" => "Error: " . $sql . " " . $conn->error]);
    }

    // Close the statement
    $stmt->close();

    // Close the database connection
    $conn->close();
}

?>
