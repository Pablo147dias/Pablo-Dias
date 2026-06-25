import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface AnimationComponentProps {
    children: ReactNode,
    moveDirection: "left" | "right"
}

const AnimationComponent: React.FC<AnimationComponentProps> = ({ children, moveDirection }) => {

    const componentRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            });
        });
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const animationClass = startAnimation
        ? moveDirection === "right"
            ? "animate-slide-right"
            : "animate-slide-left"
        : "opacity-0";

    return (
        <div
            ref={componentRef}
            className={animationClass}
        >
            {children}
        </div>
    )
}

export default AnimationComponent


