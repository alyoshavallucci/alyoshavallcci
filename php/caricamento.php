<?php

require_once("configurazione.php");

$tabella = $_POST['tabella'];
$attributo = $_POST['attributo'];
//$lista = $_POST['attributi'];
$lista = explode(",",$_POST['attributi']);


$sql = "SELECT * FROM $tabella $attributo";


if($result = $connessione->query($sql)){

    if($result->num_rows > 0){

        $data = [];
        while($row = $result->fetch_array(MYSQLI_ASSOC)){

              $tmp;

              for($i = 0; $i < $lista.length; $i++) {
                  $tmp[$lista[$i]] = $row[$lista[$i]];
              }

              //   $tmp['id'] = $row['id'];
              //   $tmp['titolo'] = $row['titolo'];

              // if($tabella=="sitiweb"){
              //   $tmp['id'] = $row['id'];
              //   $tmp['titolo'] = $row['titolo'];
              //   $tmp['url'] = $row['url'];
              // }

              // if($tabella=="conduttori"){
              //   $tmp['id'] = $row['id'];
              //   $tmp['src'] = $row['src'];
              //   $tmp['nome'] = $row['nome'];
              // }



            array_push($data, $tmp);
        }

        echo json_encode($data);
    }else {
        echo json_encode($data);
          }
}else{
        echo "Errore durante creazione tabella: ".$connessione->error;
     }

?>
