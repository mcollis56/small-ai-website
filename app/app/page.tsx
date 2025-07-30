
import HeroSection from '@/components/hero-section';
import ServicesPreview from '@/components/services-preview';
import UseCaseGallery from '@/components/use-case-gallery';
import BookingSection from '@/components/booking-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <UseCaseGallery />
      <BookingSection />
    </>
  );
}
