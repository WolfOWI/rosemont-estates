<?php
// SETUP
// -------------------------------------------------
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require "../../config/config.php";

// Start the session
session_start();

// Add CORS headers
header("Access-Control-Allow-Origin: *");
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

// Get logged in user's id
$userId = $_SESSION['user']['userId'] ?? '';


if ($userId) {
    $sql = "SELECT houseId FROM saved WHERE userId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId);

    if ($stmt->execute()) {
        $result = $stmt->get_result();
        $savedHouseIdsArr = [];

        while ($houseId = $result->fetch_assoc()) {
            $savedHouseIdsArr[] = $houseId['houseId'];
        }
    }
    echo json_encode($savedHouseIdsArr);
} else {
    echo json_encode(["message" => "User not logged in."]);
}

//     if ($stmt->execute()) {
//         $result = $stmt->get_result();
//         if ($result->num_rows > 0) {
//             $savedHouseId = $result->fetch_assoc();
//             echo json_encode($savedHouseId);
//         } else {
//             echo json_encode(["message" => "No houseId found with the user's Id."]);
//         }
//     } else {
//         echo json_encode(["message" => "Failed to retrieve houseId."]);
//     }

//     $stmt->close();
// } else {
//     echo json_encode(["message" => "User not logged in."]);
// }

$conn->close();


?>