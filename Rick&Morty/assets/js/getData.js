//url de la api
const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      console.log("json ==> ", json);
      llenarDatos(json), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const llenarDatos = (data) => {
  let html = "";
  data.results.forEach((pj) => {
    html += '<div class="col datosPersonajes">';
    html += '<div class="card" style="width: 10rem;">';
    html += `<img src="${pj.image} "class="card-img-top" alt="image">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text text-center">${pj.status} </p>`;
    html += `<p class="card-text text-center">${pj.species} </p>`;
    html += `<p class="card-text text-center">${pj.gender} </p>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};
getData(API);

//paginacion

const pagination = (info) => {
  let html = "";
  let prevDisabled = "";
  let nextDisabled = "";
  if (info.prev == null) {
    prevDisabled = "disabled";
  } else {
    prevDisabled = "";
  }

  if (info.next == null) {
    nextDisabled = "disabled";
  } else {
    nextDisabled = "";
  }

  html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`;
  html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
  document.getElementById("pagination").innerHTML = html;
};
