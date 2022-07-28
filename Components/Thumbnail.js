import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { BASE } from "../utils/Requests"

function Thumbnail({ media, type, isUP = false , isHome=false}) {

    let divSize = isHome ? isUP ? ("lg:first:col-span-2 lg:[&:nth-child(2)]:col-span-2")
                      : (`lg:last:col-span-2 lg:[&:nth-last-child(2)]:col-span-2`) : "";
    return (
        <Link href={`/${type}/${media.id}`} >
            <div className={`w-full flex flex-col ${divSize} rounded-tr-lg rounded-tl-lg cursor-pointer`} key={media.id}>
                {
                    media.backdrop_path || media.poster_path ? (
                        <>
                            <img className={`rounded-tr-lg rounded-tl-lg h-[180px] object-cover object-center cursor-pointer brightness-75 hover:brightness-100`}
                                src={
                                    media.backdrop_path
                                        ? `${BASE}/${media.backdrop_path}`
                                        : `${BASE}/${media.poster_path}`
                                }
                                alt="" />
                        </>
                    ) :
                        (
                            <div className='w-full h-[180px] p-2 bg-slate-700 animate-pulse rounded-md dark:bg-gray-700'>
                            </div>
                        )
                }
                <div className='p-2 md:p-3 bg-LightDark text-white'>
                    <span className='text-md align-middle' >{ media.release_date?.slice(0, 4) || media?.first_air_date?.slice(0, 4) || "N/A"}</span>
                    <FontAwesomeIcon icon={faClapperboard} className="ml-2 h-[14px] inline" />
                    <span className='text-[14px] ml-1 align-middle'>
                        {media?.hasOwnProperty("name") ? "Tv" : "Movie"}
                    </span>

                    <h3 className='truncate overflow-hidden font-semibold text-lg'>
                        {media?.title || media?.name}
                    </h3>
                </div>
            </div>
        </Link>
    )
}

export default Thumbnail