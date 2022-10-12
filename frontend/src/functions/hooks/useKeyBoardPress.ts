import React from "react";

export const useKeyBoardPress = (keys: string[], fun: () => void) => {
    React.useEffect(() => {
        const listener = (event: { code: string, preventDefault: () => void }) => {
            const pressedKey = event.code

            if (keys.includes(pressedKey)){
                event.preventDefault()
                return fun();
            }
        };

        // handle keyboard event only if window element exist (Eg. on pc)
        if (typeof document !== 'undefined'){
            document.addEventListener("keydown", listener);
            return () => {
                document.removeEventListener("keydown", listener);
            };
        }
    });
}