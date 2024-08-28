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

// Decode the JSON input from the request
$data = json_decode(file_get_contents("php://input"), true);

// Prepare the SQL query dynamically based on the provided data
$fields = [];
$values = [];

foreach ($data as $key => $value) {
    $fields[] = "$key = ?";
    $values[] = $value;
}

$fields = implode(", ", $fields);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "UPDATE house SET $fields WHERE houseId = ?";

    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        // Log the error
        error_log("SQL Error: " . $conn->error);
        echo json_encode(["message" => "Failed to prepare the SQL statement.", "error" => $conn->error]);
        exit;
    }

    $types = str_repeat("s", count($values)) . "s";
    $values[] = $houseId;

    $stmt->bind_param($types, ...$values);

    if ($stmt->execute()) {
        // Update session data for the provided fields
        foreach ($data as $key => $value) {
            $houseId = $value;
        }

        echo json_encode([
            "message" => "House updated successfully.",
        ]);
    } else {
        echo json_encode(["message" => "Failed to update house."]);
    }

    $stmt->close();
    $conn->close();
}