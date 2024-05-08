import Assignment from "../../components/Assignment";
import SpaceX4Modify from "../../components/Message/SpaceX4Modify";

/**
 * Velkommen til en farverig opgave!
 * 
 * Denne opgave handler om at skabe forbindelser mellem farver.
 * 
 * Opgave:
 * Tilføj "space-x-4" klassen til ul-elementet for at skabe en rummelig separation mellem farverne.
 * 
 * Ekstra kommentar: 
 * "space-x-4" klassen tilføjer en lille mængde mellemrum mellem elementerne, hvilket gør dem mere æstetisk behagelige at se på.
 * Denne klasse er ofte brugt i webudvikling for at justere afstanden mellem elementer i en vandret retning, hvilket kan forbedre layoutet og læsbarheden.
 * Nogle eksempler på, hvor "space-x-4" klassen kan være nyttig, inkluderer at skabe lige afstand mellem navigationsmenuelementer, knapper eller billedegrupper på en hjemmeside.
 */

export default function modify5() {
    return (
        <Assignment id={"modify-5"}>
            <section className="flex justify-center items-center bg-purple-400 w-[70%] h-[40%] ">
                <div id="modify5-parent" className="p-8 m-8 bg-white">
                    <ul className="flex justify-around">
                        <li className="size-24 bg-red-500"></li>
                        <li className="size-24 bg-green-500"></li>
                        <li className="size-24 bg-blue-500"></li>
                    </ul>
                </div>
                <SpaceX4Modify />
            </section>
        </Assignment>
    )
}