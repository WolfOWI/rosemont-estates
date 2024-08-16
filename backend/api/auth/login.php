<?php
// SETUP
// -------------------------------------------------
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start the session
session_start();

require "../../config/config.php";

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

// Decode the JSON input from the request
$data = json_decode(file_get_contents("php://input"), true);


// Get email, password, and userType from the request
$email = $data['email'];
$password = $data['password'];
$userType = $data['userType'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($userType === "user") {
        $sql = "SELECT userId, firstName, lastName, phone, email, password FROM user WHERE email = ?";
    } else if ($userType === "agent") {
        $sql = "SELECT agentId, realEstateId, firstName, lastName, phone, email, password FROM agent WHERE email = ?";
    }

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $person = $result->fetch_assoc();
        if ($password == $person['password']) {
            // Store common session data
            $_SESSION['user'] = [
                'firstName' => $person['firstName'],
                'lastName' => $person['lastName'],
                'phone' => $person['phone'],
                'email' => $person['email'],
                'userType' => $userType
            ];

            if ($userType === "user") {
                // Additional fields for normal users
                $_SESSION['user']['userId'] = $person['userId'];
                echo json_encode([
                    "message" => "Welcome " . $person["firstName"] . " " . $person["lastName"],
                    "sessionSet" => isset($_SESSION['user']),
                    "sessionData" => $_SESSION['user'],
                    "redirect" => "/home" // Redirect for normal users
                ]);
            } else if ($userType === "agent") {
                // Additional fields for agents
                $_SESSION['user']['agentId'] = $person['agentId'];
                $_SESSION['user']['realEstateId'] = $person['realEstateId'];
                echo json_encode([
                    "message" => "Welcome " . $person["firstName"] . " " . $person["lastName"],
                    "sessionSet" => isset($_SESSION['user']),
                    "sessionData" => $_SESSION['user'],
                    "redirect" => "/admin-listings" // Redirect for agents
                ]);
            }

            error_log("Login.php - Session ID: " . session_id());
            error_log("Login.php - Session Data: " . print_r($_SESSION, true));

        } else {
            echo json_encode(["message" => "The username or password you have entered is incorrect."]);
        }
    } else {
        echo json_encode(["message" => "No account found with the provided email."]);
    }

    $stmt->close();
    $conn->close();
}
?>