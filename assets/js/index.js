const main = document.querySelector('main')


const request = axios('https://rickandmortyapi.com/api/character')
console.log(request)
request.then((response) => {
  //object destructuring
  const { data } = response;
  const { info, results } = data
  console.log(results)
  results.forEach(element => {
    createHtml(element)
  });

})

function createHtml(element) {
  const card = document.createElement('section')
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');

  imageContainer.setAttribute('class', 'card_img')
  image.setAttribute('src', `${element.image}`)
  image.setAttribute('alt', "alt tag added")
  imageContainer.append(image);

  const cardBody = document.createElement('article');
  cardBody.setAttribute('class', 'card_body');


  const cardName = document.createElement('h4');
  cardName.innerHTML = `Name : ${element.name}`

  const cardSpecies = document.createElement('p')
  cardSpecies.innerHTML = `Species : ${element.species}`

  const cardStatus = document.createElement('p')
  cardStatus.innerHTML = `Status : ${element.status}`

  cardBody.append(cardName, cardSpecies, cardStatus)

  card.setAttribute('class', 'card')
  card.append(imageContainer, cardBody)

  main.append(card)
}

// createHtml('Jazmin')

// const fetchData =

// .then catch
// async await

