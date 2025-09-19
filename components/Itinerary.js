export default function Itinerary({ itinerary }) {
  return (
    <div className="border rounded-lg p-4 space-y-4">
      {itinerary.map((day) => (
        <div key={day.day}>
          <h3 className="font-semibold mb-2">{day.day}</h3>
          <ul className="space-y-1">
            {day.activities.map((act, idx) => (
              <li key={idx} className="flex justify-between text-sm">
                <span className="text-gray-600">{act.time}</span>
                <span>{act.name}</span>
              </li>
            ))}
          </ul>
          <button className="mt-2 text-brandTeal text-sm">Add Activity</button>
        </div>
      ))}
    </div>
  );
}
