// src/pages/Exercises.jsx
import { useState } from "react";
import { Row, Col, Card, Typography, Button, Input, Tag, Badge } from "antd";
import {
  Code2,
  Clock,
  Trophy,
  Search,
  Play,
  CheckCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const difficulties = [
    { key: "all", label: "Semua Level" },
    { key: "easy", label: "Mudah" },
    { key: "medium", label: "Sedang" },
    { key: "hard", label: "Sulit" },
  ];

  const categories = [
    { key: "all", label: "Semua" },
    { key: "html", label: "HTML" },
    { key: "css", label: "CSS" },
    { key: "javascript", label: "JavaScript" },
  ];

  const exercises = [
    {
      id: 1,
      title: "Membuat Form Registrasi",
      description:
        "Buat form registrasi yang lengkap dengan validasi HTML5 dan styling yang menarik.",
      category: "html",
      difficulty: "easy",
      estimatedTime: "30 menit",
      points: 100,
      completed: true,
      rating: 4.8,
      completedBy: 1250,
      skills: ["Forms", "Validation", "HTML5"],
      thumbnail: "📝",
    },
    {
      id: 2,
      title: "Responsive Navigation Bar",
      description:
        "Implementasikan navigation bar yang responsive dengan hamburger menu untuk mobile.",
      category: "css",
      difficulty: "medium",
      estimatedTime: "45 menit",
      points: 150,
      completed: true,
      rating: 4.9,
      completedBy: 890,
      skills: ["Flexbox", "Media Queries", "Animation"],
      thumbnail: "🧭",
    },
    {
      id: 3,
      title: "Todo List App",
      description:
        "Buat aplikasi todo list dengan fitur tambah, edit, hapus, dan tandai sebagai selesai.",
      category: "javascript",
      difficulty: "medium",
      estimatedTime: "60 menit",
      points: 200,
      completed: false,
      rating: 4.7,
      completedBy: 650,
      skills: ["DOM Manipulation", "Events", "Local Storage"],
      thumbnail: "✅",
    },
    {
      id: 4,
      title: "CSS Grid Gallery",
      description:
        "Implementasikan photo gallery menggunakan CSS Grid dengan hover effects yang menarik.",
      category: "css",
      difficulty: "easy",
      estimatedTime: "40 menit",
      points: 120,
      completed: false,
      rating: 4.6,
      completedBy: 750,
      skills: ["CSS Grid", "Hover Effects", "Images"],
      thumbnail: "🖼️",
    },
    {
      id: 5,
      title: "Quiz Application",
      description:
        "Buat aplikasi quiz interaktif dengan timer, scoring system, dan hasil akhir.",
      category: "javascript",
      difficulty: "hard",
      estimatedTime: "90 menit",
      points: 300,
      completed: false,
      rating: 4.9,
      completedBy: 320,
      skills: ["Objects", "Arrays", "Timer", "Conditional Logic"],
      thumbnail: "🧠",
    },
    {
      id: 6,
      title: "Landing Page Clone",
      description:
        "Clone landing page dari design yang diberikan dengan pixel-perfect implementation.",
      category: "html",
      difficulty: "hard",
      estimatedTime: "120 menit",
      points: 350,
      completed: false,
      rating: 4.8,
      completedBy: 180,
      skills: ["Layout", "Typography", "Color Theory", "Responsive"],
      thumbnail: "🎨",
    },
  ];

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch =
      exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      selectedDifficulty === "all" ||
      exercise.difficulty === selectedDifficulty;
    const matchesCategory =
      selectedCategory === "all" || exercise.category === selectedCategory;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "green";
      case "medium":
        return "orange";
      case "hard":
        return "red";
      default:
        return "default";
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "⭐";
      case "medium":
        return "⭐⭐";
      case "hard":
        return "⭐⭐⭐";
      default:
        return "⭐";
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
          Latihan Coding
        </Title>
        <Text style={{ color: "#716A5C", fontSize: "1.1rem" }}>
          Asah kemampuan programming dengan latihan praktis dan project mini
        </Text>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} lg={8}>
            <Input
              size="large"
              placeholder="Cari latihan..."
              prefix={<Search className="w-4 h-4 text-sage" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: 12 }}
            />
          </Col>
          <Col xs={24} lg={8}>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Button
                  key={difficulty.key}
                  size="small"
                  type={
                    selectedDifficulty === difficulty.key
                      ? "primary"
                      : "default"
                  }
                  onClick={() => setSelectedDifficulty(difficulty.key)}
                  style={{
                    borderRadius: 20,
                    border:
                      selectedDifficulty === difficulty.key
                        ? "none"
                        : "1px solid #A39B8B40",
                    background:
                      selectedDifficulty === difficulty.key
                        ? "linear-gradient(135deg, #A39B8B, #716A5C)"
                        : "transparent",
                  }}
                >
                  {difficulty.label}
                </Button>
              ))}
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  size="small"
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

      {/* Exercises Grid */}
      <Row gutter={[24, 24]}>
        {filteredExercises.map((exercise, index) => (
          <Col xs={24} md={12} lg={8} key={exercise.id}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card
                className="shadow-elegant h-full"
                style={{ borderRadius: 16, overflow: "hidden" }}
                cover={
                  <div
                    className="h-32 flex items-center justify-center text-4xl relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #A39B8B20, #716A5C20)",
                    }}
                  >
                    {exercise.thumbnail}
                    {exercise.completed && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                    )}
                  </div>
                }
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <Tag color={getDifficultyColor(exercise.difficulty)}>
                      {getDifficultyIcon(exercise.difficulty)}{" "}
                      {exercise.difficulty}
                    </Tag>
                    <Badge
                      count={exercise.points}
                      style={{ backgroundColor: "#A39B8B" }}
                    />
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{exercise.rating}</span>
                  </div>
                </div>

                <Title level={4} style={{ color: "#07020D", marginBottom: 8 }}>
                  {exercise.title}
                </Title>

                <Text
                  style={{
                    color: "#716A5C",
                    marginBottom: 16,
                    display: "block",
                  }}
                >
                  {exercise.description}
                </Text>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {exercise.skills.slice(0, 3).map((skill, idx) => (
                      <Tag
                        key={idx}
                        size="small"
                        color="blue"
                        style={{ margin: "2px" }}
                      >
                        {skill}
                      </Tag>
                    ))}
                    {exercise.skills.length > 3 && (
                      <Tag size="small" style={{ margin: "2px" }}>
                        +{exercise.skills.length - 3}
                      </Tag>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm text-charcoal">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{exercise.estimatedTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>{exercise.completedBy} selesai</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/exercises/${exercise.id}`}>
                  <Button
                    type="primary"
                    block
                    icon={
                      exercise.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )
                    }
                    style={{
                      background: exercise.completed
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : "linear-gradient(135deg, #A39B8B, #716A5C)",
                      color: "#F1E9DB",
                      border: "none",
                      borderRadius: 12,
                      height: 44,
                      fontWeight: 600,
                    }}
                  >
                    {exercise.completed ? "Lihat Solusi" : "Mulai Latihan"}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* No Results */}
      {filteredExercises.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <Title level={3} style={{ color: "#716A5C" }}>
            Tidak ada latihan yang ditemukan
          </Title>
          <Text style={{ color: "#A39B8B" }}>
            Coba ubah kata kunci pencarian atau filter yang dipilih
          </Text>
        </motion.div>
      )}
    </div>
  );
};

export default Exercises;
