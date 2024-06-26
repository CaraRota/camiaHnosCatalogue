import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ProductsProvider } from "./components/context/ProductsContext";

function App() {
    return (
        <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
            <div className='absolute bottom-0 -z-10 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#a1bad8,transparent)]'></div>
            <main>
                <ProductsProvider>
                    <Navbar />
                    <Homepage />
                </ProductsProvider>

                {/* <Footer /> */}
            </main>
        </div>
    );
}

export default App;
