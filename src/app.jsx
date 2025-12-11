import React, { useEffect } from 'react'
import { ThumbsUp, SkipForward } from 'lucide-react'
import { useContentStore } from './stores/useContentStore'
import MottoLoading from './components/MottoLoading';

export default function App() {
    const { motto, getContent, isLoading } = useContentStore();

    useEffect(() => {
        getContent();
    }, [getContent]);

    return (
        <div className="motto-card-container">
            <div className="motto-card-animation-default">
                <div className="motto-card-base">
                    <div className='card-body'>
                        {isLoading ? (
                            <MottoLoading />
                        ) : (
                            <>
                                <div className="card-title motto-card-title">{motto.name}</div>
                                <div className="motto-card-content">{motto.content}</div>
                                <div className="motto-card-author">- {motto.author}</div>
                                <div className="motto-card-actions">
                                    <button className="btn btn-circle">
                                        <ThumbsUp />
                                    </button>
                                    <button className="btn btn-circle">
                                        <SkipForward />
                                    </button>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
