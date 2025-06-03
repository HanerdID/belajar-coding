// src/pages/ForumDetail.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Row, 
  Col, 
  Card, 
  Typography, 
  Button, 
  Input, 
  Avatar,
  Tag,
  Divider,
  Form,
  message
} from "antd";
import { 
  ArrowLeft, 
  ThumbsUp, 
  MessageCircle, 
  Eye, 
  Clock, 
  Pin,
  CheckCircle,
  Send,
  Quote,
  Flag
} from "lucide-react";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const ForumDetail = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [replies, setReplies] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data
  const forumData = {
    1: {
      id: 1,
      title: "Bagaimana cara membuat responsive navbar yang baik?",
      content: `Halo semuanya! 👋

Saya sedang belajar membuat navbar yang responsive, tapi masih bingung dengan implementasi hamburger menu untuk mobile. 

Saya sudah coba beberapa cara menggunakan CSS dan JavaScript, tapi hasilnya masih belum memuaskan. Menu hamburger tidak smooth saat dibuka/tutup, dan kadang ada bug saat resize window.

Pertanyaan saya:
1. Apa approach terbaik untuk membuat hamburger menu yang smooth?
2. Haruskah menggunakan CSS animations atau JavaScript?
3. Bagaimana cara handle window resize dengan baik?
4. Ada library atau framework yang recommend?

Ini adalah code yang sudah saya coba sejauh ini:

\`\`\`html
<nav class="navbar">
  <div class="nav-brand">
    <a href="#">Logo</a>
  </div>
  <div class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <ul class="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
\`\`\`

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: #333;
    width: 100%;
    text-align: center;
    transition: 0.3s;
  }
  
  .nav-menu.active {
    left: 0;
  }
}
\`\`\`

Terima kasih sebelumnya untuk bantuan dan sarannya! 🙏`,
      author: {
        name: "Ahmad Rizki",
        avatar: "A",
        level: "Beginner",
        reputation: 125,
        joinDate: "Joined 3 months ago",
      },
      category: "css",
      tags: ["responsive", "navbar", "mobile", "hamburger-menu"],
      createdAt: "2 jam yang lalu",
      views: 145,
      likes: 12,
      isPinned: false,
      isSolved: false,
      bestAnswer: null,
    },
    2: {
      id: 2,
      title: "JavaScript async/await vs Promise - Kapan menggunakan yang mana?",
      content: `Halo developer! 

Saya sudah paham konsep Promise dan async/await, tapi masih bingung kapan harus pakai async/await dan kapan pakai .then().

Apakah ada guideline atau best practice untuk memilih antara keduanya? Dan apa pros/cons masing-masing approach?

Contoh case yang sering saya hadapi:
- API calls dengan multiple endpoints
- Error handling
- Chaining operations
- Performance considerations

Mohon pencerahan dari yang sudah berpengalaman. Thanks! 🚀`,
      author: {
        name: "Sarah Dewi",
        avatar: "S",
        level: "Intermediate",
        reputation: 487,
        joinDate: "Joined 8 months ago",
      },
      category: "javascript",
      tags: ["async", "promise", "es6", "best-practices"],
      createdAt: "4 jam yang lalu",
      views: 289,
      likes: 23,
      isPinned: true,
      isSolved: true,
      bestAnswer: 3,
    },
  };

  const currentPost = forumData[id] || forumData[1];

  // Mock replies data
  const mockReplies = [
    {
      id: 1,
      content: `Great question! Untuk responsive navbar, saya recommend approach berikut:

**1. Gunakan CSS Flexbox + CSS Transitions**
CSS animations lebih performant daripada JavaScript untuk simple transitions.

**2. JavaScript hanya untuk toggle class**
\`\`\`javascript
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
\`\`\`

**3. Handle window resize**
\`\`\`javascript
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
  }
});
\`\`\`

**4. Smooth animations with CSS**
\`\`\`css
.nav-menu {
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
}

.nav-menu.active {
  transform: translateX(0);
}
\`\`\`

Hope this helps! 👍`,
      author: {
        name: "Budi Santoso",
        avatar: "B",
        level: "Advanced",
        reputation: 892,
      },
      createdAt: "1 jam yang lalu",
      likes: 8,
      isLiked: false,
      isBestAnswer: false,
    },
    {
      id: 2,
      content: `Saya setuju dengan @Budi Santoso! Tapi mau nambahin beberapa tips:

**Accessibility considerations:**
- Jangan lupa tambahkan \`aria-label\` untuk hamburger button
- Gunakan \`aria-expanded\` untuk screen readers
- Consider keyboard navigation (Enter/Space untuk toggle)

**Performance tips:**
- Gunakan \`transform\` instead of \`left/right\` untuk animations
- Add \`will-change: transform\` pada element yang di-animate
- Remove \`will-change\` setelah animation selesai

**Mobile UX:**
- Tambahkan overlay untuk close menu saat click outside
- Consider gesture support (swipe to close)

Example dengan accessibility:
\`\`\`html
<button class="nav-toggle" 
        aria-label="Toggle navigation menu"
        aria-expanded="false">
  <span></span>
  <span></span>
  <span></span>
</button>
\`\`\`

\`\`\`javascript
navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('active');
});
\`\`\``,
      author: {
        name: "Maya Putri",
        avatar: "M",
        level: "Intermediate",
        reputation: 654,
      },
      createdAt: "45 menit yang lalu",
      likes: 5,
      isLiked: false,
      isBestAnswer: false,
    },
    {
      id: 3,
      content: `Excellent answers dari semua! Mau share pendekatan yang saya pakai di production:

**Modern CSS approach dengan CSS Grid:**

\`\`\`css
.navbar {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "brand toggle";
  align-items: center;
  padding: 1rem 2rem;
}

.nav-brand { grid-area: brand; }
.nav-toggle { grid-area: toggle; }

.nav-menu {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
}

@media (min-width: 769px) {
  .navbar {
    grid-template-columns: auto 1fr;
    grid-template-areas: "brand menu";
  }
  
  .nav-toggle { display: none; }
  
  .nav-menu {
    grid-area: menu;
    grid-column: auto;
    grid-template-columns: repeat(auto-fit, minmax(80px, auto));
    justify-content: end;
    padding: 0;
  }
}

/* Mobile: hide menu by default */
@media (max-width: 768px) {
  .nav-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  
  .nav-menu.active {
    max-height: 300px; /* adjust based on content */
  }
}
\`\`\`

**Benefits:**
- No fixed positioning needed
- More flexible layout
- Better for SEO (content stays in DOM)
- Smooth animation with max-height
- Works great with CSS Grid

**JavaScript (vanilla):**
\`\`\`javascript
class ResponsiveNav {
  constructor() {
    this.nav = document.querySelector('.navbar');
    this.toggle = this.nav.querySelector('.nav-toggle');
    this.menu = this.nav.querySelector('.nav-menu');
    this.init();
  }
  
  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    window.addEventListener('resize', () => this.handleResize());
    
    // Close menu when clicking on link (mobile)
    this.menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        this.closeMenu();
      }
    });
  }
  
  toggleMenu() {
    const isActive = this.menu.classList.contains('active');
    this.menu.classList.toggle('active');
    this.toggle.setAttribute('aria-expanded', !isActive);
    
    // Add/remove body scroll lock on mobile
    if (window.innerWidth <= 768) {
      document.body.style.overflow = isActive ? '' : 'hidden';
    }
  }
  
  closeMenu() {
    this.menu.classList.remove('active');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  handleResize() {
    if (window.innerWidth > 768) {
      this.closeMenu();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ResponsiveNav();
});
\`\`\`

**Bonus: React/Vue version available jika butuh! 😊**

Semoga membantu! Feel free to ask if ada yang kurang jelas.`,
      author: {
        name: "Fikri Rahman",
        avatar: "F",
        level: "Expert",
        reputation: 1247,
      },
      createdAt: "30 menit yang lalu",
      likes: 15,
      isLiked: true,
      isBestAnswer: currentPost.bestAnswer === 3,
    },
  ];

  useEffect(() => {
    setLikeCount(currentPost.likes);
    setReplies(mockReplies);
  }, [id, currentPost.likes]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleReplyLike = (replyId) => {
    setReplies((prev) =>
      prev.map((reply) =>
        reply.id === replyId
          ? {
              ...reply,
              likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
              isLiked: !reply.isLiked,
            }
          : reply
      )
    );
  };

  const handleSubmitReply = async (values) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newReply = {
        id: replies.length + 1,
        content: values.reply,
        author: {
          name: "Current User",
          avatar: "U",
          level: "Beginner",
          reputation: 50,
        },
        createdAt: "Baru saja",
        likes: 0,
        isLiked: false,
        isBestAnswer: false,
      };

      setReplies((prev) => [...prev, newReply]);
      form.resetFields();
      message.success("Reply posted successfully!");
    } catch (error) {
      message.error("Failed to post reply");
    } finally {
      setIsSubmitting(false);
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
      case "Expert":
        return "purple";
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
    <div className="container mx-auto px-4 max-w-4xl">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Link
          to="/forum"
          className="inline-flex items-center space-x-2 text-charcoal hover:text-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Forum</span>
        </Link>
      </motion.div>

      {/* Main Post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Card className="shadow-elegant">
          {/* Post Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              {currentPost.isPinned && (
                <Pin className="w-4 h-4 text-orange-500" />
              )}
              {currentPost.isSolved && (
                <Tag color="green" icon={<CheckCircle className="w-3 h-3" />}>
                  Solved
                </Tag>
              )}
              <Tag color={getCategoryColor(currentPost.category)}>
                {currentPost.category.toUpperCase()}
              </Tag>
            </div>
            <Button
              type="text"
              icon={<Flag className="w-4 h-4" />}
              size="small"
              className="text-gray-400 hover:text-red-500"
            >
              Report
            </Button>
          </div>

          {/* Post Title */}
          <Title level={2} style={{ color: "#07020D", marginBottom: 16 }}>
            {currentPost.title}
          </Title>

          {/* Post Meta */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-3">
              <Avatar
                size={40}
                style={{
                  background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                  color: "#F1E9DB",
                  fontWeight: 600,
                }}
              >
                {currentPost.author.avatar}
              </Avatar>
              <div>
                <div className="flex items-center space-x-2">
                  <Text strong style={{ color: "#07020D" }}>
                    {currentPost.author.name}
                  </Text>
                  <Tag
                    color={getLevelColor(currentPost.author.level)}
                    size="small"
                  >
                    {currentPost.author.level}
                  </Tag>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <span>{currentPost.author.reputation} rep</span>
                  <span>•</span>
                  <span>{currentPost.author.joinDate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="mb-6">
            <div
              className="prose prose-gray max-w-none"
              style={{
                color: "#716A5C",
                lineHeight: "1.7",
                fontSize: "1rem",
              }}
            >
              <div style={{ whiteSpace: "pre-wrap" }}>
                {currentPost.content}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {currentPost.tags.map((tag, idx) => (
              <Tag key={idx} style={{ margin: "2px" }}>
                #{tag}
              </Tag>
            ))}
          </div>

          <Divider />

          {/* Post Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button
                type="text"
                icon={
                  <ThumbsUp
                    className={`w-4 h-4 ${isLiked ? "text-blue-500" : ""}`}
                  />
                }
                onClick={handleLike}
                className={`flex items-center space-x-1 ${
                  isLiked ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <span>{likeCount}</span>
              </Button>

              <div className="flex items-center space-x-1 text-gray-500">
                <MessageCircle className="w-4 h-4" />
                <span>{replies.length} replies</span>
              </div>

              <div className="flex items-center space-x-1 text-gray-500">
                <Eye className="w-4 h-4" />
                <span>{currentPost.views} views</span>
              </div>

              <div className="flex items-center space-x-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{currentPost.createdAt}</span>
              </div>
            </div>

            <Button
              type="text"
              icon={<Quote className="w-4 h-4" />}
              className="text-gray-500"
            >
              Quote
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Replies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <Card
          title={
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>{replies.length} Replies</span>
            </div>
          }
          className="shadow-elegant"
        >
          <div className="space-y-6">
            {replies.map((reply, index) => (
              <motion.div
                key={reply.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-lg border-l-4 ${
                  reply.isBestAnswer
                    ? "bg-green-50 border-green-500"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {reply.isBestAnswer && (
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <Text style={{ color: "#059669", fontWeight: 600 }}>
                      Best Answer
                    </Text>
                  </div>
                )}

                {/* Reply Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar
                      size={36}
                      style={{
                        background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                        color: "#F1E9DB",
                        fontWeight: 600,
                      }}
                    >
                      {reply.author.avatar}
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <Text strong style={{ color: "#07020D" }}>
                          {reply.author.name}
                        </Text>
                        <Tag
                          color={getLevelColor(reply.author.level)}
                          size="small"
                        >
                          {reply.author.level}
                        </Tag>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{reply.author.reputation} rep</span>
                        <span>•</span>
                        <span>{reply.createdAt}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="text"
                    icon={<Flag className="w-4 h-4" />}
                    size="small"
                    className="text-gray-400 hover:text-red-500"
                  />
                </div>

                {/* Reply Content */}
                <div
                  className="prose prose-gray max-w-none mb-4"
                  style={{
                    color: "#716A5C",
                    lineHeight: "1.7",
                  }}
                >
                  <div style={{ whiteSpace: "pre-wrap" }}>{reply.content}</div>
                </div>

                {/* Reply Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      type="text"
                      icon={
                        <ThumbsUp
                          className={`w-4 h-4 ${
                            reply.isLiked ? "text-blue-500" : ""
                          }`}
                        />
                      }
                      onClick={() => handleReplyLike(reply.id)}
                      className={`flex items-center space-x-1 ${
                        reply.isLiked ? "text-blue-500" : "text-gray-500"
                      }`}
                      size="small"
                    >
                      <span>{reply.likes}</span>
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      type="text"
                      icon={<Quote className="w-4 h-4" />}
                      size="small"
                      className="text-gray-500"
                    >
                      Quote
                    </Button>
                    {!currentPost.isSolved && (
                      <Button
                        type="text"
                        icon={<CheckCircle className="w-4 h-4" />}
                        size="small"
                        className="text-green-600"
                      >
                        Mark as Best
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Reply Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card title="Post Your Reply" className="shadow-elegant">
          <Form form={form} layout="vertical" onFinish={handleSubmitReply}>
            <Form.Item
              name="reply"
              rules={[
                { required: true, message: "Please enter your reply!" },
                {
                  min: 10,
                  message: "Reply must be at least 10 characters long!",
                },
              ]}
            >
              <TextArea
                rows={6}
                placeholder="Write your reply here... Use markdown for code formatting."
                style={{
                  borderRadius: 12,
                  border: "2px solid #e1e5e9",
                  fontSize: "1rem",
                }}
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <Text>
                  💡 Tip: Use backticks (`) for inline code and triple backticks
                  (```) for code blocks
                </Text>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={() => form.resetFields()}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                  style={{
                    background: "linear-gradient(135deg, #A39B8B, #716A5C)",
                    border: "none",
                    borderRadius: 8,
                  }}
                >
                  Post Reply
                </Button>
              </div>
            </div>
          </Form>
        </Card>
      </motion.div>

      {/* Related Topics (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8"
      >
        <Card title="Related Topics" className="shadow-elegant">
          <div className="space-y-3">
            {[
              "How to create a mobile-first responsive design?",
              "CSS Grid vs Flexbox for navigation layouts",
              "Best practices for accessible navigation menus",
              "JavaScript hamburger menu animations",
            ].map((topic, index) => (
              <div
                key={index}
                className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <Text style={{ color: "#07020D" }}>{topic}</Text>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ForumDetail;