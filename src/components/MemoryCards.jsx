const memories = [
  { title: "🎯 Goals", detail: "Build with AI, secure UK scholarship, become tech influencer." },
  { title: "📚 Favorite Topics", detail: "Generative AI, UX Design, and Personality Theory." },
  { title: "🧠 Mental Health", detail: "Meditation, self-talk, growth mindset practices." },
];

const MemoryCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 my-16">
      {memories.map((mem, idx) => (
        <div key={idx} className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">{mem.title}</h3>
          <p className="text-gray-600">{mem.detail}</p>
        </div>
      ))}
    </div>
  );
};

export default MemoryCards;
