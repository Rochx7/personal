import About from "@/components/About";
import Divider from "@/components/Divider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="container ">
      <Header />
      <Intro />
      <Divider section="about" />
      <About />
      <Footer />
    </main>
  );
}
