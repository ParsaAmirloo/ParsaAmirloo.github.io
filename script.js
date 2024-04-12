const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = '6464825264:AAE20MCPTCHGdNBPf4qAMkB_FBzMcY9QEhQ';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle '/playgame' command
bot.onText(/\/playgame/, (msg) => {
    // Replace 'YOUR_GAME_URL' with the URL of your HTML5 game
    const gameUrl = 'https://parsaamirloo.github.io./';
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Click the link to play the game: ${gameUrl}`);
});


function change() {
    const coinElement = document.getElementById("coin");
    coinElement.classList.add("bigger"); // Add the 'bigger' class
    setTimeout(() => {
        coinElement.classList.remove("bigger"); // Remove the 'bigger' class after 500ms (transition duration)
    }, 100);
    
    const scoreElement = document.getElementById("score");
    let score = parseInt(scoreElement.textContent);
    score += 1;
    scoreElement.textContent = score;
}
