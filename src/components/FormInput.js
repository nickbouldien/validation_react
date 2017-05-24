import React, { Component } from 'react';
import {formInputChange} from '../actions/Actions'


/// where to use action formInputChange function???


export default class FormInput extends Component {
  constructor(props){
    super(props)
      this.state = {
        type: this.props.type || "text"
      }
    }

    // actions function

    render(){

      return(
        <div className={`form-group ${this.props.errors && 'has-error'}`}>
          <label
            htmlFor={this.props.name}
            className='control-label'
          >
            {this.props.label}
          </label>
          <input
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
            type={this.state.type}
            className='form-control'
          />
          {this.props.errors &&
            <div className='help-block'>{this.props.errors}</div>
          }
        </div>

      )
    }
  }


// export default FormInput;  //exporting above
