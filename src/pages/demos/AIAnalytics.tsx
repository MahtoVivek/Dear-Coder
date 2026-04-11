import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, BarChart3, TrendingUp, Zap, Users } from "lucide-react";

export default function AIAnalytics() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-50 fixed top-0 w-full p-4 flex justify-between items-center border-b border-white/10 glass-card">
        <Link href="/portfolio" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Portfolio
        </Link>
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-500"/> DataSphere AI
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors">
          Request Demo
        </button>
      </div>

      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Predict the Future of Your Business
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            Harness the power of artificial intelligence to analyze trends, optimize operations, and unlock deep insights from your data instantly.
          </motion.p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
        >
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <h2 className="text-xl font-bold">Real-time Analytics</h2>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">Auto-refresh On</span>
              <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-medium">Last 7 Days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { label: "Active Revenue", value: "$124,563", icon: <TrendingUp className="text-green-400" />, trend: "+14.5%" },
              { label: "Conversion Rate", value: "3.42%", icon: <Zap className="text-yellow-400" />, trend: "+1.2%" },
              { label: "Total Users", value: "84,092", icon: <Users className="text-blue-400" />, trend: "+5.8%" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
                  <span className="text-green-400 text-sm font-medium">{stat.trend}</span>
                </div>
                <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="h-64 bg-gradient-to-t from-blue-900/20 to-transparent border border-white/5 rounded-xl w-full flex items-end p-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl tracking-widest uppercase">
              AI Projection Chart rendering...
            </div>
            {/* Fake chart bars */}
            <div className="w-full flex justify-between items-end gap-2 h-full z-10 opacity-60 hover:opacity-100 transition-opacity">
               {[40, 60, 45, 80, 55, 90, 75, 100, 85, 120, 105, 140].map((h, i) => (
                 <div key={i} className="w-full bg-blue-500/50 rounded-t-sm transition-all duration-500 hover:bg-blue-400" style={{ height: `${(h/140)*100}%` }}></div>
               ))}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
