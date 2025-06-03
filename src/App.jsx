// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import PerformanceMonitor from "./components/utils/PerformanceMonitor";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Modules = lazy(() => import("./pages/Modules"));
const ModuleDetail = lazy(() => import("./pages/ModuleDetail"));
const Exercises = lazy(() => import("./pages/Exercises"));
const ExerciseDetail = lazy(() => import("./pages/ExerciseDetail"));
const Forum = lazy(() => import("./pages/Forum"));
const ForumDetail = lazy(() => import("./pages/ForumDetail"));

// Loading component
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
          {/* Public Routes with Main Layout (includes footer) */}
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

          {/* Auth Routes without layout */}
          <Route
            path="/login"
            element={
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<PageLoader />}>
                <Register />
              </Suspense>
            }
          />

          {/* Dashboard Routes with Dashboard Layout (no footer) */}
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="/modules"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Modules />
                </Suspense>
              }
            />
            <Route
              path="/modules/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ModuleDetail />
                </Suspense>
              }
            />
            <Route
              path="/exercises"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Exercises />
                </Suspense>
              }
            />
            <Route
              path="/exercises/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ExerciseDetail />
                </Suspense>
              }
            />
            <Route
              path="/forum"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Forum />
                </Suspense>
              }
            />
            <Route
              path="/forum/:id"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ForumDetail />
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
