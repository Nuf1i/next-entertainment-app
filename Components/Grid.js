import MediaLayout from './MediaLayout';

function Grid({ Movies , title, type, isUP }) {
    return (
        <div className='flex flex-col py-2 px-5 mt-6'>
            <div className='w-full flex items-center mb-4'>
                <h1 className='text-white text-4xl font-main'>{title}</h1>
            </div>

            <MediaLayout Medias={Movies.results} type={type} isUP={isUP} size={Movies?.results?.length}/>
        </div>

    )
}

export default Grid