import HeaderTopMessege from "@/components/common/HeaderTopMessege";
import HeaderSection from "@/components/common/HeaderSection";
import HeroSection from "@/components/LandingSection/HeroSection";
import CompaniesSection from "@/components/LandingSection/CompaniesSection";
import NewArrivalsSection from "@/components/LandingSection/NewArrivalsSection";
import TopSellerSection from "@/components/LandingSection/TopSellerSection";
import BrowseDressSection from "@/components/LandingSection/BrowseDressSection";

export default function Home() {
  return (
    <>
      <HeaderTopMessege />
      <HeaderSection />
      <HeroSection />
      <CompaniesSection />
      <NewArrivalsSection />
      <TopSellerSection />
      {/* <BrowseDressSection /> */}
    </>
  );
}
