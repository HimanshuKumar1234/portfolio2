import { useState, useEffect, useRef } from 'react';

export function useCountUp(end, duration = 2000, startOnView = false, isInView = true) {
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(false);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!isInView || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();
        const startVal = 0;

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(startVal + (end - startVal) * eased);
            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
                setDone(true);
            }
        }

        requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return [count, done];
}
