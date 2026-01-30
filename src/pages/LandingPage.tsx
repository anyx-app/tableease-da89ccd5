import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-slate-950">
           <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3A86FF]/20 rounded-full blur-[120px] animate-pulse" />
           <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FFBE0B]/10 rounded-full blur-[120px]" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="text-sm font-medium text-[#FFBE0B]">✨ Redefining the dining experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
            Reserve the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#FFBE0B]">
              Extraordinary
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover and book the best restaurants in your city. Real-time availability, 
            exclusive tables, and seamless confirmations.
          </p>

          {/* Search Interface */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">📍</span>
               <input 
                 type="text" 
                 placeholder="Location, Restaurant, or Cuisine"
                 className="w-full h-14 pl-12 pr-4 bg-transparent text-white placeholder-slate-500 focus:outline-none rounded-xl hover:bg-white/5 transition-colors"
               />
            </div>
            <div className="w-px bg-white/10 hidden md:block my-2" />
            <div className="flex-1 relative">
               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">📅</span>
               <input 
                 type="text" 
                 placeholder="Date & Time"
                 className="w-full h-14 pl-12 pr-4 bg-transparent text-white placeholder-slate-500 focus:outline-none rounded-xl hover:bg-white/5 transition-colors"
               />
            </div>
             <button className="h-14 px-8 bg-[#3A86FF] text-white font-semibold rounded-xl hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#3A86FF]/25">
               Find a Table
             </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-2">Trending Now</h2>
              <p className="text-slate-400">Top-rated spots locals love this week.</p>
            </div>
            <Link to="/restaurants" className="text-[#3A86FF] hover:text-[#FFBE0B] transition-colors font-medium">View all &rarr;</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#3A86FF]/10 transition-all duration-300">
                <div className="h-64 bg-slate-800 relative overflow-hidden">
                   {/* Placeholder for Restaurant Image - utilizing gradient for now */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${i === 1 ? 'from-purple-900 to-indigo-900' : i === 2 ? 'from-slate-800 to-slate-900' : 'from-blue-900 to-slate-900'}`} />
                   <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10">
                     4.9 ★
                   </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">The Culinary Loft</h3>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">$$$</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-6">Modern French • Downtown</p>
                  
                  <div className="flex gap-2 text-sm font-medium">
                     {['18:00', '18:30', '19:00'].map(time => (
                       <button key={time} className="flex-1 py-2 rounded-lg bg-[#3A86FF]/10 text-[#3A86FF] hover:bg-[#3A86FF] hover:text-white transition-all border border-[#3A86FF]/20">
                         {time}
                       </button>
                     ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-bold text-white mb-6">Seamless Reservations for Modern Dining</h2>
               <div className="space-y-8">
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#3A86FF]/20 flex items-center justify-center text-[#3A86FF] text-2xl">⚡</div>
                   <div>
                     <h4 className="text-xl font-semibold text-white mb-2">Real-time Availability</h4>
                     <p className="text-slate-400 leading-relaxed">Instantly see which tables are open. No more phone tag or waiting on hold.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#FFBE0B]/20 flex items-center justify-center text-[#FFBE0B] text-2xl">🛋️</div>
                   <div>
                     <h4 className="text-xl font-semibold text-white mb-2">Select Your Spot</h4>
                     <p className="text-slate-400 leading-relaxed">Choose your preferred seating area—patio, bar, or quiet corner.</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="h-[500px] bg-gradient-to-tr from-white/5 to-white/0 rounded-3xl border border-white/10 relative backdrop-blur-md p-8">
                {/* Abstract UI Mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-[3/4] bg-slate-900 rounded-2xl border border-white/10 shadow-2xl p-6">
                   <div className="w-full h-1/2 bg-slate-800 rounded-xl mb-4 animate-pulse opacity-50" />
                   <div className="w-3/4 h-4 bg-slate-700 rounded mb-2" />
                   <div className="w-1/2 h-4 bg-slate-700 rounded mb-8" />
                   <div className="w-full h-12 bg-[#3A86FF] rounded-xl" />
                </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
