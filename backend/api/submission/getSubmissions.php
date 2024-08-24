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

// Query to get all submissions
$sql = "SELECT * FROM submission";
$result = $conn->query($sql);

$submissions = [];
while ($submission = $result->fetch_assoc()) {
    $submissions[] = $submission;
}

// Return submissions as JSON
echo json_encode($submissions);

// Close connection
$conn->close();
?>