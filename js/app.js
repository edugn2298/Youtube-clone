let video_div = document.querySelector(".video");

  fetch('./data/youtube-videos.json')
    .then(response => response.json())
    .then(dato => {
      dato.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('video-display')
        div.innerHTML = `
        ${element.imagen}
      <div class="video-detail">
        ${element.imagen_creador_de_contenido}
      <div class="video-info">
        <h2>${element.titulo}</h2>
        ${element.creador_de_contenido}
        <p>${element.visualizaciones}</p>
      </div>
      </div>
      `;
          
          video_div.appendChild(div);
      });
  });

/*fetch('./data/youtube-videos.json')
  .then(response => response.json())
  .then(dato => {
    for (let i = 0; i < 8; i++) {
      let div = document.createElement('div');
      div.classList.add('video-display')
        div.innerHTML = `
          ${dato[0].imagen}
        <div class="video-detail">
          ${dato[0].imagen_creador_de_contenido}
        <div class="video-info">
          <h2>${dato[0].titulo}</h2>
          ${dato[0].creador_de_contenido}
          <p>${dato[0].visualizaciones}</p>
        </div>
        </div>
        `;
        video_div.appendChild(div);
    }
});
*/