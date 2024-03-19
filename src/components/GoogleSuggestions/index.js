// Write your code here
import GoogleSuggestionItem from './components/SuggestionItem'

import {Component} from 'react'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  selectGoogleSuggestions = () => {}
  render() {
    const {searchInput} = this.state
    const {suggestionsList} = props
    selectGoogleSuggestion = event => {
      this.setState({searchInput: event.target.value})
    }
    const searchResults=suggestionsList.filter(eachItem=>
  eachItem.toLowerCase().includes(searchInput.toLocaleLowerCase()))
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          class="image"
        />
        <div className="google">
          <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" />
          <input
            type="search"
            onChange={this.selectGoogleSuggestions}
            value={searchInput}
          />
        </div>
        <ul>
          {suggestionsList.map(eachSuggestion => {
            ;<GoogleSuggestionItem
              suggestionsList={eachSuggestion}
              key={eachSuggestion.id}
            />
          })}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
