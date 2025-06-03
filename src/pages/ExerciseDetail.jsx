// src/pages/ExerciseDetail.jsx - Complete fix
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Row, 
  Col, 
  Card, 
  Typography, 
  Button, 
  Tabs,
  Tag,
  message
} from "antd";
import { 
  ArrowLeft, 
  Trophy, 
  Clock, 
  Code2, 
  CheckCircle,
  FileText,
  Play,
  Eye,
  RotateCcw,
  Download,
  Lightbulb
} from "lucide-react";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;

const ExerciseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("html");
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Mock exercise data
  const exerciseData = {
    1: {
      id: 1,
      title: "Interactive Todo List",
      description:
        "Build a fully functional todo list application with add, toggle, and delete functionality using vanilla JavaScript.",
      difficulty: "medium",
      category: "javascript",
      estimatedTime: "45-60 minutes",
      points: 150,
      skills: [
        "JavaScript",
        "DOM Manipulation",
        "Event Handling",
        "Local Storage",
      ],

      instructions: [
        "Create the HTML structure for a todo list with input field and add button",
        "Style the todo list with CSS to make it visually appealing",
        "Implement JavaScript functionality to add new todos",
        "Add ability to mark todos as complete/incomplete",
        "Include delete functionality for removing todos",
        "Display todo count and completion status",
        "Add smooth animations for better user experience",
      ],

      requirements: [
        "Input field to enter new todos",
        "Add button or Enter key to create todos",
        "Checkbox to toggle todo completion status",
        "Delete button for each todo item",
        "Counter showing completed vs total todos",
        "Visual feedback for completed items",
        "Responsive design for mobile devices",
      ],

      hints: [
        "Use addEventListener() to handle user interactions",
        "Store todos in an array and update the display when the array changes",
        "Use createElement() or innerHTML to dynamically add todo items",
        "Add CSS classes to style completed vs incomplete todos",
        "Consider using data attributes to store todo IDs",
        "Use CSS transitions for smooth animations",
      ],

      startingCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List App</title>
</head>
<body>
    <div class="container">
        <h1>My Todo List</h1>
        
        <!-- Add your HTML structure here -->
        <div class="todo-input">
            <input type="text" id="todoInput" placeholder="Enter a new todo...">
            <button id="addBtn">Add Todo</button>
        </div>
        
        <div class="todo-stats">
            <span id="todoCount">0 of 0 completed</span>
        </div>
        
        <ul id="todoList" class="todo-list">
            <!-- Todo items will be added here dynamically -->
        </ul>
    </div>
</body>
</html>`,

        css: `/* Add your CSS styles here */
.container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    font-family: 'Segoe UI', sans-serif;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

.todo-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

#todoInput {
    flex: 1;
    padding: 0.75rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
}

#addBtn {
    padding: 0.75rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
}

.todo-stats {
    text-align: center;
    margin-bottom: 1rem;
    color: #666;
}

.todo-list {
    list-style: none;
    padding: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background: white;
    transition: all 0.3s ease;
}

.todo-item:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.todo-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
}

.todo-text {
    flex: 1;
    font-size: 1rem;
}

.completed .todo-text {
    text-decoration: line-through;
    color: #888;
}

.delete-btn {
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.empty {
    text-align: center;
    color: #999;
    font-style: italic;
}`,

        js: `// Add your JavaScript code here
class TodoApp {
    constructor() {
        this.todos = [];
        this.todoCount = 0;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.render();
    }
    
    setupEventListeners() {
        // Add your event listeners here
        const todoInput = document.getElementById('todoInput');
        const addBtn = document.getElementById('addBtn');
        
        // Add click event for add button
        // Add keypress event for Enter key
        // Implement the event handler functions
    }
    
    addTodo() {
        // Implement add todo functionality
    }
    
    toggleTodo(id) {
        // Implement toggle functionality
    }
    
    deleteTodo(id) {
        // Implement delete functionality
    }
    
    render() {
        // Implement render functionality to update the UI
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const app = new TodoApp();
});`,
      },

      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List App</title>
</head>
<body>
    <div class="container">
        <h1>My Todo List</h1>
        
        <div class="todo-input">
            <input type="text" id="todoInput" placeholder="Enter a new todo...">
            <button id="addBtn">Add Todo</button>
        </div>
        
        <div class="todo-stats">
            <span id="todoCount">0 of 0 completed</span>
        </div>
        
        <ul id="todoList" class="todo-list">
            <!-- Todo items will be added here dynamically -->
        </ul>
    </div>
</body>
</html>`,

        css: `.container {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 300;
}

.todo-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

#todoInput {
    flex: 1;
    padding: 1rem;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background: white;
}

#todoInput:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

#addBtn {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #007bff, #0056b3);
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

#addBtn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,123,255,0.3);
}

.todo-stats {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #6c757d;
    font-size: 1.1rem;
    font-weight: 500;
}

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    margin-bottom: 0.75rem;
    background: white;
    transition: all 0.3s ease;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.todo-item:hover {
    box-shadow: 0 6px 25px rgba(0,0,0,0.1);
    transform: translateY(-2px);
}

.todo-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
}

.todo-content input[type="checkbox"] {
    width: 20px;
    height: 20px;
    accent-color: #28a745;
    cursor: pointer;
}

.todo-text {
    flex: 1;
    font-size: 1.1rem;
    color: #2c3e50;
    transition: all 0.3s ease;
}

.completed {
    background: #f8f9fa;
    border-color: #dee2e6;
}

.completed .todo-text {
    text-decoration: line-through;
    color: #6c757d;
}

.delete-btn {
    background: linear-gradient(135deg, #dc3545, #c82333);
    color: white;
    border: none;
    border-radius: 8px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.3s ease;
}

.delete-btn:hover {
    background: linear-gradient(135deg, #c82333, #a71e2a);
    transform: scale(1.1);
}

.empty {
    text-align: center;
    color: #6c757d;
    font-style: italic;
    padding: 3rem 1rem;
    font-size: 1.1rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .container {
        margin: 1rem;
        padding: 1rem;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .todo-input {
        flex-direction: column;
    }
    
    #addBtn {
        padding: 1rem;
    }
}`,

        js: `class TodoApp {
    constructor() {
        this.todos = [];
        this.todoCount = 0;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.render();
    }
    
    setupEventListeners() {
        const todoInput = document.getElementById('todoInput');
        const addBtn = document.getElementById('addBtn');
        
        addBtn.addEventListener('click', () => {
            this.addTodo();
        });
        
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTodo();
            }
        });
    }
    
    addTodo() {
        const input = document.getElementById('todoInput');
        const text = input.value.trim();
        
        if (text === '') {
            this.showToast('Please enter a todo item!', 'error');
            return;
        }
        
        const todo = {
            id: ++this.todoCount,
            text: text,
            completed: false,
            createdAt: new Date()
        };
        
        this.todos.push(todo);
        input.value = '';
        this.render();
        this.showToast('Todo added successfully!', 'success');
    }
    
    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.render();
        }
    }
    
    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.render();
        this.showToast('Todo deleted!', 'success');
    }
    
    render() {
        const todoList = document.getElementById('todoList');
        const todoCount = document.getElementById('todoCount');
        
        todoList.innerHTML = '';
        
        if (this.todos.length === 0) {
            todoList.innerHTML = '<li class="todo-item empty">No todos yet. Add one above!</li>';
        } else {
            this.todos.forEach(todo => {
                const li = document.createElement('li');
                li.className = 'todo-item' + (todo.completed ? ' completed' : '');
                
                li.innerHTML = 
                    '<div class="todo-content">' +
                        '<input type="checkbox" ' + (todo.completed ? 'checked' : '') + ' onchange="app.toggleTodo(' + todo.id + ')">' +
                        '<span class="todo-text">' + this.escapeHtml(todo.text) + '</span>' +
                    '</div>' +
                    '<button class="delete-btn" onclick="app.deleteTodo(' + todo.id + ')">' +
                        '<span>&times;</span>' +
                    '</button>';
                
                todoList.appendChild(li);
            });
        }
        
        const completedCount = this.todos.filter(t => t.completed).length;
        todoCount.textContent = completedCount + ' of ' + this.todos.length + ' completed';
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    showToast(message, type) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.className = 'toast';
        toast.style.cssText = 
            'position: fixed; top: 20px; right: 20px; padding: 1rem 1.5rem; border-radius: 8px; color: white; font-weight: 500; z-index: 1000; transform: translateX(100%); transition: transform 0.3s ease; background: ' + (type === 'success' ? '#28a745' : '#dc3545') + '; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);';
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    window.app = new TodoApp();
});`,
      },
    },
  };

  const currentExercise = exerciseData[id] || exerciseData[1];

  useEffect(() => {
    setHtmlCode(currentExercise.startingCode.html);
    setCssCode(currentExercise.startingCode.css);
    setJsCode(currentExercise.startingCode.js);
  }, [id, currentExercise.startingCode]);

  const handleReset = () => {
    setHtmlCode(currentExercise.startingCode.html);
    setCssCode(currentExercise.startingCode.css);
    setJsCode(currentExercise.startingCode.js);
    setShowSolution(false);
    message.success("Code reset to starting template");
  };

  const handleShowSolution = () => {
    setHtmlCode(currentExercise.solution.html);
    setCssCode(currentExercise.solution.css);
    setJsCode(currentExercise.solution.js);
    setShowSolution(true);
    message.info("Solution code loaded");
  };

  const handleComplete = () => {
    setIsCompleted(true);
    message.success(
      `Congratulations! You earned ${currentExercise.points} points!`
    );
  };

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
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <Link
          to="/exercises"
          className="inline-flex items-center space-x-2 text-charcoal hover:text-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Latihan</span>
        </Link>
      </motion.div>

      {/* Exercise Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Card className="shadow-elegant">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <Tag color={getDifficultyColor(currentExercise.difficulty)}>
                  {getDifficultyIcon(currentExercise.difficulty)}{" "}
                  {currentExercise.difficulty}
                </Tag>
                <Tag color="blue">{currentExercise.category.toUpperCase()}</Tag>
                <div className="flex items-center space-x-1 text-sm text-charcoal">
                  <Trophy className="w-4 h-4" />
                  <span>{currentExercise.points} points</span>
                </div>
              </div>
              <Title level={2} style={{ color: "#07020D", marginBottom: 8 }}>
                {currentExercise.title}
              </Title>
              <Paragraph
                style={{
                  color: "#716A5C",
                  fontSize: "1.1rem",
                  marginBottom: 16,
                }}
              >
                {currentExercise.description}
              </Paragraph>

              <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentExercise.estimatedTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Code2 className="w-4 h-4" />
                  <span>{currentExercise.skills.join(", ")}</span>
                </div>
              </div>
            </div>
            {isCompleted && (
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                <Text style={{ color: "#28a745", fontWeight: 600 }}>
                  Completed!
                </Text>
              </div>
            )}
          </div>
        </Card>
      </motion.div>

      <Row gutter={[24, 24]}>
        {/* Code Editor */}
        <Col xs={24} lg={14}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card
              title={
                <div className="flex items-center justify-between">
                  <span>Code Editor</span>
                  <div className="flex space-x-2">
                    <Button
                      icon={<RotateCcw className="w-4 h-4" />}
                      onClick={handleReset}
                      size="small"
                    >
                      Reset
                    </Button>
                    <Button
                      icon={<Eye className="w-4 h-4" />}
                      onClick={handleShowSolution}
                      size="small"
                      type="primary"
                      style={{
                        background: "linear-gradient(135deg, #f59e0b, #d97706)",
                        border: "none",
                      }}
                    >
                      Show Solution
                    </Button>
                  </div>
                </div>
              }
              className="shadow-elegant"
            >
              <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                size="large"
                items={[
                  {
                    key: "html",
                    label: (
                      <span className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>HTML</span>
                      </span>
                    ),
                    children: (
                      <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        className="w-full h-96 p-4 font-mono text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sage"
                        style={{
                          backgroundColor: "#1e1e1e",
                          color: "#d4d4d4",
                          lineHeight: "1.5",
                        }}
                        placeholder="Write your HTML code here..."
                      />
                    ),
                  },
                  {
                    key: "css",
                    label: (
                      <span className="flex items-center space-x-2">
                        <Code2 className="w-4 h-4" />
                        <span>CSS</span>
                      </span>
                    ),
                    children: (
                      <textarea
                        value={cssCode}
                        onChange={(e) => setCssCode(e.target.value)}
                        className="w-full h-96 p-4 font-mono text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sage"
                        style={{
                          backgroundColor: "#1e1e1e",
                          color: "#d4d4d4",
                          lineHeight: "1.5",
                        }}
                        placeholder="Write your CSS code here..."
                      />
                    ),
                  },
                  {
                    key: "js",
                    label: (
                      <span className="flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>JavaScript</span>
                      </span>
                    ),
                    children: (
                      <textarea
                        value={jsCode}
                        onChange={(e) => setJsCode(e.target.value)}
                        className="w-full h-96 p-4 font-mono text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-sage"
                        style={{
                          backgroundColor: "#1e1e1e",
                          color: "#d4d4d4",
                          lineHeight: "1.5",
                        }}
                        placeholder="Write your JavaScript code here..."
                      />
                    ),
                  },
                ]}
              />

              {/* Action Buttons */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <Button icon={<Download className="w-4 h-4" />} size="small">
                    Download Code
                  </Button>
                </div>
                <div className="flex space-x-2">
                  {!isCompleted && (
                    <Button
                      type="primary"
                      icon={<CheckCircle className="w-4 h-4" />}
                      onClick={handleComplete}
                      style={{
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        border: "none",
                        borderRadius: 8,
                      }}
                    >
                      Mark as Complete
                    </Button>
                  )}
                </div>
              </div>

              {showSolution && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex items-center space-x-2 text-yellow-800">
                    <Lightbulb className="w-4 h-4" />
                    <Text style={{ color: "#d97706", fontWeight: 500 }}>
                      Solution code loaded! Try to understand the implementation
                      and modify it to learn more.
                    </Text>
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        </Col>

        {/* Instructions & Preview */}
        <Col xs={24} lg={10}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-elegant mb-6" title="Live Preview">
              <div
                className="w-full h-64 border border-gray-200 rounded-lg overflow-hidden"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <iframe
                  srcDoc={`
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <style>${cssCode}</style>
                    </head>
                    <body>
                      ${htmlCode}
                      <script>${jsCode}</script>
                    </body>
                    </html>
                  `}
                  className="w-full h-full border-none"
                  title="Preview"
                />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card
              className="shadow-elegant sticky top-24"
              style={{ maxHeight: "70vh", overflow: "auto" }}
            >
              <Tabs
                defaultActiveKey="instructions"
                items={[
                  {
                    key: "instructions",
                    label: (
                      <span className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Instructions</span>
                      </span>
                    ),
                    children: (
                      <div className="space-y-4">
                        <div>
                          <Title
                            level={4}
                            style={{ color: "#07020D", marginBottom: 12 }}
                          >
                            Step-by-step Instructions
                          </Title>
                          <ol className="space-y-2">
                            {currentExercise.instructions.map(
                              (instruction, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <span className="flex-shrink-0 w-6 h-6 bg-sage text-white rounded-full text-xs flex items-center justify-center font-medium">
                                    {index + 1}
                                  </span>
                                  <Text style={{ color: "#716A5C" }}>
                                    {instruction}
                                  </Text>
                                </li>
                              )
                            )}
                          </ol>
                        </div>

                        <div>
                          <Title
                            level={4}
                            style={{ color: "#07020D", marginBottom: 12 }}
                          >
                            Requirements
                          </Title>
                          <ul className="space-y-2">
                            {currentExercise.requirements.map(
                              (requirement, index) => (
                                <li
                                  key={index}
                                  className="flex items-start space-x-3"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                  <Text style={{ color: "#716A5C" }}>
                                    {requirement}
                                  </Text>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "hints",
                    label: (
                      <span className="flex items-center space-x-2">
                        <Lightbulb className="w-4 h-4" />
                        <span>Hints</span>
                      </span>
                    ),
                    children: (
                      <div className="space-y-3">
                        <Title
                          level={4}
                          style={{ color: "#07020D", marginBottom: 12 }}
                        >
                          💡 Helpful Hints
                        </Title>
                        {currentExercise.hints.map((hint, index) => (
                          <div
                            key={index}
                            className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg"
                          >
                            <Text style={{ color: "#92400e" }}>{hint}</Text>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                ]}
              />
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};
export default ExerciseDetail;
