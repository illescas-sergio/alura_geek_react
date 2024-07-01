import { useParams } from "react-router";
import ShowSection from "../../Components/ShowSection/ShowSection";
import styles from "./Categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCategory } from "../../store/slices/productsSlice";
import { fetchProductCategories } from "../../services/fetchProductCategories";


// eslint-disable-next-line react/prop-types
export default function Categories({product_category = null}){

    const dispatch = useDispatch()

    const {category} = useParams();

    const {selectedCategory} = useSelector(state => state.products)

    const {id} = useParams();
    

    useEffect(() => {
        if(!category && product_category){
            fetchProductCategories(product_category)
            .then(res => res.json())
            .then(data => {
                dispatch(setCategory(data))
            })
            .catch(err => console.log(err))
        }
    }, [dispatch, product_category, category])


    return (
        <main className={styles.productos}>
            <ShowSection sectionId={product_category || category} products={selectedCategory} product_id={id} />
        </main>
    )
}