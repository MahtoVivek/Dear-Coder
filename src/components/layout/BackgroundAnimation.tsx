import { useEffect, useRef, useState } from "react";

const BackgroundAnimation = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    // Vanta.js requires Three.js to be loaded globally.
    // We check if VANTA is available on the window object.
    const initVanta = () => {
      if (!vantaEffect && (window as any).VANTA && (window as any).VANTA.NET) {
        setVantaEffect(
          (window as any).VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xfc7c7c,
            backgroundColor: 0x0a0a0a, // Dark background for contrast
            points: 10.0,
            maxDistance: 25.0,
            spacing: 15.0,
          })
        );
      }
    };

    // Small delay to ensure scripts are fully loaded
    const timeoutId = setTimeout(initVanta, 100);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      clearTimeout(timeoutId);
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default BackgroundAnimation;
