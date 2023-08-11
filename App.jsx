import { useState } from 'react'

import './App.css'
// import './login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main'>
    <h1 className='title'>WELCOME TO TECH PRENEUR</h1>
      <h4 className='subtitle'>Making your Tech dream come true</h4>
      <p className='p1'>we are all this technology</p>

      <div className='media'>
      <p className="p1">Login with social media</p>
        <a href="./login.jsx" className="media-link">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="./login.jsx" className="media-link">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>

      <p className="p2">
        Don't have an account? 
        <a href="./login.jsx" className="create-account">Create an account</a>
      </p>

      <input type="text" placeholder="Username" className="input" />
      <br />
      <input type="password" placeholder="Password" className="input" />
      <br />
      <label className="label">
        <input type="checkbox" name="item" />
        <span>Remember me</span>
      </label>
      <br />
      <button className="button">Login</button>
      <button className="button">Sign up</button>
    </div>


    </>
  )
}

export default App
