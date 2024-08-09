<?php
// Login Functionality

// SETUP
// -----------------------------------------
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start(); // Start Session
require '/backend/config/config.php'; // Include the config file

// Allow CORS
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Allow preflight request
    http_response_code(204);
    exit;
}
// -----------------------------------------

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode(['message' => 'hello']);
} else {
    echo json_encode(['message' => 'Invalid Request']);
}

?>
