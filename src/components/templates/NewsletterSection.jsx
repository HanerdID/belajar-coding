import { Typography, Button, Input, Row, Col } from "antd";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
const { Title, Paragraph } = Typography;

const NewsletterSection = () => {
  return (
    <section className="section-cream" style={{ padding: "4rem 0" }}>
      <div className="container mx-auto px-4">
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Title
                level={3}
                style={{
                  color: "#07020D",
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginBottom: 16,
                }}
              >
                Stay Updated dengan Tips Coding Terbaru
              </Title>

              <Paragraph
                style={{
                  color: "#716A5C",
                  fontSize: "1.1rem",
                  marginBottom: 32,
                  lineHeight: "1.6",
                }}
              >
                Dapatkan tips, tutorial, dan update terbaru langsung ke email
                Anda. Gratis dan tanpa spam!
              </Paragraph>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  prefix={<Mail className="w-4 h-4 text-sage" />}
                  style={{
                    flex: 1,
                    borderRadius: "12px",
                    border: "2px solid #A39B8B",
                    padding: "12px 16px",
                    fontSize: "1rem",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="primary"
                    style={{
                      background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                      color: "#F1E9DB",
                      border: "none",
                      borderRadius: "12px",
                      padding: "12px 24px",
                      height: "auto",
                      fontWeight: "600",
                      boxShadow: "0 4px 15px rgba(163, 155, 139, 0.3)",
                    }}
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </div>

              <Paragraph
                style={{
                  fontSize: "0.85rem",
                  color: "#A39B8B",
                  marginTop: 16,
                  margin: "16px 0 0",
                }}
              >
                No spam, unsubscribe at any time
              </Paragraph>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NewsletterSection;
