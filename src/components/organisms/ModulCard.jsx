// src/components/organisms/ModulCard.jsx
import { Card, Typography, Progress, Button } from "antd";
import { Clock, BookOpen, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";
const { Title, Text } = Typography;

const ModulCard = ({ modul, index }) => {
  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.08,
          ease: "easeOut",
        },
      },
    }),
    [index]
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <Card
        hoverable
        style={{
          borderRadius: 20,
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        bodyStyle={{ padding: 28 }}
        className="card shadow-elegant"
      >
        {/* Header dengan Icon */}
        <div className="text-center mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              fontSize: 56,
              marginBottom: 16,
              background: "linear-gradient(135deg, #A39B8B, #716A5C)",
              width: 80,
              height: 80,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "0 8px 25px rgba(163, 155, 139, 0.2)",
            }}
          >
            {modul.icon}
          </motion.div>

          <Title
            level={4}
            style={{
              color: "#07020D",
              marginBottom: 8,
              fontSize: "1.25rem",
              fontWeight: "600",
            }}
          >
            {modul.title}
          </Title>

          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: 20,
              color: "#716A5C",
              fontSize: "0.95rem",
              lineHeight: "1.5",
            }}
          >
            {modul.description}
          </Text>
        </div>

        {/* Progress Section */}
        <div style={{ marginBottom: 20 }}>
          <div className="flex justify-between items-center mb-2">
            <Text strong style={{ color: "#07020D", fontSize: "0.9rem" }}>
              Progress
            </Text>
            <Text
              style={{
                color: "#A39B8B",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              {modul.progress}%
            </Text>
          </div>
          <Progress
            percent={modul.progress}
            size="small"
            strokeColor={{
              "0%": "#A39B8B",
              "100%": "#716A5C",
            }}
            trailColor="#F1E9DB"
            strokeWidth={8}
            style={{ marginBottom: 16 }}
          />
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4 text-sage" />
            <Text style={{ fontSize: "0.85rem", color: "#716A5C" }}>
              {modul.lessons} Lessons
            </Text>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4 text-sage" />
            <Text style={{ fontSize: "0.85rem", color: "#716A5C" }}>
              {modul.duration}
            </Text>
          </div>
        </div>

        {/* Action Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.1 }}
        >
          <Button
            type="primary"
            block
            icon={<Play className="w-4 h-4" />}
            style={{
              background:
                modul.progress > 0
                  ? "linear-gradient(135deg, #A39B8B, #716A5C)"
                  : "linear-gradient(135deg, #07020D, #716A5C)",
              color: "#F1E9DB",
              border: "none",
              borderRadius: "12px",
              height: "44px",
              fontWeight: "600",
              fontSize: "0.95rem",
              boxShadow: "0 4px 15px rgba(7, 2, 13, 0.15)",
            }}
          >
            {modul.progress > 0 ? "Lanjutkan" : "Mulai Belajar"}
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ModulCard;
