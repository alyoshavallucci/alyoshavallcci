<?php
require_once("configurazione.php");

$tabella = $_POST['tabella'];

if($tabella == 'dirette')    {$sql = "INSERT INTO $tabella (url, titolo) VALUES ('','')";}
if($tabella == 'conduttori') {$sql = "INSERT INTO $tabella (src, nome, tipo)   VALUES ('','','conduttore')";}

if($result = $connessione->query($sql) === true){
    $data = [
         "messaggio" => "ELEMENTO INSERITO CON SUCESSO: [ tabella: $tabella ]",
         "response" => true
    ];
    echo json_encode($data);
}else{
    $data = [
        "messaggio" => "ERRORE: [ tabella: $tabella ]\n".$connessione->error,
        "response" => false
   ];
   echo json_encode($data);
   }

?>
