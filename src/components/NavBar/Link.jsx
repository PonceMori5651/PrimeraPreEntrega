import React from 'react'
import './NavBar.css'
export default function Link(props) {
  return (
    <li className='ancorNav'>{props.text}</li>
  )
}
