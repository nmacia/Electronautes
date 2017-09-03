<?php 
header("content-type: application/json"); 

include('pg_connect.php');

$sensortype = $_GET["sensortype"];

$query="SELECT name FROM termiteinfo WHERE sensortype LIKE '%$sensortype%' ORDER BY name";

$result = pg_query($query);

if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

echo $_GET['callback'] . '(' . json_encode($arr, JSON_NUMERIC_CHECK) . ')';   

include('pg_disconnect.php');

?>


