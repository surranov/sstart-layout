<?php
$to = $_POST['toemail']; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Message from site'; //Загаловок сообщения
$message = '
  <html>
    <head>
      <title>'.$subject.'</title>
    </head>
    <body>
      <p>Name: '.$_POST['name'].'</p><br />
      <p>Email: '.$_POST['email'].'</p><br />
      <p>Phone: '.$_POST['phone'].'</p><br />
      <p>Message: '.$_POST['message'].'</p>
    </body>
  </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: JEJ Site <from@email.ru>\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>