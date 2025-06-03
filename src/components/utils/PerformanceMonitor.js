// src/components/utils/PerformanceMonitor.jsx
import { useEffect } from "react";

const PerformanceMonitor = ({ children }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Monitor performance in development
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 16) {
            // More than 16ms (60fps threshold)
            console.warn(
              `Slow animation detected: ${entry.name} took ${entry.duration}ms`
            );
          }
        });
      });

      observer.observe({ entryTypes: ["measure", "navigation"] });

      return () => observer.disconnect();
    }
  }, []);

  return children;
};

export default PerformanceMonitor;
