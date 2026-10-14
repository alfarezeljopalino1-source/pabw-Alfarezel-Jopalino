// js/api.js
const ALAMAT = 'https://jsonplaceholder.typicode.com/posts';

async function muat() {
    const respons = await fetch(ALAMAT);

    console.log('status', respons.status, 'ok', respons.ok);

    if (!respons.ok) {
        throw new Error('status ' + respons.status);
    }

    console.log(
        'Content-Type:',
        respons.headers.get('Content-Type')
    );

    return respons.json();
}

muat()
    .then(data => console.log(data))
    .catch(error => console.error(error));