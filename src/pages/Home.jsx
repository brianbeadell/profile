export default function Home() {
  return (
    <div className="p-10 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Brian Beadell</h1>
      <h2 className="text-2xl text-indigo-600 dark:text-indigo-400 font-semibold">AI Engineer • AgTech Innovator • Veteran</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        I build intelligent systems that drive real-world change — from satellite-powered agriculture tools to multi-modal AI agents. 
        With a Master's in Data Science and Applied Machine Learning, I specialize in full-stack AI/ML engineering, computer vision, 
        LLM integration, and automated decision-making tools.
      </p>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        Before this, I served in high-pressure leadership roles as a Navy veteran, commercial diver and medic. 
        I bring that same precision and execution to building machine learning pipelines, geospatial tools, and voice-driven AI systems.
      </p>

      <div className="border-l-4 border-indigo-500 pl-4 text-md text-gray-600 dark:text-gray-400 italic">
        "Calm under pressure, great at simplifying complexity, and incredibly self-motivated."
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300">
        I'm actively pursuing remote opportunities in Data Engineering, MLOps Engineering, Generative AI, Data Science, AI/ML Engineering, 
        Applied AI, AgTech, and Computational Biology — ideally roles that pay well, move fast, and value problem solvers.
      </p>

      <div className="flex space-x-4 pt-6">
        <a href="/Brian_Beadell_Resume.pdf" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow">
          📄 Download Resume
        </a>
        <a href="https://linkedin.com/in/brianbeadell" className="text-indigo-600 hover:underline text-lg">
          LinkedIn →
        </a>
        <a href="mailto:brianbeadell.udc@gmail.com" className="text-indigo-600 hover:underline text-lg">
          Email →
        </a>
      </div>
    </div>
  );
}
