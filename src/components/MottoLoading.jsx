import MottoCardContainer from './MottoCardContainer'

const MottoLoading = () => (
    <MottoCardContainer>
        <div className='card-body'>
            <div className="flex flex-col gap-4">
                <div className="skeleton h-[4.8rem] w-full"></div>
                <div className="skeleton h-[14.4rem] w-full"></div>
                <div className="skeleton h-[2.4rem] w-full"></div>
                <div className="skeleton h-[2.4rem] w-full"></div>
            </div>
        </div>
    </MottoCardContainer>
)


export default MottoLoading;
