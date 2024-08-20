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

// Get the house ID from the query string
$houseId = isset($_GET['houseId']) ? intval($_GET['houseId']) : null;

// When button is pressed (heart/save button)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if ($userId && $houseId) {
        $sql = "INSERT INTO saved (`userId`, `houseId`) VALUES (?, ? )";
        $stmt = $conn->prepare($sql);

        if ($stmt === false) {
            die("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("ii", $userId, $houseId);

        if ($stmt->execute()) {
            echo json_encode(["message" => "House added to saved list"]);
        } else {
            echo json_encode(["message" => "Failed to add house to saved list"]);
        }

    } else {
        echo json_encode(["message" => "User not logged in or houseId not provided."]);
    }

    $stmt->close();
}



$conn->close();
?>