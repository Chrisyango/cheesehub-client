import {API_BASE_URL} from '../config';
console.log(API_BASE_URL);

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'; 
export const fetchCheesesRequest = () => ({
  type: FETCH_CHEESES_REQUEST,
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'; 
export const fetchCheesesSuccess = cheeses => ({
  type: FETCH_CHEESES_SUCCESS,
  cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'; 
export const fetchCheesesError = error => ({
  type: FETCH_CHEESES_ERROR,
  error
});

export const fetchCheeses = cheeses => dispatch => {
  dispatch(fetchCheesesRequest());
  return fetch(`${API_BASE_URL}/cheeses`)
    .then(res => {
      return res.json();
    })
    // .then(cheeses => {
    //   console.log('cheeses');
    //   cheeses.results.map(cheese => cheese.name)
    // })
    .then(cheeses => {console.log(cheeses)})
    .catch(err => {dispatch(fetchCheesesError(err))});
}