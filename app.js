const form = document.querySelector('#form1');
const div = document.querySelector('div');
const section = document.querySelector('.sec2')

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const search = form.elements.query.value;
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
    displayShow(result.data)
    form.elements.query.value = '';
   

})

const displayShow = (shows) => {
    // Select all the old search result cards
    const oldCards = document.querySelectorAll('.card');

    // Remove the old search result cards
    for (let oldCard of oldCards) {
        oldCard.remove();
    }

    // Display the new search result cards
    for (let oneShow of shows) {
        if (oneShow.show.image) {
            const card = document.createElement('div');
            card.className = 'card column is-3 m-3';

            const cardImage = document.createElement('div');
            cardImage.className = 'card-image';
            card.appendChild(cardImage);

            const figure = document.createElement('figure');
            figure.className = 'image is-square';
            cardImage.appendChild(figure);

            const image = document.createElement('img');
            image.src = oneShow.show.image.medium;
            figure.appendChild(image);

            const cardContent = document.createElement('div');
            cardContent.className = 'card-content';
            card.appendChild(cardContent);

            const media = document.createElement('div');
            media.className = 'media';
            cardContent.appendChild(media);

            const mediaContent = document.createElement('div');
            mediaContent.className = 'media-content';
            media.appendChild(mediaContent);

            const title = document.createElement('p');
            title.className = 'title is-4';
            title.textContent = oneShow.show.name;
            mediaContent.appendChild(title);

            const content = document.createElement('div');
            content.className = 'content';
            cardContent.appendChild(content);

            const description = document.createElement('p');
            description.textContent = oneShow.show.summary;
            content.appendChild(description);

            section.appendChild(card);

      
        }

        
        
    }
}
