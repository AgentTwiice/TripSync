import Chat from '../components/Chat';
import Itinerary from '../components/Itinerary';
import Budget from '../components/Budget';
import { messages, members, itinerary, budget } from '../data/dummyData';

export default function Home() {
  return (
    <main className="p-4 space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
      <section className="md:col-span-2 space-y-4">
        <h2 className="text-xl font-semibold text-brandBlue mb-2">Group Chat</h2>
        <Chat messages={messages} members={members} />
        <h2 className="text-xl font-semibold text-brandTeal mt-6 mb-2">Itinerary</h2>
        <Itinerary itinerary={itinerary} />
      </section>
      <section className="space-y-4 mt-6 md:mt-0">
        <h2 className="text-xl font-semibold text-brandOrange mb-2">Budget Tracker</h2>
        <Budget budget={budget} />
      </section>
    </main>
  );
}
