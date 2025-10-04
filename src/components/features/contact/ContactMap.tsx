"use client";

export default function ContactMap() {
  return (
    <section className="max-w-[1600px] mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1688823268775!2d55.27493631501205!3d25.21109998389654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sDubai%20International%20Financial%20Centre!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TakeOff Location"
      ></iframe>
    </section>
  );
}
