import { useState , useContext } from "react";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-28 p-2"
        src="https://img.freepik.com/premium-photo/disguised-foodie-cat-imagine-mischievous-cat-cleverly-disguised-as-food-critic-sneaking-into-restaurants-sample-finest-dishes-leaving-humorous-reviews-illustration-generative-ai_850000-19002.jpg"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const isOnline = useOnline();

  // if(!isOnline) {
  //   return(<h1>"🟢"</h1>)
  // }

  // console.log("render");

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  // subscribing to the stores using selectors 
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems);

  

  return (
    <div className="flex justify-between bg-orange-200 shadow-md" >
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <Link to= "/cart"><li className="px-2 font-bold">Cart({cartItems.length}) </li></Link>
          <li className="ml-2 pl-1">{!isOnline ? <h1 className="font-bold ">Online status:✅</h1> : <h1>⚪</h1>}</li>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>LOG OUT</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>LOG IN </button>
      )}
    </div>
  );
};

export default Header;
