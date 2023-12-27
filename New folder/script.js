document.getElementById("generate-btn").addEventListener("click", function() {
    fetch("https://api.quotable.io/random")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const quoteContent = data.content || "Content not available";
        const quoteAuthor = data.author || "Unknown author";
        const quote = `${quoteContent} - ${quoteAuthor}`;
        document.getElementById("quote").textContent = quote;
    })
    .catch(error => {
        console.error("Error fetching quote:", error);
        document.getElementById("quote").textContent = "Failed to fetch quote. Please try again.";
    });
});
