(function () {
    let count = 1;
    let dataInfo;

    
    document.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(e.target.className === 'next') {
            loadData(dataInfo.next);
        }

        if(e.target.className === 'prev') {
            loadData(dataInfo.prev);
        }
    });
    
    async function loadData(url = 'https://rickandmortyapi.com/api/character/?page=1') {
        let data = await axios(url);
        dataInfo = data.data.info;
        createCard(data.data);
    }


    function createCard(data) {
        let $imgs = document.querySelectorAll('.gallery div img');
        let array = Array.from($imgs);

        for(let i = 0; i < data.results.length; i++) {
            array[i].src = data.results[i].image;
        }
    }


    loadData();
})();   