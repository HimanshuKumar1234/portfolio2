import { useState, useEffect, useRef } from 'react';

export function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (!hasAnimated) setHasAnimated(true);
                    if (options.once !== false) {
                        observer.unobserve(element);
                    }
                } else {
                    if (options.once === false) {
                        setIsInView(false);
                    }
                }
            },
            {
                threshold: options.threshold || 0.15,
                rootMargin: options.rootMargin || '0px',
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin, options.once, hasAnimated]);

    return [ref, isInView, hasAnimated];
}
