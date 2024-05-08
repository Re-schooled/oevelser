import Assignment from "../../components/Assignment";
import { Use7Message1, Use7Message2, Use7Message3 } from '../../components/Message/Use7Message';

/**
 * Hej Klassekammerat, nu skal du udforske Tailwind CSS's margin-klasser.
 * 
 * Forklaring: Nedenfor ser du tre farvede bokse igen.
 *             Din opgave er at tilføje plads mellem boksene ved at tilføje passende margin.
 * 
 * Opgave:
 * - Brug Tailwind CSS's margin-klasser til at tilføje plads mellem hver af boksene.
 *   1. Den røde boks skal have en højre margin på 4. (mr-4)
 *   2. Den gule boks skal have en venstre margin på 4 og en højre margin på 4. (ml-4 mr-4)
 *   3. Den grønne boks skal have en venstre margin på 4. (ml-4)
 * 
 * Tip:
 * - I Tailwind CSS's dokumentation kan du finde en liste over margin-klasser og deres effekter. 
 *   Du kan søge efter "Margin" for at se en oversigt over tilgængelige Margin-klasser og deres anvendelse.
 * 
 */

export default function Use7() {
    return (
        <Assignment id={"use-7"} >
            <section className="flex bg-black items-center justify-center h-[22rem] w-4/5 text-white">
                <div id="red" className="flex bg-red-500 h-[40%] items-center">
                    <Use7Message1 />
                </div>
                <div id="yellow" className="flex bg-yellow-500 h-[40%] items-center">
                    <Use7Message2 />
                </div>
                <div id="green" className="flex bg-green-500 h-[40%] items-center">
                    <Use7Message3 />
                </div>
            </section>
        </Assignment>
    );
}