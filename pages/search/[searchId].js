import { fetchSearch } from '../../utils/Fetch';
import Link from 'next/link'
import Thumbnail from '../../Components/Thumbnail';
import Head from "next/head"

function SearchResults({ Result, searchId }) {
    return (
        <div className='lg:ml-28'>
            <Head>
                <title> Search | {searchId}</title>
                <meta name="description" content={`result of search for ${searchId}`} />
                <link rel="shortcut icon" href={"/AppIcon.svg"} />
            </Head>
            <h1 className='text-4xl text-white font-main ml-4 border-b-2 border-slate-600 py-2 w-fit '>Search Result of {searchId}</h1>
            <div className=' p-4 gap-4 md:gap-6 lg:gap-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 '>
                {Result?.map((movie, i) => (
                    <Link href={`/${movie?.hasOwnProperty("name") ? "tv" : "movie"}/${movie.id}`} key={i}>
                        <>
                            <Thumbnail
                                media={movie}
                                type={movie?.hasOwnProperty("name") ? "tv" : "movie"}
                                isUp={false}
                            />
                        </>
                    </Link>
                ))}

                {!Result?.length && <div className='text-white'>
                    <h1>No Reuslts found</h1>
                </div>}
            </div>
        </div>
    )
}

export async function getServerSideProps({ params: { searchId } }) {
    const Result = await fetchSearch(searchId);
    return {
        props: {
            Result,
            searchId
        }
    }
}

export default SearchResults