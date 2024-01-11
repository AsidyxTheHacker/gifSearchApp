let submitBtn = document.getElementById('submit-btn');

let generateGif = () => {
 let loader = document.querySelector('.loader');
 loader.style.display = 'block';
 document.querySelector('.wrapper').style.display = 'none';

 let search = document.getElementById('search-box').value;
 let gifCount = 12;
 let finalURL = `https://api.giphy.com/v1/search?api_key=${apiKey}&q=${search}&limit=${gifCount}&offset=0&rating=g&lang=en`;
};

submitBtn.addEventListener('click', generateGif);
window.addEventListener('load', generateGif)