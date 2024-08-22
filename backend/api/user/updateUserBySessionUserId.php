<?php
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// Add CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

require "../../config/config.php";

// Decode the JSON input from the request
$data = json_decode(file_get_contents("php://input"), true);

if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(["message" => "Invalid JSON input", "error" => json_last_error_msg()]);
    exit;
}

// Get the user id from the session
$userId = $_SESSION['user']['userId'] ?? '';

if ($userId) {
    // Prepare the SQL query dynamically based on the provided data
    $fields = [];
    $values = [];

    foreach ($data as $key => $value) {
        $fields[] = "$key = ?";
        $values[] = $value;
    }

    $fields = implode(", ", $fields);

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $sql = "UPDATE user SET $fields WHERE userId = ?";

        // Log the SQL query for debugging
        error_log("SQL Query: $sql");

        $stmt = $conn->prepare($sql);

        if ($stmt === false) {
            // Log the error
            error_log("SQL Error: " . $conn->error);
            echo json_encode(["message" => "Failed to prepare the SQL statement.", "error" => $conn->error]);
            exit;
        }

        $types = str_repeat("s", count($values)) . "s";
        $values[] = $userId;

        $stmt->bind_param($types, ...$values);

        if ($stmt->execute()) {
            // Update session data for the provided fields
            foreach ($data as $key => $value) {
                $_SESSION['user'][$key] = $value;
            }

            echo json_encode([
                "message" => "User information updated successfully.",
                "sessionData" => $_SESSION['user'],
            ]);
        } else {
            echo json_encode(["message" => "Failed to update user information."]);
        }

    }
} else {
    echo json_encode(["message" => "User not logged in."]);
}




$conn->close();

?>