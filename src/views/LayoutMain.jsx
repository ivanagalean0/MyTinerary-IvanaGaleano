import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';



const LayoutMain = ({children}) => {
    return (
        <div className='flex flex-col w-full min-h-screen  text-black bg-slate-300'>

            <Header />
            
            <Hero />
            {children}

            <Footer />


        </div>
        
    )
}

export default LayoutMain;