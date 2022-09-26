import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Sign Up</h1>
        <p>
          It's free and only takes a minute
        </p>
      </header>
      <div className="login-section">
        <label for="first-name"><p>First Name</p></label>
        <input type="text" name="fistname" required />

        <label for="last-name"><p>Last Name</p></label>
        <input type="text" name="lastname" required />

        <label for="email"><p>Email</p></label>
        <input type="text" name="user-email" required />

        <label for="password"><p>Password</p></label>
        <input type="password" name="user-pword" required />

        <label for="confirm-password"><p>Confirm Password</p></label>
        <input type="password" name="confirm-pword" required />

        <button type="submit">Sign Up</button>

        <p>By clicking the Sign Up button, you agree to our <a href='https://ciccc.ca/policy/prior-learning-assessment-policy/'>Terms & Conditions</a> and <a href='https://ciccc.ca/policy/admission-policy/'>Privacy Policy</a></p>
      </div>
      <div className='footer'>
        <h4>Already have an account? <a href='#'> Login Here</a></h4>
      </div>
    </div>
  );
}

export default App;
