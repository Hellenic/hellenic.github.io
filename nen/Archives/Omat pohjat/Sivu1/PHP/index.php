<html>
<head>

<link href="styles.css" rel="stylesheet" type="text/css" />
<meta http-equiv="content-type" content="text/html;charset=iso-8859-1" />
<meta name="description" content="PlussaPallot!" />
<meta name="keywords" content="Plussapallo, linkshell, suomalainen, suomi, cerberus" />

<title>PlussaPallot</title>

</head>
<body>
<div id="otsi">
&nbsp;
</div>

<div id="tekstipalkki">

<font size="1">
<div align="right">
	Best view with Mozilla Firefox - 1024 x 768 +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	[Updated: 5.8.2007 00:18 - Version 0.5b]&nbsp;
</div></font>

</div>

<div id="isoin">

<div id="vasen">

<div class="bar">Linkit</div>
<div class="box">

	<a class="link" href="index.php">Etusivu</a><br>
	<a class="link" href="stuff.php">Stuff</a><br>
	<a class="link" href="anime.php">Anime</a><br>
	<a class="link" href="leffat.php">Leffat</a><br>
	<a class="link" href="gally.php">Galleria</a><br>
	<a class="link" href="koulu.php">Koulu</a><br>
	<a class="link" href="links.php">Linkkej�</a><br>
	<a class="link" href="faq.php">FAQ</a><br>

</div>

<div class="bar">Pikalinkit</div>
<div class="box">
	<a class="link" target="_blank" href="http://www.google.com">Google</a><br>
	<a class="link" target="_blank" href="http://www.playonline.com">PlayOnline</a><br>
	<a class="link" target="_blank" href="http://wiki.ffxiclopedia.org/Main_Page">FFXIclopedia</a><br>
	<a class="link" target="_blank" href="http://www.ffxiah.com/index.php" >FFXI AH</a><br>
</div>


</div>

<div id="sisalto">

<div class="title">Plussa++ Uutiset</div>

<?php
$p = $_GET['p'];
if ( !empty($p) && file_exists('./news/' . $p . '.php') && stristr( $p, '.' ) == False ) 
{
   $file = './news/' . $p . '.php';
}
else
{
   $file = './news/news1.php';
}
include $file;
?>

<br><br>
<div class="sivulink">
<a class="link" href="?p=news1">Sivu 1</a> | <a class="link" href="?p=news2">Sivu 2</a> |
	<a class="link" href="?p=news3">Sivu 3</a>
</div>

</div>

</body>
</html>