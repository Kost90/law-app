import React from 'react'

function Login({setLoggedOn}) {
  return (
    <div>
        <button onClick={() => setLoggedOn(true)}>Login</button>
    </div>
  )
}

export default Login