import { ExpBanner } from "@/components/explore-banner";
import ExpInfo from "@/components/explore-info";
import Footer from "@/components/footer";
export default function ExploreActivity() {
  return (
    <>
    <main className="max-w-screen-2xl mx-auto sm:px-4 md:px-6 lg:px-8">
     <ExpBanner />
     <ExpInfo />
    </main>
      <footer className="max-w-screen-2xl mx-auto sm:px-4 md:px-6 lg:px-8">
        <Footer />
      </footer>
    </>
  );

  
}