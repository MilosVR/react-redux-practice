import React, { Component } from 'react'
import { connect } from 'react-redux'


class SearchResults extends Component {
  render() {
    return (
      <div className='searchResultWrapper'>
          <span className='searchResultSpan'>
          Result for : {this.props.searchTerm}
          </span>

        <div className='searchResult'>
        { this.props.searchResult.length !== 0

        ? this.props.searchResult.map((item)=>{
            return (
                <div key={item.id} className='searchResultItem'>
                    {item.name}</div>
                )
            }) 

        : "No result found"
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let searchTerm = ownProps.match.params.term;
    let searchResult = state.jsonData.filter((item)=> {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
console.log(searchTerm, searchResult);

    return {
        jsonData : state.jsonData,
        searchResult,
        searchTerm
    }
}

export default connect(mapStateToProps)(SearchResults)
