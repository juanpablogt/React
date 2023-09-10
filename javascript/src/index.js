const apikey = 'NGv2bSa4V3T9Y6bUqHFhPSw0o4S8p9Nc';

const petcion = fetch('http://api.giphy.com/v1/gifs/random?api_key=' + apikey);
petcion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
