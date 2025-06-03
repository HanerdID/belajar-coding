// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import PerformanceMonitor from "./components/utils/PerformanceMonitor";

// Lazy load Home component
const Home = lazy(() => import("./pages/Home"));

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-sage border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-charcoal">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <PerformanceMonitor>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PerformanceMonitor>
  );
}

export default App;
