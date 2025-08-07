export default function Testimonials() {
  const team = [
    {
      name: "Amarpreet Singh",
      title: "Chief Marketing Officer",
      desc: "Drives Bilaytics' market positioning, ensuring our solutions reach organizations that need smarter billing analytics.",
    },
    {
      name: "Mansi Rastogi",
      title: "Project Manager",
      desc: "Leads the Bilaytics development roadmap, ensuring seamless delivery of platform features aligned with business goals.",
    },
    {
      name: "Vanshika Manav",
      title: "Senior Software Engineer",
      desc: "Architects and implements Bilaytics’ secure, scalable, and performant backend infrastructure.",
    },
    {
      name: "Mukul Kansal",
      title: "Sales Manager",
      desc: "Builds and nurtures client relationships, helping businesses adopt Bilaytics for financial clarity and growth.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white drop-shadow dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          Meet the Bilaytics Team
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
          At Bilaytics, we are a passionate team dedicated to redefining how organizations manage and analyze their financial data. Get to know the people driving this mission.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {team.map((person, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border dark:border-purple-700/40 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-[1.02] dark:hover:shadow-purple-700/30"
            >
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-1">
                {person.name}
              </h3>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                {person.title}
              </p>
              <p className="text-sm text-gray-700 dark:text-purple-200 leading-relaxed">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
