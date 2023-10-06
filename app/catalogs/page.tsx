import Breadcrump from "@/components/Breadcrump";
import Head from "@/components/Catalogs/Head";
import Regions from "@/components/Catalogs/Regions";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Catalogs() {
    return (
        <>
            <Nav />
            <Head />
            <Breadcrump crumps={['Главная', 'Самые популярные']} />
            <Regions />
            <Footer />
        </>
    )
}