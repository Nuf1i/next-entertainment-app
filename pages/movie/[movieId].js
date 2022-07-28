import MediaDetail from "../../Components/MediaDetail";
import { fetchDetail } from "../../utils/Fetch";
import Head from "next/head"

function MovieDetail({ movie , error }) {
  return (
    <div className='lg:ml-24 overflow-hidden'>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie.title} />
        <link rel="shortcut icon" href={"/AppIcon.svg"} />
      </Head>
      {error ? (<div className="text-white text-2xl">error</div>) : (<MediaDetail media={movie} type="movie" />)}
    </div>

  )
}

export async function getServerSideProps({ params: { movieId } }) {

  try{
    const response = await fetchDetail("movie", movieId);
    const movie = await response.data;
    return {
      props: {
        movie
      }
    }
  }catch(e){
    return { props : {error : true}}
  }
}

export default MovieDetail