import { Typography, Button, Row, Col } from "antd";
import { ChevronRight, CheckCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
const { Title, Paragraph } = Typography;

const CTASection = () => {
  return (
    <section
      className="section-dark relative overflow-hidden"
      style={{ padding: "6rem 0" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sage rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-charcoal rounded-full opacity-20 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Title
            level={2}
            style={{
              color: "#F1E9DB",
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: 24,
              lineHeight: "1.2",
            }}
          >
            Siap Memulai Perjalanan Coding Anda?
          </Title>

          <Paragraph
            style={{
              color: "rgba(241, 233, 219, 0.8)",
              fontSize: "1.2rem",
              marginBottom: 48,
              maxWidth: "600px",
              margin: "0 auto 48px",
              lineHeight: "1.7",
            }}
          >
            Bergabunglah dengan ribuan developer yang telah memulai karir mereka
            dari BelajarNgoding. Mulai gratis sekarang juga!
          </Paragraph>

          <Row gutter={24} justify="center" style={{ marginBottom: 48 }}>
            <Col xs={24} sm={12} md={8}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="primary"
                  size="large"
                  icon={<Play className="w-5 h-5" />}
                  style={{
                    background: "linear-gradient(135deg, #F1E9DB, #A39B8B)",
                    color: "#07020D",
                    border: "none",
                    borderRadius: "16px",
                    padding: "16px 32px",
                    height: "auto",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    width: "100%",
                    boxShadow: "0 8px 25px rgba(241, 233, 219, 0.3)",
                  }}
                >
                  Daftar Sekarang - Gratis!
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="default"
                  size="large"
                  style={{
                    background: "transparent",
                    border: "2px solid #F1E9DB",
                    color: "#F1E9DB",
                    borderRadius: "16px",
                    padding: "16px 32px",
                    height: "auto",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    width: "100%",
                  }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </Col>
          </Row>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap justify-center items-center gap-8 text-sm"
            style={{ color: "rgba(241, 233, 219, 0.7)" }}
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Start Learning Immediately</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Join 5,000+ Students</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
