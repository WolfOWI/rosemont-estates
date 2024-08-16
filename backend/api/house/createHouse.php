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

require '../../config/config.php';

// Decode the JSON input from the request
$data = json_decode(file_get_contents("php://input"), true);

// Extract data from the request
$userId = $_SESSION['user']['userId'];
$realEstateId = $data['realEstateId'];
$title = $data['title'];
$description = $data['description'];
$street = $data['street'];
$suburb = $data['suburb'];
$city = $data['city'];
$province = $data['province'];
$zip = $data['zip'];
$style = $data['style'];
$availabilityStatus = $data['availabilityStatus'];
$availableDate = $data['availableDate'];
$sellType = $data['sellType'];
$price = $data['price'];
$numFloors = $data['numFloors'];
$floorSize = $data['floorSize'];
$numBed = $data['numBed'];
$numBath = $data['numBath'];
$numKitchen = $data['numKitchen'];
$numDining = $data['numDining'];
$numGym = $data['numGym'];
$numBilliard = $data['numBilliard'];
$numBasement = $data['numBasement'];
$numGarage = $data['numGarage'];
$lotSize = $data['lotSize'];
$numPool = $data['numPool'];
$numCourt = $data['numCourt'];
$numDeck = $data['numDeck'];
$numFlowerGard = $data['numFlowerGard'];
$numVegGard = $data['numVegGard'];
$numOrchard = $data['numOrchard'];
$internet = isset($data['internet']) ? 1 : 0;
$airCon = isset($data['airCon']) ? 1 : 0;
$heating = isset($data['heating']) ? 1 : 0;
$secSys = isset($data['secSys']) ? 1 : 0;
$solar = isset($data['solar']) ? 1 : 0;
$gardServ = isset($data['gardServ']) ? 1 : 0;
$irrigation = isset($data['irrigation']) ? 1 : 0;
$outdoorLight = isset($data['outdoorLight']) ? 1 : 0;
$boma = isset($data['boma']) ? 1 : 0;
$gatedCommunity = isset($data['gatedCommunity']) ? 1 : 0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "INSERT INTO `house`(`userId`, `realEstateId`, `title`, `description`, `street`, `suburb`, `city`, `province`, `zip`, `style`, `availabilityStatus`, `availableDate`, `sellType`, `price`, `numFloors`, `floorSize`, `numBed`, `numBath`, `numKitchen`, `numDining`, `numGym`, `numBilliard`, `numBasement`, `numGarage`, `lotSize`, `numPool`, `numCourt`, `numDeck`, `numFlowerGard`, `numVegGard`, `numOrchard`, `internet`, `airCon`, `heating`, `secSys`, `solar`, `gardServ`, `irrigation`, `outdoorLight`, `boma`, `gatedCommunity`)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )";

    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param(
        "iisssssssssssiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        $userId,
        $realEstateId,
        $title,
        $description,
        $street,
        $suburb,
        $city,
        $province,
        $zip,
        $style,
        $availabilityStatus,
        $availableDate,
        $sellType,
        $price,
        $numFloors,
        $floorSize,
        $numBed,
        $numBath,
        $numKitchen,
        $numDining,
        $numGym,
        $numBilliard,
        $numBasement,
        $numGarage,
        $lotSize,
        $numPool,
        $numCourt,
        $numDeck,
        $numFlowerGard,
        $numVegGard,
        $numOrchard,
        $internet,
        $airCon,
        $heating,
        $secSys,
        $solar,
        $gardServ,
        $irrigation,
        $outdoorLight,
        $boma,
        $gatedCommunity
    );


    if ($stmt->execute()) {
        echo json_encode(["message" => "House listing created successfully"]);
    } else {
        echo json_encode(["message" => "Failed to create house listing", "error" => $stmt->error]);
    }

    $stmt->close();
}

$conn->close();
?>