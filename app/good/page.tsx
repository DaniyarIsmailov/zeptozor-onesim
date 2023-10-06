import Breadcrump from "@/components/Breadcrump";
import Footer from "@/components/Footer";
import HowDoesItWork from "@/components/Good/HowDoesItWork";
import Info from "@/components/Good/Info";
import Map from "@/components/Good/Map";
import Reviews from "@/components/Good/Reviews";
import Feedback from "@/components/Home/Feedback";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import WhyUs from "@/components/WhyUs";

export default function Good() {
    return (
        <>
            <Nav />
            <Breadcrump crumps={['Главная', 'Самые популярные', 'Региональные eSIM', 'eSIM для Европы']} />
            <Info id='europe' />
            <Map />
            <HowDoesItWork region='europe' />
            <WhyUs region='для Европы' />
            <Questions />
            <Feedback />
            <Reviews />
            <Footer />
        </>
    )
}