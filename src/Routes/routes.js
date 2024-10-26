import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import NewsAPI from "../Pages/NewsAPI/NewsAPI";
import NewsDetail from "../Pages/NewsAPI/NewsDetail";
import PokemonAPI from "../Pages/PokemonAPI/PokemonAPI";

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                   <Route path="/" element={<Home/>} /> 
                   <Route path="/news-api" element={<NewsAPI/>} />      
                   <Route path="/news-api/:id" element={<NewsDetail />} />
                   <Route path="/pokemon-api" element={<PokemonAPI />} />
                   
            </Route>
        </Routes>
    </BrowserRouter>
  )
};

export default Routing;
