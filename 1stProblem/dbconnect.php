
<?php

$host = "localhost";
$Uname = "root";
$Pwd = "";
$dbname = "cse2020";
$conn = new mysqli($host, $Uname, $Pwd, $dbname);
if (mysqli_connect_error()) 
{
    die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
} 
?>