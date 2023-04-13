let contenido = document.getElementById("contenido");

fetch('https://studio-ghibli-films-api.herokuapp.com/api/My%20Neighbor%20Totoro')
    .then(response => response.json())
    .then(resp => {crearCard(resp)});

function crearCard(resp) {
    contenido.innerHTML +=
        `
		<img src="${resp.poster}" class="card-img-top" alt="${resp.title}">
        <div class="card-body">
          <h5 class="card-title text-center text-uppercase">${resp.title}</h5>
          <p class="card-text text-center lh-base">${resp.synopsis}</p>
          <p class="card-text"><b>Título Romanizado:</b> ${resp.hepburn}</p>
          <p class="card-text"><b>Año de estreno:</b> ${resp.release}</p>
          <p class="card-text"><b>Director:</b> ${resp.director}</p>
          <a href="#" class="btn btn-primary">Más Información</a>
        </div>
		`
}