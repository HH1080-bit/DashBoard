import TopBar from "./Componants/Topbar/Topbar";
import SideBar from "./Componants/SideBar/SideBar";
import './app.css'
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Pages/userList/userList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/newProduct/newProduct";

function App() {
  return (
   <Router>
      <TopBar/>
      
      <div className="container">
        <SideBar />
       <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="users" element={<UserList />}/>
        <Route path="/user/:userID" element={<User />}/>
        <Route path="/newUser" element={<NewUser />}/>
        <Route path="Products" element={<ProductList />}/>
        <Route path="/product/:productID" element={<Product />}/>
        <Route path="/newProduct" element={<NewProduct />}/>

       </Routes>

      </div>
      </Router>
  );
}

export default App;
