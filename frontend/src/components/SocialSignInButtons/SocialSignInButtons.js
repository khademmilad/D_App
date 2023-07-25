import React from 'react'
import CustomButton from '../CustomButton/CustomButton'



const SocialSignInButtons = () => {

    const onSignInGoogle = () => {
        console.warn("Sign in with Google")
    };

  return (
    <>
        <CustomButton
          text="Sign In with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
          onPress={onSignInGoogle}
        />
    </>
  )
}

export default SocialSignInButtons