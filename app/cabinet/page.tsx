import Breadcrump from "@/components/Breadcrump";
import MyESIMS from "@/components/Cabinet/MyESIMS";
import MyOrders from "@/components/Cabinet/MyOrders";
import PaymentMethods from "@/components/Cabinet/PaymentMethods";
import Profile from "@/components/Cabinet/Profile";
import Sidebar from "@/components/Cabinet/Sidebar";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Caabinet() {
    return (
        <>
            <Nav />
            <Breadcrump crumps={['Главная', 'Личный  кабинет']} />
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='sim' />
                <MyESIMS esims={false} />
            </div>
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='sim' />
                <MyESIMS esims={true} />
            </div>
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='id' />
                <Profile />
            </div>
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='co' />
                <PaymentMethods />
            </div>
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='bag' />
                <MyOrders orders={false} />
            </div>
            <div className='w-full px-20 sm:px-80 flex gap-20 mt-40 mb-40'>
                <Sidebar active='bag' />
                <MyOrders orders={true} />
            </div>
            <Footer />
        </>
    )
}