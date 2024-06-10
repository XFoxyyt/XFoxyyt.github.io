fetch('https://games.roblox.com/v1/games/' + gameId + '/servers')
  .then(response => response.json())
  .then(data => {
    const playerCount = data.data[0].playing;
    document.getElementById('player-count').innerHTML = `Players online: ${playerCount}`;
  })
  .catch(error => console.error('Error:', error));
