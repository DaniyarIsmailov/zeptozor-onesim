import AuthConfirm from "@/components/AuthConfirn";
import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Auth() {
    return (
        <>
            <div className='w-full h-screen flex flex-col'>
                <Nav />
                <div className='w-full h-full px-20 flex items-center justify-center'>
                    <AuthConfirm />
                </div>
            </div>
            <Footer />
        </>
    )
}