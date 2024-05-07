import Assignment from "../../components/Assignment";
import HeightMessage1 from "../../components/HeightMessage1";

/**
 * Hej Klassekammerat, her er en opgave til dig der omhandler noget Tailwind,
 * 
 * 
 * Forklaring: her skal du lære at bruge Height. Du ser forneden en div der indeholder et "ClassName", opgaven lyder:
 * Opgave:  Du skal give den et ClassName="h-full" derefter skal du se eksemplet.
 * 
 * HUSK: at alle tailwind Class'es skal skrives som ClassName=""
 * HUSK: IGNORER ID OG KOMPONENTET!
 */

export default function Use5() {
    return (
        <Assignment id={"use-5"}>
            <section className="flex justify-center items-center w-[60%] h-[40%] bg-violet-500">
                <div id="height-parent" className="">
                  <HeightMessage1 />
                  </div>
            </section>
        </Assignment>
    );
}
