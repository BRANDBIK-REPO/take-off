import ReadyToLaunch from "@/components/features/about/ReadyToLaunch";
import { EventsList } from "@/components/features/events";

export default function EventsPage() {
  return (
    <main className="bg-[var(--surface)] pt-48">
      <EventsList />
      <ReadyToLaunch />
    </main>
  );
}
