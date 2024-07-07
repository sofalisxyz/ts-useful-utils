import { type RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useClickAway = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T> | RefObject<T>[],
    handler: (event: Event) => void,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            if (Array.isArray(ref)) {
                const els = ref.map((r) => r.current);

                if (els.length === 0 || els.some((el) => el && el.contains(event.target as Node))) {
                    return;
                }
            } else {
                const el = ref.current;
                if (!el || el.contains(event.target as Node)) {
                    return;
                }
            }

            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
