// src/pages/Forum.jsx
import { useState } from "react";
import { Row, Col, Card, Typography, Button, Input, Tag, Avatar, Space } from "antd";
import { MessageCircle, Search, Plus, ThumbsUp, Eye, Clock, Pin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const Forum = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { key: "all", label: "Semua" },
    { key: "html", label: "HTML" },
    { key: "css", label: "CSS" },
    { key: "javascript", label: "JavaScript" },
    { key: "general", label: "General" },
    { key: "career", label: "Karir" },
  ];

  const forumPosts = [
    {
      id: 1,
      title: "Bagaimana cara membuat responsive navbar yang baik?",
      content:
        "Saya sedang belajar membuat navbar yang responsive, tapi masih bingung dengan implementasi hamburger menu...",
      author: {
        name: "Ahmad Rizki",
        avatar: "A",
        level: "Beginner",
      },
      category: "css",
      tags: ["responsive", "navbar", "mobile"],
      createdAt: "2 jam yang lalu",
      replies: 8,
      views: 145,
      likes: 12,
      isPinned: false,
      isSolved: false,
    },
    {
      id: 2,
      title: "JavaScript async/await vs Promise - Kapan menggunakan yang mana?",
      content:
        "Saya sudah paham konsep Promise, tapi masih bingung kapan harus pakai async/await dan kapan pakai .then()...",
      author: {
        name: "Sarah Dewi",
        avatar: "S",
        level: "Intermediate",
      },
      category: "javascript",
      tags: ["async", "promise", "es6"],
      createdAt: "4 jam yang lalu",
      replies: 15,
      views: 289,
      likes: 23,
      isPinned: true,
      isSolved: true,
    },
    {
      id: 3,
      title: "Tips karir untuk fresh graduate web developer",
      content:
        "Halo semuanya! Saya baru lulus kuliah dan ingin mulai karir sebagai web developer. Ada tips untuk portfolio dan interview?",
      author: {
        name: "Budi Santoso",
        avatar: "B",
        level: "Beginner",
      },
      category: "career",
      tags: ["career", "portfolio", "interview", "tips"],
      createdAt: "6 jam yang lalu",
      replies: 32,
      views: 567,
      likes: 45,
      isPinned: false,
      isSolved: false,
    },
    {
      id: 4,
      title: "Flexbox vs CSS Grid - Mana yang lebih baik untuk layout?",
      content:
        "Saya sering bingung memilih antara Flexbox dan CSS Grid untuk membuat layout. Bisakah dijelaskan kapan menggunakan masing-masing?",
      author: {
        name: "Indira Sari",
        avatar: "I",
        level: "Intermediate",
      },
      category: "css",
      tags: ["flexbox", "grid", "layout"],
      createdAt: "8 jam yang lalu",
      replies: 11,
      views: 198,
      likes: 18,
      isPinned: false,
      isSolved: true,
    },
    {
      id: 5,
      title:
        "Error 'Cannot read property of undefined' - Bagaimana cara debug?",
      content:
        "Saya sering mendapat error ini di console. Sudah coba beberapa cara tapi masih belum paham cara debugging yang efektif.",
      author: {
        name: "Fikri Rahman",
        avatar: "F",
        level: "Beginner",
      },
      category: "javascript",
      tags: ["debugging", "error", "undefined"],
      createdAt: "12 jam yang lalu",
      replies: 7,
      views: 156,
      likes: 9,
      isPinned: false,
      isSolved: false,
    },
    {
      id: 6,
      title: "Semantic HTML - Pentingkah untuk SEO?",
      content:
        "Saya dengar semantic HTML penting untuk SEO. Bisakah dijelaskan lebih detail dan contoh implementasinya?",
      author: {
        name: "Maya Putri",
        avatar: "M",
        level: "Beginner",
      },
      category: "html",
      tags: ["semantic", "seo", "accessibility"],
      createdAt: "1 hari yang lalu",
      replies: 14,
      views: 234,
      likes: 21,
      isPinned: false,
      isSolved: true,
    },
  ];

  const filteredPosts = forumPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  const getCategoryColor = (category) => {
    switch (category) {
      case "html":
        return "volcano";
      case "css":
        return "blue";
      case "javascript":
        return "gold";
      case "career":
        return "purple";
      case "general":
        return "cyan";
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
        <div className="flex justify-between items-center mb-4">
          <div>
            <Title level={2} style={{ color: "#07020D", marginBottom: 8 }}>
              Forum Diskusi
            </Title>
            <Text style={{ color: "#716A5C", fontSize: "1.1rem" }}>
              Tempat berbagi pengetahuan dan bertanya seputar coding
            </Text>
          </div>
          <Button
            type="primary"
            icon={<Plus className="w-4 h-4" />}
            size="large"
            style={{
              background: "linear-gradient(135deg, #A39B8B, #716A5C)",
              border: "none",
              borderRadius: 12,
              fontWeight: 600,
            }}
          >
            Buat Post Baru
          </Button>
        </div>
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
              placeholder="Cari diskusi..."
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

      {/* Forum Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={6}>
            <Card className="text-center shadow-elegant">
              <Title level={4} style={{ color: "#07020D", marginBottom: 4 }}>
                1,234
              </Title>
              <Text style={{ color: "#716A5C" }}>Total Posts</Text>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card className="text-center shadow-elegant">
              <Title level={4} style={{ color: "#07020D", marginBottom: 4 }}>
                456
              </Title>
              <Text style={{ color: "#716A5C" }}>Active Users</Text>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card className="text-center shadow-elegant">
              <Title level={4} style={{ color: "#07020D", marginBottom: 4 }}>
                89%
              </Title>
              <Text style={{ color: "#716A5C" }}>Solved Rate</Text>
            </Card>
          </Col>
          <Col xs={12} sm={6}>
            <Card className="text-center shadow-elegant">
              <Title level={4} style={{ color: "#07020D", marginBottom: 4 }}>
                24h
              </Title>
              <Text style={{ color: "#716A5C" }}>Avg Response</Text>
            </Card>
          </Col>
        </Row>
      </motion.div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-elegant hover:shadow-elegant-hover transition-all duration-200">
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <Avatar
                  size={48}
                  style={{
                    background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                    color: "#F1E9DB",
                    fontWeight: 600,
                  }}
                >
                  {post.author.avatar}
                </Avatar>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    {post.isPinned && (
                      <Pin className="w-4 h-4 text-orange-500" />
                    )}
                    <Link
                      to={`/forum/${post.id}`}
                      className="hover:text-sage transition-colors"
                    >
                      <Title
                        level={4}
                        style={{
                          color: "#07020D",
                          marginBottom: 0,
                          cursor: "pointer",
                        }}
                        className="hover:text-sage transition-colors"
                      >
                        {post.title}
                      </Title>
                    </Link>
                    {post.isSolved && (
                      <Tag color="green" style={{ margin: 0 }}>
                        ✓ Solved
                      </Tag>
                    )}
                  </div>

                  <Text
                    style={{
                      color: "#716A5C",
                      display: "block",
                      marginBottom: 12,
                      lineHeight: "1.6",
                    }}
                  >
                    {post.content}
                  </Text>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    <Tag color={getCategoryColor(post.category)}>
                      {post.category.toUpperCase()}
                    </Tag>
                    {post.tags.map((tag, idx) => (
                      <Tag key={idx} style={{ margin: "2px" }}>
                        #{tag}
                      </Tag>
                    ))}
                  </div>

                  {/* Author and Stats */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Text style={{ fontWeight: 500, color: "#07020D" }}>
                          {post.author.name}
                        </Text>
                        <Tag
                          color={getLevelColor(post.author.level)}
                          size="small"
                        >
                          {post.author.level}
                        </Tag>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-charcoal">
                        <Clock className="w-4 h-4" />
                        <span>{post.createdAt}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-charcoal">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">💬</div>
          <Title level={3} style={{ color: "#716A5C" }}>
            Tidak ada diskusi yang ditemukan
          </Title>
          <Text style={{ color: "#A39B8B" }}>
            Coba ubah kata kunci pencarian atau kategori
          </Text>
        </motion.div>
      )}

      {/* Load More */}
      {filteredPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button
            type="default"
            size="large"
            style={{
              borderRadius: 12,
              border: "1px solid #A39B8B",
              color: "#716A5C",
            }}
          >
            Muat Lebih Banyak
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Forum;