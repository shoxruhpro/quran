import Image from 'next/image'
import Card from './components/Card';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://api.alquran.cloud/v1/meta', { mode: 'no-cors' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const { data } = await getData()

  return (
    <main className='container mb-5'>
      <header className="my-4 sm:my-12">
        <h1 className='text-xl sm:text-5xl text-center'>Quran English Translation</h1>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.surahs.references.map(surah => {
          return (
            <Link href={'surah/' + surah.number}>
              <Card surah={surah} key={surah.number} />
            </Link>
          )
        })}
      </div>
    </main>
  )
}
