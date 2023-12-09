import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListEmployee } from "./components/ListEmployee";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployee />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
            <Route
              path="/update-employee/:id"
              element={<UpdateEmployeeComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
