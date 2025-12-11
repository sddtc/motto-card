import React from 'react'
import { ThumbsUp, SkipForward, SkipBack } from 'lucide-react'

const MottoCard = ({ motto, next, pre, likeIt }) => {
    return (
        <div className="motto-card-container">
            <div className="motto-card-animation-default">
                <div className="motto-card-base">
                    <div className='card-body'>
                        <div className="card-title motto-card-title">{motto.name}</div>
                        <div className="motto-card-content">{motto.content}</div>
                        <div className="motto-card-author">- {motto.author}</div>
                        <div className="motto-card-actions">
                            <button className="btn btn-circle" onClick={() => likeIt()}>
                                <ThumbsUp />
                            </button>
                            <button className="btn btn-circle" onClick={() => pre()}>
                                <SkipBack />
                            </button>
                            <button className="btn btn-circle" onClick={() => next()}>
                                <SkipForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MottoCard;