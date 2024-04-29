import React from "react";
import Button from "../Button/Button";


const Auth = ({onSubmit}) => {
  const [loggedIn, setLoggedIn] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPassword] = React.useState("");

  const handleSubmitButton = () => {
    // Call the onSubmit callback with the data
    onSubmit({ name, email, pass });
  };



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginLeft: 770,
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "gray",
          height: 500,
          width: 800,
          borderRadius: 20,
        }}
      >
        <div style={{ padding: 20 }}>
          <h1 style={{ color: "white", fontSize: 50 }}>Sign Up</h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              color: "white",
              fontSize: 30,
            }}
          >
            Name:
            <input
              style={{
                borderRadius: 10,
                height: 50,
                width: 400,
                marginLeft: 30,
              }}
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              color: "white",
              fontSize: 30,
            }}
          >
            Email:
            <input
              style={{
                borderRadius: 10,
                height: 50,
                width: 520,
                marginLeft: 30,
              }}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 20,
              color: "white",
              fontSize: 30,
            }}
          >
            Password:
            <input
              style={{
                borderRadius: 10,
                height: 50,
                width: 420,
                marginLeft: 30,
              }}
              value={pass}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>  

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: 40,marginLeft:100}}>
            <Button name="Submit" onClick={handleSubmitButton} bPad={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
