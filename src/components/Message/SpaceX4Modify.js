import React, { useEffect, useState } from 'react';

export default function SpaceX4Modify() {
    const [hasSpaceX4, setHasSpaceX4] = useState(false);

    useEffect(() => {
        const parentElement = document.getElementById('modify4-parent');
        const children = parentElement.querySelectorAll('.size-24');

        let allHaveSpaceX4 = true;
        children.forEach(child => {
            if (!child.className.includes('space-x-4')) {
                allHaveSpaceX4 = false;
            }
        });

        setHasSpaceX4(allHaveSpaceX4);
    }, []);

    return (
        <p className="bg-white text-center h-16 p-4">
            {hasSpaceX4 ? "Jaa! Vi har alle space-x-4 nu :D " : "Vi skal alle tre have space-x-4"}
        </p>
    );
}