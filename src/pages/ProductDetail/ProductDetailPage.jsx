import Main from "../../Components/Main/Main";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SimilProds from "../../Components/SimilProds/SimilProds";





export default function ProductDetail(){    

    return (
        <>
            <Header />
            <Main>
                <SimilProds />
            </Main>
            <Footer />
        </>
       
    )
}