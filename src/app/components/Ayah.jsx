'use client'


const Ayah = ({ ayah, surahNumber, audiosrc }) => {
    const listen = () => {
        const audio = new Audio(audiosrc)
        audio.play()
    }

    return (
        <div className='flex py-4 sm:py-8 border-b gap-3 sm:gap-12'>
            <div className='flex flex-col gap-1'>
                <span className='w-10 h-10 bg-gray-100 flex justify-center items-center rounded-full'>{surahNumber}:{ayah.numberInSurah}</span>

                <span onClick={listen} className='w-10 h-10 bg-gray-100 flex justify-center items-center rounded-full text-4xl text-center'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5 3 14 9-14 9V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
            </div>

            <p>{ayah.text}</p>
        </div>
    )
}

export default Ayah
