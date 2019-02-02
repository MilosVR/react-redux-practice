import React, { Component } from 'react'
import {connect} from 'react-redux'

class Buy extends Component {

    state={
        disable:[false, false, false, false, false, false],
        balance:0
    }
    addGrocery=(addValue, buttonIndex)=>{
        let updateBalance = this.state.balance
        this.setState({
            disable:this.state.disable.map((item,index)=>{
                return index === buttonIndex ? true : item
            }),
            balance: updateBalance += addValue.cost
        })
    }
    deleteGrocery=(removeValue, buttonIndex)=>{
        let updateBalance = this.state.balance
        this.setState({
            disable:this.state.disable.map((item,index)=>{
                return index === buttonIndex ? false : item
            }),
            balance: updateBalance -= removeValue.cost
        })
    }

  render() {
    return (
      <div >
      <div className='groceryWrapper'>  
        {this.props.grocery.map((item, index)=>{
            return (
            <div key={item.id} className='groceryItem' >
            {item.name}
            <div>{item.cost} $</div>
            <div>
            <button disabled={this.state.disable[index]} onClick={()=>this.addGrocery(item, index)}>+</button>
            <button disabled={!this.state.disable[index]} onClick={()=>this.deleteGrocery(item, index)}>-</button>
            </div>
            </div>
            )
        })}
      </div>
      <div className='divBalanceWrapper'>
        <button style={{background:'gold'}}>Order</button> 
        <div className='divBalance'>{this.state.balance} $</div>
        <button onClick={()=> this.props.history.goBack()}>Go back</button>
      </div>  
      </div>  
    )
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        grocery:state.grocery
    }
}
export default connect(mapStateToProps)(Buy)