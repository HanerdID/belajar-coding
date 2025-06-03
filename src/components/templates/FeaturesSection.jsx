// src/components/templates/FeaturesSection.jsx
import { Row, Col } from "antd";
import SectionHeader from "../molecules/SectionHeader";
import FeatureCard from "../organisms/FeatureCard";
import { BookOpen, Code, MessageCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo } from "react";

const features = [
  {
    id: 1,
    title: "Modul Pembelajaran Lengkap",
    description:
      "Materi HTML, CSS, dan JavaScript yang terstruktur dari dasar hingga mahir dengan pendekatan step-by-step",
    icon: <BookOpen className="w-8 h-8 text-white" />,
    color: "#3b82f6, #1d4ed8",
  },
  {
    id: 2,
    title: "Latihan Interaktif",
    description:
      "Praktik langsung dengan editor kode online dan project nyata untuk mengasah kemampuan programming",
    icon: <Code className="w-8 h-8 text-white" />,
    color: "#10b981, #059669",
  },
  {
    id: 3,
    title: "Komunitas & Mentor",
    description:
      "Bergabung dengan komunitas developer dan dapatkan bimbingan dari mentor berpengalaman",
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    color: "#8b5cf6, #7c3aed",
  },
  {
    id: 4,
    title: "Sertifikat & Portfolio",
    description:
      "Raih sertifikat profesional dan bangun portfolio yang menarik untuk melamar kerja",
    icon: <Trophy className="w-8 h-8 text-white" />,
    color: "#f59e0b, #d97706",
  },
];

const FeaturesSection = () => {
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }),
    []
  );

  return (
    <section
      id="features"
      className="section-cream"
      style={{ padding: "5rem 0" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Kenapa Pilih BelajarNgoding?"
          subtitle="Platform pembelajaran coding terlengkap dengan metode yang telah terbukti membantu ribuan siswa sukses"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col key={feature.id} xs={24} sm={12} lg={6}>
                <FeatureCard feature={feature} index={index} />
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
