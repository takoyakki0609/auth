import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
