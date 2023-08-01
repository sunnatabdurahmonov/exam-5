import { useContext } from "react";
import { SectionContext } from "./context/Contex";
import { Route, Routes } from "react-router";
import Login from "./component/Login/Login";
import { Home } from "./component/home";
import { Profile } from "./component/Profile";
import Layout from "./component/Layout/Layout";
import { Navigate } from "react-router-dom";
import { ErrorPage } from "./component/ErrorPage";
import { Yangilanish } from "./component/Profile/Yangilanish";
import { ProductId } from "./component/ProductId";
import {Xabarlar} from './component/Profile/Xabarlar'
import { Sozlamalar } from "./component/Profile/Sozlamalar";
import { Hisob } from "./component/Profile/Hisob";
import { Biznes } from "./component/Profile/Biznes";





function App() {
  const {token } = useContext(SectionContext)

    return(
      <Layout>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path="product/:productId" element={<ProductId/>}/>
          <Route path="/login" element={token ? <Navigate to='/'/>  : <Login/>}/>
          <Route path="/profile" element={token ? <Profile/> : <Navigate to='/login'/>}>
            <Route index element={<Yangilanish/>}/>
            <Route path="xabarlar" element={<Xabarlar/>}/>
            <Route  path="hisob" element={<Hisob/>}/>
            <Route path="sozlamalar"  element={<Sozlamalar/>}/>
            <Route path="biznes"  element={<Biznes/>}/>
          </Route>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Layout>
    )
}

export default App
