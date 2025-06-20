// Mock data for the e-learning platform

// Demo users for login
export const demoUsers = {
  admin: { email: "admin@nex.com", password: "admin123", role: "admin" },
  instructor: { email: "inst@nex.com", password: "inst123", role: "instructor" },
  learner: { email: "learn@nex.com", password: "learn123", role: "learner" },
};

// Mock courses data
export const courses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "John Doe",
    instructorId: 101,
    category: "Development",
    level: "Beginner",
    rating: 4.8,
    reviews: 120,
    students: 1500,
    price: 49.99,
    discountPrice: 39.99,
    thumbnail: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course is perfect for beginners who want to start their journey in web development.",
    duration: "10 hours",
    lastUpdated: "2023-10-15",
    modules: [
      {
        id: 1,
        title: "Getting Started with HTML",
        duration: "1.5 hours",
        lessons: [
          { id: 1, title: "Introduction to HTML", duration: "15 mins", videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
          { id: 2, title: "HTML Document Structure", duration: "20 mins", videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
          { id: 3, title: "HTML Elements and Tags", duration: "25 mins", videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
          { id: 4, title: "HTML Forms", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
        ],
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        duration: "2 hours",
        lessons: [
          { id: 1, title: "Introduction to CSS", duration: "20 mins", videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
          { id: 2, title: "CSS Selectors", duration: "25 mins", videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
          { id: 3, title: "CSS Box Model", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
          { id: 4, title: "CSS Flexbox", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
        ],
      },
      {
        id: 3,
        title: "JavaScript Basics",
        duration: "2.5 hours",
        lessons: [
          { id: 1, title: "Introduction to JavaScript", duration: "20 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
          { id: 2, title: "Variables and Data Types", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
          { id: 3, title: "Functions and Events", duration: "40 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
          { id: 4, title: "DOM Manipulation", duration: "60 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        ],
      },
    ],
    quiz: [
      {
        id: 1,
        title: "HTML Basics Quiz",
        questions: [
          {
            id: 1,
            type: "mcq",
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "Hyper Text Modern Language",
            ],
            correctAnswer: "Hyper Text Markup Language",
          },
          {
            id: 2,
            type: "mcq",
            question: "Which tag is used to create a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            correctAnswer: "<a>",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    instructorId: 102,
    category: "Development",
    level: "Intermediate",
    rating: 4.6,
    reviews: 85,
    students: 950,
    price: 69.99,
    discountPrice: 59.99,
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Take your JavaScript skills to the next level with advanced concepts like closures, prototypes, async/await, and more.",
    duration: "12 hours",
    lastUpdated: "2023-09-20",
    modules: [
      {
        id: 1,
        title: "Advanced JavaScript Concepts",
        duration: "3 hours",
        lessons: [
          { id: 1, title: "Closures and Scope", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
          { id: 2, title: "Prototypes and Inheritance", duration: "50 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
          { id: 3, title: "ES6+ Features", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
          { id: 4, title: "Functional Programming", duration: "40 mins", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Data Science with Python",
    instructor: "Michael Johnson",
    instructorId: 103,
    category: "Data Science",
    level: "Intermediate",
    rating: 4.9,
    reviews: 200,
    students: 2200,
    price: 79.99,
    discountPrice: 69.99,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Learn data science using Python, including pandas, numpy, matplotlib, and scikit-learn for data analysis and machine learning.",
    duration: "15 hours",
    lastUpdated: "2023-11-05",
    modules: [
      {
        id: 1,
        title: "Python Fundamentals for Data Science",
        duration: "4 hours",
        lessons: [
          { id: 1, title: "Introduction to Python", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
          { id: 2, title: "Working with NumPy", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
          { id: 3, title: "Data Manipulation with Pandas", duration: "60 mins", videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
          { id: 4, title: "Data Visualization", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "UI/UX Design Principles",
    instructor: "Sarah Williams",
    instructorId: 104,
    category: "Design",
    level: "Beginner",
    rating: 4.7,
    reviews: 150,
    students: 1800,
    price: 59.99,
    discountPrice: 49.99,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    description: "Master the principles of UI/UX design and create user-friendly interfaces that provide excellent user experiences.",
    duration: "8 hours",
    lastUpdated: "2023-10-10",
    modules: [
      {
        id: 1,
        title: "UI Design Fundamentals",
        duration: "2.5 hours",
        lessons: [
          { id: 1, title: "Design Principles", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
          { id: 2, title: "Color Theory", duration: "35 mins", videoUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
          { id: 3, title: "Typography", duration: "40 mins", videoUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
          { id: 4, title: "Layout and Composition", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Mobile App Development with React Native",
    instructor: "David Brown",
    instructorId: 105,
    category: "Development",
    level: "Intermediate",
    rating: 4.5,
    reviews: 95,
    students: 1200,
    price: 69.99,
    discountPrice: 59.99,
    thumbnail: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Build cross-platform mobile applications using React Native. Learn to create native-like experiences for iOS and Android.",
    duration: "14 hours",
    lastUpdated: "2023-11-01",
    modules: [
      {
        id: 1,
        title: "Getting Started with React Native",
        duration: "3 hours",
        lessons: [
          { id: 1, title: "Introduction to React Native", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
          { id: 2, title: "Setting Up Development Environment", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
          { id: 3, title: "Core Components", duration: "50 mins", videoUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
          { id: 4, title: "Navigation in React Native", duration: "55 mins", videoUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Digital Marketing Masterclass",
    instructor: "Emily Clark",
    instructorId: 106,
    category: "Marketing",
    level: "All Levels",
    rating: 4.8,
    reviews: 180,
    students: 2500,
    price: 89.99,
    discountPrice: 69.99,
    thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "Comprehensive digital marketing course covering SEO, social media marketing, email marketing, content marketing, and more.",
    duration: "20 hours",
    lastUpdated: "2023-10-25",
    modules: [
      {
        id: 1,
        title: "Digital Marketing Strategy",
        duration: "4 hours",
        lessons: [
          { id: 1, title: "Introduction to Digital Marketing", duration: "30 mins", videoUrl: "https://www.youtube.com/watch?v=nU-IIXBWlS4" },
          { id: 2, title: "Market Research", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=nU-IIXBWlS4" },
          { id: 3, title: "Creating a Marketing Plan", duration: "60 mins", videoUrl: "https://www.youtube.com/watch?v=nU-IIXBWlS4" },
          { id: 4, title: "Measuring Marketing Success", duration: "45 mins", videoUrl: "https://www.youtube.com/watch?v=nU-IIXBWlS4" },
        ],
      },
    ],
  },
];

// Mock quiz data
export const quizzes = [
  {
    id: 1,
    courseId: 1,
    title: "HTML Fundamentals Quiz",
    timeLimit: 15, // in minutes
    questions: [
      {
        id: 1,
        type: "mcq",
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Hyper Text Modern Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        id: 2,
        type: "mcq",
        question: "Which tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correctAnswer: "<a>",
      },
      {
        id: 3,
        type: "mcq",
        question: "Which HTML element is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: "<ul>",
      },
      {
        id: 4,
        type: "match",
        question: "Match the HTML elements with their purpose:",
        pairs: [
          { item: "<h1>", match: "Main heading" },
          { item: "<p>", match: "Paragraph" },
          { item: "<img>", match: "Image" },
          { item: "<table>", match: "Tabular data" },
        ],
      },
    ],
  },
  {
    id: 2,
    courseId: 1,
    title: "CSS Basics Quiz",
    timeLimit: 20,
    questions: [
      {
        id: 1,
        type: "mcq",
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: "Cascading Style Sheets",
      },
      {
        id: 2,
        type: "mcq",
        question: "Which property is used to change the background color?",
        options: [
          "background-color",
          "bgcolor",
          "color",
          "background-style",
        ],
        correctAnswer: "background-color",
      },
      {
        id: 3,
        type: "match",
        question: "Match the CSS properties with their purpose:",
        pairs: [
          { item: "color", match: "Text color" },
          { item: "font-size", match: "Text size" },
          { item: "margin", match: "Outside spacing" },
          { item: "padding", match: "Inside spacing" },
        ],
      },
    ],
  },
];

// Mock instructors data
export const instructors = [
  {
    id: 101,
    name: "John Doe",
    title: "Web Development Expert",
    bio: "John is a seasoned web developer with over 10 years of experience in building web applications. He specializes in frontend technologies and has worked with major tech companies.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    courses: [1],
    students: 15000,
    rating: 4.8,
    reviews: 120,
    website: "https://johndoe.dev",
    social: {
      twitter: "@johndoe",
      linkedin: "johndoe",
      github: "johndoe",
    },
  },
  {
    id: 102,
    name: "Jane Smith",
    title: "JavaScript Specialist",
    bio: "Jane is a JavaScript expert with a focus on modern frameworks and libraries. She has authored several books on advanced JavaScript concepts and regularly speaks at tech conferences.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    courses: [2],
    students: 12000,
    rating: 4.6,
    reviews: 85,
    website: "https://janesmith.dev",
    social: {
      twitter: "@janesmith",
      linkedin: "janesmith",
      github: "janesmith",
    },
  },
  {
    id: 103,
    name: "Michael Johnson",
    title: "Data Scientist & Python Developer",
    bio: "Michael is a data scientist with expertise in Python programming. He has worked on numerous data analysis projects and has a passion for teaching complex concepts in a simple way.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    courses: [3],
    students: 18000,
    rating: 4.9,
    reviews: 200,
    website: "https://michaeljohnson.dev",
    social: {
      twitter: "@michaelj",
      linkedin: "michaeljohnson",
      github: "michaelj",
    },
  },
];

// Mock categories
export const categories = [
  { id: 1, name: "Development", courses: 42 },
  { id: 2, name: "Business", courses: 30 },
  { id: 3, name: "Design", courses: 25 },
  { id: 4, name: "Marketing", courses: 18 },
  { id: 5, name: "Photography", courses: 15 },
  { id: 6, name: "Music", courses: 12 },
  { id: 7, name: "Data Science", courses: 20 },
  { id: 8, name: "Personal Development", courses: 22 },
];

// Mock user progress data
export const userProgress = {
  userId: "learn@nex.com",
  enrolledCourses: [
    {
      courseId: 1,
      progress: 60, // percentage
      lastAccessed: "2023-11-10",
      completedLessons: [1, 2, 3, 5, 7],
      quizScores: [
        { quizId: 1, score: 80, completed: true },
        { quizId: 2, score: 0, completed: false },
      ],
      notes: [
        {
          id: 1,
          lessonId: 2,
          content: "Remember to practice HTML forms",
          timestamp: "2023-11-08",
        },
        {
          id: 2,
          lessonId: 5,
          content: "Look up more about CSS flexbox examples",
          timestamp: "2023-11-09",
        },
      ],
      certificate: null,
    },
    {
      courseId: 3,
      progress: 25,
      lastAccessed: "2023-11-09",
      completedLessons: [1, 2],
      quizScores: [],
      notes: [],
      certificate: null,
    },
  ],
  wishlist: [2, 5],
  recentlyViewed: [1, 3, 4],
};

// Mock certificates
export const certificates = [
  {
    id: 1,
    userId: "learn@nex.com",
    courseId: 6,
    courseName: "Digital Marketing Masterclass",
    instructorName: "Emily Clark",
    issueDate: "2023-10-15",
    expiryDate: null,
    certificateUrl: "/certificates/cert-1.pdf",
  },
];

// Mock notifications
export const notifications = [
  {
    id: 1,
    userId: "learn@nex.com",
    type: "course_update",
    message: "New content added to 'Introduction to Web Development'",
    courseId: 1,
    read: false,
    date: "2023-11-10",
  },
  {
    id: 2,
    userId: "learn@nex.com",
    type: "quiz_reminder",
    message: "Don't forget to complete the CSS Basics Quiz",
    courseId: 1,
    quizId: 2,
    read: true,
    date: "2023-11-09",
  },
  {
    id: 3,
    userId: "inst@nex.com",
    type: "student_enrollment",
    message: "5 new students enrolled in your course",
    courseId: 2,
    read: false,
    date: "2023-11-08",
  },
];

// Mock payment history
export const payments = [
  {
    id: "pay_123456",
    userId: "learn@nex.com",
    courseId: 1,
    amount: 39.99,
    currency: "USD",
    status: "completed",
    paymentMethod: "credit_card",
    date: "2023-10-05",
    receipt: "/receipts/receipt-123456.pdf",
  },
  {
    id: "pay_123457",
    userId: "learn@nex.com",
    courseId: 3,
    amount: 69.99,
    currency: "USD",
    status: "completed",
    paymentMethod: "paypal",
    date: "2023-11-01",
    receipt: "/receipts/receipt-123457.pdf",
  },
];