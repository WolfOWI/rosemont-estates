<?php
// SETUP
// -------------------------------------------------
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start(); // Start the session

require '../../config/config.php';

// Add CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}
// -------------------------------------------------

// Decode JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Get values from the form
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$phone = $data['phone'];
$email = $data['email'];
$password = $data['password'];
$userType = $data['userType'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Standard user or agent entity?
    if ($userType === "user") {
        $sql = "INSERT INTO user (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)";
    } else if ($userType === "agent") {
        $sql = "INSERT INTO agent (realEstateId, firstName, lastName, phone, email, password) VALUES (1, ?, ?, ?, ?, ?)";
    }

    // Prepare SQL statement
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("sssss", $firstName, $lastName, $phone, $email, $password);

        // If statement was successfully executed
        if ($stmt->execute()) {
            // Get the inserted ID
            $insertedId = $stmt->insert_id;

            // Fetch the inserted record
            if ($userType === "user") {
                $fetchSql = "SELECT * FROM user WHERE userId = ?";
            } else {
                $fetchSql = "SELECT * FROM agent WHERE agentId = ?";
            }

            if ($fetchStmt = $conn->prepare($fetchSql)) {
                $fetchStmt->bind_param("i", $insertedId);
                $fetchStmt->execute();
                $result = $fetchStmt->get_result();
                if ($result->num_rows > 0) {
                    $person = $result->fetch_assoc();

                    // Store data in session
                    $_SESSION['user'] = [
                        'firstName' => $person['firstName'],
                        'lastName' => $person['lastName'],
                        'phone' => $person['phone'],
                        'email' => $person['email'],
                        'userType' => $userType
                    ];
                    if ($userType === "user") {
                        $_SESSION['user']['userId'] = $person['userId'];
                        echo json_encode([
                            "message" => "Registration Successful! Welcome " . $person["firstName"] . " " . $person["lastName"],
                            "sessionSet" => isset($_SESSION['user']),
                            "sessionData" => $_SESSION['user'],
                            "redirect" => "/home"
                        ]);
                    } else {
                        $_SESSION['user']['agentId'] = $person['agentId'];
                        $_SESSION['user']['realEstateId'] = $person['realEstateId'];
                        echo json_encode([
                            "message" => "Registration Successful! Welcome " . $person["firstName"] . " " . $person["lastName"],
                            "sessionSet" => isset($_SESSION['user']),
                            "sessionData" => $_SESSION['user'],
                            "redirect" => "/admin-listings"
                        ]);
                    }
                } else {
                    echo json_encode(["message" => "Failed to fetch user data after insertion."]);
                }
                $fetchStmt->close();
            }
        } else {
            echo json_encode(["message" => "Error: " . $stmt->error]);
        }
        $stmt->close();
    } else {
        echo json_encode(["message" => "Error: Failed to prepare the SQL statement."]);
    }
    $conn->close();
}
?>