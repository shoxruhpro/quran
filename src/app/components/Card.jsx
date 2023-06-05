'use client'


const Card = ({ surah }) => {
    const listen = () => {
        const utterance = new SpeechSynthesisUtterance(surah.englishNameTranslation)
        utterance.voice = speechSynthesis.getVoices()[3]
        speechSynthesis.speak(utterance)
    }

    return (
        <div className='flex p-4 border rounded m-2 justify-between' onClick={listen}>
            <div className='flex'>
                <div className='text-sm font-bold bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full me-4'>{surah.number}</div>

                <div className='flex flex-col'>
                    <span className='font-bold'>{surah.englishName}</span>
                    <span className='font-bold text-xs text-gray-500'>{surah.englishNameTranslation}</span>
                </div>
            </div>


            <div className="my-auto">
                <span className='font-bold text-xs text-gray-500'>{surah.numberOfAyahs} ayahs</span>
            </div>
        </div>
    )
}

export default Card
