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
// Get houseId from query parameters
$houseId = isset($_GET['houseId']) ? $_GET['houseId'] : die(json_encode(["message" => "houseId not provided"]));

$sql = "SELECT imagePath FROM houseImage WHERE houseId = ? AND isPrimary = 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $houseId);


if ($stmt->execute()) {
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        echo json_encode(["message" => "No primary image found for this house"]);
    }
} else {
    echo json_encode(["message" => "Failed to fetch primary image", "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>