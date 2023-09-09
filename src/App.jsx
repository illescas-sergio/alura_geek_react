import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './store/slices/dataSlice.js';

import Home from "./Components/Home/Home.jsx";


function App() {

  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const data = useSelector((state) => state.data);

  useEffect(() => {
    // Dispara la acción para indicar que la solicitud está en curso
    dispatch(fetchDataStart());

    // Realiza la solicitud a la API (reemplaza 'URL_DE_LA_API' con la URL real)
    fetch("http://localhost:8000/products/")
      .then((response) => response.json())
      .then((data) => {
        // Dispara la acción de éxito con los datos de la API
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        // Dispara la acción de error en caso de fallo
        dispatch(fetchDataFailure(error));
      });
  }, [dispatch]);


  return (
    <Home />
  );
}

export default App;


