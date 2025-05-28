import Hero from "../components/templates/Hero";
import FeaturesSection from "../components/templates/FeaturesSection";
import ModulSection from "../components/templates/ModulSection";
import CTASection from "../components/templates/CTASection";
import NewsletterSection from "../components/templates/NewsletterSection";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <FeaturesSection />
      <ModulSection />
      <CTASection />
      <NewsletterSection />
    </div>
  );
};

export default Home;