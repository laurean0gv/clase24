window.addEventListener("load",()=>{
    mostrarPelis();
});

//control de paginacino
let pag=1;
const api_key='73b96ddc25658ad17c90440e7f61bd67';

// captura de botones
let btnAnt = document.querySelector(".btnAnt");
let btnSig = document.querySelector(".btnSig");


//funcion btn anterior
btnAnt.addEventListener("click", () =>{
    if (pag>1) {
        pag--;    
        if(pag==1){
            btnAnt.disabled=true;
        }
        mostrarPelis();
    }
});



//funcino btn siguiente
btnSig.addEventListener("click", () =>{
    if (pag<500) {
        pag++;    
        btnAnt.disabled=false;
        if(pag==500){
            btnSig.disabled=true;
        }
        mostrarPelis();
    }
});

//funcion de carga y e impesion de peliculas


const mostrarPelis = async () => {
    
    try {
        let pagina= await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-MX&page=${pag}`);
        if(pagina.status==200){
            let jsonPelis= await pagina.json();
            console.log(jsonPelis.results);
            let peliculas="";
            jsonPelis.results.forEach(pelicula => {
                peliculas+=`<div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <div class="sinopsis">${pelicula.overview}</div>
                <h2 class="titulo">${pelicula.original_title}</h2>
                </div>`

                document.querySelector(".contenedor").innerHTML=peliculas       
                


            });
        }
        addEventListener("mouseover", (event) => {
            console.log("mouse sobre imange")
        });
        
    } catch (error) {
        console.log(error);
    }

};


