import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
//import ProfileContainer from './components/Profile/ProfileContainer'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
//import DialogsContainer from './components/Dialogs/DialogsContainer'  
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import React, { Suspense } from 'react'
import { initializeApp } from './redux/appReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './common/Preloader/Preloader'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense fallback={<div><Preloader /></div>}>
              <Routes>
                <Route path='/dialogs/*' element={<DialogsContainer />} />

                <Route path='/profile' element={<ProfileContainer />}>
                  <Route path='/profile/:userId' element={<ProfileContainer />} />
                </Route>

                <Route path='/users/*' element={<UsersContainer />} />
                <Route path='/login/*' element={<Login />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp })(App))
