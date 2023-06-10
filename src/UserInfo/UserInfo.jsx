import React from 'react'
import "./Styles.css"
const UserInfo = (props) => {
  return (
    <div className='styles' >
        <h2 >
        My name is {props.fname} {props.lname} and my email address is {props.email} with phone number {props.phone}

        </h2>
        </div>
  )
}
export default UserInfo