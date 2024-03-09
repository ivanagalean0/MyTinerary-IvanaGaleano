import Header from "../components/Header";
import Footer from "../components/Footer";


function Cities() {
    return (
        <div className="flex flex-col grow min-h-[100vh] bg-slate-300">
            <Header></Header>
            <main className="flex grow items-center justify-center bg-slate-500">
                <h1 className=" font-bold text-2xl">
                    ALL THE CITIES YOU CAN VISIT!
                </h1>
            </main>
            <Footer className=""></Footer>
        </div>
        
    )
}

export default Cities;