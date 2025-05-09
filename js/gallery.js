const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const list = document.querySelector('.gallery');

function createGalleryMarkup(images) {
  return images
    .map(({ preview, original, description } = {}) => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            width="360" height="200"
          />
        </a>
      </li>`;
    })
    .join('');
}
const markup = createGalleryMarkup(images);
list.innerHTML = markup;

list.addEventListener('click', handleItem);
function handleItem(event) {
  event.preventDefault();
  const image = event.target.closest('.gallery-image');
  if (!image) {
    return;
  }
  const largeImg = image.dataset.source;
  // const instance = basicLightbox.create(`<img src="${largeImg}" width="1112" height="640">`);
  // instance.show();
  let currentIndex = images.findIndex(image => image.original === largeImg);

  const instanceStep = basicLightbox.create(`<div class="modal">
  <button class="prev-button">⬅️</button>
  <img src="${images[currentIndex].original}" alt="${images[currentIndex].description}" class="modal-image" style="max-width:90vw; max-height:90vh;">
  <button class="next-button">➡️</button>
  <p style="color: white;">Для выхода нажмите Escape иил кликните мышью</p>
</div>
`);
  instanceStep.show();
  const findButton = instanceStep.element().querySelector('.next-button');
  const findImg = instanceStep.element().querySelector('.modal-image');
  const findPrevButton = instanceStep.element().querySelector('.prev-button');
  findPrevButton.addEventListener('click', clickBtn);
  findButton.addEventListener('click', clickBtn);
  function clickBtn(event) {
    if (event.target === findButton) {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (event.target === findPrevButton) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    findImg.src = images[currentIndex].original;
    findImg.alt = images[currentIndex].description;
  }

  document.addEventListener('keydown', onKeyDown);
  function onKeyDown(event) {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      findImg.src = images[currentIndex].original;
      findImg.alt = images[currentIndex].description;
    }

    if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      findImg.src = images[currentIndex].original;
      findImg.alt = images[currentIndex].description;
    }

    if (event.key == 'Escape') {
      instanceStep.close();
      document.removeEventListener('keydown', escKeyDown);
    }
  }
}
