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

// Get the agency ID from the query string
$agencyId = isset($_GET['agencyId']) ? intval($_GET['agencyId']) : null;

if ($agencyId) {
    $sql = "SELECT * FROM realEstateAgency WHERE realEstateId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $agencyId);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $agency = $result->fetch_assoc();
            echo json_encode($agency);
        } else {
            echo json_encode(["message" => "No agency found with the provided ID."]);
        }
    } else {
        echo json_encode(["message" => "Failed to retrieve agency."]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "Invalid or missing agency ID."]);
}

$conn->close();
?>