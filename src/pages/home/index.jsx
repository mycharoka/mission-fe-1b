// import { Footer } from "../../component/footer";
import { ContinueWatchList } from "../../component/continue-watch-list";
import { Hero } from "../../component/hero";
import { Navbar } from "../../component/navbar";

export default function HomePage() {
  return (
    <div className="h-screen bg-pageheaderbackground">
      <Navbar/>
      <main className="overflow-x-hidden">
        <Hero/>
        <ContinueWatchList/>
      </main>
      {/* <h1>PELER BENGKOK</h1> */}
      {/* <Footer/> */}
    </div>
  )
}