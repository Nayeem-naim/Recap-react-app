import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends = ['ruben', 'chomok', 'kibria', 'manna', 'golam', 'bapparaz'];
  const products = [
    { name: 'laptop', price: '50' },
    { name: 'phone', price: '40' },
    { name: 'Charger', price: '20' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <FriendCount></FriendCount>
      <RandomName></RandomName>

        {
          friends.map(friend => <Friends name={friend}></Friends>)
        }
        {
          products.map(pd => <Product name={pd.name} price={pd.price}></Product>)
        }

        {/* <Friends name={friends[0]}></Friends>
        <Friends name={friends[1]}></Friends>
        <Friends name={friends[2]}></Friends>
        <Friends name={friends[3]}></Friends> */}
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}
function FriendCount() {
  const [count, setCount] = useState(0);
  const style={
    margin:'10px'
  }
  return (
    <div>
      <h1>Friend Count = {count}</h1>
      <button onClick={() => setCount(count + 1)} style={style} > increase </button>
      <button onClick={() => setCount(count - 1)} > decrease </button>
    </div>
  )
}
function RandomName() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <>
      {user.map(us => {
        return (
          <div>
            <h1>User Name : {us.name}</h1>
          </div>
        )
      }
        // {/* <ul>
        //   {
        //     user.map(us => <li>{us.name}</li>)
        //   }
        // </ul> */}
      )}
    </>
  )
}

// data.results[0].email

function Product(props) {
  const style = {
    border: '2px solid red',
    borderRadius: '10px',
    margin: '10px',
    padding: '10px'

  }
  return (
    <div style={style}>
      <h2>Product Name - {props.name}</h2>
      <h3>Product Price - {props.price}</h3>
    </div>
  )

}

function Friends(props) {
  const friendStyle = {
    backgroundColor: 'white',
    color: 'black',
    margin: '10px',
    padding: '10px',
    border: '2px solid blue',
    borderRadius: '10px',
    hight: '200px',
    width: '90%'
  }
  return (
    <div style={friendStyle}>
      <h1>My name is -{props.name} </h1>
    </div>
  )
}

export default App;
