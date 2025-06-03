// src/layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Suspense, lazy } from "react";

const { Content } = Layout;

// Lazy load Dashboard Navbar
const DashboardNavbar = lazy(() =>
  import("../components/organisms/DashboardNavbar")
);

const DashboardNavbarSkeleton = () => (
  <div className="sticky top-0 z-50 bg-cream shadow-elegant">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="w-48 h-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="flex space-x-4">
          <div className="w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#F1E9DB" }}>
      <Suspense fallback={<DashboardNavbarSkeleton />}>
        <DashboardNavbar />
      </Suspense>

      <Content style={{ padding: "24px 0" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
