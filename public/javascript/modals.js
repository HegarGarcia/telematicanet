const rootElement = document.documentElement;
const modalButton = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close');
const modalBackground = document.querySelector('.modal-background');
const youtubeVideo = document.querySelector('iframe');

function closeModal() {
  rootElement.classList.remove('is-clipped');
  modal.classList.remove('is-active');
  youtubeVideo.setAttribute('src','');
}

if (modalButton.length > 0) {
  modalButton.forEach((button) => {
    button.addEventListener('click', () => {
      const youtubeUrl = button.dataset.target + '?modestbranding=1&rel=0&controls=0&html5=1&autoplay=1';

      rootElement.classList.add('is-clipped');
      modal.classList.add('is-active');
      youtubeVideo.setAttribute('src', youtubeUrl);
    });
  });
}

modalCloseButton.addEventListener('click', (event) => {
  closeModal();
});

modalBackground.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    closeModal();
  }
});
