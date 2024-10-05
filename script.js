const fetchQuotes = (category = 'graduation') => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: "GET",
        headers: {
            'X-Api-Key': '6Pvz5jsuvMSCQ5tdqXrRIg==G4UnqB2dBvR67wO9',
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            document.getElementById("text").textContent = data[0].quote;
            document.getElementById("author").textContent = `- ${data[0].author}`;

            // Met à jour le lien pour tweeter
            const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data[0].quote + " - " + data[0].author)}`;
            document.getElementById("tweet-quote").setAttribute('href', tweetLink);
        }
    })
    .catch(error => console.error('Erreur lors de la récupération des citations:', error));
};

// Appelle fetchQuotes lors du chargement de la page
document.addEventListener('DOMContentLoaded', fetchQuotes);

// Événement pour le bouton "Nouvelle Citation"
document.getElementById("new-quote").addEventListener("click", () => {
    console.log('clicking...')
    fetchQuotes();
});
