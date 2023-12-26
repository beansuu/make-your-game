document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.getElementById('game-container');
    let player = createPlayer();

    function createPlayer() {
        let playerElement = document.createElement('div');
        playerElement.classList.add('player');
        playerElement.style.left = '375px'; // Center the player
        playerElement.style.top = '275px';
        gameContainer.appendChild(playerElement);
        return {
            element: playerElement,
            x: 375,
            y: 275,
            speed: 5
        };
    }

    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowUp': player.y -= player.speed; break;
            case 'ArrowDown': player.y += player.speed; break;
            case 'ArrowLeft': player.x -= player.speed; break;
            case 'ArrowRight': player.x += player.speed; break;
        }
        updatePlayerPosition();
    });

    function updatePlayerPosition() {
        player.element.style.left = player.x + 'px';
        player.element.style.top = player.y + 'px';
    }
});
