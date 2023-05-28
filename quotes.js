const quote_API = 'https://api.quotable.io/random'
const quotes = document.querySelector('.quotes');
const author = document.querySelector('.author');

// fetch(quote_API).then(response => response.json()).then(response => console.log(response))


const quotesGenerate = async () => {

  try {
    //get data
    const response = await fetch(quote_API);
    const data = await response.json()
  
    //display data
    quotes.innerHTML = `${data.content}`;
    author.innerHTML = `-${data.author}`;
  
    return data
    
  } catch(error) {
    console.log('ERROR')
  }

  
}
quotesGenerate()

setInterval(quotesGenerate, 1000*30);


