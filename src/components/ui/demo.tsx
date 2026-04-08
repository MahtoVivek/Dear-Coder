import { Features } from "@/components/ui/features";

import { Brain, BrainCog } from "lucide-react";

const features = [
  {
    id: 1,
    icon: BrainCog,
    title: "Who Are AI Experts?",
    description:
      "AI Experts at BCA Labs are domain-specific mentors trained to guide you in tech, coding, and academics.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 2,
    icon: BrainCog,
    title: "Why AI Experts?",
    description:
      "Get instant, accurate help from experts—whether it's for coding or understanding tough concepts. They are trained on their expertise.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI-Powered Learning",
    description:
      "Experience personalized, AI-driven learning tailored for BCA, BBA, and other students.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

const DemoOne = () => {
  return (
    <Features 
      primaryColor="sky-500"
      progressGradientLight="bg-gradient-to-r from-sky-400 to-sky-500"
      progressGradientDark="bg-gradient-to-r from-sky-300 to-sky-400" 
      features={features} 
    />
  );
};

export { DemoOne };
