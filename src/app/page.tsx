import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import FeaturedProject from "@/components/home/FeaturedProject";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import Commitment from "@/components/home/Commitments";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <FeaturedProject />
      <ProjectsShowcase />
      <Commitment />
      <ContactCTA />
    </main>
  );
}
