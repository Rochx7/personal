import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className="container mx-auto px-16">
      <Header />
      <h1>introducing myself</h1>
      <Intro />
      <h1>ABOUT ME SECTION</h1>
      <h1>MY PROJECTS</h1>
      <h1>SKILLS SECTION</h1>
      <h1>Wanna work together?</h1>
      <Footer />
    </main>
  );
}
