import { useEffect, useState } from "react";

export const useIsLoading = <PropType>(
    watchProp: PropType,
    isLoaded: (p: PropType) => boolean
): boolean => {
    const [isLoading, setIsLoading] = useState(!isLoaded(watchProp));
    useEffect(() => {
        if (isLoaded(watchProp)) {
            setIsLoading(false);
        }
    }, [watchProp]);

    return isLoading;
};
