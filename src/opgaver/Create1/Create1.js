import Assignment from "../../components/Assignment";
import Dude from "./images/dude.jpeg"
import Resultat from "./images/resultat.png"

/**
 * 
 * Her er nogle lede tråde! 
 * 
 * Du har været igennem blod sved og tårer for at komme til dette punkt! 
 * 
 * Men nu skal du bruge hvad du har lært ! 
 * 
 * I denne her opgave er der nemlig en masse elementer der mangler margin padding og højde bredde, space-between og size! 
 * Og det skal du elev klarer! 
 * 
 * Du skal dog ikke pille ved den styling der er i section og den nederste div på siden ved navn niks-pille
 * 
 * se billede resultat på siden når du starter den <3
 */


export default function create1() {
    return (
        <Assignment id={"create-1"} className="p-4">
            <section className="flex max-w-[25rem] max-h-[25rem] gap-4">
                <h1 className="bg-blue-500 text-white">h</h1>
                <h2 className="bg-green-500 text-white">e</h2>
                <p className="bg-red-500 text-white">j</p>
                <ul className="bg-yellow-500 text-white flex items-center justify-center">
                    <li className="bg-gray-800 text-white rounded-md">1</li>
                    <li className="bg-gray-800 text-white rounded-md">2</li>
                    <li className="bg-gray-800 text-white rounded-md">3</li>
                    <li className="bg-gray-800 text-white rounded-md">4</li>
                </ul>
                <div className="bg-purple-500 text-center text-white">
                    <p className="text-lg font-semibold">kender du ham </p>
                    <p className="text-lg font-semibold">til højre?</p>
                </div>
                <img src={Dude} alt="" className="aspect-auto rounded-full" />
            </section>
            <div className="niks-pille text-center">
            <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 text-transparent bg-clip-text animate-pulse decoration-solid">Resultat</h1>
                <img src={Resultat} alt="" className="w-120 h-120 mx-auto rounded-md" />
            </div>
        </Assignment>
    )
}


