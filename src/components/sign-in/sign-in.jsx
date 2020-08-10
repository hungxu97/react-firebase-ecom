import React from 'react'
import FormInput from '../form-input/form-input'
import './sign-in.scss'
import CustomButton from '../custom-button/custom-button'
import { signInWithGoogle } from '../../firebase/firebase'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email: '',
      password: '',
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render = () => (
    <div className='sign-in'>
      <h2>I'm already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={this.handleSubmit}>
        <FormInput
          handleChange={this.handleChange}
          type='email'
          name='email'
          label='email'
          value={this.state.email}
          required
        />
        <FormInput
          handleChange={this.handleChange}
          type='password'
          name='password'
          label='password'
          value={this.state.password}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
