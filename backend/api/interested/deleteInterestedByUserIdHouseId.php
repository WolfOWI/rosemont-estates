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

// Get the house ID from the query string
$userId = isset($_GET['userId']) ? intval($_GET['userId']) : null;

// Get the house ID from the query string
$houseId = isset($_GET['houseId']) ? intval($_GET['houseId']) : null;

// When button is pressed (Cancel Interest button)
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // TODO Check if result exists
    if ($userId && $houseId) {
        $sql = "DELETE FROM interested WHERE userId = ? AND houseId = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt === false) {
            die("Prepare failed: " . $conn->error);
        }

        $stmt->bind_param("ii", $userId, $houseId);

        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo json_encode(["message" => "Interest removed successfully"]);
            } else {
                echo json_encode(["message" => "No interest found for this user and house"]);
            }
        } else {
            echo json_encode(["message" => "Failed to remove interest"]);
        }

    } else {
        echo json_encode(["message" => "User or houseId not provided."]);
    }

    $stmt->close();
}

$conn->close();
?>