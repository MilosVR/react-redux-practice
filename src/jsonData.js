import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteUser, removeFromFavorite, addToFavorite, fetchingUsers } from './action'
import SortByName from './sortByName'
import SortByAge from './sortByAge';
import SortById from './SortById';
import DefaultSort from './defaultSort';
import FetchedUser from './FetchedUser';
 
class jsonData extends Component {

  state={
    showMore:[false, false, false],
    heartToogle: [false, false, false],
    selectValue:'default',
    data:this.props.jsonData
  }

  componentDidMount(){
    this.props.fetchingUsers()
  }

  showMore=(selected, index)=>{
    this.setState({
      showMore:this.state.showMore.map((item, i)=>{
        return i === index ? true : item  
      })
    })
  }
  showLess=(selected, index)=>{
    this.setState({
      showMore:this.state.showMore.map((item, i)=>{
        return i === index ? false : item  
      })
    })
  }
  emptyHeart=(heart, heartIndex)=> {
    this.props.addToFavorite(heart)
    this.setState({
      heartToogle:this.state.heartToogle.map((item,index)=>{
        return index === heartIndex ? true : item
      })
    })
  }
  fillHeart=(heart, heartIndex)=> {
    this.props.removeFromFavorite(heart)
    this.setState({
      heartToogle:this.state.heartToogle.map((item,index)=>{
        return index === heartIndex ? false : item
      })
    })
  }
  onChangeSelect=(e)=>{
    this.setState({
      selectValue:e.target.value,
    })
  }
  
  render() { 
    return (
        <div>
        <div className="jsonData">
        <Link to='/search'>
          <button className='searchButton'>Search</button>
          </Link>
        <Link to={'/add'}><button className='addButton'>Add new user</button></Link>
        <Link to={'/grocery'}><button className='buyGrocery'>Buy grocery</button></Link>
        <Link to={'/favorite'}><button className='favoriteButton'>
        Favorite ({this.props.favorite.length})</button></Link>
        
        <div className='selectInput'>
        Sort by <select value={this.state.selectValue} 
        onChange={this.onChangeSelect}>
        <option value="default">Default</option>
        <option value="name">A-Z</option>
        <option value="id" >Id</option>
        <option value="youngest">Youngest</option>
        <option value="fetch">Fetched Users</option>
        </select>
        </div>

        {this.state.selectValue === "name" && <SortByName/>}
        {this.state.selectValue === "youngest" && <SortByAge/>}
        {this.state.selectValue === "id" && <SortById/>}
        {this.state.selectValue === "default" && <DefaultSort/>}
        {this.state.selectValue === "fetch" && <FetchedUser/>}
      </div>
      </div>
    )
  }
}
const actions = {
  deleteUser,
  removeFromFavorite,
  addToFavorite,
  fetchingUsers, 
}

const mapStateToProps = (state, ownProps) => {
   
   return {
    jsonData : state.jsonData,
    favorite : state.favorite,
    loading : state.users.loading
   }
}

export default connect(mapStateToProps, actions)(jsonData)