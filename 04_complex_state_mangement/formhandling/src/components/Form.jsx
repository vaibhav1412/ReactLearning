
function Form()
{
    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(event)
        const formdata=new FormData(event.target)
        let user=formdata.get("username")
        let pass = formdata.get("password");
        login(user,pass)
    }
    function login(username,pass)
    {
        console.log("Fetching User ...")
        setTimeout(()=>{
            console.log("UserLogin With :",username)
        },1000)
    }
    return (
      <form onSubmit={handleSubmit}>
        {/*uncontrolled input*/}
        <section>
          <label htmlFor="username">userName:</label>
          <input type="text" name="username" id="username" />
        </section>
        {/*uncontrolled input*/}
        <section>
          <label htmlFor="password">Passoword</label>
          <input type="password" name="password" />
        </section>
        <footer>
          <button>LogIn</button>
        </footer>
      </form>
    );
}

export default Form