import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";
import BookComponent from "./components/Books";
import CarComponent from "./components/Car";
import RestaurantComponent from "./components/Restaurant";
import CafeComponent from "./components/Cafe";
import VehicleComponent from "./components/Vehicle";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/book">Books</Link>
          </li>
          <li>
            <Link to="/car">Cars</Link>
          </li>
          <li>
            <Link to="/vehicle">Vehicles</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/cafe">Cafe</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/book" element={<BookComponent />}></Route>
        <Route exact path="/car" element={<CarComponent />}></Route>
        <Route exact path="/restaurants" element={<RestaurantComponent />}></Route>
        <Route exact path="/restaurants/:id" element={<RestaurantComponent />}></Route>
        <Route exact path="/cafe" element={<CafeComponent />}></Route>
        <Route exact path="/cafe/:id" element={<CafeComponent />}></Route>
        <Route exact path="/vehicle" element={<VehicleComponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
