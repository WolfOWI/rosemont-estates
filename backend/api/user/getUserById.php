<?php
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require "../../config/config.php";

// Add CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Get the user ID from the query string
$userId = isset($_GET['userId']) ? intval($_GET['userId']) : null;

if ($userId) {
    $sql = "SELECT * FROM user WHERE userId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            echo json_encode($user);
        } else {
            echo json_encode(["message" => "No user was found with the provided ID."]);
        }
    } else {
        echo json_encode(["message" => "Failed to retrieve user."]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid or missing user ID."]);
}

$conn->close();
?>