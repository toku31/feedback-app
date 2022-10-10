// import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  // Calcurating rating avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  // 小数第一位まで表示、末尾が０の時は省略
  average = average.toFixed(1).replace(/[.,]0$/, '')
  // console.log(average)
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Review</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired
// }

export default FeedbackStats