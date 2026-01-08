import { useThemeStore } from '../stores/useThemeStore';

const Navigation = () => {
    const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"];
    const { setTheme, theme: currentTheme } = useThemeStore();

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Motto Card</a>
            </div>
            <div title="Change Theme" className="dropdown dropdown-end block">
                <div
                    tabIndex="0"
                    role="button"
                    className="btn group btn-sm gap-1.5 px-1.5"
                    aria-label="Change Theme"
                >
                    <div className="bg-base-100 group-hover:border-base-content/20 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1 transition-colors">
                        <div className="bg-base-content size-1 rounded-full"></div>
                        <div className="bg-primary size-1 rounded-full"></div>
                        <div className="bg-secondary size-1 rounded-full"></div>
                        <div className="bg-accent size-1 rounded-full"></div>
                    </div>
                    <svg
                        width="12px"
                        height="12px"
                        className="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2048 2048"
                    >
                        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                    </svg>
                </div>
                <div
                    tabIndex="0"
                    className="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[30.5rem] max-h-[calc(100vh-8.6rem)] overflow-y-auto border-[length:var(--border)] border-white/5 shadow-2xl outline-[length:var(--border)] outline-black/5 mt-16"
                >
                    <ul className="menu w-56">
                        <li className="menu-title text-xs">Theme</li>
                        {themes.map((theme, index) => (
                            <li key={index}>
                                <button className="gap-3 px-2" onClick={() => setTheme(theme)}>
                                    <div
                                        data-theme={theme}
                                        className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
                                    >
                                        <div className="bg-base-content size-1 rounded-full"></div>
                                        <div className="bg-primary size-1 rounded-full"></div>
                                        <div className="bg-secondary size-1 rounded-full"></div>
                                        <div className="bg-accent size-1 rounded-full"></div>
                                    </div>
                                    <div className="w-32 truncate">{theme}</div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className={`h-3 w-3 shrink-0 ${theme === currentTheme ? 'visible' : 'invisible'}`}
                                    >
                                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"> </path>
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;