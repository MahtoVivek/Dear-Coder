import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Activity, Heart, Flame } from "lucide-react";

export default function FitLifeTracker() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <div className="fixed top-0 left-0 w-full p-4 z-50 flex justify-between items-center bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <Link href="/portfolio" className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <div className="font-bold text-xl tracking-tight text-emerald-400 flex items-center gap-2">
          <Activity className="w-5 h-5"/> FitLife
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors">
          Download App
        </button>
      </div>

      <main className="pt-32 pb-16 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 md:pr-12 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-6 border border-emerald-500/20">
            v2.0 Now Available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Track your fitness,<br/>reach your goals.
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto md:mx-0">
            The all-in-one health and fitness tracker designed to help you stay active, eat better, and live a healthier life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition-transform hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial
            </button>
            <button className="bg-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full max-w-sm"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-800 border border-slate-700 rounded-[2.5rem] p-4 shadow-2xl">
            <div className="bg-slate-900 h-[600px] rounded-[2rem] overflow-hidden p-6 relative border border-slate-700">
              {/* Mockup App Content */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-slate-400 text-sm">Today</h3>
                  <p className="font-bold text-xl">Mon, 12 Oct</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  User
                </div>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-2xl mb-4 border border-slate-700 relative overflow-hidden">
                <h4 className="text-slate-400 text-sm mb-1">Daily Goal</h4>
                <div className="text-3xl font-bold font-mono">8,432</div>
                <div className="text-sm text-emerald-400 mt-1">out of 10,000 steps</div>
                <div className="w-full bg-slate-700 h-2 rounded-full mt-4">
                  <div className="bg-emerald-500 h-full rounded-full w-[84%]"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-2">
                  <Heart className="w-6 h-6 text-rose-500" />
                  <div className="font-bold text-lg">72 bpm</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex flex-col items-center justify-center gap-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <div className="font-bold text-lg">450 cal</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
