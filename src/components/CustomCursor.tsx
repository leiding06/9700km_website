// components/CustomCursor.tsx - 保持原样
'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };


        /**
         * Check if the mouse is over a link or button element.
         * @param {MouseEvent} e - The mouse event.**/        
        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement) {
                setIsHovering(e.target.tagName === 'A' || e.target.tagName === 'BUTTON');
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div 
            className={`cursor-glow ${isHovering ? 'hover' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}