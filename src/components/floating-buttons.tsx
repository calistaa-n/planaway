import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-[1rem] sm:right-[3rem] xl:right-[5rem] flex flex-col items-center gap-4 z-50">
      <a
        href="https://wa.me/6285829183884"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0FAE13] rounded-full w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex items-center justify-center shadow-lg"
      >
        <img src="/explore/wa.png" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </a>

      {showScroll && (
          <button
          onClick={scrollToTop}
          className="bg-white border border-gray-300 hover:bg-gray-100 rounded-full w-12 h-12 sm:w-13 sm:h-13 lg:w-14 lg:h-14 flex items-center justify-center shadow-md"
          aria-label="Scroll to top"
          >
          <img src="/explore/arrow-up.png" alt="Arrow Up" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
      )}
    </div>
  );
}
