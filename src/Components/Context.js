import React,{useContext} from 'react'
import { UserContext } from '../App'

function Context() {
    const user = useContext(UserContext)
  return (
    <div>Context {user}</div>
  )
}

export default Context