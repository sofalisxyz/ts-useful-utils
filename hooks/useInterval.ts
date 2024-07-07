import { useEffect, useRef } from 'react';

type Callback = () => void;

export const useInterval = (callback: Callback, delay: number): void => {
    const savedCallback = useRef<Callback | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const id = setInterval(() => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }, delay);

        return () => {
            clearInterval(id);
        };
    }, [delay]);
};
