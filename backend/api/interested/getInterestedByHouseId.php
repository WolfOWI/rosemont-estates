<?php
// Interested List By House Id
// SETUP
// -------------------------------------------------
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
// -------------------------------------------------

// Get the house ID from the query string
$houseId = isset($_GET['houseId']) ? intval($_GET['houseId']) : null;

if ($houseId) {
    $sql = "SELECT * FROM interested WHERE houseId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $houseId);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $interestedArr = [];

        while ($interest = $result->fetch_assoc()) {
            $interestedArr[] = $interest;
        }
    }
    echo json_encode($interestedArr);
} else {
    echo json_encode(["message" => "HouseId not provided."]);
}

$conn->close();


?>