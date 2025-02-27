import { Filters, RANDOM_COUNT } from './constants.js';
import { renderPictures } from './renderPictures.js';
import { debounce } from './util.js';

const form = document.querySelector('.img-filters__form');
const filtersList = document.querySelector('.img-filters');

let localData;
let currentFilter = Filters.DEFAULT;

const debouncedRender = debounce(renderPictures);

const getFilteredData = {
  [Filters.DEFAULT]: () => localData,
  [Filters.DISCUSSED]: () => [...localData].sort((b, a) => a.comments.length - b.comments.length),
  [Filters.RANDOM]: () => [...localData].sort(() => Math.random() - 0.5).slice(0, RANDOM_COUNT)
};

const setActiveButton = (button) => {
  if (button.id === currentFilter) {
    return;
  }
  currentFilter = button.id;
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');

  debouncedRender(getFilteredData[currentFilter]());
};

form.addEventListener('click', ({ target }) => {
  if (target.classList.contains('img-filters__button')) {
    setActiveButton(target);
  }
});

export const showFilters = (pictures) => {
  filtersList.classList.remove('img-filters--inactive');
  localData = [...pictures];
};
