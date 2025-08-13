import HeroSection from "@/components/HeroSection";
import PopularBrands from "@/components/PopularBrands";
import PopularCategories from "@/components/PopularCategories";
import PopularRestaurant from "@/components/PopularRestaurant";

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
    </div>
  );
}
