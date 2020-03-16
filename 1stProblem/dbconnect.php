<?php
$hostName = 'localhost';
$userName = 'root';
$pwd = '';
$dbName = 'CSE2020';
    
$conn = mysqli_connect($hostName, $userName, $pwd, $dbName);
if ($conn){
    echo "Conneted Successfully.";
}
else{
    echo "Connection failed. " + mysqli_connect_error();
}
?>