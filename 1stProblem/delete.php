<?php
$enroll = $_GET['enroll'];
if (!empty($enroll)){ 
include 'dbconnect.php';
  $sql= "DELETE FROM  `student` WHERE Enrollment=$enroll";
  if($conn->query($sql)){
    header("location:show_detail.php");
  }
  else
  {
    echo " data deletion failed";
  }
}
 else {
 echo "enrollment number not available";
}
 ?>