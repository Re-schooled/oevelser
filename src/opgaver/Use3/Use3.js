import Assignment from "../../components/Assignment";

/**
 *  
 * Forklaring: her skal du vise brugen af Width. Du ser forneden en div der indeholder et "ClassName", opgaven lyder:
 * Opgave:  Du skal give den et ClassName="w-full" derefter skal du se eksemplet.
 * 
 * HUSK: Du skal ikke ændre i andet end ClassName.
 * 
 * w-full er det samme som at skrive dette i css
 * 
 * div{
 *   width: 100%;
 * } 
 */

export default function Use3() {
    return (
        <Assignment id={"use-3"}>
            <section className="flex justify-center items-center w-[60%] h-[40%] bg-red-500">
                <div className="">
                  <p className="bg-blue-200 p-4 text-center">Jeg er en bred div!</p>
                  </div>
            </section>
        </Assignment>
    );
}
