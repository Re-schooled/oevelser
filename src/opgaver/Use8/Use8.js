import Assignment from "../../components/Assignment";
import PaddingMarginModify from "../../components/PaddingMarginModify";


/**
 * Forklaring: I denne opgave, ser du nogle div's med nogle forskellige farver.
 * 
 * Opgave: I denne opgave skal du prøve at bruge både padding og margin på samme tid, du vil allerede kunne se at de har,
 * lidt forskellige farver og noget højde og bredde, så nu kan du også se at className bliver længere og længere nu mere styling vi tilføjer.
 * 
 * HINT: Prøv med tallet 4.
 */

export default function use8() {
    return (
        <Assignment id={"use-8"}>
            <section className="flex justify-center items-center bg-purple-400 w-[60%] h-[40%] ">
                <div id="modify3-parent" className="p-8 m-8 bg-white">
                    <div className="flex justify-around">
                        <div className="w-24 h-24 bg-red-500"></div>
                        <div className="w-24 h-24 bg-green-500"></div>
                        <div className="w-24 h-24 bg-blue-500"></div>
                    </div>
                </div>
                    <PaddingMarginModify />
            </section>
        </Assignment>
    )
}
