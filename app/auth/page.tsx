import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Auth() {
    return (
        <>
            <div className='w-full h-screen flex flex-col'>
                <Nav />
                <div className='w-full h-full flex bg-black items-center justify-center'>
                    <AuthForm />
                </div>
            </div>
            <Footer />
        </>
    )
}