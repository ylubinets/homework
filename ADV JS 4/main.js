
class Films {
    constructor({episode_id, title, opening_crawl, characters}) {
        this.episode = episode_id;
        this.name = title;
        this.content = opening_crawl;
        this.characters = characters;
    }
}
fetch('https://swapi.dev/api/films/')
    .then(r => r.json())
    .then(films => {
        const {results} = films;

        const film = results.map(item => new Films(item));
        const filmsContainer = document.createElement('div');

        const  newFilms = film.forEach(item => {
            const filmsWrapper = document.createElement('div');
            const filmsName = document.createElement('h2');
            const filmsCharacters = document.createElement('p');
            const filmsEpisode = document.createElement('p');
            const filmsContent = document.createElement('p');

            filmsName.textContent = item.name;
            filmsEpisode.textContent = "EPISODE: " + item.episode;
            filmsContent.textContent = "DESCRIPTION: " + item.content;

            item.characters.forEach(url => {
                fetch(url)
                    .then(r => r.json())
                    .then(nameActor => {
                        filmsCharacters.textContent +=nameActor.name + ", ";
                    });
            });

            filmsWrapper.append(filmsName,filmsCharacters,filmsEpisode,filmsContent);
            filmsContainer.append(filmsWrapper)
        });
        document.body.prepend(filmsContainer)
    });

