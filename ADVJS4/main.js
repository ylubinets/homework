
function getFilms(url){
    fetch(url)
        .then(res => res.json())
        .then(films => {
            let ul = document.createElement('ul');
            document.body.append(ul);

            films.results.forEach(el => {
                const {episode_id, title, opening_crawl, characters} = el;
                let li = document.createElement('li');
                let filmTitle = document.createElement('h3');
                ul.append(li);
                li.append(filmTitle);
                filmTitle.append(title);
                li.insertAdjacentHTML('beforeend', `<p class="episode-id">EPISODE  ${episode_id}</p><p class="description-text">DESCRIPTION <br> ${opening_crawl}</p><hr>`);


                characters.forEach(char => {
                    fetch(char)
                        .then(res => res.json())
                        .then(actor => {
                            filmTitle.insertAdjacentHTML('afterend', `${actor.name}<br>`);
                        })
                })
            })
        })
}
getFilms('https://swapi.dev/api/films/');

