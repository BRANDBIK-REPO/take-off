import EventCard from "./EventCard";
import { Event } from "@/types/events";
import { EVENTS } from "@/constants/events";

interface EventsListProps {
  events?: Event[];
  maxEvents?: number;
}

export default function EventsList({
  events = EVENTS,
  maxEvents,
}: EventsListProps) {
  return (
    <section className="py-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl not-italic lg:text-5xl font-serif text-[#215273] mb-6">
            Take Off <span className="italic font-serif ">Events</span>
          </h2>
          <p className="text-sm lg:text-base text-[#506767] max-w-2xl">
            Where ideas meet opportunities — join inspiring sessions, workshops,
            and networking experiences designed to fuel entrepreneurial growth
            and collaboration.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} onRegister={() => {}} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#215273] mb-2">
              No events found
            </h3>
            <p className="text-[#506767]">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Load More Button (if needed) */}
        {maxEvents && events.length > maxEvents && (
          <div className="text-center mt-12">
            <button className="bg-[#215273] hover:bg-[#215273]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              View All Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
