const author = document.getElementById('author')
const quote = document.getElementById('quote')
const nextBtn = document.getElementById('next-btn')
const twitterBtn = document.getElementById('twitter-btn')
const credits = document.getElementById('credits')
const year = new Date().getFullYear();

credits.textContent = `© Bernz ${year}`

async function randomQuote() {

    const quotableAPI = 'https://api.quotable.io/random?maxLength=100'
    // For more details about this API, visit https://github.com/lukePeavey/quotable#get-random-quote

    try {
        const response = await fetch(quotableAPI)
        const data = await response.json()
        quote.textContent = data.content
        author.textContent = `by ${data.author}`
    } catch (error) {
        quote.textContent = quote.textContent
        author.textContent = author.textContent
        console.log('Something went wrong....');
    }
}

twitterBtn.addEventListener('click', () => {
    const quoteText = quote.innerText;
    const authorText = author.innerText;
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText} - ${authorText}`
    window.open(twitterURL, '_blank')
})

nextBtn.addEventListener('click', () => {
    randomQuote()
})


