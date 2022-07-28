import {useRouter} from "next/router"
import AppIcon from "./Icons/AppIcon";
import MovieIcon from "./Icons/MovieIcon";
import TvIcon from "./Icons/TvIcon";
import TwitterIcon from "./Icons/TwitterIcon";

function Navbar() {
    const {pathname , query} = useRouter();
    return (
        <div className='flex flex-col w-full items-center lg:w-1/12 lg:sticky lg:top-6 lg:-translate-x-2 lg:left-0 lg:h-0 z-[999]'>
            <div className='text-2xl w-full bg-LightDark p-5 py-6 flex items-center justify-between lg:flex-col lg:min-h-[550px] lg:w-[80px]  lg:rounded-lg text-white'>
                <div>
                    <AppIcon path={pathname} />
                </div>

                <div className='flex lg:flex-col items-center justify-around lg:gap-y-10 gap-6'>
                    <MovieIcon path={query.type}/>
                    <TvIcon path={query.type} />
                </div>

                <div className="">
                    <TwitterIcon />
                </div> 
            </div>
        </div>
    )
}

export default Navbar