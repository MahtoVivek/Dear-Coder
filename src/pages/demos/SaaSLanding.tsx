import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Command, CheckCircle2, CloudLightning } from "lucide-react";

export default function SaaSLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center gap-8">
          <Link href="/portfolio" className="text-gray-400 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="font-bold text-xl flex items-center gap-2">
            <Command className="w-6 h-6 text-indigo-600"/> Nexus
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <span className="cursor-pointer hover:text-indigo-600">Features</span>
          <span className="cursor-pointer hover:text-indigo-600">Pricing</span>
          <span className="cursor-pointer hover:text-indigo-600">Docs</span>
        </div>
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-shadow hover:shadow-lg hover:shadow-indigo-600/30">
          Get Started Free
        </button>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6 border border-indigo-100">
            <CloudLightning className="w-4 h-4"/> Introducing Nexus 3.0
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8">
            Build faster with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">intelligent</span> workflows.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            The ultimate productivity tool for modern teams. Automate your tasks, collaborate seamlessly, and ship products at lightspeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors text-lg flex items-center justify-center">
                Start For Free
              </button>
            </div>
            <button className="px-8 py-4 rounded-xl font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors text-lg">
              Book a Demo
            </button>
          </div>
          <div className="mt-6 flex gap-6 justify-center text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500"/> No credit card</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-500"/> 14-day trial</span>
          </div>
        </motion.div>

        {/* Dashboard Mockup Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 w-full relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-b from-indigo-50/50 to-white -z-10 blur-3xl"></div>
          <div className="border border-gray-200 rounded-2xl md:rounded-[2rem] p-2 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden shadow-indigo-600/10">
            <div className="bg-gray-50 border border-gray-100 rounded-xl md:rounded-[1.5rem] w-full aspect-[16/9] flex items-center justify-center text-gray-400 shadow-inner relative overflow-hidden">
               {/* UI Mockup Details */}
               <div className="absolute top-0 left-0 w-full h-12 border-b border-gray-200 bg-white flex items-center px-4 gap-2">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="mx-auto w-1/3 h-6 bg-gray-100 rounded-md"></div>
               </div>
               <div className="absolute top-12 left-0 w-64 h-full border-r border-gray-200 bg-white p-4 hidden md:block">
                 <div className="w-full h-8 bg-indigo-50 rounded-md mb-4"></div>
                 <div className="w-3/4 h-4 bg-gray-100 rounded mb-4"></div>
                 <div className="w-5/6 h-4 bg-gray-100 rounded mb-4"></div>
                 <div className="w-2/3 h-4 bg-gray-100 rounded mb-4"></div>
               </div>
               <div className="font-medium text-lg text-gray-300">Intelligent Workspace Interface</div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
