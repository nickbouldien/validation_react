import EventEmitter from 'events';
import dispatcher from '../dispatchers/Dispatcher';

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
    }

    handleAction(action){
      switch(action.type){
        case('FIELD_SET'):{
          this.setField(action.index,action.value)
          break
        }
        default: {}
      }
    }

}


const registrationStore = new RegistrationStore()
dispatcher.register(registrationStore.handleAction.bind(this))
export default registrationStore
