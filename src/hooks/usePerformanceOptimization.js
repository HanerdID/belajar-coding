// src/hooks/usePerformanceOptimization.js
import { useState, useEffect, useCallback } from "react";

export const usePerformanceOptimization = () => {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Simple performance detection
    const checkPerformance = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      const isSlow =
        connection &&
        (connection.effectiveType === "2g" ||
          connection.effectiveType === "slow-2g");
      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;

      setIsLowPerformance(isSlow || isLowMemory);
    };

    checkPerformance();

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const getOptimizedProps = useCallback(
    (defaultProps = {}) => {
      if (prefersReducedMotion || isLowPerformance) {
        return {
          ...defaultProps,
          transition: { duration: 0.01 },
          animate: defaultProps.animate
            ? { ...defaultProps.animate, transition: { duration: 0.01 } }
            : undefined,
        };
      }
      return defaultProps;
    },
    [prefersReducedMotion, isLowPerformance]
  );

  return {
    isLowPerformance,
    prefersReducedMotion,
    getOptimizedProps,
    shouldReduceAnimations: prefersReducedMotion || isLowPerformance,
  };
};
