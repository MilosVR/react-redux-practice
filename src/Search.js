import React, { Component } from 'react'

 class Search extends Component {

    state={
        searchTerm:''
    }
    onSearchHandler=e=>{
        this.setState({
            searchTerm : e.target.value
        })
    }
    onFormSubmit=e=>{
        e.preventDefault()
        this.props.history.push('/search/'+this.state.searchTerm)
    }
  render() {
    return (
      <div className='searchForm'>
        <form onSubmit={this.onFormSubmit}>
            <label>Search </label>
            <input value={this.state.searchTerm} 
            onChange={this.onSearchHandler}/>
        </form>
      </div>
    )
  }
}
export default Search