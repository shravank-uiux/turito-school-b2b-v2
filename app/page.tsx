import { pageMetadata } from "@/lib/seo";
import { EcosystemHome } from "@/components/home-ecosystem";
import { HomeHero } from "@/components/home-hero";
import "./home-ecosystem.css";
export default function Page() {
  return <EcosystemHome hero={<HomeHero />} />;
}

export const metadata = pageMetadata(
  "One intelligent learning ecosystem. Built for schools, teachers, and students.",
  "Help teachers prepare lessons, give students guided practice, and see where extra support is needed. AI support for your whole school, from TuritoSchools.",
  "/learning-together.png",
);
