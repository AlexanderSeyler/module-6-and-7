import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "./PropsDisplayer";
import City from "./city";
import Greeting from "./greeting";
import FullName from "./FullName";
import Callout from "./CallOut";
import BirthdayTranslator from "./BirthdayTranslator";
import LoginFormOld from "./LoginFormOld";
import ExplodingBomb from "./ExplodingBomb";
import Calculator from "./Calculator";
import Cat from "./cat";
import Navbar from "./navbar";
// import MovieList from './MovieList'
// import ComplexComment from './ComplexComment'
import Clock from "./module-7/Clock";
import ClockDisplay from "./module-7/ClockDisplay";
import ActivityFinder from "./module-7/ActivityFinder";
import BitcoinRates from "./module-7/BitCoin";
import RefCounter from "./module-7/RefCounter";
import VideoPlayer from "./module-7/VideoPlayer";
import Counter from "./module-7/StatefulCounter";
import TimerCounter from "./module-7/TimerControlledCounter";
import RefForm from "./module-7/RefForm";
import TodoList from "./module-7/DynamicList";
import SynchronizedInputs from "./module-7/SynchronizedInput";
import PostListReducer from "./module-7/PostListReducer";
import BitcoinHooks from "./module-7/BitcoinHooks";
import MockApiComponent from "./module-7/MockAPI";
import DynamicStyleComponent from "./module-7/DynamicStyle";
import MockApiNoUse from "./module-7/MockAPI";
import LoginForm from "./module-7/LoginForm";
import { UserProvider, useUserContext } from "./context/UserContext";

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component</p>
    </div>
  );
}
function App() {
  // const [count, setCount] = useState(0)
  const JSX = <p>paragraph 1</p>;
  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };
  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockqoute>{spiderman.catchPhrase}</blockqoute>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );
  const spideyJSXfragment = (
    <>
      <h3>{spiderman.name}</h3>
      <blockqoute>{spiderman.catchPhrase}</blockqoute>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );
  const person = {
    first: "Bob",
    middle: "cob",
    last: "dob",
    pet: ["cat", "dog", "rat"],
  };
  // const author = {AvatarUrl:'test', name: 'human name'}
  // const date = "2024-01-24"
  // const text = "test text"
  // const comment = {author,date,text}

  return (
    <>
      <UserProvider>
        <LoginForm />
      </UserProvider>
      <MockApiNoUse />
      <DynamicStyleComponent />
      <MockApiComponent />
      <BitcoinHooks />
      <PostListReducer />
      <SynchronizedInputs />
      <TodoList />
      <RefForm />
      <Navbar />
      <TimerCounter />
      <Counter />
      <VideoPlayer />
      <RefCounter />
      <BitcoinRates />
      <Cat />
      <ActivityFinder />
      <ClockDisplay />
      <Calculator num1={5} num2={3} />
      <ExplodingBomb />
      <LoginFormOld />
      <BirthdayTranslator />
      {/* <MoviesList /> */}
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      {/* <ComplexComment comment = {comment}></ComplexComment> */}
      <FullName first="Kendrick" middle="Duckworth" last="Lamar" />
      <FullName
        first={person.first}
        middle={person.middle}
        last={person.last}
        pet={person.pet}
      ></FullName>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Greeting />
      <Greeting name="John">
        <div>how are you doing?</div>
      </Greeting>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        {JSX}
        {spideyJSX}
        {spideyJSXfragment}
        <PropsDisplayer />
        <PropsDisplayer name="Harry Styles" age={29} />
        <City name="Sydney" />
        <City name="Chicago" state="Illinois" country="USA" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ExampleComponent />
    </>
  );
}
export default App;
