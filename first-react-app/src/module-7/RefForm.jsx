import react from 'react';
import {useRef} from 'react';

const RefForm = () => {
    const usernameRef = useRef();

    const submit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        alert(`Username: ${username}`);
      };
    return (
        <form onSubmit={submit}>
            <label>Username:<input type="text" ref={usernameRef} /></label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RefForm