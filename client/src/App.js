import './App.css';
import Foods from './components/Foods.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import RegisterForm from './components/RegisterForm.js';
import LoginForm from './components/LoginForm.js';

const foods = [   //array sent over as a React prop
  {
    id: 858930,
    title: "Garden Kale and Frozen Blueberry smoothie"
  },
  {
    id: 1111,
    title: "Shrimp Quesadillas with fresh Pico de Gallo"
  },
  {
    id: 5555,
    title: "Chicken Teriyaki with Udon Noodles"
  },
  {
    id: 33333,
    title: "Iced Caramel Latte with Almond Milk"
  },
  {
    id: 22222,
    title: "Hot Pumpkin Spice Latte with Whipped Cream"
  },
  {
    id: 44444,
    title: "Pumpkin Cinnamon scone"
  },
  {
    id: 6662,
    title: "Spicy Garden Salsa with Tortilla Chips"
  },
  {
    id: 12,
    title: "Iced Cold Brew with Lavender Cold Foam <3"
  },
  {
    id: 13,
    title: "Hot Black Coffee"
  }
];


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My Favorite Foods</h1>
      <Foods foods={foods} />  {/*passing the foods array as a React prop */}
      <About />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
