import Ayah from '@/app/components/Ayah'


async function getData(number) {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/en.sahih`, { mode: 'no-cors' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json()
}


async function getAudioData(number) {
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${number}/en.walk`, { mode: 'no-cors' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json()
}


export default async function Page({ params }) {
    const { data } = await getData(params.number)
    const { data: audiodata } = await getAudioData(params.number)

    return (
        <main className='container px-3'>
            <header className="mt-4 sm:mt-12">
                <h1 className='text-xl sm:text-5xl text-center'>{data.englishName}</h1>
            </header>

            <article>
                {data.ayahs.map((ayah, index) => {
                    return (
                        <Ayah key={index} audiosrc={audiodata.ayahs[index].audio} ayah={ayah} surahNumber={data.number} />
                    )
                })}
            </article>
        </main>
    )
}
