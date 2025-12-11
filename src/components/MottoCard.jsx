import React from 'react'
import { ThumbsUp, SkipForward, SkipBack } from 'lucide-react'
import MottoCardContainer from './MottoCardContainer'
import Button from './Button'

const MottoCard = ({ motto, next, pre, likeIt }) => {
    return (
        <MottoCardContainer>
            <div className='card-body'>
                <div className="card-title motto-card-title">{motto.name}</div>
                <div className="motto-card-content">{motto.content}</div>
                <div className="motto-card-author">- {motto.author}</div>
                <div className="motto-card-actions">
                    <Button onClick={() => likeIt()} icon={<ThumbsUp />} aria-label="Like motto" />
                    <Button onClick={() => pre()} icon={<SkipBack />} aria-label="pre motto" />
                    <Button onClick={() => next()} icon={<SkipForward />} aria-label="next motto" />
                </div>
            </div>
        </MottoCardContainer>
    )
}
export default MottoCard;