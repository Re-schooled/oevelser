import Assignment from "../../components/Assignment";
import HeightMessage2 from "../../components/HeightMessage2";

/**
 * Hej Klassekammerat, her er en opgave til dig der omhandler noget Tailwind,
 * 
 * 
 * Forklaring: her skal du lære at bruge Height. Du ser forneden en der indeholder et "ClassName", opgaven lyder:
 * Opgave:  Du skal give den et ClassName="h-32" derefter skal du se eksemplet.
 * 
 * HUSK: at alle tailwind Class'es skal skrives som ClassName="" 
 * 
 * h-32 er det samme som at skrive dette i css
 * div{
 *   height: 8rem / 128px 
 * } 
 * 
 */

export default function Use4() {
    return (
        <Assignment id={"use-4"}>
            <section className="flex justify-center items-center w-[60%] h-[40%] bg-lime-500">
                <div className="w-34">
                  <HeightMessage2 />
                </div>
            </section>
        </Assignment>
    );
}
