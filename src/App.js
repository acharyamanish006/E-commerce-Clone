import "@fontsource/poppins";
import "./App.css"
import { Navbar } from "./comopnent/navbar";
import MainPage from "./comopnent/MainPage";
import Footer from "./comopnent/Footer";
import Shop from "./comopnent/Shop";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page404 from "./comopnent/Page404";
import GraphicCard from "./comopnent/GraphicCard";



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route index path="/" element={<MainPage/>} />
          <Route index path="/MainPage" element={<MainPage/>} />
          <Route path="/Shop" element={<Shop name="NEW YEAR OFFER"/>} /> 
          <Route path="/myWishList" element={<Page404/>} /> 
          <Route path="/myCart" element={<Page404/>} /> 
          <Route path="/productDetails" element={<GraphicCard/>} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
