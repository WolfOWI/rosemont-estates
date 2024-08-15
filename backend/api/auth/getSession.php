<?php
// SETUP
// -------------------------------------------------
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start the session
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
// -------------------------------------------------

$session_id = session_id(); // Get the current session ID

echo json_encode([
    "sessionID" => $session_id,
    "sessionExists" => isset($_SESSION['user']),
    "sessionData" => $_SESSION['user'] ?? null
]);

error_log("getSession.php - Session ID: " . $session_id);
error_log("getSession.php - Session Data: " . print_r($_SESSION, true));
?>