import Assignment from "../../components/Assignment";

/**
 * Hej Klassekammerat, her er en opgave til dig, hvor du kan udforske Tailwind CSS's padding-klasser.
 * 
 * Forklaring: Nedenfor ser du tre farvede bokse inden i en sektion. Disse bokse har allerede en bredde på 4/5 af deres forælder og en fast højde på 22 rem. 
 *             Din opgave er at tilføje plads omkring indholdet i hver af boksene ved at tilføje passende padding.
 * 
 * Opgave:
 * - Brug Tailwind CSS's padding-klasser til at tilføje plads til indholdet i hver af boksene.
 *   1. Den røde boks har en padding på 7 (p-7).
 *   2. Den gule boks har en top-padding på 14 (pt-14).
 *   3. Den grønne boks har en vandret padding på 7 (px-7).
 * 
 * Tip:
 * - I Tailwind CSS's dokumentation kan du finde en liste over padding-klasser og deres effekter. 
 *   Du kan søge efter "Padding" for at se en oversigt over tilgængelige padding-klasser og deres anvendelse.
 * 
 * du kan bare ignorer klasserne bg-red-500, bg-yellow-500 og bg-green-500 det er for at sætte farve på boksene der kommer opgaver med farver senere som forklare det
 * 
 */



export default function Use6() {
    return (
        <Assignment id={"use-6"} >
            <section className="flex bg-black items-center justify-around h-[22rem] w-4/5 text-white">
                <div className="bg-red-500">rød</div>
                <div className="bg-yellow-500">gul</div>
                <div className="bg-green-500">grøn</div>
            </section>
        </Assignment>
    );
}
