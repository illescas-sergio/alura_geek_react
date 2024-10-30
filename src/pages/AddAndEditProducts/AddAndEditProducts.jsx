
import styles from "./AddAndEditProducts.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postNewProducts } from "../../services/postNewProduct.js";
import { fetchProductDetails } from "../../services/fetchProductDetails.js";
import { updateProduct } from "../../services/updateProduct.js";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../services/fetchProducts.js";
import { setProducts } from "../../store/slices/productsSlice.js";
import { fixedPrice } from "../../helpers/fixedPrice.js";

export default function AddAndEditProducts() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();


    const [state, setState] = useState({
        product_name: "",
        price: "",
        category: "",
        product_description: "",
    });

    const [image, setImage] = useState(null);

    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        if (id) {
            
            setIsEditMode(true);
            fetchProductDetails(id)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setState({
                        product_name: data.product_name,
                        price: data.price,
                        category: data.category,
                        product_description: data.product_description
                    });
                    setImage(data.product_image)
                })
                .catch(err => console.log(err));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleChange = (e) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            updateProduct(id, state.product_name, fixedPrice(state.price), state.category, state.product_description, image)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    navigate("/myProducts");
                })
                .then(() => {
                    fetchProducts()
                        .then(resp => resp.json())
                        .then(data => {
                            dispatch(setProducts(data));
                        });
                })
                .catch(err => console.log(err));
        } else {
            postNewProducts(state.product_name, fixedPrice(state.price), state.category, state.product_description, image)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
                    navigate("/addProductSuccess");
                })
                .then(() => {
                    fetchProducts()
                        .then(resp => resp.json())
                        .then(data => {
                            dispatch(setProducts(data));
                        });
                })
                .catch(err => console.log(err));
        }
    }
    
    return (
        <div className={styles.addProducts}>
            <div className={styles.addProducts__div}>
                <form className={styles.addProducts__form} name="form" onSubmit={handleSubmit} id="addProductForm" encType="multipart/form-data">
                    <h4 className={styles.addProducts__title}>{isEditMode ? 'Editar producto' : 'Agregar producto'}</h4>
                    
                    <input
                        className={styles.addProducts__input}
                        type="text"
                        name="product_name"
                        placeholder="Nombre del producto"
                        value={state.product_name}
                        required
                        onChange={handleChange}
                    />
                    <input
                        className={styles.addProducts__input}
                        type="text"
                        name="price"
                        placeholder="Precio del producto"
                        value={state.price}
                        required
                        onChange={handleChange}
                    />
                    <input
                        className={styles.addProducts__input}
                        type="text"
                        name="category"
                        placeholder="Categoría"
                        value={state.category}
                        required
                        onChange={handleChange}
                    />
                    <textarea
                        className={styles.addProducts__input}
                        type="text"
                        name="product_description"
                        placeholder="Descripción del producto"
                        value={state.product_description}
                        onChange={handleChange}
                    />
                    
                    <input className={styles.addProducts__fileInput} id="product_image" type="file" name="product_image" placeholder="Puedes subir una imagen del producto" onChange={handleImageChange} />
                    
                    <button type="submit" className={styles.profile__buttonLogin}>
                        {isEditMode ? 'Actualizar' : 'Agregar'}
                    </button>
                </form>
                <p className={styles.profile_crearCuenta}><Link to="/myProducts">Cancelar</Link></p>
            </div>
        </div>
    );
}

//Explicación de los cambios:
// Detección del Modo Edición:

// Se usa useParams para obtener el productId desde la URL.
// Si productId está presente, se cambia el modo a edición y se cargan los datos del producto existente.
// Cargar Datos:

// Se llama a fetchProductById para obtener los datos del producto y llenar el formulario.
// Manejo del Formulario:

// handleSubmit ahora maneja tanto la creación como la actualización dependiendo de isEditMode.
// Se actualiza el botón para que diga "Agregar" o "Actualizar" según el modo.
// Lógica de Renderizado:

// El título del formulario y el texto del botón cambian según si estamos en modo creación o edición.





