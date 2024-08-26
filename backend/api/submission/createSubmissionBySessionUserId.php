<?php
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start the session
session_start();

// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

require '../../config/config.php';

// Get logged-in user's ID
$userId = $_SESSION['user']['userId'] ?? '';

// Extract the data from the request
$houseId = $_POST['houseId'];
$submitStatus = $_POST['submitStatus'];
$submitDate = $_POST['submitDate'];
$decisionDate = $_POST['decisionDate'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if ($userId) {
        $sql = "INSERT INTO submission (`houseId`, `userId`, `submitStatus`, `submitDate`, `decisionDate`) VALUES (?, ?, ?, ?, ? )";
        $stmt = $conn->prepare($sql);

        if ($stmt === false) {
            die("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("iisss", $houseId, $userId, $submitStatus, $submitDate, $decisionDate);

        if ($stmt->execute()) {
            echo json_encode(["message" => "New submission entity was created"]);
        } else {
            echo json_encode(["message" => "Failed to create submission entity"]);
        }

    } else {
        echo json_encode(["message" => "User not logged in."]);
    }

    $stmt->close();
}



$conn->close();
?>