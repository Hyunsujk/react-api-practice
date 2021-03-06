import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function App() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [url, setUrl] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const login = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoggedIn(true);
  };

  const logout = (response) => {
    setName("");
    setEmail("");
    setUrl("");
    setLoggedIn(false);
  };

  const handleLoginFailure = (response) => {
    alert("Failed to log in");
  };

  const handleLogoutFailure = (response) => {
    alert("Failed to log out");
  };

  return (
    <div className="App">
      <h1>Integrating Google Login with React</h1>
      <h2>After the Harvest Project</h2>
      <h2>Welcome: {name}</h2>
      <h2>is logged in? {loggedIn}</h2>
      <h2>Email: {email}</h2>
      <img src={url} alt={name} />
      {loggedIn ? (
        <div>
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
            onFailure={handleLogoutFailure}
          ></GoogleLogout>
          <button>create PDF</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
}
