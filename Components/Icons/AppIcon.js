import Link from "next/link"

function AppIcon({ path }) {
    return (
        <Link href="/" >
            <svg
                className={`${path == '/' ? 'active-link' : 'icon-nav'} mt-1 h-[1em] w-[1em] lg:h-[25.6px] lg:w-[32px]`}
                width='1em'
                fill='currentColor'
                height='1em'
                viewBox='0 0 33 27'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z'
                />
            </svg>
        </Link>
    )
}

export default AppIcon