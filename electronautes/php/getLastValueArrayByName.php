<?php 
header("content-type: application/json"); 

include('pg_connect.php');

$name = $_GET["name"];
$dtstart = $_GET["start"];
$dtend = $_GET["end"];

$query="SELECT inserttime, values FROM andorra2017 WHERE (sensorname LIKE '%$name%') ORDER BY inserttime DESC limit 1";

$result = pg_query($query);

if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

echo $_GET['callback'] . json_encode($arr);

include('pg_disconnect.php');

?>

