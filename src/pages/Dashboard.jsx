// src/pages/Dashboard.jsx
import { Row, Col, Card, Typography, Progress, Button } from "antd";
import { BookOpen, Code2, MessageCircle, Trophy, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const Dashboard = () => {
  const stats = [
    {
      title: "Modul Selesai",
      value: "3",
      total: "12",
      percentage: 25,
      icon: <BookOpen className="w-6 h-6" />,
      color: "#3b82f6",
    },
    {
      title: "Latihan Selesai",
      value: "8",
      total: "24",
      percentage: 33,
      icon: <Code2 className="w-6 h-6" />,
      color: "#10b981",
    },
    {
      title: "Forum Posts",
      value: "12",
      total: "-",
      percentage: 0,
      icon: <MessageCircle className="w-6 h-6" />,
      color: "#8b5cf6",
    },
    {
      title: "Achievements",
      value: "2",
      total: "10",
      percentage: 20,
      icon: <Trophy className="w-6 h-6" />,
      color: "#f59e0b",
    },
  ];

  const recentActivities = [
    {
      type: "module",
      title: "Menyelesaikan HTML Dasar - Lesson 5",
      time: "2 jam yang lalu",
    },
    {
      type: "exercise",
      title: "Mengerjakan latihan CSS Flexbox",
      time: "1 hari yang lalu",
    },
    {
      type: "forum",
      title: "Bertanya di forum tentang JavaScript",
      time: "2 hari yang lalu",
    },
    {
      type: "achievement",
      title: "Mendapat badge 'HTML Master'",
      time: "3 hari yang lalu",
    },
  ];

  const nextModules = [
    {
      id: 1,
      title: "CSS Styling",
      progress: 0,
      lessons: 20,
      duration: "6 jam",
    },
    {
      id: 2,
      title: "JavaScript Dasar",
      progress: 0,
      lessons: 25,
      duration: "8 jam",
    },
    {
      id: 3,
      title: "DOM Manipulation",
      progress: 0,
      lessons: 15,
      duration: "5 jam",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Title level={2} style={{ color: "#07020D", marginBottom: 8 }}>
          Selamat Datang Kembali! 👋
        </Title>
        <Text style={{ color: "#716A5C", fontSize: "1.1rem" }}>
          Mari lanjutkan perjalanan coding Anda hari ini
        </Text>
      </motion.div>

      {/* Stats Cards */}
      <Row gutter={[24, 24]} className="mb-8">
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-elegant h-full">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ background: `${stat.color}15`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <Title level={4} style={{ color: "#07020D", marginBottom: 4 }}>
                  {stat.value}
                  {stat.total !== "-" && `/${stat.total}`}
                </Title>
                <Text style={{ color: "#716A5C", marginBottom: 12 }}>
                  {stat.title}
                </Text>
                {stat.percentage > 0 && (
                  <Progress
                    percent={stat.percentage}
                    strokeColor={stat.color}
                    trailColor="#F1E9DB"
                    size="small"
                  />
                )}
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]}>
        {/* Continue Learning */}
        <Col xs={24} lg={16}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card
              title="Lanjutkan Pembelajaran"
              className="shadow-elegant mb-6"
              extra={
                <Link to="/modules" className="text-sage hover:text-charcoal">
                  Lihat Semua
                </Link>
              }
            >
              <div className="space-y-4">
                {nextModules.map((module, index) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between p-4 bg-cream rounded-lg"
                  >
                    <div className="flex-1">
                      <Title
                        level={5}
                        style={{ color: "#07020D", marginBottom: 4 }}
                      >
                        {module.title}
                      </Title>
                      <div className="flex items-center space-x-4 text-sm text-charcoal">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{module.lessons} lessons</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      type="primary"
                      style={{
                        background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                        border: "none",
                        borderRadius: 8,
                      }}
                    >
                      Mulai
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card title="Aktivitas Terbaru" className="shadow-elegant">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-cream rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center">
                      {activity.type === "module" && (
                        <BookOpen className="w-4 h-4 text-sage" />
                      )}
                      {activity.type === "exercise" && (
                        <Code2 className="w-4 h-4 text-sage" />
                      )}
                      {activity.type === "forum" && (
                        <MessageCircle className="w-4 h-4 text-sage" />
                      )}
                      {activity.type === "achievement" && (
                        <Trophy className="w-4 h-4 text-sage" />
                      )}
                    </div>
                    <div className="flex-1">
                      <Text style={{ color: "#07020D", fontWeight: 500 }}>
                        {activity.title}
                      </Text>
                      <Text
                        style={{
                          color: "#716A5C",
                          fontSize: "0.9rem",
                          display: "block",
                        }}
                      >
                        {activity.time}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </Col>

        {/* Progress Overview */}
        <Col xs={24} lg={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card title="Progress Overview" className="shadow-elegant mb-6">
              <div className="text-center mb-6">
                <div className="mb-4">
                  <Progress
                    type="circle"
                    percent={25}
                    strokeColor={{
                      "0%": "#A39B8B",
                      "100%": "#716A5C",
                    }}
                    trailColor="#F1E9DB"
                    size={120}
                  />
                </div>
                <Title level={4} style={{ color: "#07020D", marginBottom: 4 }}>
                  25% Complete
                </Title>
                <Text style={{ color: "#716A5C" }}>
                  Kamu sudah menyelesaikan 3 dari 12 modul
                </Text>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Text>HTML Dasar</Text>
                  <Text className="text-green-600 font-medium">✓ Selesai</Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text>CSS Styling</Text>
                  <Text className="text-blue-600 font-medium">
                    📚 Sedang Belajar
                  </Text>
                </div>
                <div className="flex justify-between items-center">
                  <Text>JavaScript</Text>
                  <Text className="text-gray-400">🔒 Terkunci</Text>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card title="Quick Actions" className="shadow-elegant">
              <div className="space-y-3">
                <Link to="/modules">
                  <Button
                    block
                    icon={<BookOpen className="w-4 h-4" />}
                    style={{
                      textAlign: "left",
                      height: "auto",
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: "1px solid #A39B8B20",
                    }}
                  >
                    Lihat Semua Modul
                  </Button>
                </Link>
                <Link to="/exercises">
                  <Button
                    block
                    icon={<Code2 className="w-4 h-4" />}
                    style={{
                      textAlign: "left",
                      height: "auto",
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: "1px solid #A39B8B20",
                    }}
                  >
                    Latihan Coding
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button
                    block
                    icon={<MessageCircle className="w-4 h-4" />}
                    style={{
                      textAlign: "left",
                      height: "auto",
                      padding: "12px 16px",
                      borderRadius: 8,
                      border: "1px solid #A39B8B20",
                    }}
                  >
                    Forum Diskusi
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;