function load(){
    var index = document.getElementById("selector").selectedIndex;
    console.log(index);
    axios.get(`https://rickandmortyapi.com/api/location/${index}`)
        .then(function(number){
            console.log(number)
           console.log(number.data.id)
           if (number.data.id<50) {
            document.querySelector("body").style.background="#88e23b"; 
           }
           if (number.data.id>50 & number.data.id<80) {
            document.querySelector("body").style.background="#043c6e";
           } 
           if(number.data.id>80) {
            document.querySelector("body").style.background="#e3342f";
           }
           number.data.residents.forEach(resident => {
                axios.get(resident)
                .then(function(character){
                    console.log(character.data.name)
                    document.getElementById("container3").innerHTML+=`<div class="card" style="width: 18rem">
                    <img src="${character.data.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${character.data.name}</h5>
                      <p class="card-text">Status: ${character.data.status}<br>
                      Species: ${character.data.species}<br>
                      Origin: ${character.data.origin.name}
                      </p>
                      Episodios:<br>
                      <a href="${character.data.episode}" class="btn btn-primary" id="card-btn">${character.data.episode}</a>
                    </div>
                  </div>`;

                }) 
           });
        });

}

function clearTable(){
    const myNode= document.getElementById("container3");
    myNode.innerHTML='';
    document.querySelector("body").style.background="#f1f1f1";
}

