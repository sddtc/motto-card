import { useEffect } from 'react'
import { useContentStore } from './stores/useContentStore'
import MottoLoading from './components/MottoLoading';
import MottoCard from './components/MottoCard';
import Navigation from './components/Navigation';
import { useThemeStore } from './stores/useThemeStore';

export default function App() {
    const { currentMotto, isLoading, getContent, nextMotto, preMotto, likeIt } = useContentStore();
    const { theme } = useThemeStore();

    useEffect(() => {
        getContent();
    }, [getContent]);

    return (
        <div data-theme={theme} className="base-container">
            <Navigation />
            {isLoading ? (<MottoLoading />) :
                (<MottoCard motto={currentMotto} next={nextMotto}
                    pre={preMotto} likeIt={likeIt} />)
            }
        </div>
    )
}
