import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homepage'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth, createUserProfileDocument, firestore } from './firebase/firebase'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null, // user object
    }
  }

  unsubFromAuth = null

  componentDidMount() {
    this.unsubFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state)
            }
          )
        })
      } else {
        this.setState({ currentUser: user })
      }
    })
  }

  componentWillUnmount() {
    this.unsubFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    )
  }
}

export default App
