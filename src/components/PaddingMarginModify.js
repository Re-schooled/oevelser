import React, { useEffect, useState } from 'react';

export default function PaddingMarginModify() {
    const [isPaddingMargin, setIsPaddingMargin] = useState(false);

    useEffect(() => {
        const parentElement = document.getElementById('modify3-parent');
        const children = parentElement.querySelectorAll('.bg-red-500, .bg-green-500, .bg-blue-500');

        let hasPaddingMargin = true;
        children.forEach(child => {
            if (!child.className.includes('p-4') || !child.className.includes('m-4')) {
                hasPaddingMargin = false;
            }
        });

        setIsPaddingMargin(hasPaddingMargin);
    }, []);

    return (
        <p className="bg-white text-center h-16 p-4">
            {isPaddingMargin ? "Jaa! vi har fået Margin og Padding nu :D " : "Vi skal alle 3 have noget Padding og Margin"}
        </p>
    );
}
