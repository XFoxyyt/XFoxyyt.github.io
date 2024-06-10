<?php
  // assuming you're using PHP, adjust according to your web framework
  $playerName = $_POST['playerName'];
  // store the player name in a database or a file
  // for this example, let's assume you're using a text file
  $file = 'player_names.txt';
  $currentContent = file_get_contents($file);
  $newContent = $currentContent . "<p>$playerName has joined the game!</p>";
  file_put_contents($file, $newContent);
?>
define( 'WP_DEBUG', true );
