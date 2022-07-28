import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter()

    function HandleSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);

        FilterSearch();
    }

    function FilterSearch() {
        if (!search) {
            return;
        }
    }

    function pushSearch(){
        router.push(`/search/${search}`)
        setSearch(" ");
    }

    function HandleEnter(e) {
        if (e.keyCode === 13) {
            router.push(`/search/${search}`)
            setSearch(" ");
        }
    }


    return (
        <div className='lg:ml-24 flex p-4 gap-x-2 text-white justify-center items-center'>
            <FontAwesomeIcon className="h-5" icon={faSearch} />
            <input type="text" placeholder='Search For Movies or TV series'
                className='ml-2 w-full py-2 bg-transparent text-white md:border-slate-500 outline-none'
                value={search} onChange={HandleSearch} onKeyUp={HandleEnter}/>
                <span onClick={() => pushSearch()} className='p-2 bg-slate-500 font-semibold text-center rounded-lg hover:bg-red-500 hover:text-white cursor-pointer'>Search</span>
        </div>
    )
}

export default Search