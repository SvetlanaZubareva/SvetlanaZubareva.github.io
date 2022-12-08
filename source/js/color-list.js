const items = document.querySelectorAll('.section-product__list-item');

items.forEach(item => {
  item.addEventListener('click', function() {
    items.forEach(elem => elem.classList.remove('section-product__list-item--color'));
    this.classList.add('section-product__list-item--color');
  });
})





