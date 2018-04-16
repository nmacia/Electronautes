<?php 
header("content-type: application/json"); 

include('pg_connect.php');

$name = $_GET["name"];
$dtstart = $_GET["start"];
$dtend = $_GET["end"];

$query="SELECT inserttime FROM andorra2017 WHERE (sensorname LIKE '%$name%') AND inserttime > TIMESTAMP 'today'";

$result = pg_query($query);
$rows = pg_num_rows($result);

if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = array('count' => $rows);

echo $_GET['callback'] . json_encode($arr, JSON_NUMERIC_CHECK);

include('pg_disconnect.php');

?>

