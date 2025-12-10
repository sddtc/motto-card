import React from 'react'

export default function App() {
    return (
        <div className="motto-card-container">
            <div className="motto-card-animation-default">
                <div className="motto-card-base">
                    <div className="card-body">
                        <div className="card-title motto-card-title">强风吹拂</div>
                        <div className="motto-card-content">“跑步的目的，当然是要取得胜利，但胜利其实有许多种形式。所谓胜利，不单是指在所有参赛者中跑出最好的成绩。就像人活在这世上，怎样才算‘人生赢家’，根本没有明确的定义。”</div>
                        <div className="motto-card-author">- 清濑灰二</div>
                        <div className="motto-card-actions">
                            <button className="btn btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
