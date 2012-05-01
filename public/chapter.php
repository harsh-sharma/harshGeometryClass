<?php require_once("includes/header.php");?>
			<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
			<section class="body">
				<table>
					<tr>
						<td valign="top">
							<hgroup><h3>Chapter: Circle and Rectangle</h3></hgroup>
							<button class="circle">Circle</button><button class="rectangle">Rectangle</button><br><br>
							<p class="circle">
								A circle is a simple shape of Euclidean geometry consisting of those points in a plane that are equidistant from a given point, the centre. The distance between any of the points and the centre is called the radius.<br><br>
								<b>Radius:</b> R =<input type="text" id="radius" size="3"><button id="circleCalc">Go</button><br> 
								<b>Area:</b> &Pi; R<sup>2</sup> = <span id="circleArea"></span><br>
								<b>Circumference:</b> 2 &Pi; R = <span id="circleCircumference"></span><br>
							</p>
							<p class="rectangle">
								In Euclidean plane geometry, a rectangle is any quadrilateral with four right angles. Another name is equiangular quadrilateral, since equiangular means that all of its angles are equal (360&deg;/4 = 90&deg;). It can also be defined as a parallelogram containing a right angle. The term oblong is occasionally used to refer to a non-square rectangle.<br><br>
								<b>Width:</b> W =<input type="text" id="width" size="3"> 
								<b>Height:</b> H =<input type="text" id="height" size="3"><button id="rectCalc">Go</button><br> 
								<b>Area:</b> W x H = <span id="rectangleArea"></span><br>
								<b>Perimeter:</b> 2 (W + H) = <span id="rectanglePerimeter"></span><br>
							</p>
						</td><td>
							<canvas id = "myCanv" width = "440" height = "400"></canvas>
						</td>
					</tr>
				</table>
			</section>
			<script type="text/javascript" src="js/chapter.js"></script>
 <?php require_once("includes/footer.php");?>