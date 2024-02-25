import { useNavigate } from "react-router";
import fetchUserLogin from "../services/fetchUserLogin";
import { setUserLoggedIn } from "../store/slices/userSlice";



export const useUserLogin = (email, password) => {

    const navigate = useNavigate();

    fetchUserLogin(email, password)
            .then(response => {
            if (!response.ok) {
                throw new Error('Ocurrió un error al realizar la solicitud.');
            }
                return response.json();
            })
            .then(data => {
            
                localStorage.setItem("token", data["token"])
                
                setUserLoggedIn();
                
                return navigate("/home")
            })
            .catch(error => {
            console.error('Error:', error);
            });

}