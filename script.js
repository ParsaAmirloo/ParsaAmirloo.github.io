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
