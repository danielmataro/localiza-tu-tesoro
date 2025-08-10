import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button 
        className="w-full shadow-strong text-lg py-6"
        onClick={() => window.open('#', '_blank')}
      >
        Empezar búsqueda por 29€
      </Button>
    </div>
  );
};

export default StickyButton;