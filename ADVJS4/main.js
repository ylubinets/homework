fetch("https://swapi.dev/api/films/")
    .then(res => res.json())
    .then(outcome => outcome.results)
    .then(desc => {
        let div = document.createElement("div");
        desc.forEach(item => {
            let divItem = document.createElement("div");
            divItem.innerHTML = `
                    <h1>${item.title}</h1>
                    <span>EPISODE: ${item.episode_id}</span>
                    <p>${item.opening_crawl}</p>`;
            document.body.append(div);
            div.append(divItem);
            let ol = document.createElement("ol");
            let characters = item.characters;
            let fetches = characters.map(item => {
                return fetch(item)
                    .then(responsive => responsive.json())
                    .then(name => name.name)
            })
            Promise.all(fetches)
                .then(dataset => {
                    dataset.forEach(names => {
                        const li = document.createElement("li");
                        li.innerHTML = `${names}`;
                        ol.append(li);
                    });
                })
            divItem.append(ol)
        });
    });
