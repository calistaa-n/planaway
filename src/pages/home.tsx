// import Navbar from '../common/navbar'
import HomeCategory from '../components/categories'
import Products from '../components/products'
import Leaderboard from '../components/leaderboard'
import { RecentReviews } from '../components/review-slider'
import Footer from '../components/footer'
export default function Home() {
  return (
    <>
      <main className='max-w-screen-2xl mx-auto sm:px-4 md:px-6 lg:px-8'>
        <HomeCategory></HomeCategory>
        <Products></Products>
        <Leaderboard></Leaderboard>
        <RecentReviews />
      </main>
      <footer className="max-w-screen-2xl mx-auto sm:px-4 md:px-6 lg:px-8">
        <Footer />
      </footer>
    </>
)}