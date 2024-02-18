// useState is a React hook
import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
   // setMood is a function for updating mood
    const [mood, setMood] = useState('happy');

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
        </div>
    )
}

export default MoodChanger;

<button onClick={() => setMood('excited')}>Found Money</button>