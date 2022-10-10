import { v4 as uuidv4 } from 'uuid'
import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=> {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context1',
      rating: 10
    },
    {
      id: 2,
      text: 'This item is from context2',
      rating: 9
    },
    {
      id: 3,
      text: 'This item is from context3',
      rating: 7
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }
  // deleet feedback
  const deleteFeedback =(id) => {
    console.log('App', id)
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = (id, updItem)=> {
    // console.log(id, updItem)
    setFeedback(feedback.map((item)=> (
      item.id ===id ? {...item, ...updItem} : item
    )))
  }

  // 編集項目　Set item to be updated
  const editFeedback = (item)=> {
    setFeedbackEdit({
      item: item,
      edit: true
    })
  }

  return <FeedbackContext.Provider value={{feedback:feedback, 
    deleteFeedback:deleteFeedback, // deleteFeedbackのみの省略可
    addFeedback: addFeedback,
    editFeedback: editFeedback,
    feedbackEdit: feedbackEdit,
    updateFeedback: updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext