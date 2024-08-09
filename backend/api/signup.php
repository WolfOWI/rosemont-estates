<?php 

session_start(); // Start Session

require '/backend/config/config.php'; // Include the config file

// If form has been submitted
if($_SERVER["REQUEST_METHOD"] == "POST") {


    // Get values from the form
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    // TODO Detect user type

    // SQL Statement
    $sql = "INSERT INTO user (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)";

    // Prepare SQL statement for execution
    $stmt = $conn->prepare($sql);

    // Add form values to statement
    $stmt->bind_param("sssss", $firstName, $lastName, $phone, $email, $password);

    // TODO Check if email & phone exists?

    // If statement was successfully executed
    if ($stmt->execute()) {
        echo "Registration Successful";
    } else {
        echo "Error" . $sql . "<br>" . $conn->error;
    }

   // Close the statement
   $stmt->close();

   // Close the database connection
   $conn->close();
}

?>