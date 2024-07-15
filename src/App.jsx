import './App.css'
import { useAuthInfo, useLogoutFunction } from '@propelauth/react'

function App() {
  const authInfo = useAuthInfo()
  const logout = useLogoutFunction()

  if (authInfo.loading) {
    return <h2>Loading...</h2>
  }

  if (!authInfo.isLoggedIn) {
    return <a href={import.meta.env.VITE_AUTH_URL}>Login</a>
  }

  return (
    <>
      <h1>Propelauth + React</h1>
      <div>
        <img src={authInfo.user.pictureUrl} className="logo" alt="React logo" />
      </div>
      <h2>
        Welcome, {authInfo.user.firstName}!
      </h2>
      <p>
        You are logged in as <a href={`mailto:${authInfo.user.email}`}>{authInfo.user.email}</a>
      </p>
      <div className="card">
        <button onClick={() => logout()}>
          Log Out
        </button>
      </div>
    </>
  )
}

export default App
