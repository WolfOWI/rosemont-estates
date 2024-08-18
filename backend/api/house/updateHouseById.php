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

// Get houseId from query parameters
$houseId = isset($_GET['houseId']) ? $_GET['houseId'] : die(json_encode(["message" => "houseId not provided"]));

// Extract data from the request
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

// Image upload directory
$target_dir = "../../../src/assets/uploads/";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Update house details
    $sql = "UPDATE `house` 
            SET `title` = ?, `description` = ?, `street` = ?, `suburb` = ?, `city` = ?, `province` = ?, `zip` = ?, 
                `style` = ?, `availabilityStatus` = ?, `availableDate` = ?, `sellType` = ?, `price` = ?, `numFloors` = ?, 
                `floorSize` = ?, `numBed` = ?, `numBath` = ?, `numKitchen` = ?, `numDining` = ?, `numGym` = ?, 
                `numBilliard` = ?, `numBasement` = ?, `numGarage` = ?, `lotSize` = ?, `numPool` = ?, `numCourt` = ?, 
                `numDeck` = ?, `numFlowerGard` = ?, `numVegGard` = ?, `numOrchard` = ?, `internet` = ?, `airCon` = ?, 
                `heating` = ?, `secSys` = ?, `solar` = ?, `gardServ` = ?, `irrigation` = ?, `outdoorLight` = ?, 
                `boma` = ?, `gatedCommunity` = ? 
            WHERE `houseId` = ?";

    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param(
        "sssssssssssiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
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
        $gatedCommunity,
        $houseId
    );

    if ($stmt->execute()) {

        // Move uploaded files to the uploads directory
        $uploaded_files = [];
        if (isset($_FILES['images']) && is_array($_FILES['images']['name'])) {
            foreach ($_FILES['images']['name'] as $key => $filename) {
                $target_file = $target_dir . basename($filename);
                if (move_uploaded_file($_FILES['images']['tmp_name'][$key], $target_file)) {
                    $uploaded_files[] = $target_file;
                } else {
                    die("Error: Failed to upload file $filename.");
                }
            }
        }

        // Insert new images into the houseImage table
        if (!empty($uploaded_files)) {
            // Clear existing images for this house
            $deleteSql = "DELETE FROM houseImage WHERE houseId = ?";
            $deleteStmt = $conn->prepare($deleteSql);
            $deleteStmt->bind_param("i", $houseId);
            $deleteStmt->execute();

            // Insert image paths into houseImage table
            foreach ($uploaded_files as $index => $fileName) {
                $fullPath = "http://localhost/rosemont/src/assets/uploads/" . $fileName; // Construct the full URL
                $isPrimary = $index === 0 ? 1 : 0; // Mark the first image as primary
                $sql = "INSERT INTO houseImage (houseId, imagePath, isPrimary) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("isi", $houseId, $fullPath, $isPrimary);
                $stmt->execute();
            }
        }

        echo json_encode(["message" => "House listing updated successfully"]);
    } else {
        echo json_encode(["message" => "Failed to update house listing", "error" => $stmt->error]);
    }

    $stmt->close();
}

$conn->close();
?>