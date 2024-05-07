import Assignment from "../../components/Assignment";
import MonkeyMessage from "../../components/MonkeyMessage";

/**
 * Hej Klassekammerat,
 * 
 * Forklaring: Åh nej! Aberne har pillet ved koden, og nu er div'en blevet for smal. 
 *             Hvis du ikke retter den til får aberne ikke deres bananer!
 * 
 * Opgave:     Du skal give den et width på 32rem
 * 
 * BONUS-TIP: Nu skal du til en opgave hvori du får en lille snydekode
 *            Du kan nemlig selv bestemme hvilke størrelser du vil bruge i tailwind, nemlig ved at bruge [],
 *            Hvis du kigger på section, kan du se at vi bruger [], så får at bruge rem, hvad tror du så du skal gøre?
 * 
 * du skal bare ignore id´et og MonkeyMessage componentet
 */


export default function modify1() {
    return (
        <Assignment id={"modify-1"}>
            <section className="flex justify-center items-center bg-blue-500 w-[60%] h-[40%] ">
                <div id="monkey-parent" className="w-32">
                    <MonkeyMessage />
                </div>
            </section>
        </Assignment>
    )
}