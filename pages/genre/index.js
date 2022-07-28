import axios from 'axios';
import Link from "next/link"
import { Genres } from '../../utils/Requests';
import Head from "next/head"

function index({ genres, type }) {
  return (
    <div className="mt-4 lg:ml-24">
      <Head>
        <title>Gneres | {type.charAt(0).toUpperCase() + type.slice(1)}</title>
        <meta name="description" content={`list of genres of ${type}`}  />
        <link rel="shortcut icon" href={"/AppIcon.svg"} />
      </Head>
      
      <h1 className='text-4xl text-white font-main ml-4 border-b-2 border-slate-600 py-2 w-fit '>{type == "movie" ? "Movies" : "TV"}</h1>
      <div className='p-4 flex flex-wrap justify-between'>
        {
          genres?.map(genre => (
            <Link key={genre.id} 
              href={{
                pathname: `/genre/${genre.id}`,
                query: { type: type , name: genre.name , page: 1 }
              }}
            >
              <div className="text-center odd:bg-cyan-800 m-2 flex h-44 w-44 grow md:basis-1/5 items-center justify-center rounded-lg p-8 bg-red-800 text-white font-semibold text-2xl cursor-pointer">
                {genre.name}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}


export async function getServerSideProps({query : {type}}){
  const response = await axios.get(type == "movie" ? Genres.Movies : Genres.Tv );
  const genres = await response.data;

    return{
        props : {
            genres : genres.genres,
            type
        }
    }
}

export default index