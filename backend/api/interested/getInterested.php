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

// Query to get all interested people
$sql = "SELECT * FROM interested";
$result = $conn->query($sql);

$interested = [];
while ($interest = $result->fetch_assoc()) {
    $interested[] = $interest;
}

// Return interested people as JSON
echo json_encode($interested);

// Close connection
$conn->close();
?>