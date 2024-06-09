import Footer from "@/components/ui/footer/Footer";
import CoordinatorsSection from "@/components/ui/home/CoordinatorsSection";
import CourseModule from "@/components/ui/home/CourseModule";
import DetailsSection from "@/components/ui/home/DetailsSection";
import FAQandReviews from "@/components/ui/home/FAQandReviews";
import Hero from "@/components/ui/home/Hero";
import LearnSection from "@/components/ui/home/LearnSection";
import TuitionSection from "@/components/ui/home/TuitionSection";
import Navbar from "@/components/ui/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      {/* hero image */}
      <Image
          src='/assets/hero-img.png'
          width={1400}
          height={0}
          priority
          className="hidden sm:block w-[90%] h-full mx-auto rounded-2xl my-20"
          alt='hero'
        />
        <Image
          src='/assets/hero-bg-mobile.png'
          width={1400}
          height={0}
          priority
          className="sm:hidden w-full h-fit mx-auto rounded-2xl my-6"
          alt='hero'
        />

      <DetailsSection />
      <LearnSection />
      <CourseModule />
      <CoordinatorsSection />
      <TuitionSection />
      <FAQandReviews />
      <Footer />
    </main>
  );
}
