// src/components/templates/NewsletterSection.jsx
import { Typography, Button, Input, Row, Col } from "antd";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState, useCallback } from "react";
const { Title, Paragraph } = Typography;

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoized variants untuk performa
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    }),
    []
  );

  // Optimized handlers
  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    // Add success notification here
  }, [email, isSubmitting]);

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  return (
    <section className="section-cream" style={{ padding: "4rem 0" }}>
      <div className="container mx-auto px-4">
        <Row justify="center">
          <Col xs={24} md={16} lg={12}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="text-center"
            >
              <motion.div variants={itemVariants}>
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
              </motion.div>

              <motion.div variants={itemVariants}>
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
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    prefix={<Mail className="w-4 h-4 text-sage" />}
                    style={{
                      flex: 1,
                      borderRadius: "12px",
                      border: "2px solid #A39B8B",
                      padding: "12px 16px",
                      fontSize: "1rem",
                    }}
                    disabled={isSubmitting}
                  />
                  <motion.div
                    whileHover={{ scale: email ? 1.02 : 1 }}
                    whileTap={{ scale: email ? 0.98 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      type="primary"
                      loading={isSubmitting}
                      disabled={!email || isSubmitting}
                      onClick={handleSubmit}
                      style={{
                        background: email
                          ? "linear-gradient(135deg, #A39B8B, #716A5C)"
                          : "linear-gradient(135deg, #E0E0E0, #C0C0C0)",
                        color: email ? "#F1E9DB" : "#999",
                        border: "none",
                        borderRadius: "12px",
                        padding: "12px 24px",
                        height: "auto",
                        fontWeight: "600",
                        boxShadow: email
                          ? "0 4px 15px rgba(163, 155, 139, 0.3)"
                          : "0 2px 8px rgba(0, 0, 0, 0.1)",
                        cursor: email ? "pointer" : "not-allowed",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
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

            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default NewsletterSection;
