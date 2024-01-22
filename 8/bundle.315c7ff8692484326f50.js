/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CITIES": () => (/* binding */ CITIES),
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT),
/* harmony export */   "DESCRIPTIONS": () => (/* binding */ DESCRIPTIONS),
/* harmony export */   "DESTINATION_COUNT": () => (/* binding */ DESTINATION_COUNT),
/* harmony export */   "DURATION": () => (/* binding */ DURATION),
/* harmony export */   "FilterTypes": () => (/* binding */ FilterTypes),
/* harmony export */   "MODE": () => (/* binding */ MODE),
/* harmony export */   "OFFERS": () => (/* binding */ OFFERS),
/* harmony export */   "OFFER_COUNT": () => (/* binding */ OFFER_COUNT),
/* harmony export */   "PICTURE_COUNT": () => (/* binding */ PICTURE_COUNT),
/* harmony export */   "POINT_COUNT": () => (/* binding */ POINT_COUNT),
/* harmony export */   "PRICE": () => (/* binding */ PRICE),
/* harmony export */   "SortTypes": () => (/* binding */ SortTypes),
/* harmony export */   "TYPES": () => (/* binding */ TYPES),
/* harmony export */   "sortValues": () => (/* binding */ sortValues)
/* harmony export */ });
const POINT_COUNT = 30;
const PICTURE_COUNT = 5;
const DESTINATION_COUNT = 6;
const OFFER_COUNT = 3;
const TYPES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const CITIES = ['Amsterdam', 'Chamonix', 'Geneva', 'Berlin', 'Zurich', 'Moskow'];
const OFFERS = ['Rent a car', 'Add luggage', 'Switch to comfort', 'Order Uber', 'Add breakfast'];
const PRICE = {
  min: 20,
  max: 1000
};
const DATE_FORMAT = {
  shortDate: 'D MMM',
  time: 'HH:mm',
  slashDate: 'DD/MM/YY HH:mm',
  datetime: 'YYYY-MM-DD HH:mm'
};
const DURATION = {
  hour: 2,
  day: 1,
  min: 20
};
const FilterTypes = {
  EVERYTHING: 'Everything',
  FUTURE: 'Future',
  PRESENT: 'Present',
  PAST: 'Past'
};
const SortTypes = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};
const sortValues = Object.values(SortTypes);
const MODE = {
  default: 'default',
  editing: 'editing'
};


/***/ }),

/***/ "./src/framework/render.js":
/*!*********************************!*\
  !*** ./src/framework/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "replace": () => (/* binding */ replace)
/* harmony export */ });
/* harmony import */ var _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/abstract-view.js */ "./src/framework/view/abstract-view.js");


/** @enum {string} Перечисление возможных позиций для отрисовки */
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};

/**
 * Функция для создания элемента на основе разметки
 * @param {string} template Разметка в виде строки
 * @returns {HTMLElement} Созданный элемент
 */
function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstElementChild;
}

/**
 * Функция для отрисовки элемента
 * @param {AbstractView} component Компонент, который должен был отрисован
 * @param {HTMLElement} container Элемент в котором будет отрисован компонент
 * @param {string} place Позиция компонента относительно контейнера. По умолчанию - `beforeend`
 */
function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!(component instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can render only components');
  }
  if (container === null) {
    throw new Error('Container element doesn\'t exist');
  }
  container.insertAdjacentElement(place, component.element);
}

/**
 * Функция для замены одного компонента на другой
 * @param {AbstractView} newComponent Компонент, который нужно показать
 * @param {AbstractView} oldComponent Компонент, который нужно скрыть
 */
function replace(newComponent, oldComponent) {
  if (!(newComponent instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] && oldComponent instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can replace only components');
  }
  const newElement = newComponent.element;
  const oldElement = oldComponent.element;
  const parent = oldElement.parentElement;
  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }
  parent.replaceChild(newElement, oldElement);
}

/**
 * Функция для удаления компонента
 * @param {AbstractView} component Компонент, который нужно удалить
 */
function remove(component) {
  if (component === null) {
    return;
  }
  if (!(component instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }
  component.element.remove();
  component.removeElement();
}


/***/ }),

/***/ "./src/framework/view/abstract-view.js":
/*!*********************************************!*\
  !*** ./src/framework/view/abstract-view.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/framework/render.js");
/* harmony import */ var _abstract_view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view.css */ "./src/framework/view/abstract-view.css");



/** @const {string} Класс, реализующий эффект "покачивания головой" */
const SHAKE_CLASS_NAME = 'shake';

/** @const {number} Время анимации в миллисекундах */
const SHAKE_ANIMATION_TIMEOUT = 600;

/**
 * Абстрактный класс представления
 */
class AbstractView {
  /** @type {HTMLElement|null} Элемент представления */
  #element = null;
  constructor() {
    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  /**
   * Геттер для получения элемента
   * @returns {HTMLElement} Элемент представления
   */
  get element() {
    if (!this.#element) {
      this.#element = (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template);
    }
    return this.#element;
  }

  /**
   * Геттер для получения разметки элемента
   * @abstract
   * @returns {string} Разметка элемента в виде строки
   */
  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  /** Метод для удаления элемента */
  removeElement() {
    this.#element = null;
  }

  /**
   * Метод, реализующий эффект "покачивания головой"
   * @param {shakeCallback} [callback] Функция, которая будет вызвана после завершения анимации
   */
  shake(callback) {
    this.element.classList.add(SHAKE_CLASS_NAME);
    setTimeout(() => {
      this.element.classList.remove(SHAKE_CLASS_NAME);
      callback?.();
    }, SHAKE_ANIMATION_TIMEOUT);
  }
}

/**
 * Функция, которая будет вызвана методом shake после завершения анимации
 * @callback shakeCallback
 */

/***/ }),

/***/ "./src/mock/binder-mock.js":
/*!*********************************!*\
  !*** ./src/mock/binder-mock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BinderMock)
/* harmony export */ });
/* harmony import */ var _point_mock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-mock.js */ "./src/mock/point-mock.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _destination_mock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destination-mock.js */ "./src/mock/destination-mock.js");
/* harmony import */ var _offers_mock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers-mock.js */ "./src/mock/offers-mock.js");





class BinderMock {
  constructor() {
    this.offers = this.generateOffersMock();
    this.destinations = [...this.generateDestinationsMock()];
    this.points = this.generatePointsMock();
  }
  generateDestinationsMock() {
    return Array.from({
      length: _const_js__WEBPACK_IMPORTED_MODULE_2__.DESTINATION_COUNT
    }, () => (0,_destination_mock_js__WEBPACK_IMPORTED_MODULE_3__.generateDestinationMock)());
  }
  generateOffersMock() {
    return _const_js__WEBPACK_IMPORTED_MODULE_2__.TYPES.map(type => ({
      type,
      offers: Array.from({
        length: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomFromRange)(1, _const_js__WEBPACK_IMPORTED_MODULE_2__.OFFER_COUNT)
      }, () => (0,_offers_mock_js__WEBPACK_IMPORTED_MODULE_4__.generateOfferMock)())
    }));
  }
  generatePointsMock() {
    return Array.from({
      length: _const_js__WEBPACK_IMPORTED_MODULE_2__.POINT_COUNT
    }, () => {
      const type = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_2__.TYPES);
      const destination = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElement)(this.destinations);
      const offersByType = this.offers.find(offerByType => offerByType.type === type);
      const offersIds = offersByType ? offersByType.offers.map(offer => offer.id) : [];
      return (0,_point_mock_js__WEBPACK_IMPORTED_MODULE_0__.generatePointMock)(type, destination.id, offersIds);
    });
  }
  getPoints() {
    return this.points;
  }
  getOffers() {
    return this.offers;
  }
  getDestinations() {
    return this.destinations;
  }
}

/***/ }),

/***/ "./src/mock/date-mock.js":
/*!*******************************!*\
  !*** ./src/mock/date-mock.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");



let date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().subtract((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomFromRange)(0, _const_js__WEBPACK_IMPORTED_MODULE_1__.DURATION.day), 'day').toDate();
function getDate({
  dateTo
}) {
  const minsGap = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomFromRange)(0, _const_js__WEBPACK_IMPORTED_MODULE_1__.DURATION.min);
  const hoursGap = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomFromRange)(0, _const_js__WEBPACK_IMPORTED_MODULE_1__.DURATION.hour);
  const daysGap = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getRandomFromRange)(0, _const_js__WEBPACK_IMPORTED_MODULE_1__.DURATION.day);
  if (dateTo) {
    date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).add(minsGap, 'minute').add(hoursGap, 'hour').add(daysGap, 'day').toDate();
  }
  return date;
}


/***/ }),

/***/ "./src/mock/destination-mock.js":
/*!**************************************!*\
  !*** ./src/mock/destination-mock.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateDestinationMock": () => (/* binding */ generateDestinationMock)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const DESTINATIONS_COUNT = _const_js__WEBPACK_IMPORTED_MODULE_0__.POINT_COUNT * _const_js__WEBPACK_IMPORTED_MODULE_0__.DESTINATION_COUNT;
const destinationId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createUniqueId)(1, DESTINATIONS_COUNT);
function generatePicture(city, description) {
  return {
    src: `img/photos/${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomFromRange)(1, _const_js__WEBPACK_IMPORTED_MODULE_0__.PICTURE_COUNT)}.jpg`,
    description: `${city} ${description}`
  };
}
function generatePictures(city, description) {
  return Array.from({
    length: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomFromRange)(1, _const_js__WEBPACK_IMPORTED_MODULE_0__.PICTURE_COUNT)
  }, () => generatePicture(city, description));
}
function generateDestinationMock() {
  const city = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_0__.CITIES);
  const description = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_0__.DESCRIPTIONS);
  return {
    id: destinationId(),
    description: description,
    name: city,
    pictures: generatePictures(city, description)
  };
}


/***/ }),

/***/ "./src/mock/filter-mock.js":
/*!*********************************!*\
  !*** ./src/mock/filter-mock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filteredPoints": () => (/* binding */ filteredPoints)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


/**
 * Возвращает массив объектов с типом фильтра и функции фильтрации
*/
function filteredPoints() {
  return Object.entries(_utils_js__WEBPACK_IMPORTED_MODULE_0__.filterFunctions).map(([type, getPoints]) => ({
    type,
    getPoints
  }));
}


/***/ }),

/***/ "./src/mock/offers-mock.js":
/*!*********************************!*\
  !*** ./src/mock/offers-mock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateOfferMock": () => (/* binding */ generateOfferMock)
/* harmony export */ });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const OFFERS_COUNT = _const_js__WEBPACK_IMPORTED_MODULE_0__.POINT_COUNT * _const_js__WEBPACK_IMPORTED_MODULE_0__.OFFER_COUNT;
const offerId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.createUniqueId)(1, OFFERS_COUNT);
function generateOfferMock() {
  return {
    id: offerId(),
    title: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomArrayElement)(_const_js__WEBPACK_IMPORTED_MODULE_0__.OFFERS),
    price: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomFromRange)(_const_js__WEBPACK_IMPORTED_MODULE_0__.PRICE.min, _const_js__WEBPACK_IMPORTED_MODULE_0__.PRICE.max)
  };
}


/***/ }),

/***/ "./src/mock/point-mock.js":
/*!********************************!*\
  !*** ./src/mock/point-mock.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePointMock": () => (/* binding */ generatePointMock)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _date_mock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-mock.js */ "./src/mock/date-mock.js");



const pointId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createUniqueId)(1, _const_js__WEBPACK_IMPORTED_MODULE_1__.POINT_COUNT);
function generatePointMock(type, destinationId, offerIds) {
  return {
    id: pointId(),
    basePrice: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomFromRange)(_const_js__WEBPACK_IMPORTED_MODULE_1__.PRICE.min, _const_js__WEBPACK_IMPORTED_MODULE_1__.PRICE.max),
    dateFrom: (0,_date_mock_js__WEBPACK_IMPORTED_MODULE_2__.getDate)({
      dateTo: false
    }),
    dateTo: (0,_date_mock_js__WEBPACK_IMPORTED_MODULE_2__.getDate)({
      dateTo: true
    }),
    destination: destinationId,
    isFavorite: Boolean((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomFromRange)(0, 1)),
    offers: [offerIds],
    type
  };
}


/***/ }),

/***/ "./src/model/destinations-model.js":
/*!*****************************************!*\
  !*** ./src/model/destinations-model.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DestinationsModel)
/* harmony export */ });
class DestinationsModel {
  #destinations = null;
  #binder = null;
  constructor(binder) {
    this.#binder = binder;
    this.#destinations = this.#binder.getDestinations();
  }
  get() {
    return this.#destinations;
  }
  getById(id) {
    return this.#destinations.find(destination => destination.id === id) || null;
  }
}

/***/ }),

/***/ "./src/model/offers-model.js":
/*!***********************************!*\
  !*** ./src/model/offers-model.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OffersModel)
/* harmony export */ });
class OffersModel {
  #offers = null;
  #binder = null;
  constructor(binder) {
    this.#binder = binder;
    this.#offers = this.#binder.getOffers();
  }
  get allOffers() {
    return this.#offers;
  }
  getByType(type) {
    return this.#offers.find(offer => offer.type === type).offers || null;
  }
}

/***/ }),

/***/ "./src/model/points-model.js":
/*!***********************************!*\
  !*** ./src/model/points-model.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointsModel)
/* harmony export */ });
class PointsModel {
  #points = null;
  #binder = null;
  constructor(binder) {
    this.#binder = binder;
    this.#points = this.#binder.getPoints();
  }
  get allPoints() {
    return this.#points;
  }
}

/***/ }),

/***/ "./src/presenter/presenter.js":
/*!************************************!*\
  !*** ./src/presenter/presenter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Presenter)
/* harmony export */ });
/* harmony import */ var _view_info_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/info-view.js */ "./src/view/info-view.js");
/* harmony import */ var _view_filter_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/filter-view.js */ "./src/view/filter-view.js");
/* harmony import */ var _view_no_point_message_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/no-point-message-view.js */ "./src/view/no-point-message-view.js");
/* harmony import */ var _view_list_points_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/list-points-view.js */ "./src/view/list-points-view.js");
/* harmony import */ var _view_sort_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/sort-view.js */ "./src/view/sort-view.js");
/* harmony import */ var _framework_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../framework/render.js */ "./src/framework/render.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _mock_filter_mock_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mock/filter-mock.js */ "./src/mock/filter-mock.js");
/* harmony import */ var _task_presenter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-presenter.js */ "./src/presenter/task-presenter.js");
// views






// utils




// mocks


const siteHeaderElement = document.querySelector('.page-header');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-main__trip-controls');
const siteInfoElement = siteHeaderElement.querySelector('.trip-main');
class Presenter {
  #pointListComponent = new _view_list_points_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  #noPointComponent = new _view_no_point_message_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  #sortComponent = null;
  #currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_7__.SortTypes.DAY;
  #sourcedPoints = [];
  #pointsContainer = null;
  #points = null;
  #destinationModel = null;
  #offers = null;
  #pointPresenters = new Map();
  constructor({
    pointsContainer,
    pointsModel,
    destinationsModel,
    offersModel
  }) {
    this.#pointsContainer = pointsContainer;
    this.#points = pointsModel.allPoints;
    this.#destinationModel = destinationsModel;
    // this.destinations = destinationsModel.get();
    this.#offers = offersModel;
  }
  init() {
    this.#renderPointBoard();
  }
  #handlePointsChange = updatedPoint => {
    this.#points = (0,_utils_js__WEBPACK_IMPORTED_MODULE_6__.updateItem)(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
    // console.log('init');
  };
  #handleModeChange = () => {
    this.#pointPresenters.forEach(presenter => presenter.resetView());
  };
  #renderPointBoard() {
    this.#renderFilters();
    this.#renderInfo();
    this.#renderSort();
    this.#renderPointsContainer();
    this.#renderNoPoints();
    this.#renderPoints();
  }
  #renderInfo() {
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(new _view_info_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](), siteInfoElement, 'afterbegin');
  }
  #renderFilters() {
    const filters = (0,_mock_filter_mock_js__WEBPACK_IMPORTED_MODULE_8__.filteredPoints)();
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(new _view_filter_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.#points, filters), siteFiltersElement);
  }
  #renderPointsContainer() {
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(this.#pointListComponent, this.#pointsContainer);
  }
  #renderSort() {
    this.#sortComponent = new _view_sort_view_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      onSortTypeChange: this.#handleSortTypeChange
    });
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(this.#sortComponent, this.#pointsContainer);
  }
  #sortPoints(type) {
    switch (type) {
      case _const_js__WEBPACK_IMPORTED_MODULE_7__.SortTypes.TIME:
        this.#points.sort(_utils_js__WEBPACK_IMPORTED_MODULE_6__.sortPointByTime);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_7__.SortTypes.PRICE:
        this.#points.sort(_utils_js__WEBPACK_IMPORTED_MODULE_6__.sortPointByPrice);
        break;
      case _const_js__WEBPACK_IMPORTED_MODULE_7__.SortTypes.DAY:
        this.#points.sort(_utils_js__WEBPACK_IMPORTED_MODULE_6__.sortPointByDay);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
    }
    this.#currentSortType = type;
  }
  #handleSortTypeChange = sortType => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPoints();
    this.#renderPoints();
  };
  #renderPoint(point) {
    const pointPresenter = new _task_presenter_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      pointsContainer: this.#pointsContainer,
      destinationModel: this.#destinationModel,
      offers: this.#offers,
      onDataChange: this.#handlePointsChange,
      onModeChange: this.#handleModeChange
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }
  #renderPoints() {
    this.#points.forEach(point => this.#renderPoint(point));
  }
  #renderNoPoints() {
    if (this.#points.length === 0) {
      (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(this.#noPointComponent, this.#pointsContainer, 'afterbegin');
    }
  }
  #clearPoints() {
    this.#pointPresenters.forEach(presenter => presenter.destroy());
    this.#pointPresenters.clear();
  }
}

/***/ }),

/***/ "./src/presenter/task-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/task-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_point_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/point-view.js */ "./src/view/point-view.js");
/* harmony import */ var _view_editing_point_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/editing-point-view.js */ "./src/view/editing-point-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
/* harmony import */ var _framework_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/render.js */ "./src/framework/render.js");




class PointPresenter {
  #point = null;
  #pointListComponent = null;
  #destinationModel = null;
  #offers = null;
  #pointsContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = _const_js__WEBPACK_IMPORTED_MODULE_2__.MODE["default"];
  #pointComponent = null;
  #pointEditComponent = null;
  constructor({
    pointsContainer,
    destinationModel,
    offers,
    onDataChange,
    onModeChange
  }) {
    this.#pointsContainer = pointsContainer;
    this.#destinationModel = destinationModel;
    this.#offers = offers;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }
  init(point) {
    this.#point = point;
    const prevPointComponent = this.#pointComponent;
    const prevPointEditComponent = this.#pointEditComponent;
    this.#pointComponent = new _view_point_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      point: this.#point,
      pointDestinations: this.#destinationModel.getById(this.#point.destination),
      pointOffers: this.#offers.getByType(this.#point.type),
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick
    });
    this.#pointEditComponent = new _view_editing_point_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      point: this.#point,
      pointDestinations: this.#destinationModel.getById(this.#point.destination),
      pointOffers: this.#offers.getByType(this.#point.type),
      onResetClick: this.#replaceFormToPoint,
      onFormSubmit: this.#handleFormSubmit
    });
    if (prevPointComponent === null || prevPointEditComponent === null) {
      (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(this.#pointComponent, this.#pointsContainer);
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#mode === _const_js__WEBPACK_IMPORTED_MODULE_2__.MODE["default"]) {
      (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.replace)(this.#pointComponent, prevPointComponent);
    }
    if (this.#mode === _const_js__WEBPACK_IMPORTED_MODULE_2__.MODE.editing) {
      (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.replace)(this.#pointEditComponent, prevPointEditComponent);
    }
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.remove)(prevPointComponent);
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.remove)(prevPointEditComponent);
  }
  resetView() {
    if (this.#mode !== _const_js__WEBPACK_IMPORTED_MODULE_2__.MODE["default"]) {
      this.#replaceFormToPoint();
    }
  }
  destroy() {
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.remove)(this.#pointComponent);
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.remove)(this.#pointEditComponent);
  }
  #escKeyDownHandler = evt => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
  #replacePointToForm = () => {
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.replace)(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = _const_js__WEBPACK_IMPORTED_MODULE_2__.MODE.editing;
  };
  #replaceFormToPoint = () => {
    (0,_framework_render_js__WEBPACK_IMPORTED_MODULE_3__.replace)(this.#pointComponent, this.#pointEditComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = _const_js__WEBPACK_IMPORTED_MODULE_2__.MODE["default"];
  };
  #handleEditClick = () => {
    this.#replacePointToForm();
  };
  #handleFormSubmit = point => {
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };
  #handleFavoriteClick = () => {
    this.#handleDataChange({
      ...this.#point,
      isFavorite: !this.#point.isFavorite
    });
  };
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUniqueId": () => (/* binding */ createUniqueId),
/* harmony export */   "datetimeHumanize": () => (/* binding */ datetimeHumanize),
/* harmony export */   "durationEvent": () => (/* binding */ durationEvent),
/* harmony export */   "filterFunctions": () => (/* binding */ filterFunctions),
/* harmony export */   "getRandomArrayElement": () => (/* binding */ getRandomArrayElement),
/* harmony export */   "getRandomFromRange": () => (/* binding */ getRandomFromRange),
/* harmony export */   "humanizeTime": () => (/* binding */ humanizeTime),
/* harmony export */   "shortDateHumanize": () => (/* binding */ shortDateHumanize),
/* harmony export */   "slashDateHumanize": () => (/* binding */ slashDateHumanize),
/* harmony export */   "sortPointByDay": () => (/* binding */ sortPointByDay),
/* harmony export */   "sortPointByPrice": () => (/* binding */ sortPointByPrice),
/* harmony export */   "sortPointByTime": () => (/* binding */ sortPointByTime),
/* harmony export */   "timeHumanize": () => (/* binding */ timeHumanize),
/* harmony export */   "updateItem": () => (/* binding */ updateItem)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/const.js");


const MS_IN_DAY = 86400000;
const MS_IN_HOUR = 3600000;
function getRandomFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArrayElement(items) {
  return items[getRandomFromRange(0, items.length - 1)];
}
function humanizeTime(timePoint, format) {
  return timePoint ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timePoint).format(format) : '';
}
function shortDateHumanize(date) {
  return humanizeTime(date, _const_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FORMAT.shortDate);
}
function timeHumanize(time) {
  return humanizeTime(time, _const_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FORMAT.time);
}
function datetimeHumanize(date) {
  return humanizeTime(date, _const_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FORMAT.datetime);
}
function slashDateHumanize(date) {
  return humanizeTime(date, _const_js__WEBPACK_IMPORTED_MODULE_1__.DATE_FORMAT.slashDate);
}
function durationEvent(startTime, endTime) {
  const duration = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endTime).diff(startTime);
  let timeFormat = 'D[D] HH[H] mm[M]';
  if (duration < MS_IN_DAY) {
    timeFormat = 'HH[H] mm[M]';
  }
  if (duration < MS_IN_HOUR) {
    timeFormat = 'mm[M]';
  }
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(duration).format(timeFormat);
}
function createUniqueId(min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomFromRange(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomFromRange(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
const filterFunctions = {
  [_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterTypes.EVERYTHING]: points => [...points],
  [_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterTypes.PRESENT]: points => points.filter(point => dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isBefore(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.dateTo)) && dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.dateFrom))),
  [_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterTypes.PAST]: points => points.filter(point => dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isAfter(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.dateTo))),
  [_const_js__WEBPACK_IMPORTED_MODULE_1__.FilterTypes.FUTURE]: points => points.filter(point => dayjs__WEBPACK_IMPORTED_MODULE_0___default()().isBefore(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.dateFrom)))
};
const updateItem = (itemsArray, update) => itemsArray.map(item => item.id === update.id ? update : item);
const sortPointByTime = (pointA, pointB) => {
  const durationPointA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateTo).valueOf() - dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateFrom).valueOf();
  const durationPointB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateTo).valueOf() - dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateFrom).valueOf();
  return durationPointB - durationPointA;
};
const sortPointByPrice = (pointA, pointB) => pointB.basePrice - pointA.basePrice;
const sortPointByDay = (pointA, pointB) => {
  const dateA = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointA.dateFrom).valueOf();
  const dateB = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(pointB.dateFrom).valueOf();
  return dateA - dateB;
};


/***/ }),

/***/ "./src/view/editing-point-view.js":
/*!****************************************!*\
  !*** ./src/view/editing-point-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditingPointView)
/* harmony export */ });
/* harmony import */ var _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/view/abstract-view.js */ "./src/framework/view/abstract-view.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



function createDestinationsTemplate(places) {
  return `${places.map(place => `<option value="${place}"></option>`).join('')}`;
}
function createTypeTemplate(types, currentType) {
  return `${types.map(type => `<div class="event__type-item">
        <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
        value="${type.toLowerCase()}" ${currentType === type ? 'checked' : ''}>
        <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
      </div>`).join('')}`;
}
function createOffersTemplate(offers) {
  return `${offers.map((offer, index) => `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${index + 1}" type="checkbox" name="event-offer-luggage"
      ${index === 0 ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-luggage-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`).join('')}`;
}
function createEditingPointTemplate({
  point,
  pointDestinations,
  pointOffers
}) {
  const {
    basePrice,
    dateFrom,
    dateTo,
    type
  } = point;
  const {
    name,
    description
  } = pointDestinations;
  return `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${createTypeTemplate(_const_js__WEBPACK_IMPORTED_MODULE_2__.TYPES, type)}
              </fieldset>
            </div>
          </div>
          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${createDestinationsTemplate(_const_js__WEBPACK_IMPORTED_MODULE_2__.CITIES)}
            </datalist>
          </div>
          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.slashDateHumanize)(dateFrom)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.slashDateHumanize)(dateTo)}">
          </div>
          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>
          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          <section class="event__section  event__section--offers">
            <h3 class="event__section-title  event__section-title--offers">Offers</h3>
            <div class="event__available-offers">
            ${pointOffers ? createOffersTemplate(pointOffers) : ''}
            </div>
          </section>
          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${name} ${description.toLowerCase()}</p>
          </section>
        </section>
      </form>
    </li>`;
}
class EditingPointView extends _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #point = null;
  #pointDestinations = null;
  #pointOffers = null;
  #onResetClick = null;
  #onFormSubmit = null;
  constructor({
    point,
    pointDestinations,
    pointOffers,
    onResetClick,
    onFormSubmit
  }) {
    super();
    this.#point = point;
    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;
    this.#onResetClick = onResetClick;
    this.#onFormSubmit = onFormSubmit;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('form').addEventListener('submit', this.#pointEditSubmitHandler);
  }
  get template() {
    return createEditingPointTemplate({
      point: this.#point,
      pointDestinations: this.#pointDestinations,
      pointOffers: this.#pointOffers
    });
  }
  #editClickHandler = event => {
    event.preventDefault();
    this.#onResetClick();
    // this.#onFormSubmit();
  };
  #pointEditSubmitHandler = event => {
    event.preventDefault();
    this.#onFormSubmit(this.#point);
  };
}

/***/ }),

/***/ "./src/view/filter-view.js":
/*!*********************************!*\
  !*** ./src/view/filter-view.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterView)
/* harmony export */ });
/* harmony import */ var _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/view/abstract-view.js */ "./src/framework/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


function createFilterItemsTemplate(points, filters, currentFilterType) {
  return filters.map(({
    type,
    getPoints
  }) => {
    const count = getPoints(points).length;
    return `
    <div class="trip-filters__filter">
      <input id="filter-${type.toLowerCase()}"
      class="trip-filters__filter-input
      visually-hidden"
      type="radio"
      name="trip-filter"
      value="${type.toLowerCase()}"
      ${count ? '' : 'disabled'}
      ${type === currentFilterType ? 'checked' : ''}>

      <label
      class="trip-filters__filter-label"
      for="filter-${type.toLowerCase()}">${type}
      </label>
    </div>

    </div>`;
  }).join('');
}
function createFilterTemplate(points, filters, currentFilterType = _const_js__WEBPACK_IMPORTED_MODULE_1__.FilterTypes.EVERYTHING) {
  return `<form class="trip-filters" action="#" method="get">
    ${createFilterItemsTemplate(points, filters, currentFilterType)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;
}
class FilterView extends _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #points = null;
  #filters = null;
  constructor(points, filters) {
    super();
    this.#points = points;
    this.#filters = filters;
  }
  get template() {
    return createFilterTemplate(this.#points, this.#filters);
  }
}

/***/ }),

/***/ "./src/view/info-view.js":
/*!*******************************!*\
  !*** ./src/view/info-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoView)
/* harmony export */ });
/* harmony import */ var _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/view/abstract-view.js */ "./src/framework/view/abstract-view.js");

function createInfoTemplate() {
  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
      </div>
      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>`;
}
class InfoView extends _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createInfoTemplate();
  }
}

/***/ }),

/***/ "./src/view/list-points-view.js":
/*!**************************************!*\
  !*** ./src/view/list-points-view.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListPointsView)
/* harmony export */ });
/* harmony import */ var _framework_view_abstract_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/view/abstract-view */ "./src/framework/view/abstract-view.js");

function createListPointsTemplate() {
  return `<ul class="trip-events__list">
    </ul>`;
}
class ListPointsView extends _framework_view_abstract_view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createListPointsTemplate();
  }
}

/***/ }),

/***/ "./src/view/no-point-message-view.js":
/*!*******************************************!*\
  !*** ./src/view/no-point-message-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoPointMessageView)
/* harmony export */ });
/* harmony import */ var _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/view/abstract-view.js */ "./src/framework/view/abstract-view.js");

function createNoPointMessageTemplate() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}
class NoPointMessageView extends _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createNoPointMessageTemplate();
  }
}

/***/ }),

/***/ "./src/view/point-view.js":
/*!********************************!*\
  !*** ./src/view/point-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointView)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/view/abstract-view.js */ "./src/framework/view/abstract-view.js");


function createOffersTemplate(offers) {
  return `
  <ul class="event__selected-offers">
  ${offers.map(offer => `
    <li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`).join('')}
  </ul>`;
}
function createPointTemplate({
  point,
  pointDestinations,
  pointOffers
}) {
  const {
    basePrice,
    dateFrom,
    dateTo,
    isFavorite,
    type
  } = point;
  const {
    name
  } = pointDestinations;
  return `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.datetimeHumanize)(dateFrom)}">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.shortDateHumanize)(dateFrom)}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} ${name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.datetimeHumanize)(dateFrom)}">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.timeHumanize)(dateFrom)}</time>
            &mdash;
            <time class="event__end-time" datetime="${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.datetimeHumanize)(dateTo)}">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.timeHumanize)(dateTo)}</time>
          </p>
          <p class="event__duration">${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.durationEvent)(dateFrom, dateTo)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>

        ${pointOffers ? createOffersTemplate(pointOffers) : ''}

        <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
}
class PointView extends _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  #point = null;
  #pointDestinations = null;
  #pointOffers = null;
  #onEditClick = null;
  #onFavoriteClick = null;
  constructor({
    point,
    pointDestinations,
    pointOffers,
    onEditClick,
    onFavoriteClick
  }) {
    super();
    this.#point = point;
    this.#pointDestinations = pointDestinations;
    this.#pointOffers = pointOffers;
    this.#onEditClick = onEditClick;
    this.#onFavoriteClick = onFavoriteClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }
  get template() {
    return createPointTemplate({
      point: this.#point,
      pointDestinations: this.#pointDestinations,
      pointOffers: this.#pointOffers
    });
  }
  #editClickHandler = event => {
    event.preventDefault();
    this.#onEditClick();
  };
  #favoriteClickHandler = event => {
    event.preventDefault();
    this.#onFavoriteClick();
  };
}

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework/view/abstract-view.js */ "./src/framework/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");


function createSortItemsTemplate(currentSortType) {
  return _const_js__WEBPACK_IMPORTED_MODULE_1__.sortValues.map(value => {
    const isDisabled = value === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortTypes.EVENT || value === _const_js__WEBPACK_IMPORTED_MODULE_1__.SortTypes.OFFERS;
    return `
    <div class="trip-sort__item  trip-sort__item--${value}">
      <input
        id="sort-${value}"
        class="trip-sort__input
        visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${value}"
        data-sort-type="${value}"
        ${isDisabled ? 'disabled' : ''}
        ${currentSortType === value ? 'checked' : ''}
      >
      <label class="trip-sort__btn" for="sort-${value}">${value}</label>
    </div>`;
  }).join('');
}
function createSortTemplate(currentSortType = _const_js__WEBPACK_IMPORTED_MODULE_1__.SortTypes.DAY) {
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${createSortItemsTemplate(currentSortType)}
    </form>`;
}
class SortView extends _framework_view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #handleSortTypeChange = null;
  constructor({
    onSortTypeChange
  }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }
  get template() {
    return createSortTemplate();
  }
  #sortTypeChangeHandler = event => {
    if (event.target.tagName !== 'INPUT') {
      return;
    }
    // console.log(event.target.dataset);
    event.preventDefault();
    this.#handleSortTypeChange(event.target.dataset.sortType);
  };
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/framework/view/abstract-view.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/framework/view/abstract-view.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/framework/view/abstract-view.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF","sourcesContent":[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w}));

/***/ }),

/***/ "./src/framework/view/abstract-view.css":
/*!**********************************************!*\
  !*** ./src/framework/view/abstract-view.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_abstract_view_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./abstract-view.css */ "./node_modules/css-loader/dist/cjs.js!./src/framework/view/abstract-view.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_abstract_view_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_abstract_view_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_abstract_view_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_abstract_view_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenter_presenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presenter/presenter.js */ "./src/presenter/presenter.js");
/* harmony import */ var _model_points_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/points-model.js */ "./src/model/points-model.js");
/* harmony import */ var _model_destinations_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/destinations-model.js */ "./src/model/destinations-model.js");
/* harmony import */ var _model_offers_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/offers-model.js */ "./src/model/offers-model.js");
/* harmony import */ var _mock_binder_mock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/binder-mock.js */ "./src/mock/binder-mock.js");


// models




// mocks

const siteMainElement = document.querySelector('.page-main');
const sitePointsElement = siteMainElement.querySelector('.trip-events');
const binderMock = new _mock_binder_mock_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
const destinationsModel = new _model_destinations_model_js__WEBPACK_IMPORTED_MODULE_2__["default"](binderMock);
const offersModel = new _model_offers_model_js__WEBPACK_IMPORTED_MODULE_3__["default"](binderMock);
const pointsModel = new _model_points_model_js__WEBPACK_IMPORTED_MODULE_1__["default"](binderMock);
const eventPresenter = new _presenter_presenter_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  pointsContainer: sitePointsElement,
  destinationsModel,
  offersModel,
  pointsModel
});
eventPresenter.init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.315c7ff8692484326f50.js.map