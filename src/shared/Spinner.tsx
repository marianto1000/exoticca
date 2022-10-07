import React from 'react'
import {SpinnerIcon, Spinning} from '../components/Styled'
function Spinner() {
  return (
    <SpinnerIcon className="spinner">
        <Spinning className="fa-solid fa-spinner"></Spinning>
    </SpinnerIcon>
  )
}

export default Spinner