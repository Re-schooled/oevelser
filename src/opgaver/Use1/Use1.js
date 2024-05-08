import Assignment from "../../components/Assignment";

/**
 * Hej Klassekammerat, her er en opgave til dig der omhandler noget Tailwind,
 * 
 * 
 * Forklaring: her skal du lære at bruge Width. Du ser forneden en div der indeholder et "ClassName", opgaven lyder:
 * Opgave:  Du skal give den et ClassName="w-32" derefter skal du se eksemplet.
 * 
 * HUSK: at alle tailwind Class'es skal skrives som ClassName="" 
 * 
 * w-32 er det samme som at skrive dette i css
 * 
 * div{
 *   width: 8rem / 128px 
 * } 
 * 
 */


export default function Use1() {
    return (
        <Assignment id={"use-1"}>
            <section className="flex justify-center items-center bg-blue-500 w-[60%] h-[40%] ">
                <div className="">
                    <p className="bg-white">Jeg er en bred div!</p>
                </div>
            </section>
        </Assignment>
    );
}
