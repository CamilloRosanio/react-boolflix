// COMPONENTS IMPORT
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardsList from "../components/CardsList";

// COMPONENT EXPORT

export default function HomePage() {
    return <>
        <div className="wrapper debug">
            <Header />

            <main>
                <CardsList sectionTitle='Movies' />
                <CardsList sectionTitle='Series' />
            </main>

            <Footer />
        </div>
    </>
}