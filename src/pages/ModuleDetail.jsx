// src/pages/ModuleDetail.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Progress,
  Collapse,
  Tabs,
  List,
  Tag,
  Avatar,
  Space,
  Divider,
} from "antd";
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Clock,
  BookOpen,
  Code2,
  FileText,
  Video,
  Download,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const ModuleDetail = () => {
  const { id } = useParams();
  const [activeLesson, setActiveLesson] = useState(1);
  const [completedLessons, setCompletedLessons] = useState([1, 2, 3]);

  // Mock data - dalam aplikasi nyata akan diambil dari API
  const moduleData = {
    1: {
      id: 1,
      title: "HTML Dasar",
      description:
        "Pelajari struktur dasar website dan elemen-elemen HTML fundamental untuk membangun fondasi web development yang kuat.",
      category: "html",
      level: "Beginner",
      duration: "4 jam",
      lessons: 15,
      students: 1250,
      rating: 4.8,
      progress: 100,
      instructor: {
        name: "Dr. Ahmad Fauzi",
        avatar: "A",
        title: "Senior Web Developer",
        experience: "8+ tahun",
      },
      whatYouLearn: [
        "Memahami struktur dasar dokumen HTML",
        "Menguasai elemen-elemen HTML penting",
        "Membuat form dan tabel yang functional",
        "Mengoptimalkan HTML untuk SEO",
        "Best practices dalam penulisan HTML",
      ],
      prerequisites: [
        "Pemahaman dasar komputer",
        "Text editor (VS Code recommended)",
        "Browser modern (Chrome, Firefox, Safari)",
      ],
      lessons: [
        {
          id: 1,
          title: "Pengenalan HTML dan Web Development",
          type: "video",
          duration: "15 menit",
          isCompleted: true,
          description:
            "Memahami apa itu HTML, sejarah web, dan peran HTML dalam web development",
          resources: ["slides.pdf", "cheat-sheet.pdf"],
        },
        {
          id: 2,
          title: "Struktur Dasar Dokumen HTML",
          type: "video",
          duration: "20 menit",
          isCompleted: true,
          description:
            "Mempelajari DOCTYPE, html, head, body, dan struktur dasar HTML",
          resources: ["template.html", "example.html"],
        },
        {
          id: 3,
          title: "Text Elements dan Formatting",
          type: "video",
          duration: "25 menit",
          isCompleted: true,
          description:
            "Heading, paragraph, emphasis, strong, dan elemen text lainnya",
          resources: ["practice.html", "solution.html"],
        },
        {
          id: 4,
          title: "Links dan Navigation",
          type: "video",
          duration: "18 menit",
          isCompleted: false,
          description: "Membuat link internal, eksternal, dan navigasi website",
          resources: ["navigation-template.html"],
        },
        {
          id: 5,
          title: "Images dan Media",
          type: "video",
          duration: "22 menit",
          isCompleted: false,
          description: "Menambahkan gambar, video, audio, dan optimasi media",
          resources: ["images.zip", "media-guide.pdf"],
        },
        {
          id: 6,
          title: "Lists dan Tables",
          type: "reading",
          duration: "30 menit",
          isCompleted: false,
          description:
            "Ordered list, unordered list, dan membuat tabel yang accessible",
          resources: ["table-template.html", "list-examples.html"],
        },
        {
          id: 7,
          title: "Forms - Part 1: Input Elements",
          type: "video",
          duration: "35 menit",
          isCompleted: false,
          description: "Input types, textarea, select, dan form controls dasar",
          resources: ["form-template.html"],
        },
        {
          id: 8,
          title: "Forms - Part 2: Validation & Accessibility",
          type: "video",
          duration: "28 menit",
          isCompleted: false,
          description:
            "HTML5 validation, labels, fieldset, dan form accessibility",
          resources: ["validation-examples.html", "accessibility-guide.pdf"],
        },
        {
          id: 9,
          title: "Semantic HTML Elements",
          type: "video",
          duration: "32 menit",
          isCompleted: false,
          description:
            "Header, nav, main, section, article, aside, footer, dan semantic markup",
          resources: ["semantic-template.html", "seo-guide.pdf"],
        },
        {
          id: 10,
          title: "HTML5 New Features",
          type: "reading",
          duration: "25 menit",
          isCompleted: false,
          description: "Canvas, SVG, video, audio, dan fitur HTML5 modern",
          resources: ["html5-features.pdf", "examples.zip"],
        },
        {
          id: 11,
          title: "Meta Tags dan SEO Basics",
          type: "video",
          duration: "20 menit",
          isCompleted: false,
          description:
            "Meta description, keywords, Open Graph, dan SEO fundamentals",
          resources: ["meta-template.html", "seo-checklist.pdf"],
        },
        {
          id: 12,
          title: "Accessibility Best Practices",
          type: "reading",
          duration: "40 menit",
          isCompleted: false,
          description:
            "ARIA labels, screen readers, dan membuat web yang accessible",
          resources: ["accessibility-guide.pdf", "aria-examples.html"],
        },
        {
          id: 13,
          title: "HTML Validation dan Debugging",
          type: "video",
          duration: "15 menit",
          isCompleted: false,
          description:
            "Menggunakan validator, debugging HTML, dan common mistakes",
          resources: ["debugging-guide.pdf"],
        },
        {
          id: 14,
          title: "Project: Personal Portfolio Page",
          type: "project",
          duration: "60 menit",
          isCompleted: false,
          description:
            "Membuat halaman portfolio pribadi menggunakan semua konsep yang dipelajari",
          resources: [
            "project-brief.pdf",
            "starter-files.zip",
            "design-mockup.jpg",
          ],
        },
        {
          id: 15,
          title: "Review dan Next Steps",
          type: "video",
          duration: "10 menit",
          isCompleted: false,
          description: "Review materi, tips lanjutan, dan persiapan untuk CSS",
          resources: ["next-steps.pdf", "resources-list.pdf"],
        },
      ],
      reviews: [
        {
          id: 1,
          user: { name: "Sarah Dewi", avatar: "S" },
          rating: 5,
          comment:
            "Penjelasan sangat detail dan mudah dipahami. Perfect untuk pemula!",
          date: "2 hari yang lalu",
        },
        {
          id: 2,
          user: { name: "Budi Santoso", avatar: "B" },
          rating: 5,
          comment:
            "Modul ini benar-benar membantu saya memahami HTML dari dasar. Recommended!",
          date: "1 minggu yang lalu",
        },
        {
          id: 3,
          user: { name: "Maya Putri", avatar: "M" },
          rating: 4,
          comment:
            "Bagus, tapi mungkin bisa ditambah lebih banyak contoh praktik.",
          date: "2 minggu yang lalu",
        },
      ],
    },
    2: {
      id: 2,
      title: "CSS Styling",
      description:
        "Buat website yang menarik dengan styling CSS, layout, dan responsive design untuk berbagai perangkat.",
      category: "css",
      level: "Beginner",
      duration: "6 jam",
      lessons: 20,
      students: 980,
      rating: 4.9,
      progress: 45,
      instructor: {
        name: "Indira Sari",
        avatar: "I",
        title: "UI/UX Designer & Frontend Developer",
        experience: "6+ tahun",
      },
      whatYouLearn: [
        "Memahami CSS syntax dan selectors",
        "Menguasai layout dengan Flexbox dan Grid",
        "Membuat responsive design yang mobile-friendly",
        "Mengimplementasikan animations dan transitions",
        "CSS best practices dan methodology",
      ],
      prerequisites: [
        "HTML Dasar (modul sebelumnya)",
        "Pemahaman struktur file dan folder",
        "Browser developer tools basics",
      ],
      lessons: [
        {
          id: 1,
          title: "CSS Fundamentals dan Syntax",
          type: "video",
          duration: "20 menit",
          isCompleted: true,
          description:
            "Pengenalan CSS, cara menghubungkan dengan HTML, dan syntax dasar",
          resources: ["css-basics.pdf", "starter-template.html"],
        },
        // ... more lessons would be added here
      ],
      reviews: [],
    },
  };

  const currentModule = moduleData[id] || moduleData[1];
  const currentLesson = currentModule.lessons.find(
    (lesson) => lesson.id === activeLesson
  );

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "reading":
        return <FileText className="w-4 h-4" />;
      case "project":
        return <Code2 className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "video":
        return "blue";
      case "reading":
        return "green";
      case "project":
        return "purple";
      default:
        return "default";
    }
  };

  const handleLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <div className="container mx-auto px-4">
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
          <span>Kembali ke Modul</span>
        </Link>
      </motion.div>

      <Row gutter={[24, 24]}>
        {/* Main Content */}
        <Col xs={24} lg={16}>
          {/* Module Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-elegant mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <Tag color="blue">
                      {currentModule.category.toUpperCase()}
                    </Tag>
                    <Tag color="green">{currentModule.level}</Tag>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium">
                        {currentModule.rating}
                      </span>
                    </div>
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

                  <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentModule.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{currentModule.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{currentModule.students} students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <Text strong>Progress Pembelajaran</Text>
                  <Text style={{ color: "#A39B8B", fontWeight: 600 }}>
                    {completedLessons.length}/{currentModule.lessons} selesai
                  </Text>
                </div>
                <Progress
                  percent={Math.round(
                    (completedLessons.length / currentModule.lessons) * 100
                  )}
                  strokeColor={{
                    "0%": "#A39B8B",
                    "100%": "#716A5C",
                  }}
                  trailColor="#F1E9DB"
                />
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-3 p-4 bg-cream rounded-lg">
                <Avatar
                  size={48}
                  style={{
                    background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                    color: "#F1E9DB",
                    fontWeight: 600,
                  }}
                >
                  {currentModule.instructor.avatar}
                </Avatar>
                <div>
                  <Text strong style={{ color: "#07020D" }}>
                    {currentModule.instructor.name}
                  </Text>
                  <Text
                    style={{
                      color: "#716A5C",
                      display: "block",
                      fontSize: "0.9rem",
                    }}
                  >
                    {currentModule.instructor.title}
                  </Text>
                  <Text style={{ color: "#A39B8B", fontSize: "0.8rem" }}>
                    {currentModule.instructor.experience}
                  </Text>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Lesson Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-elegant">
              <Tabs defaultActiveKey="content" size="large">
                <TabPane
                  tab={
                    <span className="flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Konten</span>
                    </span>
                  }
                  key="content"
                >
                  {currentLesson && (
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <Tag
                          color={getTypeColor(currentLesson.type)}
                          icon={getTypeIcon(currentLesson.type)}
                        >
                          {currentLesson.type.toUpperCase()}
                        </Tag>
                        <div className="flex items-center space-x-1 text-sm text-charcoal">
                          <Clock className="w-4 h-4" />
                          <span>{currentLesson.duration}</span>
                        </div>
                      </div>

                      <Title
                        level={3}
                        style={{ color: "#07020D", marginBottom: 12 }}
                      >
                        {currentLesson.title}
                      </Title>

                      <Paragraph
                        style={{
                          color: "#716A5C",
                          fontSize: "1rem",
                          marginBottom: 24,
                        }}
                      >
                        {currentLesson.description}
                      </Paragraph>

                      {/* Video/Content Placeholder */}
                      <div
                        className="w-full h-64 bg-gradient-sage rounded-lg flex items-center justify-center mb-6"
                        style={{
                          background:
                            "linear-gradient(135deg, #A39B8B20, #716A5C20)",
                        }}
                      >
                        <div className="text-center">
                          {getTypeIcon(currentLesson.type)}
                          <Text
                            style={{
                              color: "#716A5C",
                              marginTop: 8,
                              display: "block",
                            }}
                          >
                            {currentLesson.type === "video"
                              ? "Video Player"
                              : currentLesson.type === "reading"
                              ? "Reading Content"
                              : "Project Instructions"}
                          </Text>
                        </div>
                      </div>

                      {/* Resources */}
                      {currentLesson.resources &&
                        currentLesson.resources.length > 0 && (
                          <div className="mb-6">
                            <Title
                              level={4}
                              style={{ color: "#07020D", marginBottom: 12 }}
                            >
                              Resources
                            </Title>
                            <div className="space-y-2">
                              {currentLesson.resources.map(
                                (resource, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-cream rounded-lg hover:bg-sage/10 transition-colors cursor-pointer"
                                  >
                                    <div className="flex items-center space-x-3">
                                      <Download className="w-4 h-4 text-sage" />
                                      <Text>{resource}</Text>
                                    </div>
                                    <Button type="text" size="small">
                                      Download
                                    </Button>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                      {/* Action Buttons */}
                      <div className="flex justify-between items-center">
                        <Button
                          disabled={activeLesson === 1}
                          onClick={() => setActiveLesson(activeLesson - 1)}
                          style={{ borderRadius: 8 }}
                        >
                          Lesson Sebelumnya
                        </Button>

                        <div className="flex space-x-3">
                          {!completedLessons.includes(activeLesson) && (
                            <Button
                              type="primary"
                              icon={<CheckCircle className="w-4 h-4" />}
                              onClick={() => handleLessonComplete(activeLesson)}
                              style={{
                                background:
                                  "linear-gradient(135deg, #10b981, #059669)",
                                border: "none",
                                borderRadius: 8,
                              }}
                            >
                              Tandai Selesai
                            </Button>
                          )}

                          <Button
                            type="primary"
                            disabled={
                              activeLesson === currentModule.lessons.length
                            }
                            onClick={() => setActiveLesson(activeLesson + 1)}
                            style={{
                              background:
                                "linear-gradient(135deg, #A39B8B, #716A5C)",
                              border: "none",
                              borderRadius: 8,
                            }}
                          >
                            Lesson Selanjutnya
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </TabPane>

                <TabPane
                  tab={
                    <span className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Overview</span>
                    </span>
                  }
                  key="overview"
                >
                  <div className="space-y-6">
                    {/* What You'll Learn */}
                    <div>
                      <Title
                        level={4}
                        style={{ color: "#07020D", marginBottom: 16 }}
                      >
                        Apa yang akan Anda pelajari
                      </Title>
                      <List
                        dataSource={currentModule.whatYouLearn}
                        renderItem={(item) => (
                          <List.Item
                            style={{ border: "none", padding: "8px 0" }}
                          >
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <Text style={{ color: "#716A5C" }}>{item}</Text>
                            </div>
                          </List.Item>
                        )}
                      />
                    </div>

                    <Divider />

                    {/* Prerequisites */}
                    <div>
                      <Title
                        level={4}
                        style={{ color: "#07020D", marginBottom: 16 }}
                      >
                        Prerequisites
                      </Title>
                      <List
                        dataSource={currentModule.prerequisites}
                        renderItem={(item) => (
                          <List.Item
                            style={{ border: "none", padding: "8px 0" }}
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-sage rounded-full mt-2 flex-shrink-0"></div>
                              <Text style={{ color: "#716A5C" }}>{item}</Text>
                            </div>
                          </List.Item>
                        )}
                      />
                    </div>
                  </div>
                </TabPane>

                <TabPane
                  tab={
                    <span className="flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Reviews ({currentModule.reviews.length})</span>
                    </span>
                  }
                  key="reviews"
                >
                  <div className="space-y-4">
                    {currentModule.reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-cream rounded-lg">
                        <div className="flex items-start space-x-3">
                          <Avatar
                            style={{
                              background:
                                "linear-gradient(135deg, #A39B8B, #716A5C)",
                              color: "#F1E9DB",
                            }}
                          >
                            {review.user.avatar}
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Text strong style={{ color: "#07020D" }}>
                                {review.user.name}
                              </Text>
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 text-yellow-500 fill-current"
                                  />
                                ))}
                              </div>
                              <Text
                                style={{ color: "#A39B8B", fontSize: "0.8rem" }}
                              >
                                {review.date}
                              </Text>
                            </div>
                            <Paragraph style={{ color: "#716A5C", margin: 0 }}>
                              {review.comment}
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabPane>
              </Tabs>
            </Card>
          </motion.div>
        </Col>

        {/* Sidebar - Lesson List */}
        <Col xs={24} lg={8}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card
              title="Daftar Lesson"
              className="shadow-elegant sticky top-24"
              style={{ maxHeight: "80vh", overflow: "auto" }}
            >
              <div className="space-y-2">
                {currentModule.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    onClick={() => setActiveLesson(lesson.id)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeLesson === lesson.id
                        ? "bg-sage text-cream"
                        : "hover:bg-cream"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {getTypeIcon(lesson.type)}
                        {completedLessons.includes(lesson.id) && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <Text
                        style={{
                          color:
                            activeLesson === lesson.id ? "#F1E9DB" : "#A39B8B",
                          fontSize: "0.8rem",
                        }}
                      >
                        {lesson.duration}
                      </Text>
                    </div>
                    <Text
                      style={{
                        color:
                          activeLesson === lesson.id ? "#F1E9DB" : "#07020D",
                        fontWeight: 500,
                        display: "block",
                        fontSize: "0.9rem",
                      }}
                    >
                      {lesson.title}
                    </Text>
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
