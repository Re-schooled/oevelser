import React, { useEffect, useState } from 'react';

export default function Message({condition, elementId, errorMessage, successMessage}) {
    const [conditionState, setConditionState] = useState(false);

    useEffect(() => {
        const element = document.getElementById(elementId);
        setConditionState(element.className.includes(condition));
    }, [elementId, condition]);

    return (
        <p>
            {conditionState ? successMessage : errorMessage}
        </p>
    );
}