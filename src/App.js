import React, { Component } from 'react';
import Header from './components/Header';
import FormInput from './components/FormInput';
import registrationStore from './stores/RegistrationStore';
import {formInputChange, formSubmit} from './actions/Actions'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      registration: registrationStore.getFields(),
      errors: {}
      }
    }

  handleUpdate(){
    this.setState({
      registration: registrationStore.getFields()
    })
  }

  handleFormSubmit(){
    this.setState({
      errors: registrationStore.getErrors()
    })
  }

  componentWillMount(){
    registrationStore.on('change', this.handleUpdate.bind(this));
    registrationStore.on('FORM_SUBMIT', this.handleFormSubmit.bind(this));
  }

  handleChange(event){
    //console.log(this);
    //debugger;
    const target = event.target;
    //const registration = this.state.registration
    console.log(target);
    formInputChange(target.name, target.value)
    // registration[target.name] = target.value
  }

  handleSubmit(event){
    const target = event.target
    // const registration = this.state.registration
    event.preventDefault()
    this.validate(target.name, target.value)
    //console.log(this.state.registration)
  }

  validate(fieldName, value){
    // registrationStore.validate()
    formSubmit(fieldName, value)
    //this.setState({errors: registrationStore.getErrors()})
  }

  isValid(){
    return Object.keys(this.state.errors).length === 0
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>

          <div className='row'>
            <div className='col-xs-6 col-xs-offset-3'>
              <div className='panel panel-default'>
                <div className='panel-body'>

                  { !this.isValid() &&
                    <div className='alert alert-danger'>
                      Please verify that all fields are filled in below.
                    </div>
                  }

                  <h3>Registration</h3>
                  <form onSubmit={this.handleSubmit.bind(this)}>

                    <div className='row'>
                      <div className='col-xs-6'>
                        <div className='panel panel-default'>
                          <div className='panel-body'>
                            <FormInput
                               name='firstName'
                               label='First Name'
                               value={this.state.registration.firstName}
                               onChange={this.handleChange.bind(this)}
                               errors={this.state.errors.firstName}
                             />
                          </div>
                        </div>
                      </div>
                      <div className='col-xs-6'>
                        <div className='panel panel-default'>
                          <div className='panel-body'>
                            <FormInput
                               name='lastName'
                               label='Last Name'
                               value={this.state.registration.lastName}
                               onChange={this.handleChange.bind(this)}
                                 errors={this.state.errors.lastName}
                             />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className='row'>
                      <div className='col-xs-12'>

                        <FormInput
                           name='address'
                           label='Street Address'
                           value={this.state.registration.address}
                           onChange={this.handleChange.bind(this)}
                             errors={this.state.errors.address}
                         />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-5'>
                        <div className='panel panel-default'>
                          <div className='panel-body'>
                            <FormInput
                               name='city'
                               label='City'
                               value={this.state.registration.city}
                               onChange={this.handleChange.bind(this)}
                                 errors={this.state.errors.city}
                             />
                          </div>
                        </div>
                      </div>
                      <div className='col-xs-3'>
                        <div className='panel panel-default'>
                          <div className='panel-body'>
                            <FormInput
                               name='state'
                               label='State'
                               value={this.state.registration.state}
                               onChange={this.handleChange.bind(this)}
                                 errors={this.state.errors.state}
                             />
                          </div>
                        </div>
                      </div>
                      <div className='col-xs-4'>
                        <div className='panel panel-default'>
                          <div className='panel-body'>
                            <FormInput
                               name='zipCode'
                               label='Zip Code'
                               type='number'
                               value={this.state.registration.zipCode}
                               onChange={this.handleChange.bind(this)}
                                 errors={this.state.errors.zipCode}
                             />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                           name='email'
                           label='Email'
                           value={this.state.registration.email}
                           onChange={this.handleChange.bind(this)}
                             errors={this.state.errors.email}
                         />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                           name='password'
                           label='Password'
                           value={this.state.registration.password}
                           type="password"
                           onChange={this.handleChange.bind(this)}
                             errors={this.state.errors.password}
                         />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <FormInput
                           name='age'
                           label='Age'
                           value={this.state.registration.age}
                           onChange={this.handleChange.bind(this)}
                           type='number'
                             errors={this.state.errors.age}
                         />
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-xs-12'>
                        <input className='btn btn-primary' type='submit' value='Submit' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className="col-xs-4 col-xs-offset-4">
            <ul className='list-group'>
              <li className='list-group-item'>First Name: {this.state.registration.firstName}</li>
              <li className='list-group-item'>Last Name: {this.state.registration.lastName}</li>
              <li className='list-group-item'>Street Address: {this.state.registration.address}</li>
              <li className='list-group-item'>City: {this.state.registration.city}</li>
              <li className='list-group-item'>State: {this.state.registration.state}</li>
              <li className='list-group-item'>Zip Code: {this.state.registration.zipCode}</li>
              <li className='list-group-item'>Email: {this.state.registration.email}</li>
              <li className='list-group-item'>Password: {this.state.registration.password}</li>
              <li className='list-group-item'>Age: {this.state.registration.age}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
