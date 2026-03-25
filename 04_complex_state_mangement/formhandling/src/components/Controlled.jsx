import { useState } from "react";

function Controlled() {
    const [username , setUsername]=useState("")
    const [password, setPassoword]=useState("")
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const formdata = new FormData(event.target);
    let user = formdata.get("username");
    let pass = formdata.get("password");
    login(user, pass);
  }
  function handleUsernameChange(event){
    setUsername(event.target.value)

  }
function handlePassowordChange(event) {
      setPassoword(event.target.value);
    }
  function login(username, pass) {
    console.log("Fetching User ...");
    setTimeout(() => {
      console.log("UserLogin With :", username);
    }, 1000);
  }
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="username">userName:</label>
        <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange}/>
      </section>

      <section>
        <label htmlFor="password">Passoword</label>
        <input type="password" name="password" value={password} onChange={handlePassowordChange}/>
      </section>
      <footer>
        <button>LogIn</button>
      </footer>
    </form>
  );
}

export default Controlled;
