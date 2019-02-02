import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editUsers} from './action'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import TextField from './Fields/TextField';

class edit extends Component {
    
    state = {
       term:this.props.jsonData
    }

    onChangeInput=e=>{
        let updateTerm = this.state.term;
        updateTerm[e.target.name] = e.target.value
        this.setState({
            term:updateTerm
        })
    }

    onSubmitForm=values=>{
        this.props.editUsers(values)
        this.props.history.goBack()
    }

    render() {
    return (
    <div>
        <h2>Edit from</h2>
      <div className='editForm'>
      <form onSubmit = {this.props.handleSubmit(this.onSubmitForm)}>
              <Field  component={TextField} 
              name='name' label='Name :'/>
              <Field  component={TextField} 
              name='age' label='Age :'/>
              <button type='submit'>Submit</button>
          </form>
      </div>
      </div>
    )
  }
}
const actions = {
    editUsers
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id 
    return {
     initialValues : state.jsonData.find(item => item.id == id )
    }
 }
 export default compose (
     connect(mapStateToProps, actions),
     reduxForm({form:'editForm'})
     )(edit)