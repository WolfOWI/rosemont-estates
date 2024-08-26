<?php
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start the session
session_start();

// Add CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(204);
    exit;
}

require '../../config/config.php';

$session_id = session_id();

// Debugging session data
if (!isset($_SESSION['user'])) {
    echo json_encode([
        "message" => "User is not authenticated or session expired 1",
        "session_data" => $_SESSION,
        "session_id" => $session_id
    ]);
    exit;
}

// Extract data from the request
$userId = $_SESSION['user']['userId'];
$realEstateId = $_POST['realEstateId'];
$title = $_POST['title'];
$description = $_POST['description'];
$street = $_POST['street'];
$suburb = $_POST['suburb'];
$city = $_POST['city'];
$province = $_POST['province'];
$zip = $_POST['zip'];
$style = $_POST['style'];
$availabilityStatus = $_POST['availabilityStatus'];
$availableDate = $_POST['availableDate'];
$sellType = $_POST['sellType'];
$price = $_POST['price'];
$numFloors = $_POST['numFloors'];
$floorSize = $_POST['floorSize'];
$numBed = $_POST['numBed'];
$numBath = $_POST['numBath'];
$numKitchen = $_POST['numKitchen'];
$numDining = $_POST['numDining'];
$numGym = $_POST['numGym'];
$numBilliard = $_POST['numBilliard'];
$numBasement = $_POST['numBasement'];
$numGarage = $_POST['numGarage'];
$lotSize = $_POST['lotSize'];
$numPool = $_POST['numPool'];
$numCourt = $_POST['numCourt'];
$numDeck = $_POST['numDeck'];
$numFlowerGard = $_POST['numFlowerGard'];
$numVegGard = $_POST['numVegGard'];
$numOrchard = $_POST['numOrchard'];
$internet = $_POST['internet'];
$airCon = $_POST['airCon'];
$heating = $_POST['heating'];
$secSys = $_POST['secSys'];
$solar = $_POST['solar'];
$gardServ = $_POST['gardServ'];
$irrigation = $_POST['irrigation'];
$outdoorLight = $_POST['outdoorLight'];
$boma = $_POST['boma'];
$gatedCommunity = $_POST['gatedCommunity'];

// For Submission Creation
$submitStatus = $_POST['submitStatus'];
$submitDate = $_POST['submitDate'];
$decisionDate = $_POST['decisionDate'];


// Image upload directory
$target_dir = realpath("../../../src/assets/uploads/");

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    // Move uploaded files to the uploads directory
    $uploaded_files = [];
    if (isset($_FILES['images']) && is_array($_FILES['images']['name'])) {
        foreach ($_FILES['images']['name'] as $key => $filename) {
            $target_file = $target_dir . "/" . basename($filename);
            if (move_uploaded_file($_FILES['images']['tmp_name'][$key], $target_file)) {
                $relative_path = str_replace(realpath("../../../src/"), '', $target_file);
                $full_url = "http://localhost/rosemont/src" . $relative_path;
                $uploaded_files[] = $full_url;
            } else {
                die("Error: Failed to upload file $filename.");
            }
        }
    }




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
        // Get the houseId of the newly created house
        $houseId = $conn->insert_id;

        // Insert image paths into houseImage table
        foreach ($uploaded_files as $index => $full_url) {
            $isPrimary = $index === 0 ? 1 : 0; // Mark the first image as primary
            $sql = "INSERT INTO houseImage (houseId, imagePath, isPrimary) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("isi", $houseId, $full_url, $isPrimary);
            $stmt->execute();
        }

        // Create Submission table
        $sql = "INSERT INTO submission (`houseId`, `userId`, `submitStatus`, `submitDate`, `decisionDate`) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iisss", $houseId, $userId, $submitStatus, $submitDate, $decisionDate);
        $stmt->execute();

        echo json_encode(["message" => "House listing created successfully"]);
        exit();
    } else {
        echo json_encode(["message" => "Failed to create house listing", "error" => $stmt->error]);
    }

    $stmt->close();
}

$conn->close();
?>