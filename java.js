fetch('https://games.roblox.com/v1/games/' + 17807010713 + '/servers')
  .then(response => response.json())
  .then(data => {
    const playerCount = data.data[0].playing;
    document.getElementById('player-count').innerHTML = `Players online: ${0}`;
  })
  .catch(error => console.error('Error:', error));
