import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/otros" element={1}></Route>
          <Route path="/iniciosesion" element={2}></Route>
          <Route path="/registro" element={3}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
