export const members = [
  { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3' },
];

export const messages = [
  { id: 1, memberId: 1, text: 'Hey team!', time: '09:00' },
  { id: 2, memberId: 2, text: 'Excited for the trip!', time: '09:05' },
  { id: 3, memberId: 3, text: 'Don\'t forget tickets.', time: '09:10' },
];

export const itinerary = [
  {
    day: 'Day 1',
    activities: [
      { time: '09:00', name: 'Louvre Museum' },
      { time: '14:00', name: 'Seine River Cruise' },
    ],
  },
  {
    day: 'Day 2',
    activities: [
      { time: '10:00', name: 'Eiffel Tower' },
      { time: '15:00', name: 'Montmartre Walk' },
    ],
  },
];

export const budget = {
  total: 2000,
  expenses: [
    { id: 1, category: 'Food', amount: 150, icon: '🍔' },
    { id: 2, category: 'Transport', amount: 80, icon: '🚆' },
    { id: 3, category: 'Lodging', amount: 400, icon: '🏨' },
  ],
};
