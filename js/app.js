let video_div = document.querySelector(".video");

/*let videoPreview = document.querySelector('.video-preview');

videoPreview.addEventListener('mouseover', function() {
    videoPreview.play();
});

videoPreview.addEventListener('mouseout', function() {
    videoPreview.pause();
});*/

fetch('./data/youtube-videos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la conexión: ' + response.status);
        }
        return response.json();
    })
    .then(datos => {
        // Haz algo con los datos
    })
    .catch(error => {
        console.error('Error:', error);
    });


/*    fetch('./data/youtube-videos.json')
    .then(response => response.json())
    .then(dato => {
      dato.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('video-display')
          div.innerHTML = `
            ${element.imagen}
            <h2>${element.titulo}</h2>
            ${element.creador_de_contenido}
            ${element.imagen_creador_de_contenido}
            <p>${element.visualizaciones}</p>
          `;
          
          video_div.appendChild(div);
      });
  });
  */

fetch('./data/youtube-videos.json')
  .then(response => response.json())
  .then(dato => {
    for (let i = 0; i < 8; i++) {
      let div = document.createElement('div');
      div.classList.add('video-display')
        div.innerHTML = `
          ${dato[0].imagen}
          <h2>${dato[0].titulo}</h2>
          ${dato[0].imagen_creador_de_contenido}
          ${dato[0].creador_de_contenido}
          <p>${dato[0].visualizaciones}</p>
        `;
        video_div.appendChild(div);
    }
});
