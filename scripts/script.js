const buttonOpen = document.querySelector('.open-modal');
const buttonClose = document.querySelector('.modal-close-btn');
const dialog = document.querySelector('.hotel-search-popup');

buttonOpen.addEventListener('click', () => {
  dialog.showModal();
})

buttonClose.addEventListener('click', () => {
  dialog.close();
})
