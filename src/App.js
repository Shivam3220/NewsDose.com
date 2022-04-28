import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsBox from './components/NewsBox';
// import testImage from './testImage.jpg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <>
     
      
      <div >
      <Router>
      <Navbar title="NewsDose.com"/>
      <Routes>
      <Route exact path="/" element={<NewsBox key="general" category="General"/>}/>
      <Route exact path="/business" element={<NewsBox key="business" category="Business"/>}/>
      <Route exact path="/entertainment" element={<NewsBox key="entertainment" category="Entertainment"/>}/>
      <Route exact path="/general" element={<NewsBox key="general" category="General"/>}/>
      <Route exact path="/health" element={<NewsBox key="health" category="Health"/>}/>
      <Route exact path="/science" element={<NewsBox key="science" category="Science"/>}/>
      <Route exact path="/sports" element={<NewsBox key="sports" category="Sports"/>}/>
      <Route exact path="/technology" element={<NewsBox key="technology" category="Technology"/>}/>
      

      </Routes>

    </Router>
    </div>
     {/* <img src={testImage} alt="" /> */}
      </>
    )
  }
}

