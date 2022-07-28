import Router from 'next/router'

function Pagination({ setCurrentPage, currentPage, totalPages, query }) {

    function prevPage(){
        Router.push({ query: { ...query, page: currentPage - 1 } })  
        setCurrentPage(currentPage - 1);
    }

    function nextPage(){
        Router.push({ query: { ...query, page: currentPage + 1 } })  
        setCurrentPage(currentPage + 1);
    }

  return (
      <div className='my-10 font-bold flex items-center justify-center mx-auto w-full'>
          <button disabled={currentPage == 1} className={`${currentPage == 1 ? `` : `cursor-pointe hover:bg-white hover:text-black`}  font-bold border-white border-2 text-white px-5 py-1 grid place-items-center rounded-tl-lg rounded-bl-lg`}
              onClick={() => prevPage()}>
              <h1 className='flex items-center gap-x-2'> Prev </h1>
          </button>

          <span className='bg-white text-black px-6 py-1.5 grid place-items-center' >
              <h1> Page {currentPage || 1}  of {totalPages} </h1>
          </span>
          <button disabled={currentPage >= totalPages} className={`${currentPage >= totalPages ? `` : `cursor-pointe hover:bg-white hover:text-black`}  font-bold border-white border-2 text-white px-5 py-1 grid place-items-center rounded-br-lg rounded-tr-lg`}
              onClick={() => nextPage()}>
              <h1 className='flex items-center gap-x-2'> Next </h1>
          </button>
      </div>
  )
}

export default Pagination