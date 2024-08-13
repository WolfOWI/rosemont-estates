<?php
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

require "../config/config.php";

// Decode the JSON input from the request
$data = json_decode(file_get_contents("php://input"), true);

// Get email, password, and userType from the request
$email = $data['email'];
$password = $data['password'];
$userType = $data['userType'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($userType === "user") {
        $sql = "SELECT * FROM user WHERE email = ?";
    } else if ($userType === "agent") {
        $sql = "SELECT * FROM agent WHERE email = ?";
    }

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $person = $result->fetch_assoc();
        if ($password == $person['password']) {
            $_SESSION['user'] = [
                'firstName' => $person['firstName'],
                'lastName' => $person['lastName'],
                'email' => $person['email'],
                'userType' => $userType
            ];

            $session_id = session_id();

            echo json_encode([
                "message" => "Welcome " . $person["firstName"] . " " . $person["lastName"],
                "sessionSet" => isset($_SESSION['user']),
                "sessionData" => $_SESSION['user'],
                "sessionID" => $session_id,
                "redirect" => "/home"
            ]);

            error_log("Login.php - Session ID: " . $session_id);
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