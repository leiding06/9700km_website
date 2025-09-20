"use client";

import React, { useRef, useState } from "react";

type Piece = {
    id: string;
    src: string; // image source
    x: number;
    y: number;
    width: number;
    height: number;
    draggable?: boolean;
};

const initialPieces: Piece[] = [
    { id: "p1", src: "/tangram-pieces/bluePurple.png", x: 20, y: 20, width: 148.564, height: 190.500 },
    { id: "p2", src: "/tangram-pieces/green.png", x: 20, y: 220, width: 113.132, height: 254.279 },
    { id: "p3", src: "/tangram-pieces/orange.png", x:350, y: 550, width: 142.213, height: 63.752 },
    { id: "p4", src: "/tangram-pieces/darkPink.png", x: 320, y: 20, width: 148.044, height: 61.909 },
    { id: "p5", src: "/tangram-pieces/lightGrey.png", x: 80, y: 480, width: 181.710, height: 131.343 },
    { id: "p6", src: "/tangram-pieces/yellow.png", x: 600, y: 0, width: 189.971, height: 130.086 },
    { id: "p7", src: "/tangram-pieces/seaBlue.png", x: 720, y: 20, width: 153.723, height: 252.412 },
    { id: "p8", src: "/tangram-pieces/darkBlue.png", x: 120, y: 0, width: 137.735, height: 121.708 },
    { id: "p9", src: "/tangram-pieces/darkGrey.png", x: 550, y: 480, width: 116.417, height: 129.381},
    { id: "p10", src: "/tangram-pieces/purple.png", x: 720, y: 350, width: 151.481, height: 190.5 },
    { id: "p11", src: "/tangram-pieces/lightPink.png", x: 700, y: 550, width: 145.640, height: 64.209 },
];


// TODO: 增加结束的效果


export default function Tangram({
    width = 900,
    height = 600,
    }: {
    width?: number;
    height?: number;
}) {
    const [pieces, setPieces] = useState<Piece[]>(initialPieces);
    const [hoveredPiece, setHoveredPiece] = useState<string | null>(null);
    const draggingRef = useRef<{
    id: string;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    } | null>(null);


  // Start
const onPointerDownPiece = (e: React.PointerEvent, id: string) => {
        const piece = pieces.find((p) => p.id === id);
        if (!piece) return;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        draggingRef.current = {
        id,
        startX: e.clientX,
        startY: e.clientY,
        origX: piece.x,
        origY: piece.y,
        };
    };

  // Moving
const onPointerMove = (e: React.PointerEvent) => {
        if (draggingRef.current) {
        const d = draggingRef.current;
        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;
        setPieces((prev) =>
            prev.map((p) =>
            p.id === d.id ? { ...p, x: d.origX + dx, y: d.origY + dy } : p
            )
        );
        }
    };

const onPointerUp = () => {
    draggingRef.current = null;
};
const resetPieces = () => {
        setPieces(initialPieces);
    };


return (
    <div className="w-full bg-black/40 rounded-lg p-4">
        

        <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-purple-500">
                Drag pieces to move. Try to fit them into the frame!
            </h3>
            <p className="text-sm">If there is a gap, then probably somethings is wrong...</p>
            <button 
                onClick={resetPieces}
                className="px-4 border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-800 rounded-md transition-colors"
            >
                Reset
            </button>
        </div>
        <div
            className="relative border border-gray-700 rounded-md bg-white/5"
            style={{ height: height + "px", touchAction: "none" }}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
        >
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${width} ${height}`}
                preserveAspectRatio="xMidYMid meet"
            >
            {/* frame */}
            <image
                href="/tangram-pieces/frame.png"
                x={width / 2 - 224}
                y={height / 2 - 200}
                width={448.473}
                height={392.498}
                opacity={0.8}
            />

            {pieces.map((p) => (
                <image
                    key={p.id}
                    href={p.src}
                    x={p.x}
                    y={p.y}
                    width={p.width}
                    height={p.height}
                    onPointerDown={(e) => onPointerDownPiece(e, p.id)}
                    onMouseEnter={() => setHoveredPiece(p.id)}//React
                    onMouseLeave={() => setHoveredPiece(null)}//React
                    style={{ 
                                cursor: "grab", 
                                touchAction: "none",
                                filter: hoveredPiece === p.id ? ' brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 1))' : 'none',
                                transition: 'filter 0.2s ease， stroke-white'
                            }}
                        />
                ))}
            </svg>
            
        </div>
        
        </div>
    );
    }
