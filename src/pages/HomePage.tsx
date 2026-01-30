import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#3A86FF]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#FFBE0B]/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFBE0B] animate-pulse" />
              <span className="text-xs font-medium text-[#FFBE0B] uppercase tracking-wider">Live Availability</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Dining, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#60A5FA]">
                Redefined.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              Experience the future of reservations. Real-time tables, seamless booking, and curated dining experiences at your fingertips.
            </p>

            {/* Search Component */}
            <div className="p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col md:flex-row gap-2 max-w-xl shadow-2xl shadow-black/50">
              <input 
                type="text" 
                placeholder="Restaurant, cuisine, or location..." 
                className="flex-1 bg-transparent border-none text-white placeholder:text-slate-500 focus:ring-0 px-4 py-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="px-8 py-3 bg-[#3A86FF] hover:bg-[#2563EB] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-[#3A86FF]/20">
                Find Table
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs text-white">
                    {/* Placeholder Avatar */}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-medium">10k+ Diners</p>
                <p className="text-slate-500">Booked today</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] rounded-2xl bg-slate-800 mb-6 overflow-hidden relative group">
                 {/* Imagine a high quality restaurant image here */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-4 left-4">
                   <h3 className="text-white font-bold text-xl">The Chef's Table</h3>
                   <p className="text-slate-300 text-sm">New York, NY • Italian</p>
                 </div>
              </div>
              <div className="flex gap-3">
                {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'].map((time, i) => (
                  <div key={time} className={`flex-1 py-2 text-center rounded-lg text-sm font-medium cursor-pointer transition-colors ${i === 2 ? 'bg-[#3A86FF] text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}>
                    {time}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Trending Now</h2>
            <p className="text-slate-400">Top rated spots for your next dinner.</p>
          </div>
          <button className="text-[#3A86FF] font-medium hover:text-[#2563EB] transition-colors">View All &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-[#3A86FF]/5 transition-all duration-300">
              <div className="aspect-video bg-slate-800 relative">
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white">
                  4.9 ★
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#3A86FF] transition-colors">Lumina Brasserie</h3>
                  <span className="text-slate-500 text-sm">$$$</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">Modern Fusion • Downtown</p>
                <button className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-[#3A86FF] hover:border-[#3A86FF] transition-all">
                  Reserve Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
