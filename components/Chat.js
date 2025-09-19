import { useState } from 'react';

export default function Chat({ messages, members }) {
  const [text, setText] = useState('');
  const getMember = (id) => members.find((m) => m.id === id) || {};
  return (
    <div className="flex flex-col h-80 border rounded-lg">
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.map((m) => {
          const member = getMember(m.memberId);
          return (
            <div key={m.id} className="flex items-start space-x-2">
              <img src={member.avatar} alt={member.name} className="w-8 h-8 rounded-full" />
              <div className="bg-brandBlue/10 p-2 rounded">
                <p className="text-sm">{m.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-2 flex space-x-2 border-t">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 border rounded p-2 text-sm"
          placeholder="Type a message"
        />
        <button className="bg-brandBlue text-white px-3 py-1 rounded text-sm">Send</button>
      </div>
    </div>
  );
}
