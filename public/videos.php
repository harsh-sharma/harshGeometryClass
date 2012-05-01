<?php require_once("includes/header.php");?>
			<section class="body">
				<?php
					$search = "geometry";
					if (isset($_POST['searchtxt'])){
						$search = $_POST['searchtxt'];
					}
				?>
				<form name="form1" action="videos.php" method="post">
					<input type="text" id="searchtxt" name="searchtxt" value="<?php echo $search; ?>">
					<input type="image" src="images/search.jpg" height="40px"/>
				</form>
				<div id="playerContainer">
					<h2 id="title"></h2>
					<object id="player"></object>
				</div>
				<section id="videos"></section>
			</section>
				<script type="text/javascript" src="http://swfobject.googlecode.com/svn/trunk/swfobject/swfobject.js"></script>
				<script type="text/javascript" src="js/video.js"></script>
				<script 
					type="text/javascript" 
					src="http://gdata.youtube.com/feeds/api/videos/-/geometry?q=<?php echo $search; ?>&alt=json-in-script&callback=showMyVideos&max-results=30&format=5">
				</script>
 <?php require_once("includes/footer.php");?>