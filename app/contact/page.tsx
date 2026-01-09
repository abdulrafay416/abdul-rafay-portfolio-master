import { ContactForm } from "@/components/common/ContactForm";
import { personalData } from "@/data/personal.data";
import { siteCopy } from "@/data/content.data";

export default function ContactPage() {
  const copy = siteCopy.contact;

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-bold">{copy.title}</h1>
        <p className="text-lg text-muted-foreground">
          {copy.subtitle}{" "}
          <span className="font-semibold">{personalData.email}</span>
        </p>
      </header>
      <ContactForm />
    </div>
  );
}
