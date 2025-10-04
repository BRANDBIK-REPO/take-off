import JoinTakeOffForm from "./forms/join-take-off-form";
import Image from "next/image";

export default function JoinTakeOff() {
  return (
    <div className="bg-white border-b border-border">
      <div className="mx-auto  w-full px-4 sm:px-6 lg:px-20  max-w-[1650px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          <div className="flex-8 lg:pr-16 lg:py-20 border-b md:border-b-0 md:border-r border-border">
            <div className="relative">
              <Image
                src="/join-take-off.webp"
                alt="Business Meeting"
                width={800}
                height={770}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 space-y-4">
                <h5 className="text-3xl md:text-4xl not-italic font-serif text-white">
                  Ready for
                  <span className="italic font-serif">TakeOff?</span>
                </h5>
                <p className="text-sm md:text-base text-white">
                  Collaborate with us to launch your next big idea
                </p>
              </div>
            </div>
          </div>
          <div className="flex-7 lg:py-20 pl-0 lg:pl-6">
            <JoinTakeOffForm />
          </div>
        </div>
      </div>
    </div>
  );
}
