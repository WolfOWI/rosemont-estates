<?php
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require "../../config/config.php";

// Start the session
session_start();

// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Get logged-in user's ID
$userId = $_SESSION['user']['userId'] ?? '';

// Get the house ID from the query string
$houseId = isset($_GET['houseId']) ? intval($_GET['houseId']) : null;

if (!$userId) {
    echo json_encode(["message" => "User not logged in"]);
}

if (!$houseId) {
    echo json_encode(["message" => "HouseId ???"]);
}

if ($userId && $houseId) {
    $sql = "DELETE FROM saved WHERE userId = ? AND houseId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $userId, $houseId);

    if ($stmt->execute()) {
        echo json_encode(["message" => "House removed from saved list"]);
    } else {
        echo json_encode(["message" => "Failed to remove house"]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "User not logged in or houseId not provided."]);
}

$conn->close();
?>