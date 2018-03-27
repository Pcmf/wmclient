<?php

/* 
 * This code was developed by PCF
 * Each line should be prefixed with  * 
 */
require_once 'openCon.php';
$data = file_get_contents("php://input");

$dt = json_decode($data);
$parm = json_decode($dt->param);

$resp = array();
$tempResp = array();
$result0 = mysql_query(sprintf("SELECT category FROM categories WHERE company = %s AND id=%s"
        ,$parm->companyId,$parm->catId));
if($result0){
    $row0 = mysql_fetch_array($result0);
    $resp['category'] = json_decode($row0['category']);
}

$query = sprintf("SELECT * FROM product WHERE company=%s AND catid=%s",$parm->companyId,$parm->catId);
$result = mysql_query($query);
if($result){
    while ($row = mysql_fetch_array($result)) {
        
        $row['name'] = json_decode($row['name']);
        $row['description'] = json_decode($row['description']);
        array_push($tempResp, $row);
    }
    $resp['products'] = $tempResp;
    echo json_encode($resp);
} else {
    echo $query;
}
