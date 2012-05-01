<?php require_once("includes/header.php");?>
			<section class="body">
			<?php					
					if(isset($_POST['submit'])){
					
						$username = trim($_POST['username']);
						$password = trim($_POST['password']);
						
						if($username=="harsh" && $password=="harsh"){
							header("Location: class.php");
						}else{
							$message = "Username/Password combination incorrect.<br>
											Please make sure your caps lock key is off and try again.";
						}
					}
					$username = "";
					$password = "";
				?>
				<?php if(!empty($message)) {echo "<p class=\"message\">". $message ."</p>";} ?>
				<section class="loginform">
					<form name="login_form" method="post" action="check.php">
						Username:<br><input type="text" name="username" maxlength="30" value=""><br>
						Password:<br><input type="password" name="password" maxlength="30" value=""><br>
						<input type="submit" name="submit" value="Login">
					</form>
				</section>				
			</section>
 <?php require_once("includes/footer.php");?>