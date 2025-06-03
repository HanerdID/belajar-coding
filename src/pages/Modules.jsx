// src/pages/Modules.jsx
import { useState } from "react";
import { Row, Col, Card, Typography, Progress, Button, Input, Tag } from "antd";
import {
  BookOpen,
  Clock,
  Users,
  Search,
  Play,
  Lock,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const Modules = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "Semua" },
    { key: "html", label: "HTML" },
    { key: "css", label: "CSS" },
    { key: "javascript", label: "JavaScript" },
    { key: "project", label: "Project" },
  ];

  const modules = [
    {
      id: 1,
      title: "HTML Dasar",
      description:
        "Pelajari struktur dasar website dan elemen-elemen HTML fundamental untuk membangun fondasi web development yang kuat.",
      category: "html",
      level: "Beginner",
      lessons: 15,
      duration: "4 jam",
      students: 1250,
      progress: 100,
      status: "completed",
      thumbnail: "🌐",
      topics: ["Elements", "Attributes", "Forms", "Tables"],
    },
    {
      id: 2,
      title: "CSS Styling",
      description:
        "Buat website yang menarik dengan styling CSS, layout, dan responsive design untuk berbagai perangkat.",
      category: "css",
      level: "Beginner",
      lessons: 20,
      duration: "6 jam",
      students: 980,
      progress: 45,
      status: "in-progress",
      thumbnail: "🎨",
      topics: ["Selectors", "Flexbox", "Grid", "Responsive"],
    },
    {
      id: 3,
      title: "JavaScript Dasar",
      description:
        "Tambahkan interaktivitas dan logika programming dengan JavaScript untuk membuat website yang dinamis.",
      category: "javascript",
      level: "Intermediate",
      lessons: 25,
      duration: "8 jam",
      students: 750,
      progress: 0,
      status: "locked",
      thumbnail: "⚡",
      topics: ["Variables", "Functions", "Events", "DOM"],
    },
    {
      id: 4,
      title: "CSS Advanced",
      description:
        "Pelajari teknik CSS lanjutan seperti animations, transforms, dan modern CSS features.",
      category: "css",
      level: "Advanced",
      lessons: 18,
      duration: "7 jam",
      students: 420,
      progress: 0,
      status: "locked",
      thumbnail: "✨",
      topics: ["Animations", "Transforms", "Variables", "Grid Advanced"],
    },
    {
      id: 5,
      title: "JavaScript ES6+",
      description:
        "Kuasai fitur-fitur modern JavaScript untuk pengembangan aplikasi web yang lebih efisien.",
      category: "javascript",
      level: "Advanced",
      lessons: 22,
      duration: "9 jam",
      students: 320,
      progress: 0,
      status: "locked",
      thumbnail: "🚀",
      topics: ["Arrow Functions", "Promises", "Async/Await", "Modules"],
    },
    {
      id: 6,
      title: "Portfolio Project",
      description:
        "Buat portfolio website profesional untuk showcase kemampuan dan menarik perhatian employer.",
      category: "project",
      level: "Intermediate",
      lessons: 12,
      duration: "5 jam",
      students: 890,
      progress: 0,
      status: "locked",
      thumbnail: "💼",
      topics: ["Design", "Responsive", "Deployment", "SEO"],
    },
  ];

  const filteredModules = modules.filter((module) => {
    const matchesSearch =
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || module.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Play className="w-5 h-5 text-blue-500" />;
      case "locked":
        return <Lock className="w-5 h-5 text-gray-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-sage" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "#10b981";
      case "in-progress":
        return "#3b82f6";
      case "locked":
        return "#9ca3af";
      default:
        return "#A39B8B";
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "green";
      case "Intermediate":
        return "orange";
      case "Advanced":
        return "red";
      default:
        return "default";
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Title level={2} style={{ color: "#07020D", marginBottom: 8 }}>
          Modul Pembelajaran
        </Title>
        <Text style={{ color: "#716A5C", fontSize: "1.1rem" }}>
          Kurikulum terstruktur untuk menguasai web development dari dasar
          hingga mahir
        </Text>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <Input
              size="large"
              placeholder="Cari modul pembelajaran..."
              prefix={<Search className="w-4 h-4 text-sage" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: 12 }}
            />
          </Col>
          <Col xs={24} md={12}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  type={
                    selectedCategory === category.key ? "primary" : "default"
                  }
                  onClick={() => setSelectedCategory(category.key)}
                  style={{
                    borderRadius: 20,
                    border:
                      selectedCategory === category.key
                        ? "none"
                        : "1px solid #A39B8B40",
                    background:
                      selectedCategory === category.key
                        ? "linear-gradient(135deg, #A39B8B, #716A5C)"
                        : "transparent",
                  }}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </motion.div>

      {/* Modules Grid */}
      <Row gutter={[24, 24]}>
        {filteredModules.map((module, index) => (
          <Col xs={24} md={12} lg={8} key={module.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card
                className="shadow-elegant h-full"
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  opacity: module.status === "locked" ? 0.7 : 1,
                }}
                cover={
                  <div
                    className="h-32 flex items-center justify-center text-4xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #A39B8B20, #716A5C20)",
                    }}
                  >
                    {module.thumbnail}
                  </div>
                }
              >
                <div className="flex justify-between items-start mb-3">
                  <Tag color={getLevelColor(module.level)}>{module.level}</Tag>
                  {getStatusIcon(module.status)}
                </div>

                <Title level={4} style={{ color: "#07020D", marginBottom: 8 }}>
                  {module.title}
                </Title>

                <Text
                  style={{
                    color: "#716A5C",
                    marginBottom: 16,
                    display: "block",
                  }}
                >
                  {module.description}
                </Text>

                {/* Topics */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {module.topics.slice(0, 3).map((topic, idx) => (
                      <Tag key={idx} size="small" style={{ margin: "2px" }}>
                        {topic}
                      </Tag>
                    ))}
                    {module.topics.length > 3 && (
                      <Tag size="small" style={{ margin: "2px" }}>
                        +{module.topics.length - 3}
                      </Tag>
                    )}
                  </div>
                </div>

                {/* Progress */}
                {module.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <Text style={{ fontSize: "0.9rem", color: "#716A5C" }}>
                        Progress
                      </Text>
                      <Text
                        style={{
                          fontSize: "0.9rem",
                          color: "#A39B8B",
                          fontWeight: 600,
                        }}
                      >
                        {module.progress}%
                      </Text>
                    </div>
                    <Progress
                      percent={module.progress}
                      strokeColor={getStatusColor(module.status)}
                      trailColor="#F1E9DB"
                      size="small"
                    />
                  </div>
                )}

                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm text-charcoal">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{module.students}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={
                    module.status !== "locked" ? `/modules/${module.id}` : "#"
                  }
                >
                  <Button
                    type="primary"
                    block
                    disabled={module.status === "locked"}
                    icon={
                      module.status === "completed" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : module.status === "in-progress" ? (
                        <Play className="w-4 h-4" />
                      ) : module.status === "locked" ? (
                        <Lock className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )
                    }
                    style={{
                      background:
                        module.status === "locked"
                          ? "#e5e7eb"
                          : "linear-gradient(135deg, #A39B8B, #716A5C)",
                      color: module.status === "locked" ? "#9ca3af" : "#F1E9DB",
                      border: "none",
                      borderRadius: 12,
                      height: 44,
                      fontWeight: 600,
                    }}
                  >
                    {module.status === "completed"
                      ? "Review Modul"
                      : module.status === "in-progress"
                      ? "Lanjutkan"
                      : module.status === "locked"
                      ? "Terkunci"
                      : "Mulai Belajar"}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* No Results */}
      {filteredModules.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <Title level={3} style={{ color: "#716A5C" }}>
            Tidak ada modul yang ditemukan
          </Title>
          <Text style={{ color: "#A39B8B" }}>
            Coba ubah kata kunci pencarian atau filter kategori
          </Text>
        </motion.div>
      )}
    </div>
  );
};

export default Modules;
