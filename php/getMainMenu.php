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
$cats = array();
$result = mysql_query(sprintf("SELECT * FROM menutype WHERE company = %s",$parm));
if($result){
    $row0 = mysql_fetch_array($result);
    $resp['type'] = $row0['type'];
    $resp['langs']= json_decode($row0['langs']);
    $catArr = explode(',', $row0['configs']);
    foreach ($catArr as $value) {
       $result00 = mysql_query(sprintf("SELECT * FROM categories WHERE id =%s AND company=%s",$value,$parm));
       if($result00){
           $row00 = mysql_fetch_array($result00);
           $row00['catj'] = json_decode($row00['category']);
           array_push($cats, $row00);
       }
    }
    $resp['cats'] = $cats;
    echo json_encode($resp);
} else {
    echo 'erro';
}
