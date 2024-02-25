import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchProducts} from "../services/fetchProducts";
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "../store/slices/fetchDataSlice";
import { setProducts } from "../store/slices/productsSlice";


export const useFetchProducts = () => {

    const dispatch = useDispatch();
    
      useEffect(() => {
    
        dispatch(fetchDataStart()); //aviso de que está cargando
        fetchProducts() //fetch a DB
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          dispatch(fetchDataSuccess(data)); //avisa fin de carga con exito
          dispatch(setProducts(data))
        })
        .catch((error) => {
          dispatch(fetchDataFailure(error)); //avisa error en la carga
        });
      }, [dispatch]);

      console.log("Saliendo del hook que no devuelve nada")

}
