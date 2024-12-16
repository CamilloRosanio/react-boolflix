// COMPONENTS IMPORT
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

// COMPONENT EXPORT

export default function HomePage() {
    return <>
        <div className="wrapper debug">
            <Header />

            <Main />

            <Footer />
        </div>
    </>
}