
import AI from "@/components/home/AI";
import Articles from "@/components/home/Articles";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import Renders from "@/components/home/Renders";
import WorkHighlights from "@/components/home/WorkHighlights";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <AI />
      <WorkHighlights />
      <Renders />
      <Articles />

    </div>
  );
}