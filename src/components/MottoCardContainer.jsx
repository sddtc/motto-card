const MottoCardContainer = ({ children, className = '' }) => (
    <div className={`motto-card-container ${className}`}>
        <div className="motto-card-animation-default">
            <div className="motto-card-base">
                {children}
            </div>
        </div>
    </div>
)

export default MottoCardContainer
