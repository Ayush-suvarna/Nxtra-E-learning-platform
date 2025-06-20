import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '../utils/mockData';
import { getUserData, hasRole } from '../utils/authUtils';
import Navbar from '../components/Navbar';
import ReactPlayer from 'react-player/lazy';
import { CheckCircleIcon, LockClosedIcon, PlayIcon } from '@heroicons/react/solid';

const CoursePlayer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Check if user is logged in and has access to this course
  useEffect(() => {
    const userData = getUserData();
    if (!userData) {
      navigate('/login');
      return;
    }
    
    // Find the course
    const foundCourse = courses.find(c => c.id === parseInt(courseId));
    if (!foundCourse) {
      navigate('/courses');
      return;
    }
    
    // Check if user is enrolled or is an admin/instructor
    const isEnrolled = userData.enrolledCourses && userData.enrolledCourses.includes(parseInt(courseId));
    if (!isEnrolled && !hasRole('admin') && !hasRole('instructor')) {
      navigate(`/course/${courseId}`);
      return;
    }
    
    setCourse(foundCourse);
    
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`course_progress_${courseId}`);
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress);
      setProgress(parsedProgress);
      
      // Set active module and lesson based on progress
      if (parsedProgress.lastModule !== undefined && parsedProgress.lastLesson !== undefined) {
        setActiveModule(parsedProgress.lastModule);
        setActiveLesson(parsedProgress.lastLesson);
      }
    } else {
      // Initialize progress
      const initialProgress = {
        completedLessons: [],
        lastModule: 0,
        lastLesson: 0,
        overallProgress: 0
      };
      setProgress(initialProgress);
      localStorage.setItem(`course_progress_${courseId}`, JSON.stringify(initialProgress));
    }
    
    setIsLoading(false);
  }, [courseId, navigate]);
  
  // Save progress when active lesson changes
  useEffect(() => {
    if (!course) return;
    
    const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
    const lessonKey = `${activeModule}-${activeLesson}`;
    
    // Update progress
    const updatedProgress = {
      ...progress,
      lastModule: activeModule,
      lastLesson: activeLesson,
    };
    
    // Add to completed lessons if not already there
    if (!progress.completedLessons.includes(lessonKey)) {
      updatedProgress.completedLessons = [...progress.completedLessons, lessonKey];
    }
    
    // Calculate overall progress
    updatedProgress.overallProgress = Math.round((updatedProgress.completedLessons.length / totalLessons) * 100);
    
    // Save to state and localStorage
    setProgress(updatedProgress);
    localStorage.setItem(`course_progress_${courseId}`, JSON.stringify(updatedProgress));
  }, [activeModule, activeLesson, course, courseId, progress]);
  
  // Handle lesson completion
  const markLessonComplete = () => {
    const lessonKey = `${activeModule}-${activeLesson}`;
    if (!progress.completedLessons.includes(lessonKey)) {
      const updatedCompletedLessons = [...progress.completedLessons, lessonKey];
      const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
      const overallProgress = Math.round((updatedCompletedLessons.length / totalLessons) * 100);
      
      const updatedProgress = {
        ...progress,
        completedLessons: updatedCompletedLessons,
        overallProgress
      };
      
      setProgress(updatedProgress);
      localStorage.setItem(`course_progress_${courseId}`, JSON.stringify(updatedProgress));
    }
  };
  
  // Navigate to next lesson
  const goToNextLesson = () => {
    if (!course) return;
    
    // Mark current lesson as complete
    markLessonComplete();
    
    // Find next lesson
    const currentModule = course.modules[activeModule];
    if (activeLesson < currentModule.lessons.length - 1) {
      // Next lesson in same module
      setActiveLesson(activeLesson + 1);
    } else if (activeModule < course.modules.length - 1) {
      // First lesson in next module
      setActiveModule(activeModule + 1);
      setActiveLesson(0);
    } else {
      // Course completed
      navigate(`/certificate/${courseId}`);
    }
  };
  
  // Navigate to previous lesson
  const goToPrevLesson = () => {
    if (!course) return;
    
    if (activeLesson > 0) {
      // Previous lesson in same module
      setActiveLesson(activeLesson - 1);
    } else if (activeModule > 0) {
      // Last lesson in previous module
      setActiveModule(activeModule - 1);
      setActiveLesson(course.modules[activeModule - 1].lessons.length - 1);
    }
  };
  
  // Check if a lesson is completed
  const isLessonCompleted = (moduleIndex, lessonIndex) => {
    return progress.completedLessons?.includes(`${moduleIndex}-${lessonIndex}`) || false;
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
          <p className="mt-2 text-gray-600">The course you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/courses')} 
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }
  
  const currentModule = course.modules[activeModule];
  const currentLesson = currentModule.lessons[activeLesson];
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar darkMode={true} />
      
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block bg-gray-800 w-full lg:w-80 flex-shrink-0 overflow-y-auto`}>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">Course Content</h2>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4 mb-6">
              <div className="flex items-center">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-primary-500 h-2.5 rounded-full" 
                    style={{ width: `${progress.overallProgress || 0}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm font-medium text-white">{progress.overallProgress || 0}%</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="border border-gray-700 rounded-md overflow-hidden">
                  <div 
                    className={`p-3 flex justify-between items-center cursor-pointer ${moduleIndex === activeModule ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                    onClick={() => setActiveModule(moduleIndex === activeModule ? moduleIndex : moduleIndex)}
                  >
                    <h3 className="font-medium text-white">{module.title}</h3>
                    <span className="text-xs text-gray-400">{module.lessons.length} lessons</span>
                  </div>
                  
                  {moduleIndex === activeModule && (
                    <ul className="border-t border-gray-700">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const isActive = moduleIndex === activeModule && lessonIndex === activeLesson;
                        const isCompleted = isLessonCompleted(moduleIndex, lessonIndex);
                        
                        return (
                          <li key={lessonIndex}>
                            <button
                              className={`w-full text-left p-3 flex items-center space-x-3 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                              onClick={() => {
                                setActiveLesson(lessonIndex);
                              }}
                            >
                              <div className="flex-shrink-0">
                                {isCompleted ? (
                                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                ) : isActive ? (
                                  <PlayIcon className="h-5 w-5 text-primary-500" />
                                ) : (
                                  <div className="h-5 w-5 border-2 border-gray-600 rounded-full"></div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium truncate ${isActive ? 'text-white' : 'text-gray-300'}`}>
                                  {lesson.title}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {lesson.type} • {lesson.duration}
                                </p>
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Mobile Header */}
          <div className="lg:hidden bg-gray-800 p-4 flex items-center justify-between">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="text-white font-medium truncate">{currentLesson.title}</div>
            <div className="w-6"></div> {/* Empty div for flex spacing */}
          </div>
          
          {/* Content Area */}
          <div className="flex-1 bg-gray-900 p-4 lg:p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-2">{currentLesson.title}</h1>
                <p className="text-gray-400">{currentModule.title}</p>
              </div>
              
              {/* Lesson Content */}
              <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
                {currentLesson.type === 'video' ? (
                  <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer
                      url={currentLesson.content || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} // Fallback video if content is empty
                      width="100%"
                      height="100%"
                      controls
                      playing
                      onEnded={markLessonComplete}
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                      }}
                    />
                  </div>
                ) : currentLesson.type === 'quiz' ? (
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-white mb-4">Quiz: {currentLesson.title}</h2>
                    <p className="text-gray-300 mb-6">Complete this quiz to test your knowledge.</p>
                    <div className="space-y-6">
                      {/* Mock quiz questions */}
                      <div className="bg-gray-700 p-4 rounded-md">
                        <h3 className="text-white font-medium mb-3">Question 1: What is the main purpose of this course?</h3>
                        <div className="space-y-2">
                          {['To learn new skills', 'To get a certificate', 'To understand core concepts', 'All of the above'].map((option, i) => (
                            <div key={i} className="flex items-center">
                              <input
                                id={`q1-option-${i}`}
                                name="question1"
                                type="radio"
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-600 bg-gray-800"
                              />
                              <label htmlFor={`q1-option-${i}`} className="ml-3 text-gray-300">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-md">
                        <h3 className="text-white font-medium mb-3">Question 2: Match the following concepts with their definitions</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="bg-gray-800 p-2 rounded">Concept A</div>
                            <div className="bg-gray-800 p-2 rounded">Concept B</div>
                            <div className="bg-gray-800 p-2 rounded">Concept C</div>
                          </div>
                          <div className="space-y-2">
                            <select className="block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                              <option value="">Select a definition</option>
                              <option value="def1">Definition 1</option>
                              <option value="def2">Definition 2</option>
                              <option value="def3">Definition 3</option>
                            </select>
                            <select className="block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                              <option value="">Select a definition</option>
                              <option value="def1">Definition 1</option>
                              <option value="def2">Definition 2</option>
                              <option value="def3">Definition 3</option>
                            </select>
                            <select className="block w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                              <option value="">Select a definition</option>
                              <option value="def1">Definition 1</option>
                              <option value="def2">Definition 2</option>
                              <option value="def3">Definition 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={markLessonComplete}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-gray-800"
                      >
                        Submit Quiz
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="prose prose-invert max-w-none">
                      <h2>{currentLesson.title}</h2>
                      <p>{currentLesson.content || 'This lesson contains text content that will help you understand the concepts better.'}</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.</p>
                      <h3>Key Points</h3>
                      <ul>
                        <li>Point 1: Important concept explanation</li>
                        <li>Point 2: Another key idea to remember</li>
                        <li>Point 3: Practical application of the concept</li>
                      </ul>
                      <p>Continue reading and exploring the content to gain a deeper understanding of the subject matter.</p>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={markLessonComplete}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-gray-800"
                      >
                        Mark as Complete
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={goToPrevLesson}
                  disabled={activeModule === 0 && activeLesson === 0}
                  className={`inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md ${activeModule === 0 && activeLesson === 0 ? 'text-gray-500 cursor-not-allowed' : 'text-white hover:bg-gray-800'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Previous Lesson
                </button>
                
                <button
                  onClick={goToNextLesson}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-gray-800"
                >
                  {activeModule === course.modules.length - 1 && activeLesson === course.modules[activeModule].lessons.length - 1 ? (
                    <>
                      Complete Course
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Next Lesson
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePlayer;