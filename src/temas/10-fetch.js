const apiKey = 'OKjvMOhz1ETtt0OO4VcnOQmK6hZXdOyK';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


// resp.json().then(data => {
    //     console.log(data);
    // })
peticion.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original; 
    const  img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(err => {
    console.warn(err)
})