

   // Funcionalidad del Slider del Home
document.addEventListener('DOMContentLoaded', () => {
 
    let imagenIndex = 0;

    const sliderImgs = document.querySelectorAll(`.Slider-img`);
    const sliderInfos = document.querySelectorAll(`.Slider-info`);
    const sliderNext = document.querySelector(`.Next`);
    const sliderPrev = document.querySelector(`.Prev`);

    function showImage(index) {
        sliderImgs.forEach((img, i) => {
            img.classList.toggle('isVisible', i === index);
        });
        sliderInfos.forEach((info, i) => {
            info.classList.toggle('isVisible', i === index);
        });
    }

    sliderNext?.addEventListener('click', () => {
        imagenIndex = (imagenIndex + 1) % sliderImgs.length;
        showImage(imagenIndex);
    });

    sliderPrev?.addEventListener('click', () => {
        imagenIndex = (imagenIndex - 1 + sliderImgs.length) % sliderImgs.length;
        showImage(imagenIndex);
    });

    // Mostrar imagen principal
    showImage(imagenIndex);

    // Auto reproducción de slider del Home
    if (sliderImgs.length > 1) {
        setInterval(() => {
            imagenIndex = (imagenIndex + 1) % sliderImgs.length;
            showImage(imagenIndex);
        }, 4000);
    }

     // Funcionalidad para desplegar el Menu responsive al pulsar sobre la hamburguesa

    document.getElementById("MenuBurger").addEventListener("click", () => {
        const menuMobile = document.getElementById("MenuMobile");
        menuMobile.classList.toggle("active");
    });

    // Funcionalidad para el botón de la ciudad. Cambia de Barcelona a Madrid y viceversa
    const botonCiudad = document.getElementById('botonCiudad');
    botonCiudad?.addEventListener('click', () => {
        botonCiudad.innerHTML = botonCiudad.textContent.includes('Barcelona') ?
            '<i class="fa-solid fa-caret-right" style="color: #000000;"></i> Madrid' :
            '<i class="fa-solid fa-caret-right" style="color: #000000;"></i> Barcelona';
    });
});

const movieData = { // El título es igual al que está en index.html
    "Joker: Folie à Deux": {
        description: "Tras crear el caos, Arthur Fleck ha sido internado en Arkham a la espera de juicio por sus crímenes como Joker. Mientras lidia con su doble identidad, Arthur no sólo se topa con el amor verdadero, sino que también descubre la música que siempre ha estado dentro de él. Secuela de 'Joker' (2019).",
        trailer: "https://www.youtube.com/embed/_OKAwz2MsJs?si=LAa5j5euCaB4yWHe",
        url: "https://www.pillalas.com/cine/renoir-floridablanca/cartelera/",
    },
    "La Sustancia": {
        description: "¿Alguna vez has soñado con una mejor versión de ti misma? Tú. Solo que mejor en todos los sentidos. Tienes que probar este nuevo producto. Se llama 'La sustancia'. Genera otra tú. Una nueva tú, más joven, más bella, más perfecta. Y solo hay una regla: compartes el tiempo. Una semana para ti. Una semana para la nueva tú. Siete días cada una. Un equilibrio perfecto. Fácil. ¿Verdad? Si respetas el equilibrio... ¿Qué podría salir mal?",
        trailer: "https://www.youtube.com/embed/LL7-o30o9ec?si=wKppTagQFJ9ohsUO",
        url: "https://www.pillalas.com/pelicula/10720/la-sustancia/",
    },
    "Megalopolis": {
        description: "Ambientada en unos Estados Unidos modernos imaginarios, sigue al visionario arquitecto Cesar Catilina (Driver) mientras se enfrenta al corrupto alcalde Franklyn Cicero (Esposito) para determinar cómo reconstruir la metrópolis de Nueva Roma después de un desastre devastador.",
        trailer: "https://www.youtube.com/embed/pq6mvHZU0fc?si=bJsuVN0PG6x3-wER",
        url: "https://www.pillalas.com/cine/renoir-floridablanca/cartelera/",
    },
    "Casa en Flames": {
        description: "Montse (Emma Vilarasau) está emocionadísima porque está a punto de pasar un fin de semana con toda la familia en su casa de Cadaqués, en la Costa Brava. Está divorciada hace tiempo, su ex tiene una nueva pareja, sus hijos han crecido y hace tiempo que hacen su vida sin hacerle ningún caso, pero a Montse nada ni nadie conseguirá fastidiarle los ánimos; hace demasiado tiempo que espera este momento, demasiado tiempo que sueña con él: éste fin de semana será sí o sí un fin de semana ideal... aunque para ello tenga que quemarlo todo",
        trailer: "https://www.youtube.com/embed/dQ-hoH1WX00?si=jLP_56BIZLrIEPTL",
        url: "https://www.pillalas.com/cine/renoir-floridablanca/cartelera/",
    },
    "Los Destellos": {
        description: "La vida de Isabel da un inesperado giro el día en que su hija Madalen le pide que visite regularmente a Ramón, que se encuentra enfermo. Tras quince años alejada de su exmarido, un hombre al que ve como a un desconocido pese a que fueron familia durante años, en Isabel comienzan a reavivarse resentimientos que creía superados. Sin embargo, al acompañar a Ramón en su momento más vulnerable, Isabel conseguirá ver con otros ojos el fracaso que vivieron para centrarse en el presente de su propia vida.",
        trailer: "https://www.youtube.com/embed/lTUeQvBSyTc?si=4kSUhV5vxkySK5fK",
        url: "https://www.pillalas.com/pelicula/10656/los-destellos/",
    },
    "Soy Nevenka": {
        description: "En el año 2000, Nevenka Fernández, de 24 años, concejala de Hacienda en el Ayuntamiento de Ponferrada, sufre una persecución implacable, tanto sentimental como profesional, por parte del alcalde, un hombre acostumbrado a hacer su voluntad en lo político y en lo personal. Nevenka decide denunciar, aunque sabe que deberá pagar un precio muy alto: su entorno no la apoya, la sociedad de Ponferrada le da la espalda y los medios la someten a un juicio público.   ",
        trailer: "https://www.youtube.com/embed/uQ0QjvpljQc?si=VbWJq9qxEa8QSQPw",
        url: "https://www.pillalas.com/cine/renoir-floridablanca/cartelera/",
    },
    "El 47": {
        description: "El 47 cuenta la historia de un acto de disidencia pacífica y el movimiento vecinal de base que en 1978 transformó Barcelona y cambió la imagen de sus suburbios para siempre. Manolo Vital, un conductor de autobús que se adueñaba del bus de la línea 47 para desmontar una mentira que el Ayuntamiento se empeñaba en repetir: los autobuses no podían subir las cuestas del distrito de Torre Baró. Un acto de rebeldía que demostró ser un catalizador para el cambio, de que las personas se enorgullecen de sus raíces, de una lucha del vecindario, de la clase trabajadora que ayudó a crear la Barcelona moderna de los años 70.",
        trailer: "https://www.youtube.com/embed/pfaG5OXWMEc?si=f5x-NAYX6B9FGs6f",
        url: "https://www.pillalas.com/pelicula/10638/el-47/",
    },
    "La virgen roja": {
        description: "Las interioridades del vertiginoso ascenso de Bad Gyal como icono generacional. La cámara sigue —de Barcelona a Miami, vía Santo Domingo, Las Vegas, Milán y París— los pasos de la cantante de Vilassar de Mar en su camino a la conquista del mainstream. La salida de su primer disco, La Joia, se pospuso más de un año, obligándola a hacer un ejercicio de resiliencia dentro de la industria y consigo misma.",
        trailer: "https://www.youtube.com/embed/2QlsIR5FJXE?si=alZgMP2mGKJx9jrE",
        url: "https://www.pillalas.com/pelicula/10683/la-joia-bad-gyal/",
    }


};

// Event listeners para cada película del grid
document.querySelectorAll('.GridCartelera > div').forEach(movie => { // Por cada película mencionada en GridCartelera, cuando el usuario da click sobre ella, la info de esa película se "activa"
    movie.addEventListener('click', () => {
        const title = movie.querySelector('h2').textContent;

        // Se obtiene la info de la película desde el objeto de movieData 
        const movieInfo = movieData[title];
        if (movieInfo) { // Si no se agrega la película en el objeto de arriba, no hará o mostrará los siguientes pasos que aparecen en este apartado
            // Populate modal content
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalBuy').href = movieInfo.url;
            document.getElementById('modalDescription').textContent = movieInfo.description;
            document.getElementById('modalTrailer').src = movieInfo.trailer;

            // Mostrar el MODAL
            document.getElementById('movieModal').classList.add('active'); // 
        } else {
            alert(`Movie data for "${title}" not found.`); // Esto aparecerá en caso la película clicada no aparezca en la lista de arriba
        }
    });
});

// Función para cerrar el MODAL
function closeModal() {
    document.getElementById('movieModal').classList.remove('active'); // Elimina la clase actival del MODAL para poder cerrarlo
    // "Resetea" el src del trailer para eliminar su reproducción 
    document.getElementById('modalTrailer').src = ""; // Si no lo dejamos vacío, tendrá la misma url para cada película
}
