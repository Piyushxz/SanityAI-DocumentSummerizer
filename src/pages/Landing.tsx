import { Button } from "../components/Button"
import { Navbar } from "../components/Navbar"
import Features from "../components/Featurs"
  
export const Landing = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center mt-24">
                <div className="w-full md:w-1/2 text-center">
                    <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-6xl text-white">
                        Document{" "}
                        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                            Summerizer
                        </span>{" "}
                        Using RAG.
                    </h1>
                    <h3 className="font-primary tracking-tighter font-bold text-xl md:text-2xl mt-4 text-white">
                        Summarize long documents with the power of RAG technology, blending advanced retrieval and generation.
                    </h3>
                </div>
                <div className="mt-6">
                <Button variant="primary" size="lg" text="Start Now"/>

                </div>
            </div>

            <div className="mt-24">
                <div className="flex justify-center">
                <h1 className="font-primary tracking-tighter font-extrabold text-4xl md:text-6xl text-white">
                Features
                </h1>
                </div>

            <Features/>
            </div>
        </div>
    )
}