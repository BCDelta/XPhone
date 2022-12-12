const title = document.querySelector('.title');
const title2 = document.querySelector('.title2');

const durableHeader = document.querySelector('.durable-header');
const andHeader = document.querySelector('.and-header');
const ruggedHeader = document.querySelector('.rugged-header');

// Remove the transition class
title.classList.remove('title-transition');
title2.classList.remove('title2-transition');
// Create the observer, same as before:
const panel1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      title.classList.add('title-transition');
      return;
    }
    title.classList.remove('title-transition');
  });
});
panel1.observe(document.querySelector('.title-wrapper'));

// Create the observer, same as before:
const panel2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      title2.classList.add('title2-transition');
      return;
    }
    title2.classList.remove('title2-transition');
  });
});
panel2.observe(document.querySelector('.title2-wrapper'));

// Create the observer, same as before:
const panel3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      durableHeader.classList.add('durable-header-animation');
      andHeader.classList.add('and-header-animation');
      ruggedHeader.classList.add('rugged-header-animation');
      return;
    }
    durableHeader.classList.remove('durable-header-animation');
    andHeader.classList.remove('and-header-animation');
    ruggedHeader.classList.remove('rugged-header-animation');
  });
});
panel3.observe(document.querySelector('.durable-header'));


const firstBox = document.querySelector('.first-rect');
const secondBox = document.querySelector('.second-rect');
const thirdBox = document.querySelector('.third-rect');
const colorTitle = document.querySelector('.color-title');

// Create the observer, same as before:
const panel5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      firstBox.classList.add('first-rect-animation');
      secondBox.classList.add('second-rect-animation');
      thirdBox.classList.add('third-rect-animation');
      colorTitle.classList.add('color-title-animation');
      return;
    }
    firstBox.classList.remove('first-rect-animation');
    secondBox.classList.remove('second-rect-animation');
    thirdBox.classList.remove('third-rect-animation');
    colorTitle.classList.remove('color-title-animation');
  });
});
panel5.observe(document.querySelector('.color-banner'));

const priceBanner = document.querySelector('.price-card')
// Create the observer, same as before:
const price = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      priceBanner.classList.add('price-card-transition');

      return;
    }
    priceBanner.classList.remove('price-card-transition');
  });
});
price.observe(document.querySelector('.price-card'));
