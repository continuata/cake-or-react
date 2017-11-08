export default {
  getCakes: (payload) => ({ type: 'GET_CAKES', payload }),
  cakesErrored: (payload) => ({ type: 'CAKES_ERRORED', payload }),
  cakesPending: (payload) => ({ type: 'CAKES_PENDING', payload }),
  cakesFulfilled: (payload) => ({ type: 'CAKES_FULFILLED', payload }),
  getCakeFulfilled: (payload) => ({ type: 'GET_CAKE_FULFILLED', payload }),
  addCakeFulfilled: (payload) => ({ type: 'ADD_CAKE_FULFILLED', payload }),
  deleteCakeFulfilled: (payload) => ({ type: 'DELETE_CAKE_FULFILLED', payload }),
}
