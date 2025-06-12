import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
    sovira: '90-Day Performance Guarantee',
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
    sovira: 'Direct WhatsApp',
  },
];

export default function ComparisonTable() {
  // reasoning: Direct comparison highlights Sovira's advantages
  // Visual contrast reinforces the value proposition
  
  return (
    <section className="py-20 md:py-32 bg-sovira-black text-sovira-paper">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="font-neue-haas text-4xl md:text-6xl font-bold mb-6">
            Why founders switch to Sovira
          </h2>
          <p className="text-xl text-sovira-paper/80 max-w-2xl mx-auto">
            Traditional agencies are built for their timeline. We're built for yours.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-sovira-paper/20">
                <TableHead className="text-left font-neue-haas font-normal text-sovira-paper/60 w-[30%]">
                  {/* Empty header for spacing */}
                </TableHead>
                <TableHead className="text-center py-4 px-4">
                  <p className="font-neue-haas font-bold text-lg mb-1 text-white">Traditional Agency</p>
                  <p className="text-sm text-sovira-paper/60">The old way</p>
                </TableHead>
                <TableHead className="text-center py-4 px-4">
                  <p className="font-neue-haas font-bold text-lg mb-1 text-sovira-chartreuse">Sovira Sprint</p>
                  <p className="text-sm text-sovira-paper/60">The fast way</p>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisons.map((row) => (
                <TableRow 
                  key={row.feature} 
                  className={`border-b border-sovira-paper/10 ${row.highlight ? 'bg-sovira-paper/[.03]' : ''}`}
                >
                  <TableCell className="py-8 px-4 font-medium text-sovira-paper/80">{row.feature}</TableCell>
                  <TableCell className="py-8 px-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-md text-sm ${
                      row.traditional === 'None' 
                        ? 'bg-red-900/50 text-red-300' 
                        : 'text-sovira-paper/60'
                    }`}>
                      {row.traditional}
                    </span>
                  </TableCell>
                  <TableCell className="py-8 px-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-md text-sm ${
                      row.highlight 
                        ? 'bg-sovira-chartreuse/20 text-sovira-chartreuse font-bold' 
                        : 'text-sovira-paper'
                    }`}>
                      {row.sovira}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-neue-haas font-bold text-xl mb-2 text-sovira-chartreuse">Sovira Sprint</h3>
            <p className="text-sovira-paper/60">The fast way</p>
          </div>
          <div className="space-y-6">
            {comparisons.map((row) => (
              <div key={row.feature} className={`p-4 rounded-lg ${row.highlight ? 'bg-sovira-paper/5' : ''}`}>
                <p className="font-medium text-center text-sovira-paper/90 mb-4">{row.feature}</p>
                <div className="flex items-center justify-between border-t border-sovira-paper/10 pt-4">
                  <div className="w-1/2 text-center pr-2">
                    <p className="text-sm text-sovira-paper/60 mb-2">Traditional</p>
                    <span className={`inline-block px-2 py-1 rounded-md text-xs ${
                      row.traditional === 'None' 
                        ? 'bg-red-900/50 text-red-300' 
                        : 'text-sovira-paper/70'
                    }`}>
                      {row.traditional}
                    </span>
                  </div>
                  <div className="w-px h-12 bg-sovira-paper/10"></div>
                  <div className="w-1/2 text-center pl-2">
                    <p className="text-sm text-sovira-paper/60 mb-2">Sovira</p>
                    <span className={`inline-block px-2 py-1 rounded-md text-xs ${
                      row.highlight 
                        ? 'bg-sovira-chartreuse/20 text-sovira-chartreuse font-bold' 
                        : 'text-sovira-paper'
                    }`}>
                      {row.sovira}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sovira-paper/60 mb-6">
            Join 10+ momentum brands who've made the switch
          </p>
          <a 
            href="https://calendar.app.google/H2rgeWTpMBDyQzNE6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-sovira-chartreuse text-sovira-black font-neue-haas font-bold text-lg rounded-sm hover:bg-sovira-chartreuse/90 transition-all duration-150"
          >
            Book Your Sprint Call
            <span className="inline-block ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
} 