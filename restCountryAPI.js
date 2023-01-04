let pais = "brasil";
mostrar();

function getCountry(event){ 
    pais = document.getElementById("paisTxt").value; 
    console.log(pais); 
    mostrar(); 
}

function mostrar(){
    let url = "https://restcountries.com/v3.1/name/" + pais;
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(function(data){
        console.log(data[0]);
        document.getElementById("flagImg").src = data[0].flags.png;
        document.getElementById("capital").value = data[0].capital;
        document.getElementById("continente").value = data[0].continents[0];
        document.getElementById("area").value = data[0].area;
        document.getElementById("populacao").value = data[0].population;

    })
    .catch(function(err){
        console.log("Erro: " + err);
    })
}