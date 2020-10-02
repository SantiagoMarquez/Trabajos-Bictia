//url de la api
const API = "https://pokeapi.co/api/v2/pokemon/";
let aux2 = []
const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      console.log("json ==> ", json);
      llenarDatos(json), pagination(json);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

function llenarDatos(data) {
  data.results.forEach((pj) => {
    aux = pj.url
    return fetch(aux)
      .then((response) => response.json())
      .then((json) => {
        llenarDatos2(json)
      })
  });
}

function llenarDatos2(data) {
  let html = ""
  html += '<div class="col datosPokemon">'
  html += '<div class="card" style="width: 10rem; padding: 10px;">'
  html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="...">`
  html += '<div class="card-body ">'
  html += `<h5 class="card-title text-center">${data.name}</h5>`
  html += `<p class="card-text">Altura :${data.height}</p>`
  html += `<p class="card-text">Peso :${data.weight}</p>`
  html += '</div>'
  html += '</div>'
  html += '</div>'
  aux2.push(html)
  document.getElementById("datosPokemon").innerHTML = aux2
}

getData(API)

//paginacion

const pagination = (data) => {
  let html = "";
  let prevDisabled = "";
  let nextDisabled = "";
  if (data.previous == null) {
    prevDisabled = "disabled";
  } else {
    prevDisabled = "";
    aux2 = []
  }

  if (data.next == null) {
    nextDisabled = "disabled";
  } else {
    nextDisabled = "";
    aux2 = []
  }

  html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${data.previous}')">Previous</a></li>`;
  html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
  document.getElementById("pagination").innerHTML = html;
};