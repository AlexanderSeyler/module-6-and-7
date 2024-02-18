import { useState } from "react";
import { useUserContext } from '../context/UserContext';
function LoginForm() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');
    // destructure the context values passed via UserProvider
    const { currentUser, handleUpdateUser } = useUserContext();
    // alternative using the useContext hook directly, either works
    //const {currentUser, handleUpdateUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
    }
    {/* if the user is already logged in, show msg instead of form */ }
    if (currentUser.email) return (
        <><p>Welcome {currentUser.email}!</p>
            <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    );
    // otherwise render same form as previously, no changes
    return <>
        <form onSubmit={handleSubmit}>
            <label>Email: <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} /></label><br />
            <label>Password: <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} /></label><br />
            <button type="submit">Login</button>
        </form>
    </>
}
export default LoginForm





// // ---- EITHER use our custom hook for UserContext:
// import { useUserContext } from "../context/UserContext";
// // and use the values provided by the context
// const {currentUser} = useUserContext();
// // ---- OR call the useContext hook and pass in UserContext
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// // and use the values provided by the context
// const {currentUser} = useContext(UserContext);
// // ---- THEN use/display the context values as needed
// {/* display the current user from any component */}
// <p>Welcome {currentUser.email}!</p>
// // ++ Display the current user's email from another component
// // ++ Add a 'name' field to the login form and include it in