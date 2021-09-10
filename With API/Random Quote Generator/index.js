const author = document.getElementById('author')
const quote = document.getElementById('quote')
const nextBtn = document.getElementById('next-btn')
const twitterBtn = document.getElementById('twitter-btn')
const credits = document.getElementById('credits')
const year = new Date().getFullYear();
const loader = document.getElementById('loader')
const container = document.getElementById('container')

// Update footer year
credits.textContent = `© Bernz ${year}`

// Loading
loader.hidden = true;
function loading() {
    loader.hidden = false
    container.hidden = true
}

function loaded() {
    if (!loader.hidden) {
        container.hidden = false
        loader.hidden = true
    }
}

async function randomQuote() {
    loading();
    const quotableAPI = 'https://api.quotable.io/random?maxLength=100'
    // For more details about this API, visit https://github.com/lukePeavey/quotable#get-random-quote

    try {
        const response = await fetch(quotableAPI)
        const data = await response.json()
        quote.textContent = data.content
        author.textContent = `by ${data.author}`
        loaded();
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


