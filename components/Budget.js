export default function Budget({ budget }) {
  const spent = budget.expenses.reduce((sum, e) => sum + e.amount, 0);
  const percent = Math.min(100, (spent / budget.total) * 100);
  return (
    <div className="border rounded-lg p-4 space-y-4">
      <div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="h-2 bg-brandOrange rounded"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="text-sm mt-1">
          ${spent} spent of ${budget.total}
        </p>
      </div>
      <ul className="space-y-1">
        {budget.expenses.map((e) => (
          <li key={e.id} className="flex justify-between text-sm">
            <span>
              <span className="mr-2">{e.icon}</span>
              {e.category}
            </span>
            <span>${e.amount}</span>
          </li>
        ))}
      </ul>
      <button className="text-brandOrange text-sm">Add Expense</button>
    </div>
  );
}
