export default {
  getCakes: payload => ({ type: 'GET_CAKES', payload }),
  selectCake: payload => ({ type: 'SELECT_CAKE', payload })
}
