import Message from "./Message";

export function Use7Message1() {
    return (
        <Message 
            condition="mr-4" 
            elementId="red" 
            errorMessage="Min margin er forkert :(" 
            successMessage="Min margin er rigtig :D" 
        />
    )
}

export function Use7Message2() {
    return (
        <Message 
            condition="ml-4 mr-4" 
            elementId="yellow" 
            errorMessage="Min margin er forkert :(" 
            successMessage="Min margin er rigtig :D" 
        />
    )
}

export function Use7Message3() {
    return (
        <Message 
            condition="ml-4" 
            elementId="green" 
            errorMessage="Min margin er forkert :(" 
            successMessage="Min margin er rigtig :D" 
        />
    )
}