import { Outlet } from "react-router-dom";
import { Layout, Typography, Row, Col } from "antd";
import Navbar from "../components/organisms/Navbar";
import Logo from "../components/atoms/Logo";
import { Code, MessageCircle, Users } from "lucide-react";

const { Footer, Content } = Layout;
const { Text, Link: ALink } = Typography;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#F1E9DB" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Content>
        <Outlet />
      </Content>

      {/* Footer */}
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
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{ background: "rgba(241, 233, 219, 0.1)" }}
                >
                  <Users className="w-5 h-5" style={{ color: "#F1E9DB" }} />
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{ background: "rgba(241, 233, 219, 0.1)" }}
                >
                  <MessageCircle
                    className="w-5 h-5"
                    style={{ color: "#F1E9DB" }}
                  />
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
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
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    className="hover:text-cream"
                  >
                    HTML Dasar
                  </ALink>
                </li>
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    CSS Styling
                  </ALink>
                </li>
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    JavaScript
                  </ALink>
                </li>
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Project Portfolio
                  </ALink>
                </li>
                <li>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Web Development
                  </ALink>
                </li>
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
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Help Center
                  </ALink>
                </li>
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Contact Us
                  </ALink>
                </li>
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    FAQ
                  </ALink>
                </li>
                <li style={{ marginBottom: 12 }}>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Blog
                  </ALink>
                </li>
                <li>
                  <ALink
                    href="#"
                    style={{
                      color: "rgba(241, 233, 219, 0.8)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Career Guide
                  </ALink>
                </li>
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
                  info@belajarngoding.com
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
                <ALink
                  href="#"
                  style={{
                    color: "rgba(241, 233, 219, 0.6)",
                    fontSize: "0.9rem",
                  }}
                >
                  Privacy Policy
                </ALink>
                <ALink
                  href="#"
                  style={{
                    color: "rgba(241, 233, 219, 0.6)",
                    fontSize: "0.9rem",
                  }}
                >
                  Terms of Service
                </ALink>
                <ALink
                  href="#"
                  style={{
                    color: "rgba(241, 233, 219, 0.6)",
                    fontSize: "0.9rem",
                  }}
                >
                  Cookie Policy
                </ALink>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
