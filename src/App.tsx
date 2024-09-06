import { useAuth } from "./components/context/UseAuth";
import Products from "./components/Products";

import SignUp from "./components/SignUp";

function App() {
  const { session } = useAuth();
  return <div>{!session ? <SignUp /> : <Products />}</div>;
}

export default App;
