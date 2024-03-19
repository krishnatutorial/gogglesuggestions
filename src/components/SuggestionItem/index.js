// Write your code here

import './index.css'
const GoogleSuggestionItem = props => {
  const {suggestionDetails} = props
  const {id, suggestion} = suggestionDetails

  return (
    <li className="container">
      <h1>{suggestion}</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
      />
    </li>
  )
}

export default GoogleSuggestionItem
