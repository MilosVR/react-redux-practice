import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromFavorite } from './action'

 class Favorite extends Component {
  render() {
    return (
      <div>
        {this.props.favorite.length > 0 
            ? this.props.favorite.map((item)=>{
                return (
                    <div key={item.id} className='favoriteItem'>
                    <div className='innerFavoriteItem'>
                    {item.name}
                    <button className='favoriteButton'
                    onClick={()=>this.props.removeFromFavorite(item)}
                    >Remove from favorite</button>
                    </div>
                    </div>
                )
            }) 
            : 'Favorite list is empty'}
      </div>
    )
  }
}
const actions = {
    removeFromFavorite
}
const mapStateToProps=state=>{
    return {
        favorite : state.favorite
    }
}
export default connect(mapStateToProps, actions)(Favorite)