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

// Get the house ID from the query string
$houseId = isset($_GET['houseId']) ? intval($_GET['houseId']) : null;

if ($houseId) {
    $sql = "SELECT * FROM house WHERE houseId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $houseId);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $house = $result->fetch_assoc();
            echo json_encode($house);
        } else {
            echo json_encode(["message" => "No house found with the provided ID."]);
        }
    } else {
        echo json_encode(["message" => "Failed to retrieve house."]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid or missing house ID."]);
}

$conn->close();
?>