import Link from 'next/link'
import Thumbnail from "./Thumbnail";

function MediaLayout({ Medias, type, isUP }) {
    return (
        <div className='w-full gap-6 md:gap-y-6 grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 lg:grid-cols-4 '>
            {
                Medias && Medias?.slice(0, 6).map(media => (
                    <Link key={media.id} href={`/${media?.hasOwnProperty("name") ? "tv" : "movie"}/${media.id}`}>
                        <><Thumbnail media={media} isUP={isUP} type={type} isHome={true} /></>
                    </Link>
                ))
            }
        </div>
    )
}

export default MediaLayout