const btn = document.querySelector('.ip');

btn.addEventListener('click', getIp);

async function getIp () {
    const ip = await fetch('https://api.ipify.org/?format=json');
    const doneIp = await ip.json();
    const ipData = await fetch(`http://ip-api.com/json/${doneIp.ip}?fields=continent,country,countryCode,region,city`);
    const doneData = await ipData.json();

    let ul = document.createElement('ul');
    ul.innerHTML = `<li>Your IP: ${doneIp.ip}</li>
                <li>Continent: ${doneData.continent}</li>
                <li>Country: ${doneData.country}</li>
                <li>Region: ${doneData.region}</li>
                <li>City: ${doneData.city}</li>
                <li>District: ${doneData.district}</li>`;
    document.body.append(ul);
}