import React, { useEffect, useState } from 'react';

export default function SpaceX4Modify() {
    const [hasSpaceX4, setHasSpaceX4] = useState(false);

    useEffect(() => {
        function checkSpaceX4() {
            const ulElement = document.querySelector('ul.space-x-4');
            setHasSpaceX4(ulElement !== null);
        }

        checkSpaceX4();

        const observer = new MutationObserver(checkSpaceX4);
        observer.observe(document.body, { subtree: true, childList: true, attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <p className="bg-white text-center h-16 p-4">
            {hasSpaceX4 ? "Jaa! Vi har alle space-x-4 nu :D" : "Vi skal alle tre have space-x-4"}
        </p>
    );
}
