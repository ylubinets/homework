const btn = document.querySelector('.ip');

btn.addEventListener('click', getIp);

async function getIp () {
    const res = await fetch('https://api.ipify.org/?format=json').then((res) => res.json());
    const ipData = await fetch(`http://ip-api.com/json/${res.ip}?fields=continent,country,regionName,city,district`).then((res) => res.json());

    let ul = document.createElement('ul');
    ul.innerHTML = `<li>Your IP: ${res.ip}</li>
                <li>Continent: ${ipData.continent}</li>
                <li>Country: ${ipData.country}</li>
                <li>Region: ${ipData.region}</li>
                <li>City: ${ipData.city}</li>
                <li>District: ${ipData.district}</li>`;
    document.body.append(ul);
}
