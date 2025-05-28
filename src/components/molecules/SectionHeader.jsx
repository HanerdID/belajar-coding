import { Typography } from "antd";
import { motion } from "framer-motion";
const { Title, Paragraph } = Typography;

const SectionHeader = ({ title, subtitle, className = "", dark = false }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className={className}
    style={{ textAlign: "center", marginBottom: 48 }}
  >
    <Title
      level={2}
      style={{
        color: dark ? "#F1E9DB" : "#07020D",
        display: "inline-block",
        fontSize: "2.5rem",
        fontWeight: "700",
        marginBottom: 16,
      }}
    >
      {title}
    </Title>
    {subtitle && (
      <Paragraph
        style={{
          color: dark ? "rgba(241, 233, 219, 0.8)" : "#716A5C",
          marginTop: 8,
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {subtitle}
      </Paragraph>
    )}
  </motion.div>
);

export default SectionHeader;
