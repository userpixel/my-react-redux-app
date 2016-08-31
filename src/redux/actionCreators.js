import ACTIONS from './actions';

export function start() {
  console.log('start is called')
  return {type: ACTIONS.START, payload: Date.now()};
}

export function elapsed() {
  return {type: ACTIONS.SET_ELAPSED, payload: Date.now()};
}

export function stop() {
  return {type: ACTIONS.STOP, payload: Date.now()};
}