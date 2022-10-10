import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import { useState } from 'react'
import FeedbackForm from './components/ FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
// import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'
import AbouticonLink from './components/AbouticonLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)

  return(
    <FeedbackProvider>
      <Router>
        <Header />
          <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm /> 
                <FeedbackStats />
                <FeedbackList />
              </>
            }></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AbouticonLink />
        </div>
      </Router>
    </FeedbackProvider> 
  )
}

export default App