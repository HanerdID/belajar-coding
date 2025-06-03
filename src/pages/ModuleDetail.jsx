// src/pages/ModuleDetail.jsx - Fix the duplicate keys
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Progress,
  Avatar,
  Rate,
  Tag,
  Divider,
  Tabs,
  List,
} from "antd";
import {
  ArrowLeft,
  Play,
  Download,
  BookOpen,
  Clock,
  Users,
  Star,
  CheckCircle,
  FileText,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;

const ModuleDetail = () => {
  const { id } = useParams();
  const [currentLesson, setCurrentLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState([]);

  // Mock data with FIXED duplicate keys
  const moduleData = {
    1: {
      id: 1,
      title: "HTML Fundamentals",
      description:
        "Master the building blocks of web development with comprehensive HTML training covering semantic markup, accessibility, and modern best practices.",
      instructor: {
        name: "Dr. Sarah Johnson",
        avatar: "S",
        bio: "Senior Frontend Developer with 8+ years experience at top tech companies.",
        rating: 4.9,
      },
      duration: "4 weeks",
      level: "Beginner",
      price: "Free",
      rating: 4.8,
      studentsCount: 1247,
      completionRate: 65,
      category: "Frontend Development",
      tags: ["HTML", "Web Development", "Semantic Markup", "Accessibility"],

      // REMOVED DUPLICATE: Only keep one lessons array
      lessons: [
        {
          id: 1,
          title: "Introduction to HTML",
          duration: "15 min",
          type: "video",
          description:
            "Learn the basic structure of HTML documents and essential tags",
          videoUrl: "https://example.com/video1.mp4",
          resources: [
            { name: "HTML Cheat Sheet", url: "#", type: "pdf" },
            { name: "Code Examples", url: "#", type: "zip" },
          ],
        },
        {
          id: 2,
          title: "HTML Document Structure",
          duration: "20 min",
          type: "video",
          description: "Understanding DOCTYPE, head, and body elements",
          videoUrl: "https://example.com/video2.mp4",
          resources: [{ name: "Document Templates", url: "#", type: "zip" }],
        },
        {
          id: 3,
          title: "Text Elements and Formatting",
          duration: "25 min",
          type: "video",
          description: "Headings, paragraphs, lists, and text formatting tags",
          videoUrl: "https://example.com/video3.mp4",
          resources: [
            { name: "Text Formatting Examples", url: "#", type: "html" },
          ],
        },
        {
          id: 4,
          title: "Links and Navigation",
          duration: "18 min",
          type: "video",
          description: "Creating internal and external links, navigation menus",
          videoUrl: "https://example.com/video4.mp4",
          resources: [{ name: "Navigation Templates", url: "#", type: "zip" }],
        },
        {
          id: 5,
          title: "Images and Media",
          duration: "22 min",
          type: "video",
          description: "Adding images, videos, and other media to web pages",
          videoUrl: "https://example.com/video5.mp4",
          resources: [
            { name: "Media Examples", url: "#", type: "zip" },
            { name: "Image Optimization Guide", url: "#", type: "pdf" },
          ],
        },
      ],

      requirements: [
        "Basic computer skills",
        "Text editor (VS Code recommended)",
        "Web browser (Chrome, Firefox, Safari)",
        "Eagerness to learn!",
      ],

      whatYouWillLearn: [
        "HTML5 semantic elements and their proper usage",
        "Document structure and organization",
        "Forms, tables, and interactive elements",
        "SEO-friendly markup techniques",
        "Accessibility best practices",
        "Modern HTML APIs and features",
      ],

      reviews: [
        {
          id: 1,
          user: "Ahmad Rahman",
          avatar: "A",
          rating: 5,
          comment:
            "Excellent course! Very clear explanations and practical examples.",
          date: "2 minggu yang lalu",
        },
        {
          id: 2,
          user: "Maria Santos",
          avatar: "M",
          rating: 4,
          comment: "Good content, but would love more interactive exercises.",
          date: "1 minggu yang lalu",
        },
      ],
    },

    2: {
      id: 2,
      title: "CSS Mastery",
      description:
        "Transform your web designs with advanced CSS techniques, animations, and responsive design principles.",
      instructor: {
        name: "Prof. Michael Chen",
        avatar: "M",
        bio: "CSS expert and design systems architect with 10+ years in frontend development.",
        rating: 4.9,
      },
      duration: "6 weeks",
      level: "Intermediate",
      price: "Rp 299,000",
      rating: 4.9,
      studentsCount: 856,
      completionRate: 72,
      category: "Frontend Development",
      tags: ["CSS", "Responsive Design", "Animations", "Flexbox", "Grid"],

      // FIXED: Only one lessons array
      lessons: [
        {
          id: 1,
          title: "CSS Fundamentals Review",
          duration: "20 min",
          type: "video",
          description: "Quick review of CSS basics and selectors",
          videoUrl: "https://example.com/css1.mp4",
          resources: [{ name: "CSS Reference Guide", url: "#", type: "pdf" }],
        },
        {
          id: 2,
          title: "Advanced Selectors",
          duration: "30 min",
          type: "video",
          description: "Pseudo-classes, pseudo-elements, and complex selectors",
          videoUrl: "https://example.com/css2.mp4",
          resources: [{ name: "Selector Examples", url: "#", type: "html" }],
        },
        {
          id: 3,
          title: "Flexbox Layout",
          duration: "45 min",
          type: "video",
          description: "Master flexible box layout for modern web design",
          videoUrl: "https://example.com/css3.mp4",
          resources: [
            { name: "Flexbox Cheat Sheet", url: "#", type: "pdf" },
            { name: "Layout Examples", url: "#", type: "zip" },
          ],
        },
      ],

      requirements: [
        "Basic HTML knowledge",
        "Understanding of CSS basics",
        "Code editor with CSS support",
        "Modern web browser",
      ],

      whatYouWillLearn: [
        "Advanced CSS selectors and specificity",
        "Flexbox and CSS Grid layouts",
        "CSS animations and transitions",
        "Responsive design principles",
        "CSS custom properties (variables)",
        "Performance optimization techniques",
      ],

      reviews: [
        {
          id: 1,
          user: "Lisa Wang",
          avatar: "L",
          rating: 5,
          comment:
            "Amazing depth of content. The animation examples are fantastic!",
          date: "3 hari yang lalu",
        },
      ],
    },
  };

  const currentModule = moduleData[id] || moduleData[1];
  const currentLessonData = currentModule.lessons.find(
    (lesson) => lesson.id === currentLesson
  );

  useEffect(() => {
    // Load completed lessons from localStorage or API
    const saved = localStorage.getItem(`module-${id}-progress`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, [id]);

  const handleLessonComplete = () => {
    if (!completedLessons.includes(currentLesson)) {
      const updated = [...completedLessons, currentLesson];
      setCompletedLessons(updated);
      localStorage.setItem(`module-${id}-progress`, JSON.stringify(updated));
    }
  };

  const handleNextLesson = () => {
    if (currentLesson < currentModule.lessons.length) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const handlePrevLesson = () => {
    if (currentLesson > 1) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  const progress =
    (completedLessons.length / currentModule.lessons.length) * 100;

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
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Link
          to="/modules"
          className="inline-flex items-center space-x-2 text-charcoal hover:text-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Modules</span>
        </Link>
      </motion.div>

      <Row gutter={[24, 24]}>
        {/* Sidebar - Lesson List */}
        <Col xs={24} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-24"
          >
            <Card
              className="shadow-elegant"
              style={{ maxHeight: "80vh", overflow: "auto" }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Title level={4} style={{ color: "#07020D", margin: 0 }}>
                    Course Progress
                  </Title>
                  <Text style={{ color: "#716A5C", fontSize: "0.9rem" }}>
                    {completedLessons.length}/{currentModule.lessons.length}
                  </Text>
                </div>
                <Progress
                  percent={Math.round(progress)}
                  strokeColor={{
                    "0%": "#A39B8B",
                    "100%": "#716A5C",
                  }}
                  size="small"
                />
              </div>

              <Divider />

              <div className="space-y-2">
                <Title level={5} style={{ color: "#07020D", marginBottom: 16 }}>
                  Lessons
                </Title>
                {currentModule.lessons.map((lesson) => (
                  <motion.div
                    key={lesson.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      currentLesson === lesson.id
                        ? "border-sage bg-sage bg-opacity-10"
                        : "border-gray-200 hover:border-sage hover:bg-gray-50"
                    }`}
                    onClick={() => setCurrentLesson(lesson.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          completedLessons.includes(lesson.id)
                            ? "bg-green-500 text-white"
                            : currentLesson === lesson.id
                            ? "bg-sage text-white"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {completedLessons.includes(lesson.id) ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <span className="text-xs font-medium">
                            {lesson.id}
                          </span>
                        )}
                      </div>
                      <div className="flex-1">
                        <Text
                          strong
                          style={{
                            color:
                              currentLesson === lesson.id
                                ? "#07020D"
                                : "#716A5C",
                            fontSize: "0.9rem",
                          }}
                        >
                          {lesson.title}
                        </Text>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <Text
                            style={{ color: "#A39B8B", fontSize: "0.8rem" }}
                          >
                            {lesson.duration}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </Col>

        {/* Main Content */}
        <Col xs={24} lg={16}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Module Header */}
            <Card className="shadow-elegant">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Tag color={getLevelColor(currentModule.level)}>
                      {currentModule.level}
                    </Tag>
                    <Tag color="blue">{currentModule.category}</Tag>
                  </div>
                  <Title
                    level={2}
                    style={{ color: "#07020D", marginBottom: 8 }}
                  >
                    {currentModule.title}
                  </Title>
                  <Paragraph
                    style={{
                      color: "#716A5C",
                      fontSize: "1.1rem",
                      marginBottom: 16,
                    }}
                  >
                    {currentModule.description}
                  </Paragraph>

                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center space-x-1 text-charcoal">
                      <Clock className="w-4 h-4" />
                      <span>{currentModule.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-charcoal">
                      <Users className="w-4 h-4" />
                      <span>{currentModule.studentsCount} students</span>
                    </div>
                    <div className="flex items-center space-x-1 text-charcoal">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{currentModule.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Video Player / Content */}
            <Card className="shadow-elegant">
              <div className="mb-4">
                <Title level={3} style={{ color: "#07020D", marginBottom: 8 }}>
                  {currentLessonData?.title}
                </Title>
                <Text style={{ color: "#716A5C", fontSize: "1rem" }}>
                  {currentLessonData?.description}
                </Text>
              </div>

              {/* Video Player Placeholder */}
              <div
                className="w-full h-96 bg-gray-900 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a, #2d2d2d)",
                  border: "2px solid #333",
                }}
              >
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 text-sage" />
                  <Text style={{ color: "white", fontSize: "1.1rem" }}>
                    {currentLessonData?.title}
                  </Text>
                  <Text style={{ color: "#ccc", fontSize: "0.9rem" }}>
                    Duration: {currentLessonData?.duration}
                  </Text>
                </div>
              </div>

              {/* Lesson Navigation */}
              <div className="flex items-center justify-between">
                <Button
                  onClick={handlePrevLesson}
                  disabled={currentLesson === 1}
                  style={{ borderRadius: 8 }}
                >
                  Previous Lesson
                </Button>

                <div className="flex space-x-3">
                  <Button
                    type="primary"
                    icon={<CheckCircle className="w-4 h-4" />}
                    onClick={handleLessonComplete}
                    disabled={completedLessons.includes(currentLesson)}
                    style={{
                      background: completedLessons.includes(currentLesson)
                        ? "#28a745"
                        : "linear-gradient(135deg, #10b981, #059669)",
                      border: "none",
                      borderRadius: 8,
                    }}
                  >
                    {completedLessons.includes(currentLesson)
                      ? "Completed"
                      : "Mark Complete"}
                  </Button>

                  <Button
                    onClick={handleNextLesson}
                    disabled={currentLesson === currentModule.lessons.length}
                    style={{ borderRadius: 8 }}
                  >
                    Next Lesson
                  </Button>
                </div>
              </div>
            </Card>

            {/* Course Info Tabs */}
            <Card className="shadow-elegant">
              <Tabs
                defaultActiveKey="resources"
                size="large"
                items={[
                  {
                    key: "resources",
                    label: (
                      <span className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Resources</span>
                      </span>
                    ),
                    children: (
                      <div>
                        <Title
                          level={4}
                          style={{ color: "#07020D", marginBottom: 16 }}
                        >
                          Lesson Resources
                        </Title>
                        <List
                          dataSource={currentLessonData?.resources || []}
                          renderItem={(resource) => (
                            <List.Item>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center space-x-3">
                                  <FileText className="w-5 h-5 text-sage" />
                                  <div>
                                    <Text strong style={{ color: "#07020D" }}>
                                      {resource.name}
                                    </Text>
                                    <br />
                                    <Text
                                      style={{
                                        color: "#716A5C",
                                        fontSize: "0.9rem",
                                      }}
                                    >
                                      {resource.type.toUpperCase()} file
                                    </Text>
                                  </div>
                                </div>
                                <Button
                                  type="primary"
                                  icon={<Download className="w-4 h-4" />}
                                  size="small"
                                  style={{
                                    background:
                                      "linear-gradient(135deg, #A39B8B, #716A5C)",
                                    border: "none",
                                  }}
                                >
                                  Download
                                </Button>
                              </div>
                            </List.Item>
                          )}
                        />
                      </div>
                    ),
                  },
                  {
                    key: "instructor",
                    label: (
                      <span className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Instructor</span>
                      </span>
                    ),
                    children: (
                      <div>
                        <div className="flex items-start space-x-4">
                          <Avatar
                            size={64}
                            style={{
                              background:
                                "linear-gradient(135deg, #A39B8B, #716A5C)",
                              color: "#F1E9DB",
                              fontSize: "1.5rem",
                              fontWeight: 600,
                            }}
                          >
                            {currentModule.instructor.avatar}
                          </Avatar>
                          <div className="flex-1">
                            <Title
                              level={4}
                              style={{ color: "#07020D", marginBottom: 8 }}
                            >
                              {currentModule.instructor.name}
                            </Title>
                            <div className="flex items-center space-x-2 mb-3">
                              <Rate
                                disabled
                                defaultValue={currentModule.instructor.rating}
                              />
                              <Text style={{ color: "#716A5C" }}>
                                {currentModule.instructor.rating}/5.0
                              </Text>
                            </div>
                            <Paragraph style={{ color: "#716A5C" }}>
                              {currentModule.instructor.bio}
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "overview",
                    label: (
                      <span className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Overview</span>
                      </span>
                    ),
                    children: (
                      <div className="space-y-6">
                        <div>
                          <Title
                            level={4}
                            style={{ color: "#07020D", marginBottom: 16 }}
                          >
                            What you'll learn
                          </Title>
                          <List
                            dataSource={currentModule.whatYouWillLearn}
                            renderItem={(item) => (
                              <List.Item>
                                <div className="flex items-start space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <Text style={{ color: "#716A5C" }}>
                                    {item}
                                  </Text>
                                </div>
                              </List.Item>
                            )}
                          />
                        </div>

                        <Divider />

                        <div>
                          <Title
                            level={4}
                            style={{ color: "#07020D", marginBottom: 16 }}
                          >
                            Requirements
                          </Title>
                          <List
                            dataSource={currentModule.requirements}
                            renderItem={(item) => (
                              <List.Item>
                                <div className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0" />
                                  <Text style={{ color: "#716A5C" }}>
                                    {item}
                                  </Text>
                                </div>
                              </List.Item>
                            )}
                          />
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </Card>

            {/* Reviews */}
            <Card
              title={
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>Student Reviews</span>
                </div>
              }
              className="shadow-elegant"
            >
              <div className="space-y-4">
                {currentModule.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <Avatar
                        style={{
                          background:
                            "linear-gradient(135deg, #A39B8B, #716A5C)",
                          color: "#F1E9DB",
                          fontWeight: 600,
                        }}
                      >
                        {review.avatar}
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Text strong style={{ color: "#07020D" }}>
                            {review.user}
                          </Text>
                          <Text
                            style={{ color: "#A39B8B", fontSize: "0.9rem" }}
                          >
                            {review.date}
                          </Text>
                        </div>
                        <Rate
                          disabled
                          defaultValue={review.rating}
                          size="small"
                        />
                        <Paragraph
                          style={{
                            color: "#716A5C",
                            marginTop: 8,
                            marginBottom: 0,
                          }}
                        >
                          {review.comment}
                        </Paragraph>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ModuleDetail;
