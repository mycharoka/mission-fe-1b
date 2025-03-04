// import { Footer } from "../../component/footer";
import { ContinueWatchList } from "../../component/continue-watch-list";
import { Hero } from "../../component/hero";
import MovieList from "../../component/movie-list";
import { Navbar } from "../../component/navbar";
import dataImages from "../../data/image-lists";

export default function HomePage() {
  return (
    <div className="h-screen bg-pageheaderbackground">
      <Navbar/>
      <main className="overflow-x-hidden">
        <Hero/>
        <ContinueWatchList/>
        <MovieList title="top-rating" placeholder="Top Rating dan Series Hari Ini" movies={dataImages.topRating}/>
        <MovieList title="trending" placeholder="Film Trending" movies={dataImages.trending}/>
        <MovieList title="new-release" placeholder="Rilis Baru" movies={dataImages.newRelease}/>
      </main>
      {/* <h1>PELER BENGKOK</h1> */}
      {/* <Footer/> */}
    </div>
  )
}