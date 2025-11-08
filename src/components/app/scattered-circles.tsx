"use client";
import { motion } from "framer-motion";
import seedrandom from "seedrandom";

// Generate 14 circles with seeded random positions
const generateCircles = () => {
    const circles = [];
    const circleSize = 5.132946491241455; // Specified size in pixels
    const rng = seedrandom("fixed-seed"); // Use a fixed seed for consistent positions

    for (let i = 0; i < 14; i++) {
        // Random positions within the Hero section (0-100% for relative positioning)
        const randomX = rng() * 100;
        const randomY = rng() * 100;

        circles.push(
            <motion.div
                key={`circle-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                    width: `${circleSize}px`,
                    height: `${circleSize}px`,
                    left: `${randomX}%`,
                    top: `${randomY}%`,
                    transform: "translate(-50%, -50%)", // Center the circle at the position
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
            />
        );
    }
    return circles;
};

export default function ScatteredCircles() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {generateCircles()}
        </div>
    );
}
