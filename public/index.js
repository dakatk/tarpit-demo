function loadMessageResponse() {
    fetch('http://localhost:8000/message/jake?id=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Tessa' })
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

function downloadFile() {
    fetch('http://localhost:8000/file/example')
        .then(async response => {
            if (response.status != 200) {
                console.error(await response.text())
            }
            else {
                const localUri = response.headers.get('location');
                const filename = localUri.split('/').pop();
                
                const blob = await response.blob();
                const blobUri = window.URL.createObjectURL(blob);
                
                downloadUri(blobUri, filename);
            }
        })
        .catch(reason => console.error(reason.message));
}



function downloadUri(uri, name)
{
    const link = document.createElement("a");

    link.setAttribute('download', name);
    link.href = uri;

    document.body.appendChild(link);

    link.click();
    link.remove();
}


window.onload = () => {
    loadMessageResponse();
    document.getElementById('hello-button').onclick = () => loadHelloResponse();
    document.getElementById('download-button').onclick = () => downloadFile();
}