<?php
	$to = $_POST["email"];
	$subject = "Запрос на обмен валют";
	$message = "Обмен ".$_POST["rub"]."рублей <br>";
	$message .= "На ".$_POST["result"];
	$message .= $_POST["select"];
	$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
	mail($to, $subject, $message, $headers); //отправляет получателю на емайл значения переменных
?>