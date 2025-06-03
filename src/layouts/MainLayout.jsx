// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { Layout, Typography, Row, Col } from "antd";
import { Suspense, lazy } from "react";
import { Code, MessageCircle, Users } from "lucide-react";
import Logo from "../components/atoms/Logo";

const { Footer, Content } = Layout;
const { Text, Link: ALink } = Typography;

// Lazy load Navbar untuk initial load yang lebih cepat
const Navbar = lazy(() => import("../components/organisms/Navbar"));

// Loading component yang ringan
const NavbarSkeleton = () => (
  <div className="sticky top-0 z-50 bg-cream shadow-elegant">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Logo variant="dark" />
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-4 bg-gray-200 rounded animate-pulse"
              ></div>
            ))}
          </div>
          <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#F1E9DB" }}>
      {/* Lazy loaded Navbar with fallback */}
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      {/* Main Content */}
      <Content>
        <Outlet />
      </Content>

      {/* Simplified Footer - removed unnecessary animations */}
      <Footer className="section-dark" style={{ padding: "48px 24px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Logo size="large" variant="light" />
              <Text
                style={{
                  display: "block",
                  marginTop: 16,
                  color: "rgba(241, 233, 219, 0.8)",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                }}
              >
                Platform pembelajaran coding terbaik untuk pemula dengan materi
                lengkap, interaktif, dan mudah dipahami.
              </Text>

              <div className="flex space-x-4 mt-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(241, 233, 219, 0.1)" }}
                >
                  <Users className="w-5 h-5" style={{ color: "#F1E9DB" }} />
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(241, 233, 219, 0.1)" }}
                >
                  <MessageCircle
                    className="w-5 h-5"
                    style={{ color: "#F1E9DB" }}
                  />
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(241, 233, 219, 0.1)" }}
                >
                  <Code className="w-5 h-5" style={{ color: "#F1E9DB" }} />
                </div>
              </div>
            </Col>

            <Col xs={24} md={8}>
              <Text
                strong
                style={{
                  color: "#F1E9DB",
                  fontSize: "1.1rem",
                  marginBottom: 20,
                  display: "block",
                }}
              >
                Pembelajaran
              </Text>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "HTML Dasar",
                  "CSS Styling",
                  "JavaScript",
                  "Project Portfolio",
                  "Web Development",
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: 12 }}>
                    <ALink
                      href="#"
                      style={{
                        color: "rgba(241, 233, 219, 0.8)",
                        fontSize: "0.95rem",
                        transition: "color 0.2s ease",
                      }}
                      className="hover:text-cream"
                    >
                      {item}
                    </ALink>
                  </li>
                ))}
              </ul>
            </Col>

            <Col xs={24} md={8}>
              <Text
                strong
                style={{
                  color: "#F1E9DB",
                  fontSize: "1.1rem",
                  marginBottom: 20,
                  display: "block",
                }}
              >
                Support
              </Text>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Help Center",
                  "Contact Us",
                  "FAQ",
                  "Blog",
                  "Career Guide",
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: 12 }}>
                    <ALink
                      href="#"
                      style={{
                        color: "rgba(241, 233, 219, 0.8)",
                        fontSize: "0.95rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item}
                    </ALink>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 24 }}>
                <Text
                  style={{
                    display: "block",
                    color: "rgba(241, 233, 219, 0.8)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  info@belajarngoding
                  <br />
                  +62 21 1234 5678
                </Text>
              </div>
            </Col>
          </Row>

          {/* Bottom Footer */}
          <div
            style={{
              borderTop: "1px solid rgba(241, 233, 219, 0.2)",
              paddingTop: 32,
              marginTop: 48,
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div
                style={{
                  color: "rgba(241, 233, 219, 0.6)",
                  fontSize: "0.9rem",
                }}
              >
                <p style={{ margin: 0 }}>
                  © 2025 BelajarNgoding. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item, index) => (
                    <ALink
                      key={index}
                      href="#"
                      style={{
                        color: "rgba(241, 233, 219, 0.6)",
                        fontSize: "0.9rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {item}
                    </ALink>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
