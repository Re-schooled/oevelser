import Assignment from "../../components/Assignment";

/**
 * 
 * Forklaring: Hvis du skal lave en kasse med samme højde og bredde, har Tailwind CSS en praktisk klasse kaldet "size", der definerer både højde og bredde til det samme. 
 * Du kan læse mere om størrelsesklasser i Tailwind CSS-dokumentationen [her]https://tailwindcss.com/docs/size. (CTRL klik linket)
 * 
 * Opgave:     Ændr de fire divs til at bruge disse forskellige størrelsesklasser.
 *             1. Den første skal have klassen "size-3.5".
 *             2. Den anden skal have klassen "size-10".
 *             3. Den tredje skal have klassen "size-20".
 *             4. Den fjerde skal have klassen "size-36".
 * 
 * Tip:     
 *  - For at løse opgaven skal du erstatte de eksisterende klasser "w-" og "h-" med de angivne størrelsesklasser.
 * 
 */

export default function modify3() {
    return (
        <Assignment id={"modify-3"}>
            <section className="flex justify-between items-center w-1/3 h-[40%] ">
                <div className="bg-blue-500 w-3.5 h-3.5"></div>
                <div className="bg-blue-500 w-10 h-10"></div>
                <div className="bg-red-500 w-20 h-20"></div>
                <div className="bg-pink-500 w-36 h-36"></div>
            </section>
        </Assignment>
    )
}
