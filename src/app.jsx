import React, { useEffect } from 'react'
import { useContentStore } from './stores/useContentStore'
import MottoLoading from './components/MottoLoading';
import MottoCard from './components/MottoCard';

export default function App() {
    const { currentMotto, isLoading, getContent, nextMotto, preMotto, likeIt } = useContentStore();

    useEffect(() => {
        getContent();
    }, [getContent]);

    return (
        <>{isLoading ? (<MottoLoading />) :
            (<MottoCard motto={currentMotto} next={nextMotto}
                pre={preMotto} likeIt={likeIt} />)
        }</>
    )
}
