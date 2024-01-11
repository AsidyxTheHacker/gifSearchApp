let submitBtn = document.getElementById('submit-btn');
let apiKey = "aUl5aTFslTCn2gddvUsGWZNR56BjCW3n";

let generateGif = () => {
 let loader = document.querySelector('.loader');
 loader.style.display = 'block';
 document.querySelector('.wrapper').style.display = 'none';

 let search = document.getElementById('search-box').value;
 let gifCount = 24;
 let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=${gifCount}&offset=0&rating=r&lang=en`;
 document.querySelector('.wrapper').innerHTML = "";

 fetch(finalURL).then(resp => resp.json()).then(info => {
    console.log(info.data);
    let gifData = info.data;
    gifData.forEach((gif) => {
        let container = document.createElement('div');
        container.classList.add('container');
        let iframe = document.createElement('img');
        console.log(gif);
        iframe.setAttribute("src", gif.images.downsized_medium.url);
        iframe.onload = () => {
            gifCount--;
            if(gifCount == 0){
                loader.style.display = 'none';
                document.querySelector('.wrapper').style.display = 'grid';
            }
        };
        container.append(iframe);
        
        container.addEventListener('click', () => {
            let copyLink = `https://media4.giphy.com/media/${gif.id}/giphy.mp4`;
            navigator.clipboard.writeText(copyLink).then(() => {
                alert("GIF COPIED");
            }).catch(() => {
                alert("GIF COPIED");
                let hiddenInput = document.createElement('input');
                hiddenInput.setAttribute("type", "text");
                document.appendChild(hiddenInput);
                hiddenInput.value = copyLink;
                hiddenInput.select();
                document.execCommand("copy");
                document.removeChild(hiddenInput);
            })
        })
        document.querySelector('.wrapper').append(container);
    });
 });
};

submitBtn.addEventListener('click', generateGif);
window.addEventListener('load', generateGif)