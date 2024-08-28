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

// SQL query with JOIN
$sql = "
    SELECT interested.interestedId,
        interested.userId,
        interested.houseId,
        user.firstName,
        user.lastName,
        user.phone,
        user.email,
        house.realEstateId,
        house.title,
        house.numBed,
        house.style,
        house.street,
        house.suburb,
        house.city,
        house.zip,
        house.availabilityStatus,
        house.price,
        house.sellType
    FROM 
        interested
    INNER JOIN 
        user ON interested.userId = user.userId
    INNER JOIN 
        house ON interested.houseId = house.houseId
";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $interestedList = [];

    while ($row = $result->fetch_assoc()) {
        $interestedList[] = $row;
    }

    echo json_encode($interestedList);
} else {
    echo json_encode(["message" => "No interested records found."]);
}

$conn->close();
?>