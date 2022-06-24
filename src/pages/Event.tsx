import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div className="flex flex-col flex-1">
          <Video />
          <Footer />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
