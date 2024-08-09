<?php
// Config database

$servername = "localhost";
$username = "root";
$password = "";
$database = "rosemont_estates";

// Create a new connection to the MySQL database
$conn = new mysqli($servername, $username, $password, $database);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection unsuccessful. Error: " . $conn->connect_error);
}

// If successful connection, the script continues running

?>
