export default function StatsSection() {
  const stats = [
    {
      number: "25+",
      label: "Health Experts",
      description: "Researchers, doctors, and testing specialists"
    },
    {
      number: "10",
      suffix: "years",
      label: "of Experience",
      description: "of fighting for what's right"
    },
    {
      number: "1M",
      label: "Members Strong",
      description: "trusted community worldwide"
    }
  ]

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Purchase, Prosper, and Enjoy Life
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Make every purchase a step toward a better future. Whether it's your health goals,
            wellness journey, or everyday essentials, buying wisely can set you up for long-term success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-green-500">
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="text-5xl md:text-6xl font-bold text-green-500 ml-2">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>

              <p className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Badge */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white rounded-lg p-6 text-center max-w-sm shadow-lg">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              TOP 10
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              BEST TOP PICKS
            </h3>
            <p className="text-gray-600 text-sm">
              A curated selection of the finest choices, carefully handpicked for quality, performance, and value
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
