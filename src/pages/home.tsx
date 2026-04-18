import { useEffect, useState } from 'react';

export default function Home() {
    const [pageLoad, setPageLoad] = useState(false);
    const [search, setSearch] = useState('')

    useEffect(() => {
        setPageLoad(true)
    }, [])

    function handleInput(e: any) {
        setSearch(e.target.value.replaceAll(' ', '+'))
    }

    function handleEnter(e: any) {
        if (e.key === 'Enter') {
            window.open(`https://duckduckgo.com/?t=lm&q=${search}&ia=web`, '_blank')
            setSearch('')
        }
    }

    return (
        <main className='flex h-screen flex-col justify-center overflow-x-hidden bg-surface'>
            <div className='max-w-5xl w-full mx-auto'>
                <h1 className={`${pageLoad ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 font-bold sm:text-6xl text-4xl text-center`}>
                    Welcome back, Raj
                </h1>
                <div className={`${pageLoad ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 delay-200 w-1/2 mx-auto pt-8`}>
                    <div className="relative mt-2 flex items-center">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={search.replaceAll('+', ' ')}
                            placeholder="Search DuckDuckGo..."
                            onChange={handleInput}
                            onKeyDown={handleEnter}
                            className="pl-3 block w-full rounded-lg border-0 py-2.5 bg-surface-container-high text-on-surface shadow-sm ring-1 ring-inset ring-white/[0.06] outline-none placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-inset focus:ring-white/20 sm:text-sm"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
