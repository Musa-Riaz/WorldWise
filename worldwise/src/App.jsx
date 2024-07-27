import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage.jsx";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import LoginPage from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import { useState, useEffect } from "react";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { Navigate } from "react-router-dom";
function App() {
  const [cities, setCitites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchCitites() {
      try {
        const response = await fetch("http://localhost:8000/cities");
        const data = await response.json();
        setCitites(data);
      } catch (err) {
        console.log(err);
      }
      finally{
        setLoading(false);
      }
    }

    fetchCitites();
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route index element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate replace to="cities" />}/>
        <Route path="cities" element={<CityList cities={cities} loading={loading}/>} />
        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList cities={cities} loading={loading} />} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
