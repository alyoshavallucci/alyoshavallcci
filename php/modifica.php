<?php
require_once("configurazione.php");

$tabella = $_POST['tabella'];
$id = $_POST['id'];
$attributo = $_POST['attributo'];
$valore = $_POST['valore'];
if($attributo != "nuovo"){$sql = "UPDATE $tabella SET $attributo = '$valore' WHERE id = $id ";}
else {                    $sql = "UPDATE $tabella SET $attributo =  $valore  WHERE id = $id "; }


if($connessione->query($sql) === true){
    $data = [
         "messaggio" => "ELEMENTO MODIFICATO CON SUCESSO: [tabella = $tabella, id = $id, attributo = $attributo, valore = $valore]\n'",
         "response" => true
    ];
    echo json_encode($data);
}else{
    $data = [
        "messaggio" => "ERRORE:  [tabella = $tabella, id = $id, attributo = $attributo, valore = $valore]\n".$connessione->error,
        "response" => false
   ];
   echo json_encode($data);
   }

?>
