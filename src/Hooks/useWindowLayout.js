import { useEffect, useState } from 'react';

const useWindowWidth = (screenSize = 700) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < screenSize);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [screenSize]);

    return onSmallScreen;
};

export default useWindowWidth;