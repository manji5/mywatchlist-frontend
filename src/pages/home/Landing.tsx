import Hero from "src/components/home/Hero";
import FeaturesSection from "src/components/home/FeaturesSection";
import CTASection from "src/components/home/CTASection";
import Footer from "src/components/home/Footer";

export default function Landing() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <CTASection />
            <Footer />
        </>
    );
}