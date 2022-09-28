import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import {useState} from "react"

function SignUp() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log("Hello")
    return (
        <>
        <div className="container">
        <div className="header">
          <h1>Sign Up</h1>
          <p>
            It's free and only takes a minute
          </p>
        </div>
        <form className="login-section" onSubmit={(e)=> {
            e.preventDefault()
           // console.log(firstName, lastName, email, password)
            console.log("Hello")
            var user = {
                firstName, lastName, email, password
            }
            let users = localStorage.getItem("users")
            users = JSON.parse(users)
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
        }}>
          <label for="first-name"><p><FaUserAlt/> First Name</p></label>
          <input type="text" name="fistname" value={firstName} onChange={(e)=> {
            setFirstName(e.target.value)
          }} required />

          <label for="last-name"><p><FaUserAlt/> Last Name</p></label>
          <input type="text" name="lastname" value={lastName} onChange={(e)=>{
            setLastName(e.target.value)
          }} required />

          <label for="email"><p><FaEnvelope /> Email</p></label>
          <input type="text" name="user-email" value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} required />

          <label for="password"><p><FaLock /> Password</p></label>
          <input type="password" name="user-pword" value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} required />

          <label for="confirm-password"><p><FaLock /> Confirm Password</p></label>
          <input type="password" name="confirm-pword" required />
          <div className='login-bottom'>
            <button type="submit">Sign Up</button>

            <h3>By clicking the Sign Up button, you agree to our <a href='https://ciccc.ca/policy/prior-learning-assessment-policy/'>Terms & Conditions</a> and <a href='https://ciccc.ca/policy/admission-policy/'>Privacy Policy</a></h3>
          </div>
        </form>
      </div>
      <div className='footer'>
        <h4>Already have an account?<a href='#'> Login Here</a></h4>
      </div>
      </>
    )
}

export default SignUp