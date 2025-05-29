export default function ComparisonTable() {
  // reasoning: Direct comparison highlights Sovira's advantages
  // Visual contrast reinforces the value proposition
  
  const comparisons = [
    {
      feature: 'Timeline',
      traditional: '3-6 months',
      sovira: '≤ 14 days',
      highlight: true,
    },
    {
      feature: 'Price',
      traditional: '€25,000 - €50,000',
      sovira: '€9,900 - €15,900',
      highlight: true,
    },
    {
      feature: 'Performance Guarantee',
      traditional: 'None',
      sovira: '90-Day Payback Pledge',
      highlight: true,
    },
    {
      feature: 'Design Quality',
      traditional: 'Template-based',
      sovira: 'Custom luxury-grade',
    },
    {
      feature: 'Code Quality',
      traditional: 'Plugin-heavy',
      sovira: 'AI-enhanced, clean',
    },
    {
      feature: 'Post-Launch Support',
      traditional: 'Extra fees',
      sovira: '90 days included',
    },
    {
      feature: 'Founder Access',
      traditional: 'Account manager',
      sovira: 'Direct Slack line',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-sovira-black text-sovira-paper relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-neue-haas text-h3 md:text-h2 font-bold mb-6">
            Why founders switch to Sovira
          </h2>
          <p className="text-xl text-sovira-paper/80 max-w-2xl mx-auto">
            Traditional agencies are built for their timeline. We're built for yours.
          </p>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-sovira-paper/20">
                  <th className="text-left py-4 px-4 font-neue-haas font-normal text-sovira-paper/60">
                    
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-block">
                      <p className="font-neue-haas font-bold text-lg mb-1">Traditional Agency</p>
                      <p className="text-sm text-sovira-paper/60">The old way</p>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="inline-block">
                      <p className="font-neue-haas font-bold text-lg mb-1 text-sovira-chartreuse">Sovira Sprint</p>
                      <p className="text-sm text-sovira-paper/60">The fast way</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-sovira-paper/10 ${
                      row.highlight ? 'bg-sovira-paper/5' : ''
                    }`}
                  >
                    <td className="py-6 px-4 font-medium text-sovira-paper/80">
                      {row.feature}
                    </td>
                    <td className="py-6 px-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        row.traditional === 'None' 
                          ? 'bg-red-500/20 text-red-300' 
                          : 'text-sovira-paper/60'
                      }`}>
                        {row.traditional}
                      </span>
                    </td>
                    <td className="py-6 px-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        row.highlight 
                          ? 'bg-sovira-chartreuse/20 text-sovira-chartreuse font-bold' 
                          : 'text-sovira-paper'
                      }`}>
                        {row.sovira}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-sovira-paper/60 mb-6">
              Join 50+ momentum brands who've made the switch
            </p>
            <button className="px-8 py-4 bg-sovira-chartreuse text-sovira-black font-neue-haas font-bold text-lg rounded-sm hover:bg-sovira-chartreuse/90 transition-all duration-150">
              Book Your Sprint Call
              <span className="inline-block ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 