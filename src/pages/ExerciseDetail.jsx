// src/pages/ExerciseDetail.jsx
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
  Space,
  Select,
  message
} from "antd";
import { 
  ArrowLeft, 
  Play, 
  RotateCcw, 
  Download, 
  Eye,
  CheckCircle,
  Code2,
  FileText,
  Lightbulb,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const ExerciseDetail = () => {
  const { id } = useParams();
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [activeTab, setActiveTab] = useState("html");
  const [isCompleted, setIsCompleted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  // Mock data
  const exerciseData = {
    1: {
      id: 1,
      title: "Membuat Form Registrasi",
      description: "Buat form registrasi yang lengkap dengan validasi HTML5 dan styling yang menarik. Form harus include fields untuk nama, email, password, konfirmasi password, dan checkbox terms & conditions.",
      difficulty: "easy",
      estimatedTime: "30 menit",
      points: 100,
      category: "html",
      skills: ["Forms", "Validation", "HTML5"],
      instructions: [
        "Buat struktur form HTML dengan method POST",
        "Tambahkan input fields: nama (text), email, password, confirm password",
        "Implementasikan HTML5 validation (required, pattern, etc)",
        "Tambahkan checkbox untuk terms & conditions",
        "Style form agar terlihat professional dan user-friendly",
        "Pastikan form responsive untuk mobile devices"
      ],
      requirements: [
        "Form harus memiliki proper labeling untuk accessibility",
        "Gunakan HTML5 input types yang sesuai",
        "Implementasikan client-side validation",
        "Style dengan CSS yang clean dan modern",
        "Responsive design untuk semua screen sizes"
      ],
      hints: [
        "Gunakan <fieldset> untuk mengelompokkan related inputs",
        "Manfaatkan CSS :focus dan :invalid pseudo-classes",
        "Consider using CSS Grid atau Flexbox untuk layout",
        "Tambahkan visual feedback untuk validation states"
      ],
      startingCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Create Account</h1>
        <!-- Buat form registrasi di sini -->
        
    </div>
</body>
</html>`,
        css: `/* Reset dan base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

/* Tambahkan styling untuk form di sini */
`,
        js: `// JavaScript untuk enhanced validation dan interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Code untuk form handling di sini
    
});`
      },
      solution: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Registration Form</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="container">
       <h1>Create Account</h1>
       <form id="registrationForm" novalidate>
           <fieldset>
               <legend>Personal Information</legend>
               
               <div class="form-group">
                   <label for="fullName">Full Name *</label>
                   <input type="text" id="fullName" name="fullName" required 
                          pattern="[A-Za-z\\s]{2,50}" 
                          placeholder="Enter your full name">
                   <span class="error-message"></span>
               </div>

               <div class="form-group">
                   <label for="email">Email Address *</label>
                   <input type="email" id="email" name="email" required 
                          placeholder="Enter your email">
                   <span class="error-message"></span>
               </div>

               <div class="form-group">
                   <label for="password">Password *</label>
                   <input type="password" id="password" name="password" required 
                          minlength="8" placeholder="Create a strong password">
                   <span class="error-message"></span>
               </div>

               <div class="form-group">
                   <label for="confirmPassword">Confirm Password *</label>
                   <input type="password" id="confirmPassword" name="confirmPassword" 
                          required placeholder="Confirm your password">
                   <span class="error-message"></span>
               </div>

               <div class="form-group checkbox-group">
                   <input type="checkbox" id="terms" name="terms" required>
                   <label for="terms">I agree to the <a href="#">Terms & Conditions</a> *</label>
                   <span class="error-message"></span>
               </div>

               <button type="submit" class="submit-btn">Create Account</button>
           </fieldset>
       </form>
   </div>
   <script src="script.js"></script>
</body>
</html>`,
       css: `/* Reset dan base styles */
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
}

.container {
   background: white;
   padding: 2rem;
   border-radius: 15px;
   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
   width: 100%;
   max-width: 450px;
}

h1 {
   text-align: center;
   color: #333;
   margin-bottom: 2rem;
   font-size: 2rem;
   font-weight: 300;
}

fieldset {
   border: none;
   padding: 0;
}

legend {
   font-size: 1.2rem;
   font-weight: 600;
   color: #555;
   margin-bottom: 1.5rem;
}

.form-group {
   margin-bottom: 1.5rem;
   position: relative;
}

label {
   display: block;
   margin-bottom: 0.5rem;
   color: #555;
   font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="password"] {
   width: 100%;
   padding: 12px 16px;
   border: 2px solid #e1e5e9;
   border-radius: 8px;
   font-size: 1rem;
   transition: all 0.3s ease;
   background: #f8f9fa;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
   outline: none;
   border-color: #667eea;
   background: white;
   box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

input:valid {
   border-color: #28a745;
}

input:invalid:not(:placeholder-shown) {
   border-color: #dc3545;
}

.error-message {
   color: #dc3545;
   font-size: 0.875rem;
   margin-top: 0.25rem;
   display: block;
   min-height: 1.25rem;
}

.checkbox-group {
   display: flex;
   align-items: flex-start;
   gap: 0.5rem;
}

.checkbox-group input[type="checkbox"] {
   margin: 0;
   margin-top: 0.25rem;
}

.checkbox-group label {
   margin: 0;
   font-size: 0.9rem;
   line-height: 1.4;
}

.checkbox-group a {
   color: #667eea;
   text-decoration: none;
}

.checkbox-group a:hover {
   text-decoration: underline;
}

.submit-btn {
   width: 100%;
   padding: 14px;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 8px;
   font-size: 1.1rem;
   font-weight: 600;
   cursor: pointer;
   transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-btn:hover {
   transform: translateY(-2px);
   box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.submit-btn:disabled {
   opacity: 0.6;
   cursor: not-allowed;
   transform: none;
}

/* Responsive design */
@media (max-width: 480px) {
   .container {
       padding: 1.5rem;
       margin: 10px;
   }
   
   h1 {
       font-size: 1.5rem;
   }
}`,
       js: `document.addEventListener('DOMContentLoaded', function() {
   const form = document.getElementById('registrationForm');
   const password = document.getElementById('password');
   const confirmPassword = document.getElementById('confirmPassword');
   
   // Real-time validation
   form.addEventListener('input', function(e) {
       validateField(e.target);
   });
   
   // Form submission
   form.addEventListener('submit', function(e) {
       e.preventDefault();
       
       if (validateForm()) {
           // Simulate form submission
           const submitBtn = form.querySelector('.submit-btn');
           submitBtn.textContent = 'Creating Account...';
           submitBtn.disabled = true;
           
           setTimeout(() => {
               alert('Account created successfully!');
               form.reset();
               submitBtn.textContent = 'Create Account';
               submitBtn.disabled = false;
               clearErrors();
           }, 2000);
       }
   });
   
   function validateField(field) {
       const errorElement = field.parentNode.querySelector('.error-message');
       let isValid = true;
       let errorMessage = '';
       
       // Check if field is empty when required
       if (field.required && !field.value.trim()) {
           isValid = false;
           errorMessage = 'This field is required';
       }
       // Specific validations
       else if (field.type === 'email' && field.value) {
           const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
           if (!emailRegex.test(field.value)) {
               isValid = false;
               errorMessage = 'Please enter a valid email address';
           }
       }
       else if (field.id === 'password' && field.value) {
           if (field.value.length < 8) {
               isValid = false;
               errorMessage = 'Password must be at least 8 characters long';
           }
       }
       else if (field.id === 'confirmPassword' && field.value) {
           if (field.value !== password.value) {
               isValid = false;
               errorMessage = 'Passwords do not match';
           }
       }
       else if (field.id === 'fullName' && field.value) {
           const nameRegex = /^[A-Za-z\\s]{2,50}$/;
           if (!nameRegex.test(field.value)) {
               isValid = false;
               errorMessage = 'Name should contain only letters and spaces (2-50 characters)';
           }
       }
       
       // Show/hide error message
       if (errorElement) {
           errorElement.textContent = errorMessage;
       }
       
       return isValid;
   }
   
   function validateForm() {
       const fields = form.querySelectorAll('input[required]');
       let isFormValid = true;
       
       fields.forEach(field => {
           if (!validateField(field)) {
               isFormValid = false;
           }
       });
       
       return isFormValid;
   }
   
   function clearErrors() {
       const errorElements = form.querySelectorAll('.error-message');
       errorElements.forEach(el => el.textContent = '');
   }
});`
     }
   },
   3: {
     id: 3,
     title: "Todo List App",
     description: "Buat aplikasi todo list dengan fitur tambah, edit, hapus, dan tandai sebagai selesai menggunakan JavaScript DOM manipulation.",
     difficulty: "medium",
     estimatedTime: "60 menit",
     points: 200,
     category: "javascript",
     skills: ["DOM Manipulation", "Events", "Local Storage"],
     instructions: [
       "Buat interface untuk menambah todo baru",
       "Implementasikan fungsi untuk menandai todo sebagai selesai",
       "Tambahkan fitur edit todo yang sudah ada",
       "Implementasikan fungsi hapus todo",
       "Simpan data ke Local Storage agar persisten",
       "Tambahkan filter untuk menampilkan: All, Active, Completed"
     ],
     requirements: [
       "Menggunakan vanilla JavaScript (no frameworks)",
       "Data harus persist menggunakan Local Storage",
       "Interface yang clean dan intuitive",
       "Responsive design",
       "Proper error handling"
     ],
     hints: [
       "Gunakan array untuk menyimpan todo items",
       "Setiap todo sebaiknya memiliki unique ID",
       "Manfaatkan event delegation untuk dynamic elements",
       "JSON.stringify() dan JSON.parse() untuk Local Storage"
     ],
     startingCode: {
       html: `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Todo List App</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="container">
       <h1>My Todo List</h1>
       <!-- Buat interface todo list di sini -->
       
   </div>
   <script src="script.js"></script>
</body>
</html>`,
       css: `/* Base styles */
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
   min-height: 100vh;
   padding: 20px;
}

.container {
   max-width: 600px;
   margin: 0 auto;
   background: white;
   border-radius: 15px;
   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
   overflow: hidden;
}

/* Tambahkan styling untuk todo list di sini */
`,
       js: `// Todo List Application
class TodoApp {
   constructor() {
       this.todos = [];
       this.currentFilter = 'all';
       this.init();
   }
   
   init() {
       // Initialize app di sini
   }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
   new TodoApp();
});`
     },
     solution: {
       html: `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Todo List App</title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <div class="container">
       <header class="app-header">
           <h1>My Todo List</h1>
           <p class="app-subtitle">Stay organized and productive</p>
       </header>

       <div class="todo-input-section">
           <div class="input-wrapper">
               <input type="text" id="todoInput" placeholder="Add a new task..." maxlength="100">
               <button id="addBtn" class="add-btn">
                   <span>Add</span>
               </button>
           </div>
       </div>

       <div class="todo-filters">
           <button class="filter-btn active" data-filter="all">All</button>
           <button class="filter-btn" data-filter="active">Active</button>
           <button class="filter-btn" data-filter="completed">Completed</button>
       </div>

       <div class="todo-list-container">
           <ul id="todoList" class="todo-list"></ul>
           <div id="emptyState" class="empty-state">
               <div class="empty-icon">📝</div>
               <h3>No tasks yet</h3>
               <p>Add a task above to get started!</p>
           </div>
       </div>

       <div class="todo-stats">
           <span id="totalTodos">0 tasks</span>
           <button id="clearCompleted" class="clear-btn">Clear Completed</button>
       </div>
   </div>
   <script src="script.js"></script>
</body>
</html>`,
       css: `/* Base styles */
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
   min-height: 100vh;
   padding: 20px;
}

.container {
   max-width: 600px;
   margin: 0 auto;
   background: white;
   border-radius: 15px;
   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
   overflow: hidden;
}

/* Header */
.app-header {
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   padding: 2rem;
   text-align: center;
}

.app-header h1 {
   font-size: 2.5rem;
   font-weight: 300;
   margin-bottom: 0.5rem;
}

.app-subtitle {
   opacity: 0.9;
   font-size: 1.1rem;
}

/* Input section */
.todo-input-section {
   padding: 2rem;
   border-bottom: 1px solid #eee;
}

.input-wrapper {
   display: flex;
   gap: 0.5rem;
}

#todoInput {
   flex: 1;
   padding: 1rem;
   border: 2px solid #e1e5e9;
   border-radius: 10px;
   font-size: 1rem;
   transition: all 0.3s ease;
}

#todoInput:focus {
   outline: none;
   border-color: #667eea;
   box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.add-btn {
   padding: 1rem 2rem;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border: none;
   border-radius: 10px;
   font-weight: 600;
   cursor: pointer;
   transition: transform 0.2s ease;
}

.add-btn:hover {
   transform: translateY(-2px);
}

/* Filters */
.todo-filters {
   display: flex;
   padding: 1rem 2rem;
   gap: 0.5rem;
   border-bottom: 1px solid #eee;
}

.filter-btn {
   padding: 0.5rem 1rem;
   border: 2px solid #e1e5e9;
   background: white;
   border-radius: 20px;
   cursor: pointer;
   transition: all 0.3s ease;
   font-weight: 500;
}

.filter-btn.active,
.filter-btn:hover {
   background: #667eea;
   color: white;
   border-color: #667eea;
}

/* Todo list */
.todo-list-container {
   min-height: 300px;
   position: relative;
}

.todo-list {
   list-style: none;
   padding: 0;
}

.todo-item {
   display: flex;
   align-items: center;
   padding: 1rem 2rem;
   border-bottom: 1px solid #f0f0f0;
   transition: background-color 0.2s ease;
   animation: slideIn 0.3s ease;
}

.todo-item:hover {
   background-color: #f8f9fa;
}

.todo-item.completed {
   opacity: 0.6;
}

.todo-item.completed .todo-text {
   text-decoration: line-through;
   color: #999;
}

.todo-checkbox {
   width: 20px;
   height: 20px;
   margin-right: 1rem;
   cursor: pointer;
}

.todo-text {
   flex: 1;
   font-size: 1rem;
   padding: 0.5rem;
   border: none;
   background: transparent;
   cursor: pointer;
}

.todo-text:focus {
   outline: 2px solid #667eea;
   border-radius: 4px;
   cursor: text;
}

.todo-actions {
   display: flex;
   gap: 0.5rem;
   opacity: 0;
   transition: opacity 0.2s ease;
}

.todo-item:hover .todo-actions {
   opacity: 1;
}

.edit-btn,
.delete-btn {
   padding: 0.5rem;
   border: none;
   border-radius: 6px;
   cursor: pointer;
   font-size: 0.8rem;
   transition: all 0.2s ease;
}

.edit-btn {
   background: #ffc107;
   color: white;
}

.delete-btn {
   background: #dc3545;
   color: white;
}

.edit-btn:hover,
.delete-btn:hover {
   transform: scale(1.1);
}

/* Empty state */
.empty-state {
   text-align: center;
   padding: 4rem 2rem;
   color: #999;
}

.empty-icon {
   font-size: 4rem;
   margin-bottom: 1rem;
}

.empty-state h3 {
   margin-bottom: 0.5rem;
   color: #666;
}

/* Stats */
.todo-stats {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 2rem;
   background: #f8f9fa;
   font-size: 0.9rem;
   color: #666;
}

.clear-btn {
   padding: 0.5rem 1rem;
   background: transparent;
   border: 1px solid #dc3545;
   color: #dc3545;
   border-radius: 6px;
   cursor: pointer;
   transition: all 0.2s ease;
}

.clear-btn:hover {
   background: #dc3545;
   color: white;
}

/* Animations */
@keyframes slideIn {
   from {
       opacity: 0;
       transform: translateX(-20px);
   }
   to {
       opacity: 1;
       transform: translateX(0);
   }
}

@keyframes slideOut {
   from {
       opacity: 1;
       transform: translateX(0);
   }
   to {
       opacity: 0;
       transform: translateX(20px);
   }
}

.todo-item.removing {
   animation: slideOut 0.3s ease forwards;
}

/* Responsive */
@media (max-width: 480px) {
   .container {
       margin: 10px;
       border-radius: 10px;
   }
   
   .app-header {
       padding: 1.5rem;
   }
   
   .app-header h1 {
       font-size: 2rem;
   }
   
   .todo-input-section {
       padding: 1.5rem;
   }
   
   .input-wrapper {
       flex-direction: column;
   }
   
   .todo-item {
       padding: 1rem;
   }
   
   .todo-stats {
       flex-direction: column;
       gap: 1rem;
       text-align: center;
   }
}`,
       js: `// Todo List Application
class TodoApp {
   constructor() {
       this.todos = this.loadTodos();
       this.currentFilter = 'all';
       this.editingId = null;
       this.init();
   }
   
   init() {
       this.bindEvents();
       this.render();
   }
   
   bindEvents() {
       // Add todo
       document.getElementById('addBtn').addEventListener('click', () => this.addTodo());
       document.getElementById('todoInput').addEventListener('keypress', (e) => {
           if (e.key === 'Enter') this.addTodo();
       });
       
       // Filter buttons
       document.querySelectorAll('.filter-btn').forEach(btn => {
           btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
       });
       
       // Clear completed
       document.getElementById('clearCompleted').addEventListener('click', () => this.clearCompleted());
       
       // Todo list events (using event delegation)
       document.getElementById('todoList').addEventListener('click', (e) => this.handleTodoClick(e));
       document.getElementById('todoList').addEventListener('change', (e) => this.handleTodoChange(e));
       document.getElementById('todoList').addEventListener('keypress', (e) => this.handleTodoKeypress(e));
       document.getElementById('todoList').addEventListener('blur', (e) => this.handleTodoBlur(e));
   }
   
   addTodo() {
       const input = document.getElementById('todoInput');
       const text = input.value.trim();
       
       if (!text) {
           this.showError('Please enter a task!');
           return;
       }
       
       const todo = {
           id: Date.now(),
           text: text,
           completed: false,
           createdAt: new Date()
       };
       
       this.todos.unshift(todo);
       input.value = '';
       this.saveTodos();
       this.render();
       this.showSuccess('Task added successfully!');
   }
   
   toggleTodo(id) {
       const todo = this.todos.find(t => t.id === id);
       if (todo) {
           todo.completed = !todo.completed;
           this.saveTodos();
           this.render();
       }
   }
   
   deleteTodo(id) {
       const todoElement = document.querySelector(\`[data-id="\${id}"]\`);
       if (todoElement) {
           todoElement.classList.add('removing');
           setTimeout(() => {
               this.todos = this.todos.filter(t => t.id !== id);
               this.saveTodos();
               this.render();
               this.showSuccess('Task deleted successfully!');
           }, 300);
       }
   }
   
   editTodo(id) {
       this.editingId = id;
       const todoElement = document.querySelector(\`[data-id="\${id}"] .todo-text\`);
       if (todoElement) {
           todoElement.contentEditable = true;
           todoElement.focus();
           
           // Select all text
           const range = document.createRange();
           range.selectNodeContents(todoElement);
           const selection = window.getSelection();
           selection.removeAllRanges();
           selection.addRange(range);
       }
   }
   
   saveEdit(id, newText) {
       const todo = this.todos.find(t => t.id === id);
       if (todo && newText.trim()) {
           todo.text = newText.trim();
           this.saveTodos();
       }
       this.editingId = null;
       this.render();
   }
   
   setFilter(filter) {
       this.currentFilter = filter;
       
       // Update active filter button
       document.querySelectorAll('.filter-btn').forEach(btn => {
           btn.classList.toggle('active', btn.dataset.filter === filter);
       });
       
       this.render();
   }
   
   clearCompleted() {
       const completedCount = this.todos.filter(t => t.completed).length;
       if (completedCount === 0) {
           this.showError('No completed tasks to clear!');
           return;
       }
       
       if (confirm(\`Are you sure you want to delete \${completedCount} completed task(s)?\`)) {
           this.todos = this.todos.filter(t => !t.completed);
           this.saveTodos();
           this.render();
           this.showSuccess(\`\${completedCount} completed task(s) cleared!\`);
       }
   }
   
   getFilteredTodos() {
       switch (this.currentFilter) {
           case 'active':
               return this.todos.filter(t => !t.completed);
           case 'completed':
               return this.todos.filter(t => t.completed);
           default:
               return this.todos;
       }
   }
   
   render() {
       const todoList = document.getElementById('todoList');
       const emptyState = document.getElementById('emptyState');
       const totalTodos = document.getElementById('totalTodos');
       const clearBtn = document.getElementById('clearCompleted');
       
       const filteredTodos = this.getFilteredTodos();
       const completedCount = this.todos.filter(t => t.completed).length;
       const activeCount = this.todos.length - completedCount;
       
       // Update stats
       totalTodos.textContent = \`\${this.todos.length} task\${this.todos.length !== 1 ? 's' : ''} (\${activeCount} active)\`;
       clearBtn.style.display = completedCount > 0 ? 'block' : 'none';
       
       // Show/hide empty state
       if (filteredTodos.length === 0) {
           emptyState.style.display = 'block';
           todoList.style.display = 'none';
       } else {
           emptyState.style.display = 'none';
           todoList.style.display = 'block';
       }
       
       // Render todos
       todoList.innerHTML = filteredTodos.map(todo => \`
           <li class="todo-item \${todo.completed ? 'completed' : ''}" data-id="\${todo.id}">
               <input type="checkbox" class="todo-checkbox" \${todo.completed ? 'checked' : ''}>
               <div class="todo-text" data-id="\${todo.id}">\${this.escapeHtml(todo.text)}</div>
               <div class="todo-actions">
                   <button class="edit-btn" data-action="edit" data-id="\${todo.id}">Edit</button>
                   <button class="delete-btn" data-action="delete" data-id="\${todo.id}">Delete</button>
               </div>
           </li>
       \`).join('');
   }
   
   handleTodoClick(e) {
       const id = parseInt(e.target.dataset.id);
       const action = e.target.dataset.action;
       
       if (action === 'edit') {
           this.editTodo(id);
       } else if (action === 'delete') {
           this.deleteTodo(id);
       }
   }
   
   handleTodoChange(e) {
       if (e.target.classList.contains('todo-checkbox')) {
           const id = parseInt(e.target.closest('.todo-item').dataset.id);
           this.toggleTodo(id);
       }
   }
   
   handleTodoKeypress(e) {
       if (e.target.classList.contains('todo-text') && e.key === 'Enter') {
           e.preventDefault();
           e.target.blur();
       }
   }
   
   handleTodoBlur(e) {
       if (e.target.classList.contains('todo-text') && this.editingId) {
           const newText = e.target.textContent.trim();
           e.target.contentEditable = false;
           this.saveEdit(this.editingId, newText);
       }
   }
   
   loadTodos() {
       try {
           const stored = localStorage.getItem('todos');
           return stored ? JSON.parse(stored) : [];
       } catch (error) {
           console.error('Error loading todos:', error);
           return [];
       }
   }
   
   saveTodos() {
       try {
           localStorage.setItem('todos', JSON.stringify(this.todos));
       } catch (error) {
           console.error('Error saving todos:', error);
           this.showError('Failed to save changes!');
       }
   }
   
   escapeHtml(text) {
       const div = document.createElement('div');
       div.textContent = text;
       return div.innerHTML;
   }
   
   showSuccess(message) {
       this.showToast(message, 'success');
   }
   
   showError(message) {
       this.showToast(message, 'error');
   }
   
   showToast(message, type) {
       // Simple toast notification
       const toast = document.createElement('div');
       toast.className = \`toast toast-\${type}\`;
       toast.textContent = message;
       toast.style.cssText = \`
           position: fixed;
           top: 20px;
           right: 20px;
           padding: 1rem 1.5rem;
           border-radius: 8px;
           color: white;
           font-weight: 500;
           z-index: 1000;
           transform: translateX(100%);
           transition: transform 0.3s ease;
           background: ${type === 'success' ? '#28a745' : '#dc3545'};
           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
       `;
       
       document.body.appendChild(toast);
       
       // Animate in
       setTimeout(() => {
           toast.style.transform = 'translateX(0)';
       }, 100);
       
       // Animate out and remove
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

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
   new TodoApp();
});`
     }
   }
 };

 const currentExercise = exerciseData[id] || exerciseData[1];

 useEffect(() => {
   // Initialize with starting code
   setHtmlCode(currentExercise.startingCode.html);
   setCssCode(currentExercise.startingCode.css);
   setJsCode(currentExercise.startingCode.js);
 }, [id, currentExercise.startingCode]);

 const handleReset = () => {
   setHtmlCode(currentExercise.startingCode.html);
   setCssCode(currentExercise.startingCode.css);
   setJsCode(currentExercise.startingCode.js);
   setShowSolution(false);
   message.success('Code reset to starting template');
 };

 const handleShowSolution = () => {
   setHtmlCode(currentExercise.solution.html);
   setCssCode(currentExercise.solution.css);
   setJsCode(currentExercise.solution.js);
   setShowSolution(true);
   message.info('Solution code loaded');
 };

 const handleComplete = () => {
   setIsCompleted(true);
   message.success(`Congratulations! You earned ${currentExercise.points} points!`);
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
                 {getDifficultyIcon(currentExercise.difficulty)} {currentExercise.difficulty}
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
             <Paragraph style={{ color: "#716A5C", fontSize: "1.1rem", marginBottom: 16 }}>
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
               <Text style={{ color: "#28a745", fontWeight: 600 }}>Completed!</Text>
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
                       border: "none"
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
                   key: 'html',
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
                         lineHeight: "1.5"
                       }}
                       placeholder="Write your HTML code here..."
                     />
                   )
                 },
                 {
                   key: 'css',
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
                         lineHeight: "1.5"
                       }}
                       placeholder="Write your CSS code here..."
                     />
                   )
                 },
                 {
                   key: 'js',
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
                         lineHeight: "1.5"
                       }}
                       placeholder="Write your JavaScript code here..."
                     />
                   )
                 }
               ]}
             />
             
             {/* Action Buttons */}
             <div className="flex justify-between items-center mt-4">
               <div className="flex space-x-2">
                 <Button 
                   icon={<Download className="w-4 h-4" />}
                   size="small"
                 >
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
                       borderRadius: 8
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
                     Solution code loaded! Try to understand the implementation and modify it to learn more.
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
           <Card className="shadow-elegant sticky top-24" style={{ maxHeight: "70vh", overflow: "auto" }}>
             <Tabs 
               defaultActiveKey="instructions"
               items={[
                 {
                   key: 'instructions',
                   label: (
                     <span className="flex items-center space-x-2">
                       <FileText className="w-4 h-4" />
                       <span>Instructions</span>
                     </span>
                   ),
                   children: (
                     <div className="space-y-4">
                       <div>
                         <Title level={4} style={{ color: "#07020D", marginBottom: 12 }}>
                           Step-by-step Instructions
                         </Title>
                         <ol className="space-y-2">
                           {currentExercise.instructions.map((instruction, index) => (
                             <li key={index} className="flex items-start space-x-3">
                               <span className="flex-shrink-0 w-6 h-6 bg-sage text-white rounded-full text-xs flex items-center justify-center font-medium">
                                 {index + 1}
                               </span>
                               <Text style={{ color: "#716A5C" }}>{instruction}</Text>
                             </li>
                           ))}
                         </ol>
                       </div>

                       <div>
                         <Title level={4} style={{ color: "#07020D", marginBottom: 12 }}>
                           Requirements
                         </Title>
                         <ul className="space-y-2">
                           {currentExercise.requirements.map((requirement, index) => (
                             <li key={index} className="flex items-start space-x-3">
                               <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                               <Text style={{ color: "#716A5C" }}>{requirement}</Text>
                             </li>
                           ))}
                         </ul>
                       </div>
                     </div>
                   )
                 },
                 {
                   key: 'hints',
                   label: (
                     <span className="flex items-center space-x-2">
                       <Lightbulb className="w-4 h-4" />
                       <span>Hints</span>
                     </span>
                   ),
                   children: (
                     <div className="space-y-3">
                       <Title level={4} style={{ color: "#07020D", marginBottom: 12 }}>
                         💡 Helpful Hints
                       </Title>
                       {currentExercise.hints.map((hint, index) => (
                         <div key={index} className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                           <Text style={{ color: "#92400e" }}>{hint}</Text>
                         </div>
                       ))}
                     </div>
                   )
                 }
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