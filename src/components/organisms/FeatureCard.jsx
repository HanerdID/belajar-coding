import { Card, Typography } from "antd";
import { motion } from "framer-motion";
const { Title, Paragraph } = Typography;

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -12 }}
    >
      <Card
        hoverable
        style={{
          borderRadius: 20,
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        bodyStyle={{ padding: 32, textAlign: "center" }}
        className="card shadow-elegant"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            fontSize: 48,
            marginBottom: 24,
            background: `linear-gradient(135deg, ${feature.color})`,
            width: 88,
            height: 88,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 8px 25px rgba(7, 2, 13, 0.15)",
          }}
        >
          {feature.icon}
        </motion.div>

        <Title
          level={4}
          style={{
            color: "#07020D",
            marginBottom: 16,
            fontSize: "1.3rem",
            fontWeight: "600",
          }}
        >
          {feature.title}
        </Title>

        <Paragraph
          style={{
            color: "#716A5C",
            fontSize: "1rem",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          {feature.description}
        </Paragraph>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
