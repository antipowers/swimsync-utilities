import { NavBar } from "../components/navBar"

export const Home = () => {
    return (
        <div>
            <NavBar />
            
            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10">
                <p className="text-3xl text-black-700 font-bold mb-5 text-center">SwimSync</p>
                <p className="text-black-500 text-lg text-center">Superior Swimming Utilities</p>
                <p className="text-black-500 text-lg text-center">by Operator Media (OPM)</p>
            </div>

            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10">
                <p className="text-2xl text-black-700 mb-5 text-center">Time Converter</p>
                <button>Converter</button>
            </div>
            
            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10">
                <p className="text-2xl text-black-700 mb-5 text-center">Articles</p>
            </div>
            
            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10">
                <p className="text-2xl text-black-700 mb-5 text-center">Coaching Tools</p>
            </div>
            
            <div className="container mx-auto bg-green-400 rounded-xl shadow border p-8 m-10">
                <p className="text-2xl text-black-700 mb-5 text-center">API</p>
            </div>
        </div>
    )
}