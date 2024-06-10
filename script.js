window.addEventListener('DOMContentLoaded', () => {
    const playerMessageElement = document.getElementById('playerMessage');

    // Fetch the message from the server
    fetch('/getMessage')
        .then(response => response.text())
        .then(message => {
            // Update the HTML content with the received message
            playerMessageElement.textContent = message;
        })
        .catch(error => {
            console.error('Error fetching message:', error);
        });
});
