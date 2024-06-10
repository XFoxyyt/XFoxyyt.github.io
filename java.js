const gameId = 17807010713; // Replace with your Roblox game ID
const socket = new WebSocket(`wss://games.roblox.com/v1/games/${gameId}/servers`);

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const playerCount = data.data[0].playing;
  document.getElementById('player-count').innerHTML = `Players online: ${playerCount}`;
};

socket.onopen = () => {
  console.log('Connected to Roblox API');
};

socket.onerror = (error) => {
  console.error('Error:', error);
};

socket.onclose = () => {
  console.log('Disconnected from Roblox API');
};
