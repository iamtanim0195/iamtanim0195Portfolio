import Image from "next/image";
import bg from "../../../../public/background/contact-background.webp";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-[#A8FFFF] font-semibold text-center text-4xl capitalize">
            iamtanim0195
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Embark on a cosmic journey and send your thoughts soaring among the stars. Whether you’re reaching out for new collaborations, seeking answers to the unknown, or sharing your latest explorations, your words are like messages carried through the galaxy. Use the form below to transmit your stellar notes into the astral expanse and await a response from the great beyond.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
