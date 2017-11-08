import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs/Observable'
import actions from './actions'
import { ajax } from 'rxjs/observable/dom/ajax'
import { get, random } from 'lodash/fp'
import { push } from 'react-router-redux'

const cakesUrl = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes'

const selectCakeEpic = (action$, store) =>
  action$.ofType('SELECT_CAKE')
    .map(get('payload'))
    .switchMap((id) =>
      Observable.of(push(`/cake/${id}`)))

const backHomeEpic = (action$, store) =>
  action$.ofType('BACK_HOME')
    .mapTo(push('/'))

const getCakesEpic = (action$, store) =>
  action$.ofType('GET_CAKES')
    .switchMap(() =>
      ajax({
        method: 'GET',
        url: `${cakesUrl}`,
        responseType: 'json',
        crossDomain: true
      })
        .map(xhr => actions.cakesFulfilled(xhr.response))
        .catch(err => Observable.of(actions.cakesErrored(err)))
        .startWith(actions.cakesPending())
    )

const addACakeEpic = (action$, store) =>
  action$.ofType('ADD_CAKE')
    .switchMap(() => {
      const id = random(1e10, 1e11)
      const body = get('add', store.getState())
      /*
        I WOULD BE ADDING THE CAKE HERE USING REST-PUT AND THEN TRIGGERING getCakes()
        BUT API THROWS 503 ERROR ON THE PUT DUE TO CORS, SO HAVE MOCKED IT IN REDUX

        ajax({
          method: 'PUT',
          url: `${cakesUrl}/${id}`,
          body,
          responseType: 'json',
          crossDomain: true
        })
          .map(xhr => actions.getCakes())
          .catch(err => Observable.of(actions.cakesErrored(err)))
          .startWith(actions.cakesPending())
      */
      return Observable.of(actions.addCakeFulfilled({ ...body, id }), push('/'))
    })

const deleteACakeEpic = (action$, store) =>
  action$.ofType('DELETE_CAKE')
    .map(get('payload'))
    .switchMap((id) =>
      ajax({
        method: 'DELETE',
        url: `${cakesUrl}/${id}`,
        responseType: 'json',
        crossDomain: true
      })
        .map(xhr => actions.getCakes())
        .catch(err => Observable.of(actions.cakesErrored(err)))
        .startWith(actions.cakesPending())
    )

export default combineEpics(
  getCakesEpic,
  backHomeEpic,
  addACakeEpic,
  selectCakeEpic,
  deleteACakeEpic
)
