import ContactForm from "@/components/features/contact/ContactForm";
import ContactHero from "@/components/features/contact/ContactHero";
import ContactMap from "@/components/features/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
