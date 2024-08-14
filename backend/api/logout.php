<?php
// SETUP
// -------------------------------------------------
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start(); // Start the session

// Set headers to allow CORS and handle preflight requests
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow access from your frontend
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

// Destroy the session to log the user out
session_destroy();

echo json_encode(["message" => "Logged out successfully"]);
?>