<?php 
header("content-type: application/json"); 

include('pg_connect.php');

$project = $_GET["project"];

$query="SELECT name, sensortype FROM termiteinfo WHERE project LIKE '%$project%' ORDER BY sensortype, name";

$result = pg_query($query);

if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

echo $_GET['callback'] . '(' . json_encode($arr, JSON_NUMERIC_CHECK) . ')';   

include('pg_disconnect.php');

?>


