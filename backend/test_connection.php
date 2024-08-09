<?php

include_once 'config/config.php';

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection unsuccessful. Error: " . $conn->connect_error);
} else {
    echo "Connection successful!";
}

?>
