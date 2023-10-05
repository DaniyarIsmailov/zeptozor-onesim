import Footer from "@/components/Footer";
import Advantages from "@/components/Home/Advantages";
import Feedback from "@/components/Home/Feedback";
import Head from "@/components/Home/Head";
import HowDoesItWork from "@/components/Home/HowDoesItWork";
import Offers from "@/components/Home/Offers";
import PaymentMethods from "@/components/Home/PaymentMethods";
import Regions from "@/components/Home/Regions";
import Nav from "@/components/Nav";
import Questions from "@/components/Questions";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Nav />
      <Head />
      <Regions />
      <Advantages />
      <Offers />
      <WhyUs />
      <HowDoesItWork />
      <PaymentMethods />
      <Questions />
      <Feedback />
      <Footer />
    </>
  )
}
