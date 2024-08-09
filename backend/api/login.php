<?php
// Login Functionality

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode(['message' => 'hello']);
} else {
    echo json_encode(['message' => 'Invalid Request']);
}

?>
