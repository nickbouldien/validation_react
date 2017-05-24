import dispatcher from '../dispatchers/Dispatcher';

export function formInputChange(fieldName, value){
  //debugger;
  dispatcher.dispatch({
    type: 'FIELD_SET',
    fieldName: fieldName,
    value: value
  })
}

export function formSubmit(fieldName, value){
  dispatcher.dispatch({
    type: 'FORM_SUBMIT',
    fieldName: fieldName,
    value: value
  })
}
