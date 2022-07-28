import { GetMediaGenre } from "../utils/Requests"
import { BASE } from "../utils/Requests"
import FullStar from "./Icons/FullStar";
import HalfStar from "./Icons/HalfStar";
import StrokeStar from "./Icons/StrokeStar";

function MediaDetail({ media, type }) {
    const isMovie = type == "movie";
    const numberOfStars = (Math.round(((media.vote_average / 2) * 2)) / 2);
    console.log(media?.runtime);
    
    return (
        <div className='flex flex-col p-4 lg:p-7 gap-y-6 md:flex-row'>

            {/* Img */}
            {
                <div className='mx-auto md:w-5/12 lg:w-4/12 lg:h-[560px] rounded-lg shrink-0'>
                    {
                        media.backdrop_path || media.poster_path ? (
                            <>
                                <img className={`w-72 md:w-full lg:h-full rounded-lg lg:object-contain object-cover`}
                                    src={BASE + media.poster_path}
                                    alt={media?.title || media?.name} />
                            </>
                        ) :
                            (
                                <div className='w-full h-full p-2 bg-slate-700 animate-pulse rounded-md dark:bg-gray-700'>
                                </div>
                            )
                    }

                </div>
            }

            {/* Details */}
            <div className='w-full flex flex-col gap-y-5 md:px-10 lg:px-6'>

                {/* Title */}
                <div className='text-center md:text-left space-y-2'>
                    <h1 className='text-white font-main text-4xl' >{media?.title || media?.name}</h1>
                    <p className='text-sm text-gray-500'>{media?.tagline}</p>

                </div>

                {/* Stars */}
                <div className='w-full mx-auto flex flex-col items-center md:items-start gap-2 md:flex-row'>
                    <h1 className='text-white font-bold text-4xl'>
                        {(numberOfStars)}
                    </h1>

                    <span className='text-white text-l lg:text-xl my-auto flex'>
                        {[...Array(5)].map((x, i) => (
                            <span key={i}>{numberOfStars >= i + 1 ? <FullStar /> : numberOfStars >= (i + 1 - 0.5) ? <HalfStar /> : <StrokeStar />}</span>
                        )
                        )}
                    </span>
                </div>

                {/* Length & Language */}
                <div className='w-full flex justify-between lg:w-10/12'>
                    <div className='font-semibold space-y-1'>
                        {
                            isMovie ? (
                                <>
                                    <h2 className='text-gray-500 text-lg font-sm'>Length</h2>
                                    <h5 className='text-white'>
                                        {Math.floor(media?.runtime / 60) ? Math.floor(media?.runtime / 60)+"h " : " "}
                                        {Math.floor(media?.runtime % 60)}m
                                    </h5>
                                </>
                            ) : (
                                <>
                                    <h2 className='text-gray-500 text-lg font-sm'>{media?.number_of_seasons || "N/A"} Seasons</h2>
                                    <h5 className='text-white'>
                                        {media?.number_of_episodes || "N/A"} Epsoides
                                    </h5>
                                </>
                            )
                        }
                    </div>
                    <div className='font-semibold space-y-1'>
                        <h2 className='text-gray-500 text-lg font-sm'>Language</h2>
                        <h5 className='text-white uppercase'>{media.original_language || "N/A"}</h5>
                    </div>
                    <div className='font-semibold space-y-1'>
                        <h2 className='text-gray-500 text-lg font-sm'>Year</h2>
                        <h5 className='text-white'>{media?.first_air_date?.slice(0, 4) || media?.release_date?.slice(0, 4) || "N/A"}</h5>
                    </div>
                    <div className='font-semibold space-y-1'>
                        <h2 className='text-gray-500 text-lg font-sm'>Status</h2>
                        <h5 className='text-white'>{media.status || "N/A" }</h5>
                    </div>
                </div>

                {/* Genres */}

                <div className=''>
                    <h1 className='font-main text-xl text-white'>Genres</h1>
                    <div className='flex gap-2 mt-2 font-bold flex-wrap'>
                        {
                            media.genres.length > 1 ? (media.genres?.map((genre) => (
                                <span className='bg-white px-4 py-1 text-xs rounded-full' key={genre?.id}>
                                    <p>{GetMediaGenre(media, genre?.id)}</p>
                                </span>
                            ))) : <h1 className="text-white font-normal">N/A</h1>
                        }
                    </div>
                </div>

                {/* Overview */}
                <div className='text-white space-y-2'>
                    <h1 className='text-xl font-main'>Description</h1>
                    <p className='font-normal text-base'>
                        {media?.overview || "N/A"}
                    </p>
                </div>

                {/* Cast */}
                <div className=' text-white space-y-2'>
                    <h1 className='text-xl'>Cast</h1>
                    <div className='flex flex-wrap gap-3'>
                        {
                            media?.credits?.cast?.length > 1  ? (media.credits.cast.map(cast => (
                                <span key={cast?.id} className='border-2 border-white px-3 py-0.5 text-base rounded-lg'>
                                    {cast?.name}
                                </span>
                            ))) : "N/A"
                        }
                    </div>
                </div>

                {/* Button */}

                <div className='mt-10 px-2 sm:px-0 flex justify-center sm:justify-start space-x-4 text-white font-bold text-lg '>
                    {media?.homepage && <a href={media.homepage} target="_blank" className="w-1/2 bg-slate-500 px-12 py-3 rounded-xl flex items-center justify-center text-center hover:bg-white hover:text-black ">Website</a>}
                    {media?.imdb_id && <a href={`https://www.imdb.com/title/${media.imdb_id}/`} target="_blank" className='w-1/2 bg-yellow-600 px-12 py-3 rounded-xl flex items-center justify-center text-center hover:bg-white hover:text-black '>IMDB</a>}
                </div>
            </div>
        </div>
    )
}

export default MediaDetail