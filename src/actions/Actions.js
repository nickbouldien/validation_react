import dispatcher from '../dispatchers/Dispatcher';

export function formInputChnage(index, value){
  dispatcher.dispatch({
    type: 'FIELD_SET',
    index: index,
    value: value
  })
}
