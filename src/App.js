import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'Adobe PhotoShop', price: '$100' },
    { name: 'Adobe Illustrator', price: '$150' },
    { name: 'Adobe PDF Reader', price: '$40' }
  ];
  const friends = [
    { firstName: 'Abul', age: 20 },
    { firstName: 'Babul', age: 21 },
    { firstName: 'Kabul', age: 21 },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'aquamarine' }}>Learning React</h1>

        <Count></Count>

        <Users></Users>


        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product> */}
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* <Friend info={friends[0]}></Friend>
        <Friend info={friends[1]}></Friend>
        <Friend info={friends[2]}></Friend> */}

        {
          friends.map(friend => <Friend info={friend}></Friend>)
        }

      </header>
    </div>
  );
}

// -------- creating component -------
function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(jsonData => {
      setUsers(jsonData);
      
    })
  }, [])
  console.log(users);
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name},  Phone: {user.phone}</li>)
        }
      </ul>
    </div>
  )
}


function Count() {
  const [count, setCount] = useState(0);
  const btnStyle = {margin: '5px', padding: '5px 10px', borderRadius: '5px'};
  return (
    <div>
      <h3>Count: {count}</h3>
      <button style={btnStyle} onClick={() => setCount(count - 1)}>Decrease</button>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Product(props) {
  // console.log(props);
  const { name, price } = props.product;
  const productStyle = { border: '2px solid darkGray', margin: '10px', borderRadius: '10px', padding: '20px', width: '200px', height: '200px' }
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Friend(props) {
  // console.log(props);
  const friendStyle = { border: '2px solid darkGray', margin: '10px', borderRadius: '10px', padding: '20px', width: '200px', height: '200px' }
  return (
    <div style={friendStyle}>
      <h2>{props.info.firstName}</h2>
      <p>{props.info.age}</p>
    </div>
  )
}





export default App;
