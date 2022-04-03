function loadMessageResponse() {
    fetch('http://localhost:8000/message/jake?id=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Meagan' })
    })
    .then(async response => {
        if (response.status != 200) {
            console.error(await response.text())
        }
        else {
            const el = document.getElementById('message-response');
            el.innerHTML = await response.text();
        }
    })
    .catch(reason => console.error(reason));
}

function loadHelloResponse() {
    fetch('http://localhost:8000/hello/world')
        .then(async response => {
            if (response.status != 200) {
                console.error(await response.text())
            }
            else {
                const el = document.getElementById('hello-response');
                el.innerHTML += JSON.stringify(await response.json());
            }
        })
        .catch(reason => console.error(reason.message));
}

window.onload = () => {
    loadMessageResponse();
    document.getElementById('hello-button').onclick = () => loadHelloResponse();
}