import AboutUs from "@/components/homepage/AboutUs";
import PartnerRideSection from "@/components/homepage/DeliveryServiceUI";
import HeroSection from "@/components/homepage/HeroSection";
import PopularBrands from "@/components/homepage/PopularBrands";
import PopularCategories from "@/components/homepage/PopularCategories";
import PopularRestaurant from "@/components/homepage/PopularRestaurant";
import PromoBanner from "@/components/homepage/PromoBanner";
import StatsBanner from "@/components/homepage/StatsBanner";


// Main landing page component that renders all major sections
export default function Home() {
  return (
    <div>
      {/* Hero Section with Search */}
      <div className="bg-[#FAFAFA] border border-gray-200 rounded-2xl mb-4 md:mb-8">
        <HeroSection />
      </div>

      {/* Popular Restaurant Section with Filters */}
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <PopularRestaurant />
      </div>

      {/* Food Categories Section */}
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <PopularCategories />
      </div>

      {/* Popular Restaurant Brands */}
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <PopularBrands />
      </div>
      {/* Promo Banner */}
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <PromoBanner />
      </div>
      {/* Service Ui */}
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <PartnerRideSection />
      </div>
      {/* About US*/}
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <AboutUs />
      </div>
      <div className="mb-4 mt-4 md:mb-8 md:mt-8">
        <StatsBanner />
      </div>
    </div>
  );
}
