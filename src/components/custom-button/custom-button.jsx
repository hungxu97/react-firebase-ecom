import React from 'react'
import './custom-button.scss'

const CustomButton = ({ children, isGoogleSignIn, color, ...restProps }) => (
  <button
    // style={
    //   color
    //     ? { backgroundColor: color, color: 'black', border: '1px solid' }
    //     : null
    // }
    {...restProps}
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
  >
    {children}
  </button>
)

export default CustomButton
