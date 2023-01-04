import Header from "./components/Header";
import Products from "./components/Products";
import "./assets/style.css";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

function App() {
  const [basket, setBasket] = useState(0);
  const [isLarge500] = useMediaQuery("(max-width: 500px)");
  
  return (
    <>
      <Header basket={basket} setBasket={setBasket} isLarge500={isLarge500}/>
      <Products setBasket={setBasket} isLarge500={isLarge500}/>
    </>
  );
}

export default App;
