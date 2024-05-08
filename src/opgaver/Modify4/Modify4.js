import Assignment from "../../components/Assignment";
import Resultalt from "./resultalt.jpg";


/**
 * 
 * Forklaring: I Tailwind CSS kan du anvende padding og margin på forskellige HTML-elementer ved hjælp af de relevante klasser. 
 * Du kan læse mere om padding- og marginklasser i Tailwind CSS-dokumentationen [her](https://tailwindcss.com/docs/padding) og [her](https://tailwindcss.com/docs/margin).
 * 
 * Opgave:     
 *             1. Overskrift: <h1> padding 4 og margin top og bottom 4
 *             2. Afsnit: <p> padding left og right 2 og margin top og bottom 6
 *             3. Liste: <ul> padding 4 rem og margin left og right 4 rem
 *             3. punkt 1 <li> margin left 2.5
 *             3. punkt 2 <li> margin left 6
 *             3. punkt 3 <li> margin left 8
 * 
 */

export default function modify4() {
    return (
        <Assignment id={"modify-4"}>
            <section className="flex flex-col items-center text-white bg-rose-400 p-4">
                <h1 className="bg-blue-500 pl-10 mx-8">Dette er en overskrift</h1>
                <p className="bg-orange-400 p2- mr-20">Dette er et afsnit med lidt tekst.</p>
                <ul className="bg-red-500 ml-[50%] py-3.4">
                    <li className="mr-6">Punkt 1</li>
                    <li className="my-10">Punkt 2</li>
                    <li className="p-8">Punkt 3</li>
                </ul>
            </section>
            <div className="flex flex-col h-[40%] text-center">
                    <h3 className="font-bold text-2xl">Resultalt</h3>
                    <img src={Resultalt} alt="Et billede" className="h-[60%]" />
                </div>s
        </Assignment>
    )
}
