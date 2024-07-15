import HeaderTopMessege from "@/components/common/HeaderTopMessege";
import HeaderSection from "@/components/common/HeaderSection";
import HeroSection from "@/components/LandingSection/HeroSection";
import CompaniesSection from "@/components/LandingSection/CompaniesSection";
import NewArrivalsSection from "@/components/LandingSection/NewArrivalsSection";

export default function Home() {
  return (
    <>
      <HeaderTopMessege />
      <HeaderSection />
      <HeroSection />
      <CompaniesSection />
      <NewArrivalsSection />
    </>
  );
}
