import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteUser, removeFromFavorite, addToFavorite } from './action'
 
class jsonData extends Component {

  state={
    showMore:[false, false, false],
    heartToogle: [false, false, false],
    selectValue:'name',
    data:this.props.jsonData
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
        <div className="jsonData">

        {this.props.jsonData.map((item, index)=>{
          return (
            <div className='mainDivData' key={item.name}>
             {item.name} 

             {this.state.heartToogle[index] 
             ? <p onClick={()=>this.fillHeart(item,index)}
             className='emptyHeart'>&#9829;</p>
             : <p onClick={()=>this.emptyHeart(item,index)}
             className='emptyHeart'>&#9825;</p>
             }

            <Link to={'/edit/' + item.id}><button className='editButton'>
            Edit</button>
            </Link>
            <button onClick={()=>this.props.deleteUser(item)} className='deleteButton'>
            Delete</button>
            <br/>
            {this.state.showMore[index] 
            ? <button className='buttonShow' onClick={()=>this.showLess(item,index)}>Show less</button> 
            : <button className='buttonShow' onClick={()=>this.showMore(item,index)}>Show more</button >
            }
            {this.state.showMore[index] && 
            <div className='showMoreContent'>
            Age : {item.age} old
            </div>}
            </div>
          )
        })}
      </div>
    )
  }
}
const actions = {
  deleteUser,
  removeFromFavorite,
  addToFavorite
}

const mapStateToProps = (state, ownProps) => {
  let data = [...state.jsonData]
  let sortName = data.sort(function(a, b) {
    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
   })
   return {
    jsonData : sortName,
    favorite : state.favorite,
   }
}

export default connect(mapStateToProps, actions)(jsonData)