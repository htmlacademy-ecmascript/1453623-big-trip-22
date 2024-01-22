import PointView from '../view/point-view.js';
import EditingPointView from '../view/editing-point-view.js';
import {MODE} from '../const.js';

import {render, replace, remove} from '../framework/render.js';


export default class PointPresenter {
  #point = null;
  #pointListComponent = null;
  #destinationModel = null;
  #offers = null;
  #pointsContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;
  #mode = MODE.default;


  #pointComponent = null;
  #pointEditComponent = null;

  constructor({pointsContainer, destinationModel, offers, onDataChange, onModeChange}) {
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

    this.#pointComponent = new PointView({
      point: this.#point,
      pointDestinations: this.#destinationModel.getById(this.#point.destination),
      pointOffers: this.#offers.getByType(this.#point.type),
      onEditClick: this.#handleEditClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#pointEditComponent = new EditingPointView ({
      point: this.#point,
      pointDestinations: this.#destinationModel.getById(this.#point.destination),
      pointOffers: this.#offers.getByType(this.#point.type),
      onResetClick: this.#replaceFormToPoint,
      onFormSubmit: this.#handleFormSubmit,
    });

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this.#pointComponent, this.#pointsContainer);
      return;
    }

    // Проверка на наличие в DOM необходима,
    // чтобы не пытаться заменить то, что не было отрисовано
    if (this.#mode === MODE.default) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === MODE.editing) {
      replace(this.#pointEditComponent, prevPointEditComponent);
    }

    remove(prevPointComponent);
    remove(prevPointEditComponent);

  }

  resetView() {
    if(this.#mode !== MODE.default) {
      this.#replaceFormToPoint();
    }
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #replacePointToForm = () => {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = MODE.editing;
  }

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = MODE.default;
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
