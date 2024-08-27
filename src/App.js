import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/Map";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter basename='/olamap'>

    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Map/>} />
      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
