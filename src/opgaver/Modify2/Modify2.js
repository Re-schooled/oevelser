import Assignment from "../../components/Assignment";
import HeightMessageModify from "../../components/HeightMessageModify";

/**
 * 
 * Forklaring: Åh nej! Aberne har pillet ved koden, og nu er div'en blevet for lav. 
 *             Hvis du ikke retter den til, kan aberne ikke nå deres bananer!
 * 
 * Opgave:     Du skal give den en højde på 32rem
 * 
 * 
 * Du skal bare ignorere id'et og MonkeyMessage-komponentet.
 */

export default function modify2() {
    return (
        <Assignment id={"modify-2"}>
            <section className="flex justify-center items-center bg-blue-500 w-[60%] h-[40%] ">
                <div id="modify2-parent" className="h-32 ">
                    <HeightMessageModify />
                </div>
            </section>
        </Assignment>
    )
}
