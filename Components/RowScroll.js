import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import {BASE} from "../utils/Requests"

function RowScroll({ Movies , title }) {

    return (
        <div className='flex flex-col py-2 px-5 mt-6 Bar'>

            <div className='w-full flex items-center mb-4'>
                <h1 className='text-white text-4xl font-main'>{title}
                </h1>
            </div>

            <div className='slider flex gap-x-4 overflow-x-scroll overflow-hidden p-1'>
                {
                    Movies?.results?.map(movie => (
                        <div className='relative h-[140px] min-w-[240px] sm:h-[130px] sm:min-w-[270px] md:h-[200px] md:min-w-[500px] lg:h-[250px] lg:min-w-[570px]' key={movie.id}>
                            <Link href={`/${movie?.hasOwnProperty("name") ? "tv" : "movie"}/${movie.id}`} >
                                <div>
                                    <img className='cursor-pointer brightness-75 hover:brightness-100 absolute inset-0 w-full h-full object-fit rounded-tr-lg rounded-tl-lg' src={movie?.backdrop_path ? BASE + movie?.backdrop_path : ""} alt="" />

                                    <div className='absolute w-full p-2 bottom-0 md:bottom-2 left-2 text-white'>

                                        <span className='text-[0.9rem] md:text-sm' >{movie.release_date?.slice(0, 4)}</span>
                                        <span className='text-[0.8rem] md:text-[14px]'><FontAwesomeIcon icon={faClapperboard} className="h-[14px] ml-2 inline" /> {movie?.hasOwnProperty("name") ? "Tv" : "Movie"}</span>
                                        <h3 className='truncate overflow-hidden font-bold text-sm md:text-xl'>
                                            {movie?.title || movie?.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default RowScroll

// "
// adult: false
// backdrop_path: "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg"
// genre_ids: (3)[14, 12, 28]
// id: 338953
// original_language: "en"
// original_title: "Fantastic Beasts: The Secrets of Dumbledore"
// overview: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers."
// popularity: 3456.961
// poster_path: "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg"
// release_date: "2022-04-06"
// title: "Fantastic Beasts: The Secrets of Dumbledore"
// video: false
// vote_average: 6.9
// vote_count: 1795
// "