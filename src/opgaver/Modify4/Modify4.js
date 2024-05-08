import Assignment from "../../components/Assignment";
import SpaceX4Modify from "../../components/Message/SpaceX4Modify";

/**
 * Forklaring: I denne opgave ser du nogle divs med forskellige farver.
 * 
 * Opgave: 
 * 
 * HINT: Tilføj "space-x-4" klassen til hver div.
 */

export default function modify4() {
    return (
        <Assignment id={"modify-4"}>
            <section className="flex justify-center items-center bg-purple-400 w-[60%] h-[40%] ">
                <div id="modify4-parent" className="p-8 m-8 bg-white">
                    <div className="flex justify-around space-x-4">
                        <div className="size-24 bg-red-500"></div>
                        <div className="size-24 bg-green-500"></div>
                        <div className="size-24 bg-blue-500"></div>
                    </div>
                </div>
                <SpaceX4Modify />
            </section>
        </Assignment>
    )
}