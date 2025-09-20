"use client";

import React, { useRef, useState } from "react";

type Piece = {
    id: string;
    src: string;
    x: number;
    y: number;
    width: number;
    height: number;
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

const winningPositions = [
    // winning position
    { id: "p1", x: 340.80, y: 390.80 },
    { id: "p2", x: 395.25, y: 359.14 },
    { id: "p3", x: 485.66, y: 455.26 },
    { id: "p4", x: 420.50, y: 136.31 },
    { id: "p5", x: 506.00, y: 293.81 },
    { id: "p6", x: 398.71, y: 232.81 },
    { id: "p7", x: 305.79, y: 230.93 },
    { id: "p8", x: 526.00, y: 166.50 },
    { id: "p9", x: 615.00, y: 231.96 },
    { id: "p10", x: 597.53, y: 391.61 },
    { id: "p11", x: 488.27, y: 391.54 },
];


export default function Tangram({
    width = 900,
    height = 600,
    }: {
    width?: number;
    height?: number;
}) {
    const [pieces, setPieces] = useState<Piece[]>(initialPieces);
    const [hoveredPiece, setHoveredPiece] = useState<string | null>(null);
    const [isComplete, setIsComplete] = useState(false);
    const draggingRef = useRef<{
        id: string;
        startX: number;
        startY: number;
        origX: number;
        origY: number;
    } | null>(null);

    const checkCompletion = (currentPieces: Piece[]) => {
        const tolerance = 15; 
        const isSolved = currentPieces.every(piece => {
            const winningPos = winningPositions.find(pos => pos.id === piece.id);
            if (!winningPos) return false;
            
            const currentCenterX = piece.x + piece.width / 2;
            const currentCenterY = piece.y + piece.height / 2;

            const xWithinTolerance = Math.abs(currentCenterX - winningPos.x) <= tolerance;
            const yWithinTolerance = Math.abs(currentCenterY - winningPos.y) <= tolerance;
            return xWithinTolerance && yWithinTolerance;
        });

        if (isSolved && !isComplete) {
            setIsComplete(true);
        }
    };
    
    {/*used for log position for building the function of check winning
    */}
        const logCurrentPositions = () => {
        pieces.forEach(p => {
            const centerX = p.x + p.width / 2;
            const centerY = p.y + p.height / 2;
            console.log(`{ id: "${p.id}", x: ${centerX.toFixed(2)}, y: ${centerY.toFixed(2)} },`);
        });
    };
    {/**/}
    const onPointerDownPiece = (e: React.PointerEvent, id: string) => {
        if (isComplete) return;
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

    const onPointerMove = (e: React.PointerEvent) => {
        if (draggingRef.current) {
            const d = draggingRef.current;
            const dx = e.clientX - d.startX;
            const dy = e.clientY - d.startY;
            setPieces((prev) => {
                const newPieces = prev.map((p) =>
                    p.id === d.id ? { ...p, x: d.origX + dx, y: d.origY + dy } : p
                );
                return newPieces;
            });
        }
    };

    const onPointerUp = () => {
        if (draggingRef.current) {
            const draggedPiece = pieces.find(p => p.id === draggingRef.current?.id);
            const winningPos = winningPositions.find(pos => pos.id === draggedPiece?.id);
            
            if (draggedPiece && winningPos) {
                const snapTolerance = 20;
                const currentCenterX = draggedPiece.x + draggedPiece.width / 2;
                const currentCenterY = draggedPiece.y + draggedPiece.height / 2;
                
                const xWithinTolerance = Math.abs(currentCenterX - winningPos.x) <= snapTolerance;
                const yWithinTolerance = Math.abs(currentCenterY - winningPos.y) <= snapTolerance;
                
                if (xWithinTolerance && yWithinTolerance) {
                    const finalX = winningPos.x - draggedPiece.width / 2;
                    const finalY = winningPos.y - draggedPiece.height / 2;

                    setPieces(prev => {
                        const newPieces = prev.map(p =>
                            p.id === draggedPiece.id ? { ...p, x: finalX, y: finalY } : p
                        );
                        checkCompletion(newPieces); // check new location
                        return newPieces;
                    });
                } else {
                    checkCompletion(pieces); // if not snapped , still check
                }
            }

            draggingRef.current = null;
            checkCompletion(pieces);
        }
    };

    const resetPieces = () => {
        setPieces(initialPieces);
        setIsComplete(false);
    };

    return (
        <div className="w-full bg-black/40 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4 text-gray-400">
                <h3 className="text-md font-semibold text-purple-500">
                    Drag pieces to move. Try to fit them into the frame!
                </h3>
                
                <p className="text-sm">If there is a gap, then probably somethings is wrong...</p>

                <div className="flex gap-2">
                    {/*button for log position*/}
                    <button 
                        onClick={logCurrentPositions}
                        className="px-4 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-md transition-colors text-sm"
                    >
                        Log Positions
                    </button>
                    {/**/}
                    <button 
                        onClick={resetPieces}
                        className="px-4 border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-800 rounded-md transition-colors text-sm"
                    >
                        Reset                    </button>
                </div>
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
                            onMouseEnter={() => setHoveredPiece(p.id)}
                            onMouseLeave={() => setHoveredPiece(null)}
                            style={{ 
                                cursor: isComplete ? "default" : "grab", 
                                touchAction: "none",
                                filter: hoveredPiece === p.id ? ' brightness(1.2) drop-shadow(0 0 8px rgba(255, 255, 255, 1))' : 'none',
                                transition: 'filter 0.2s ease'
                            }}
                        />
                    ))}
                </svg>

                {isComplete && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
                        <div className="absolute inset-0 z-0 border-4 rounded-xl animate-glowing-border"></div>
                        <div className="relative text-white text-3xl font-bold animate-fade-in ">
                            Congrats! You Solved It!
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}