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
$firstName = $data['firstName'] ?? null;
$lastName = $data['lastName'] ?? null;
$phone = $data['phone'] ?? null;
$email = $data['email'] ?? null;
$password = $data['password'] ?? null;

// Ensure all values are provided
if (!$firstName || !$lastName || !$phone || !$email || !$password) {
    echo json_encode(["message" => "All fields are required."]);
    http_response_code(400); // Bad Request
    exit;
}

// If form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // SQL Statement
    $sql = "INSERT INTO user (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)";

    // Prepare SQL statement for execution
    $stmt = $conn->prepare($sql);

    // Add form values to statement
    $stmt->bind_param("sssss", $firstName, $lastName, $phone, $email, $password);

    // TODO Check if email & phone exists?

    // If statement was successfully executed
    if ($stmt->execute()) {
        echo json_encode(["message" => "Registration Successful"]);
    } else {
        echo json_encode(["message" => "Error: " . $sql . " " . $conn->error]);
    }

    // Close the statement
    $stmt->close();

    // Close the database connection
    $conn->close();
}

?>
