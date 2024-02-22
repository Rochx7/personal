import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="container mx-auto px-16">
      <Header />
      <Intro />
      <Footer />
    </main>
  );
}
