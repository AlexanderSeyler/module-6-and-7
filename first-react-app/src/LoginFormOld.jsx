import { useState } from 'react'


function LoginFormOld() {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    const [userAttempt, setUserAttempt] = useState(0);
    const [formVisible, setFormVisible] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reloading on form submit
    
        // add some password validation
        if (userAttempt < 3){
        if (userPassword.length < 5) {
          setSubmitResult('Password must be at least 5 characters long');
          setUserAttempt(userAttempt + 1); 
        } else if (userPassword === userEmail) {
          setSubmitResult('Password must not match email address');
          setUserAttempt(userAttempt + 1); 
        }
        else{
          setSubmitResult('Successful login.');
          setFormVisible(false);
        }
      }
      else {
        setSubmitResult('You have used up your attempts.');
        setFormVisible(false);
      }
      }
  
    return (
      <div className="LoginForm componentBox">
        {formVisible && (<div>
        <div className="formRow">
          <label>Email Address: 
            {/* Controlled form element needs both value and onChange.
             onChange handler uses event param e to access target value.
             Whenever user types, new value is stored in state. */}
            <input type="email" value={userEmail} name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)} />
          </label>
        </div>
        <div className="formRow">
          <label>Password:            
            <input type="password" value={userPassword} name="password"
              onChange={(e) => setUserPassword(e.target.value)} />  
          </label>  
        </div>
              <form onSubmit={handleSubmit}>
              <button>Log In</button>
                  <p>{submitResult}</p>
              </form>
        </div>
        )}
      </div>
    )
  }
  // try removing the onChange prop and typing in a field
  export default LoginFormOld