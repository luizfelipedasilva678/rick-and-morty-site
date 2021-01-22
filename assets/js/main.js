(function () {
    let dataInfo;

    document.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(e.target.className === 'next') {
            if(dataInfo.next !== null) {
                loadData(dataInfo.next);
            }
        }

        if(e.target.className === 'prev') {
            if(dataInfo.prev !== null) {
                loadData(dataInfo.prev);
            }
        }

        if(e.target.className === 'btn-search') {
            let name = document.querySelector('#name').value;
            console.log(name);

            loadData(`https://rickandmortyapi.com/api/character/?name=${name}`)
        }
    });
    
    async function loadData(url = 'https://rickandmortyapi.com/api/character/?page=1') {
        let data = await axios(url);
        dataInfo = data.data.info;
        createCard(data.data);
    }

    function createCard(data) {
        let $imgs    = document.querySelectorAll('.gallery div img');
        let $names   = document.querySelectorAll('.gallery .name');
        let $gender  = document.querySelectorAll('.gallery .gender');
        let $species = document.querySelectorAll('.gallery .species');
        let $status  = document.querySelectorAll('.gallery .status');
        
        let imgsArray    = Array.from($imgs);
        let nameArray    = Array.from($names);
        let genderArray  = Array.from($gender);
        let speciesArray = Array.from($species);
        let statusArray  = Array.from($status);

        for(let i = 0; i < data.results.length; i++) {
            imgsArray[i].src          =  data.results[i].image;
            nameArray[i].innerText    =  data.results[i].name;
            genderArray[i].innerText  = 'Gender - '   + data.results[i].gender;
            speciesArray[i].innerText = 'Species - ' + data.results[i].species;
            statusArray[i].innerText  = 'Status - '   + data.results[i].status;
        }
    }

    loadData();
})();   