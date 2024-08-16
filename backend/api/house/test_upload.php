<?php
// Setup error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Define the target directory
$target_dir = "../../../src/assets/uploads/";
$tmp_dir = $target_dir . 'tmp/';

// Ensure the tmp directory exists
if (!file_exists($tmp_dir)) {
    mkdir($tmp_dir, 0777, true);
}

// Test if the directory is writable
if (!is_writable($target_dir)) {
    die("Error: The directory $target_dir is not writable.");
}

// Create a temporary file in the custom tmp directory
$tmp_file = tempnam($tmp_dir, 'test_upload');

if ($tmp_file === false) {
    die("Error: Failed to create a temporary file in $tmp_dir.");
}

echo "Temporary file created: $tmp_file<br>";

// Check if the temporary file exists
if (!file_exists($tmp_file)) {
    die("Error: Temporary file does not exist after creation.");
}

$target_file = $target_dir . 'test_upload.txt';

// Attempt to move the temporary file to the target directory
if (rename($tmp_file, $target_file)) {
    echo "File uploaded successfully to $target_file.";
} else {
    echo "Failed to upload file to $target_file.";
    // Cleanup the temp file if it wasn't moved
    if (file_exists($tmp_file)) {
        unlink($tmp_file);
    }
}
?>