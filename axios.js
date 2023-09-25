axios.get('https://rickandmortyapi.com/api/location')
    .then(function (data) {
    /*console.log(data);*/
    for (let i = 1; i < 8; i++) {
        axios.get(`https://rickandmortyapi.com/api/location?page=${i}`)
        .then(function(response){
            response.data.results.forEach(location => {
            document.getElementById('selector').innerHTML+=`<option>${location.name}</option>`;
                
        });
    })
    
    }
    })
    .catch(function (error) {
    console.log(error);
    })
    .then(function () {
    });


