import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/Dispatcher';

// for deleting todo/menuItem in other project:  https://jaysoo.ca/2015/03/09/on-flux-stores-and-actions/
// Project item removed to our transient state.
// onItemRemoved(item) {
//   this._items = this._items.filter(i => i.id !== item.id);
//   this.emit('change');
// }


class RegistrationStore extends EventEmitter{
  constructor(props){
    super(props)
    this.fields = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      address: '',
      city: '',
      state: '',
      zipCode: undefined,
      age: undefined
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }

  getErrors(){
      // {}
      // or
      // {firstName: 'is required'}
      return this.errors

    }

    validate(){
      this.errors = {}
      this.validatePresence('firstName')
      this.validatePresence('lastName')
      this.validatePresence('password')
      this.validatePresence('address')
      this.validatePresence('city')
      this.validatePresence('state')
      this.validatePresence('zipCode')
      this.validatePresence('age')
      this.validateEmail('email')

    }

    validatePresence(fieldName){
      if(this.fields[fieldName] === ''){
        this.addError(fieldName, 'is Required')
      }
    }

    validateEmail(fieldName){
      const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
      if(!filter.test(this.fields[fieldName])){
        this.addError(fieldName, 'is not an email')
      }
    }

    addError(fieldName, message){
      this.errors[fieldName] = message
    }

    setField(fieldName, value){
      this.fields[fieldName] = value;
      this.emit('change');
      //this.validate()
    }

    otherFunction(fieldName, value){
      console.log(fieldName, value);
    }

    handleAction(action){
      switch(action.type){
        case('FIELD_SET'):{
          console.log(this);  //undefined
          this.setField(action.fieldName, action.value)
          //debugger;
          break
        }
        // case('FORM_SUBMIT'):{
        //   this.otherFunction(action.fieldName,action.value)
        //   break
        // }
        default: {}
      }
    }

}

const registrationStore = new RegistrationStore()
//console.log(this);  //und
dispatcher.register(registrationStore.handleAction.bind(registrationStore))
//window.store = registrationStore
export default registrationStore
