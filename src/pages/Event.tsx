import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import useMediaQuery from "../hooks/useMediaQuery";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    setIsSidebarOpen(!isSidebarOpen);

    if (isTablet) {
      setIsSidebarOpen(false);
    }
  }, [isTablet]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <main className="flex flex-1 z-10 mt-[65px]">
        <div className="flex flex-col flex-1">
          {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
          <Footer />
        </div>
        {isSidebarOpen && <Sidebar />}
      </main>
    </div>
  );
}
