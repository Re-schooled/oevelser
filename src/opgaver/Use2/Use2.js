
import Assignment from "../../components/Assignment";

/**
* Her er en opgave om bredden (width).
* Opgave: Tilføj ClassName="w-33" til den givne div. Efterfølgende skal du se eksemplet.
*
* Hvis du ikke ser nogen ændring i bredden, så gå ind i Tailwind-dokumentationen og find ud af, hvorfor ændringen ikke træder i kraft.
* Denne opgave giver dig mulighed for at undersøge, hvordan Tailwind CSS fungerer og hvordan du fejlfinder, hvis klasserne ikke har den ønskede effekt. 
*
* TAILWIND DOKUMENTATION: https://tailwindcss.com/docs/width (CTRL klik linket)
*
* Skriv her; hvorfor: 
*
*/

export default function Use2() {
    return (
        <Assignment id={"use-2"}>
            <section className="flex justify-center items-center bg-cyan-500 w-[60%] h-[40%] ">
                <div className="">
                    <p className="bg-white">Jeg er en bred div!</p>
                </div>
            </section>
        </Assignment>
    );
}
