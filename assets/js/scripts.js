// Array de URLs de imágenes
const imagenes = [
         {'avatar': './assets/img/avatar1.webp', 'letters': ""},
         {'avatar': './assets/img/avatar2.webp', 'letters': ""},
         {'avatar': './assets/img/avatar3.webp', 'letters': ""},
         {'avatar': './assets/img/avatar4.webp', 'letters': ""},
         {'avatar': './assets/img/avatar5.webp', 'letters': ""},
         {'avatar': '', 'letters': "+1,100"}
     ];

// Función para renderizar las imágenes
function renderizarImagenes() {
    const container = document.getElementById('imagen-container');
    imagenes.forEach(({avatar, letters}) => {
        const img = document.createElement('img');
        img.src = avatar;
        img.alt = 'Imagen';
        img.className = 'avatar';
        const textWrapper = document.createElement('div');
        textWrapper.className = 'avatar-text';
        textWrapper.innerHTML = letters;
        if(avatar === '') {
            img.style.display = 'none';
            textWrapper.style.display = 'flex';
        }
        else {
        img.style.display = 'block';
        textWrapper.style.display = 'none';
        }
        container.appendChild(img);
        container.appendChild(textWrapper);
    });
}

// Llama a la función para mostrar las imágenes
renderizarImagenes();

