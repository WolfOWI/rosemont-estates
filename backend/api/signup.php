<?php
// SETUP
// -------------------------------------------------
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start(); // Start the session

require '../config/config.php'; // Include the config file

// Add CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}
// -------------------------------------------------

// Decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Get values from the form
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$phone = $data['phone'];
$email = $data['email'];
$password = $data['password'];
$userType = $data['userType'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Standard user or agent entity?
    if ($userType === "user") {
        $sql = "INSERT INTO user (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)";
    } else if ($userType === "agent") {
        $sql = "INSERT INTO agent (realEstateId, firstName, lastName, phone, email, password) VALUES (1, ?, ?, ?, ?, ?)";
    }

    // Prepare SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $firstName, $lastName, $phone, $email, $password);

    // If statement was successfully executed
    if ($stmt->execute()) {
        echo json_encode(["message" => "Registration Successful!"]);
    } else {
        echo json_encode(["message" => "Error: " . $sql . " " . $conn->error]);
    }

    $stmt->close();
    $conn->close();
}
?>