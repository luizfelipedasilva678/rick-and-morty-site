(function () {
    async function loadData(num) {
        let data = await axios('https://rickandmortyapi.com/api/character/?page=num');

        createCard(data.data.results);
    }

    function createCard(data) {
        let img;
        let div;
        let gallery = document.querySelector('.gallery');

        for (let values of data) {
            div = document.createElement('div');
            
            img = document.createElement('img');
            img.src = values.image;

            div.appendChild(img);
            gallery.appendChild(div);
        }   
    }


    loadData();

})();   