import { useState } from "react";
import { useRouter } from 'next/router'
import Thumbnail from "../../Components/Thumbnail";
import { fetchMedia } from "../../utils/Fetch";
import Pagination from "../../Components/Pagination";
import Head from "next/head"


function MediaResults({ medias }) {
    const { query } = useRouter();
    const [currentPage, setCurrentPage] = useState(Number(query.page));

    return (
        <div className='mt-4 lg:ml-28'>
            <Head>
                <title> {query?.name} | {currentPage}</title>
                <meta name="description" content={`list of media of ${query?.name}`} />
                <link rel="shortcut icon" href={"/AppIcon.svg"} />
            </Head>

            <h1 className='text-4xl text-white font-main ml-4 border-b-2 border-slate-600 py-2 w-fit '>Result of {query.name}</h1>
            <div className='p-4 gap-4 md:gap-6 lg:gap-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 '>
                {
                    medias.results.map(media => (<Thumbnail
                        key={media.id}
                        media={media}
                        type={query?.type}
                        isUp={false} />
                        ))
                }
            </div>

            <Pagination currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                query={query}
                totalPages={medias.total_pages} />
        </div>
    )
}

export async function getServerSideProps({ params: { id }, query: { page, type } }) {
    const response = await fetchMedia(type, id, page);
    const medias = await response.data;

    return {
        props: {
            medias
        }
    }
}
export default MediaResults