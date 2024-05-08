import Message from "./Message";

export default function Modify1Message() {
    return (
        <Message 
            condition="w-full" 
            elementId="monkey-parent" 
            errorMessage="Jeg er en Abe, der mangler en banan." 
            successMessage="Jeg er en abe i fuld bredde, og jeg har en banan." 
        />
    )
}