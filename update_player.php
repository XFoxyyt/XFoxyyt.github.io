<?php
if(isset($_GET['playerName'])) {
    $playerName = $_GET['playerName'];
    
    // Open the text file where player names are stored
    $file = fopen("player_names.txt", "a");
    if ($file) {
        // Append the player's name to the file
        fwrite($file, $playerName . "\n");
        fclose($file);
    }
}
?>
