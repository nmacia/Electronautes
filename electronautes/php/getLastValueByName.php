<?php 
header("content-type: application/json"); 

include('pg_connect_old.php');

$name = $_GET["name"];

$query="SELECT time, value FROM andorraschool WHERE (name LIKE '%$name%') ORDER BY time DESC limit 1";

$result = pg_query($query);

if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

echo $_GET['callback'] . json_encode($arr, JSON_NUMERIC_CHECK);   


include('pg_disconnect.php');

?>

