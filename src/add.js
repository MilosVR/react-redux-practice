import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addUser } from './action'
import {reduxForm, Field} from 'redux-form'
import {compose} from "redux"
import TextField from './Fields/TextField';

class add extends Component {
    
    state = {
       emptyInput:{
           name:'',
           age:''
       }
    }

    onChangeInput=e=>{
        let addNewUser = this.state.emptyInput;
        addNewUser[e.target.name] = e.target.value
        this.setState({
            emptyInput:addNewUser
        })
    }
    onSubmitInput=values=> {
        values.id = Math.random()
        this.props.addUser(values)
        this.props.history.push('/')
    }
    render() {
    return (
      <div><h2>Create new User</h2>
          <form onSubmit = {this.props.handleSubmit(this.onSubmitInput)}>
              <Field  component={TextField} 
              name='name' label='Name :'/>
              <Field  component={TextField} 
              name='age' label='Age :'/>
              <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}

const actions = {
    addUser
}

const mapStateToProps = (state, ownProps) => {
    
    return {
     jsonData : state.jsonData
    }
 }
 export default compose(
     connect(mapStateToProps, actions), 
     reduxForm({form:'addForm'})
     )(add)