import { fetchDetail } from "../../utils/Fetch";
import MediaDetail from "../../Components/MediaDetail"
import Head from "next/head"

function MovieDetail({ tv, error }) {

  return (
    <div className='lg:ml-24 overflow-hidden'>
      <Head>
        <title>{tv.name}</title>
        <meta name="description" content={tv.name} />
        <link rel="shortcut icon" href={"/AppIcon.svg"} />
      </Head>
      {error ? (<div className="text-white text-2xl">error</div>) : (<MediaDetail media={tv} type="tv" />) }
     </div>

  )
}

export async function getServerSideProps({ params: { tvId } }) {

  try{
    const response = await fetchDetail("tv", tvId);
    const tv = await response.data;
    return {
      props: {
        tv
      }
    }
  }catch(e){
    return { props : {error : true}}
  }
}

export default MovieDetail