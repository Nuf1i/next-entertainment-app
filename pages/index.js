import Grid from "../Components/Grid";
import RowScroll from "../Components/RowScroll";
import { fetchType } from "../utils/Fetch";
import { MoviesType, TvType } from "../utils/Requests"
import Head from "next/head"

export default function Home({ TrendingDay, TopRated, NetflixOriginals, TrendingWeek, TvToday }) {
  return (
    <div className="lg:ml-24">
      <Head>
        <title>Home | Entertainment App </title>
        <meta name="description" content={"Home Entertainment App for movies and tv shows"} />
        <link rel="shortcut icon" href={"/AppIcon.svg"} />
      </Head>
      <RowScroll Movies={TrendingDay} title="Top Trending Day" type="movie" />
      <Grid Movies={TopRated} title="Top Rated" type="movie" isUP={true} />
      <Grid Movies={NetflixOriginals} title="Netflix" type="tv" isUP={false} />
      <RowScroll Movies={TrendingWeek} title="Top Trending Week" type="movie" />
      <Grid Movies={TvToday} title="TV Airing Today" type="tv" isUP={true} />
    </div>
  )
}

export async function getServerSideProps() {
  const [
    TrendingDayRes,
    TopRatedRes,
    NetflixOriginalsRes,
    TrendingWeekRes,
    TvTodayRes,
  ] = await Promise.all(
    [
      fetchType(MoviesType.TrendingDay),
      fetchType(MoviesType.TopRated),
      fetchType(TvType.NetflixOriginals),
      fetchType(MoviesType.TrendingWeek),
      fetchType(TvType.TvToday),
    ]
  );

  const [
    TrendingDay,
    TopRated,
    NetflixOriginals,
    TrendingWeek,
    TvToday,
  ] = await Promise.all(
    [
      TrendingDayRes.data,
      TopRatedRes.data,
      NetflixOriginalsRes.data,
      TrendingWeekRes.data,
      TvTodayRes.data
    ]
  );

  return {
    props: {
      TrendingDay,
      TopRated,
      NetflixOriginals,
      TrendingWeek,
      TvToday,
    }
  }
}
