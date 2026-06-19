const imagenes = [
    "img/centollo1.jpg",
    "img/centollo2.jpg",
    "img/centollo3.jpg",
    "img/centollo4.jpg",
    "img/centollo5.jpg"
];
    
const slider = document.getElementById("slider");
const puntos = document.querySelectorAll(".punto");

let actual = 0;

setInterval(() => {

    actual++;

    if(actual >= imagenes.length){
        actual = 0;
    }

    slider.src = imagenes[actual];

    puntos.forEach(p => p.classList.remove("activo"));
    puntos[actual].classList.add("activo");

}, 3000);
const modal = document.getElementById("modalOferta");

// Mostrar al entrar
window.onload = function(){
    modal.style.display = "flex";
};

// Cerrar modal
function cerrarOferta(){
    modal.style.display = "none";
}

// Cerrar al hacer clic fuera del cuadro
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
};
function mostrarInfo(tipo){

    switch(tipo){

        case "historia":
            alert("El Centollo cuenta con más de 100 años de experiencia ofreciendo productos del mar.");
        break;

        case "fresco":
            alert("Seleccionamos diariamente los pescados y mariscos más frescos.");
        break;

        case "ahumados":
            alert("Nuestros ahumados se elaboran mediante procesos artesanales tradicionales.");
        break;

        case "tienda":
            window.location.href = "contacto.html";
        break;

        case "seleccion":
            alert("Nuestro equipo selecciona los mejores productos para nuestros clientes.");
        break;

    }
}