document.addEventListener("DOMContentLoaded", function () {
    const subtitle = document.getElementById("subtitle");
    const words = ["Create", "Play", "Learn"];
    let currentWordIndex = 0;

    function animateSubtitle() {
        const mainWord = words[currentWordIndex];
        subtitle.innerHTML = `<span class="small-word">${words[(currentWordIndex + 2) % words.length]}</span> 
                              <span class="main-word">${mainWord}</span> 
                              <span class="small-word">${words[(currentWordIndex + 1) % words.length]}</span>`;
        currentWordIndex = (currentWordIndex + 1) % words.length;

        // Apply styles to the main word
        const newMainWord = document.querySelector('.main-word');
        newMainWord.style.fontSize = "100px"
        newMainWord.style.color = "#0011ff"; // Adjust the color as needed
        newMainWord.style.fontWeight = "bold"; // Adjust the font weight as needed
        // Add any additional styles as needed

        // Apply styles to the small words
        const smallWords = document.querySelectorAll('.small-word');
        smallWords.forEach(word => {
            word.style.fontSize = "40px"; // Adjust the font size as needed
            word.style.color = "#3385ff"; // Adjust the color as needed
            word.style.fontWeight = "bold";
            // Add any additional styles as needed
        });
    }

    setInterval(animateSubtitle, 3000); // Change word every 3 seconds
    animateSubtitle(); // Initial call to start the animation
});
