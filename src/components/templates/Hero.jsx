import { Row, Col, Typography, Button, Space } from "antd";
import { Link } from "react-router-dom";
import {
  Play,
  Target,
  CheckCircle,
  Code,
  Trophy,
  Sparkles,
} from "lucide-react";
import { COLORS } from "../../constants/theme";
import { motion } from "framer-motion";
const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div className="section-light relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-sage rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <Row gutter={[48, 32]} align="middle">
          {/* Text Content */}
          <Col xs={24} md={14}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Space direction="vertical" size="large">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center px-6 py-3 rounded-full font-semibold mb-6 shadow-elegant"
                  style={{
                    background:
                      "linear-gradient(135deg, #A39B8B 0%, #716A5C 100%)",
                    color: "#F1E9DB",
                  }}
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  <span>Platform #1 untuk Belajar Coding</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Title
                    level={1}
                    style={{
                      color: COLORS.DARK,
                      marginBottom: 0,
                      fontSize: "4rem",
                      lineHeight: "1.1",
                      fontWeight: "700",
                    }}
                  >
                    Belajar Coding
                    <br />
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.SAGE}, ${COLORS.CHARCOAL})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Dari Nol!
                    </span>
                  </Title>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Paragraph
                    style={{
                      color: COLORS.CHARCOAL,
                      maxWidth: 520,
                      fontSize: "1.2rem",
                      lineHeight: "1.8",
                      marginBottom: "2rem",
                    }}
                  >
                    Mulai perjalanan coding Anda dengan platform pembelajaran
                    interaktif terbaik. Kuasai HTML, CSS, dan JavaScript dengan
                    metode yang terbukti efektif dan menyenangkan!
                  </Paragraph>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Space wrap size="large" style={{ marginBottom: "3rem" }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="primary"
                        size="large"
                        className="btn-primary shadow-elegant"
                        style={{
                          background:
                            "linear-gradient(135deg, #07020D 0%, #716A5C 100%)",
                          color: "#F1E9DB",
                          padding: "16px 40px",
                          height: "auto",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          borderRadius: "16px",
                          border: "none",
                        }}
                      >
                        <Play className="w-5 h-5 mr-3" />
                        <span>Mulai Belajar Gratis</span>
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="default"
                        size="large"
                        className="btn-outline shadow-elegant"
                        style={{
                          background: "transparent",
                          border: `2px solid ${COLORS.DARK}`,
                          color: COLORS.DARK,
                          padding: "16px 40px",
                          height: "auto",
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          borderRadius: "16px",
                        }}
                      >
                        <Target className="w-5 h-5 mr-3" />
                        <span>Lihat Demo</span>
                      </Button>
                    </motion.div>
                  </Space>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="flex flex-wrap items-center gap-8 text-sm"
                  style={{ color: COLORS.CHARCOAL }}
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">100% Gratis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Sertifikat Resmi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Lifetime Access</span>
                  </div>
                </motion.div>

                {/* Statistics */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <Row gutter={32} style={{ marginTop: 48 }}>
                    <Col>
                      <Title
                        level={2}
                        style={{
                          color: COLORS.DARK,
                          marginBottom: 4,
                          fontWeight: "700",
                        }}
                      >
                        5,000+
                      </Title>
                      <Paragraph
                        style={{
                          color: COLORS.CHARCOAL,
                          margin: 0,
                          fontSize: "1rem",
                        }}
                      >
                        Students Active
                      </Paragraph>
                    </Col>
                    <Col>
                      <Title
                        level={2}
                        style={{
                          color: COLORS.DARK,
                          marginBottom: 4,
                          fontWeight: "700",
                        }}
                      >
                        50+
                      </Title>
                      <Paragraph
                        style={{
                          color: COLORS.CHARCOAL,
                          margin: 0,
                          fontSize: "1rem",
                        }}
                      >
                        Modul Lengkap
                      </Paragraph>
                    </Col>
                    <Col>
                      <Title
                        level={2}
                        style={{
                          color: COLORS.DARK,
                          marginBottom: 4,
                          fontWeight: "700",
                        }}
                      >
                        1,000+
                      </Title>
                      <Paragraph
                        style={{
                          color: COLORS.CHARCOAL,
                          margin: 0,
                          fontSize: "1rem",
                        }}
                      >
                        Latihan Coding
                      </Paragraph>
                    </Col>
                  </Row>
                </motion.div>
              </Space>
            </motion.div>
          </Col>

          {/* Image/Animation */}
          <Col xs={24} md={10}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -left-6 p-4 rounded-2xl shadow-elegant-hover z-10"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                }}
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-8 p-4 rounded-2xl shadow-elegant-hover z-10"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                }}
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>

              {/* Main Hero Image Container */}
              <div
                className="p-8 rounded-3xl shadow-elegant-hover relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #A39B8B 0%, #716A5C 100%)",
                }}
              >
                {/* Browser Window Mockup */}
                <div className="bg-white rounded-2xl shadow-elegant overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-gray-50 p-4 flex items-center space-x-3 border-b border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg px-4 py-2 text-sm text-gray-500 border">
                      belajarngoding.com
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="p-6 bg-gray-900 text-green-400 font-mono text-sm">
                    <div className="space-y-3">
                      <div className="flex">
                        <span className="text-gray-500 mr-4 select-none">
                          1
                        </span>
                        <span className="text-blue-400">&lt;html&gt;</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 mr-4 select-none">
                          2
                        </span>
                        <span className="ml-4 text-purple-400">
                          &lt;body&gt;
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 mr-4 select-none">
                          3
                        </span>
                        <span className="ml-8 text-yellow-400">&lt;h1&gt;</span>
                        <span className="text-green-400">Hello World!</span>
                        <span className="text-yellow-400">&lt;/h1&gt;</span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 mr-4 select-none">
                          4
                        </span>
                        <span className="ml-4 text-purple-400">
                          &lt;/body&gt;
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-500 mr-4 select-none">
                          5
                        </span>
                        <span className="text-blue-400">&lt;/html&gt;</span>
                        <span className="animate-pulse text-white">|</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
