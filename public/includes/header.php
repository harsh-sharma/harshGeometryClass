<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Harsh Geometry Class</title>
		<script src="js/modernizer.js"></script>
		<link rel="stylesheet" href="css/style.css" type="text/css" />
		<link href='http://fonts.googleapis.com/css?family=Norican' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Rokkitt' rel='stylesheet' type='text/css'>
	</head>
	<body>
		<?php
			$currentFile = $_SERVER["PHP_SELF"];
			$parts = Explode('/', $currentFile);
			$pName = $parts[count($parts) - 1];
		?>
		<section class="page">
			<header>
				<span>Harsh&nbsp;&nbsp;Geometry&nbsp;&nbsp;Class</span>
				<ul>
					<li class="<?php if($pName=="index.php")echo "selected"; ?>"><a href="index.php">Home</a></li>
					<li class="<?php if($pName=="videos.php")echo "selected"; ?>"><a href="videos.php">Videos</a></li>
					<li class="<?php if($pName=="class.php")echo "selected"; ?>"><a href="check.php">Online Class</a></li>
					<li class="<?php if($pName=="chapter.php")echo "selected"; ?>"><a href="chapter.php">Chapters</a></li>
				</ul>
			</header>