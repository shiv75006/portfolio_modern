import { reactLogo,
    nextLogo,
    mongodb,
    mysql,
    javascript,
    c,
    cpp,
    java,
    python,
    html,
    css,
    node,
    flashnova,
    devops,
    novamodels,
    genai1,
    genai2,
    genai3
} from '../assets'

    import {
        insta,
        linkedin,
        github
    } from '../assets/icons'

  export  const navLinks = [
        {href:'#home', label:'Home'},
        {href:'#about', label:'About'},
        {href:'#projects', label:'Projects'},
        {href:'#tech-Stack', label:'Tech-Stack'},
        {href:'#experience', label:'Experience'},
        {href:'#extracurriculars', label:'Extracurriculars'},
        {href:'#contacts', label:'Contact'}
    ]

export const heroContent = [
    {
       bio:"I am a multi-talented graphic designer, web developer, and a dedicated student at Graphic Era Deemed to be University, Dehradun.",
       firstName:"Shivyanshu",
       lastName:"Saini",
       profile:"Web Tecgnologies/Machine Learning/Cloud Computing"
    }
]

export const projectsList = [
    {
        key:"5",
        name:"Sereinly – AI-Powered Travel Itinerary Planner",
        techStack:" React, Appwrite, Tailwind CSS, Stripe, Syncfusion, Gemini API",
        description:"Developed a web app that generates personalized travel itineraries using AI. Implemented user authentication, trip booking, and real-time itinerary creation with Gemini API. Showcased skills in full-stack development, API integration, and AI-enhanced UX.",
        href:"https://travel-dashboard-liard.vercel.app",
        linkName:"Sereinly – AI"
    },
    {
        key:"1",
        name:"CarHUB : Next.js Car Showcase Website",
        techStack:"Next.js/Tailwind CSS",
        description:"Developed a car renting website using Next.js, focusing on creating a modern and responsive design.Ensured a visually appealing and user-friendly interface. This project highlights skills in Next.js and front-end development, with an emphasis on performance and usability.",
        href:"https://next-js-car-renting-application-cmhz.vercel.app/",
        linkName:"CarHUB "

    },
    {
        key:"2",
        name:"Sushi-Based E-Commerce Website | UI Implementation",
        techStack:"HTML, CSS, JavaScript, AOS",
        description:"Designed and implemented the user interface for a sushi-themed e-commerce website. The website features multiple sections, including a Navbar, Hero Section, About-us section, Popular Section, Trending Section, Subscribe Section, and Footer.",
        href:"https://sushiman-2026.netlify.app/",
        linkName:"Sushiman"
    },
    {
        key:"3",
        name:"Nike Front-End Prototype | UI Implementation ",
        techStack:"React.js, Tailwind CSS",
        description:"Developed a front-end prototype for Nike using React.js and Tailwind CSS. The website features bestseller shoes, consumer reviews, and a contact us section. Integrated dynamic components to enhance user experience, creating a visually appealing and user-friendly interface.",
        href:"https://nike-web-23.netlify.app/",
        linkName:"Nike Front-End Prototype"
    },
    {
        key:"6",
        name:"Plant Disease Prediction System",
        techStack:"Python, TensorFlow/Keras, OpenCV, NumPy",
        description:"Spearheaded the creation and deployment of a cutting-edge convolutional neural network (CNN) model to accurately detect plant diseases from leaf images. Achieved a remarkable accuracy rate of 99.96% through rigorous training and testing on a comprehensive dataset containing 32 classes of plants.",
        href:"https://github.com/shiv75006/Plant-Disease-Prediction-System",
        linkName:"Plant Disease Prediction System"
    },
    {
        key:"4",
        name:"Credit Card Fraud Detection",
        techStack:"Python, scikit-learn, pandas, NumPy",
        description:"Built a fraud detection system using Logistic Regression, Random Forest, and Bernoulli Naive Bayes (BNB) models, achieving 91.2%, 98.0%, and 89.4% accuracy respectively. Analyzed and compared the performance of these models to identify the most effective fraud detection strategy.",
        href:"https://github.com/shiv75006/CreditCard_Fraud_detection",
        linkName:"Credit Card Fraud Detection"
    },

   
]

export const techStack = [
    {
        key : '1',
        name: 'React.js',
        ImgUrl : reactLogo
    },
    {
        key : '2',
        name: 'Next.js',
        ImgUrl : nextLogo
    },
    {
        key : '3',
        name: 'Mongodb',
        ImgUrl : mongodb
    },
    {
        key : '10',
        name: 'Node.js',
        ImgUrl : node
    },
    {
        key : '4',
        name: 'MySql',
        ImgUrl : mysql
    },
    {
        key : '5',
        name: 'JavaScript',
        ImgUrl : javascript
    },
    {
        key : '6',
        name: 'HTML',
        ImgUrl : html
    },
    {
        key : '7',
        name: 'CSS',
        ImgUrl : css
    },
    {
        key : '8',
        name: 'Java',
        ImgUrl : java
    },
    {
        key : '9',
        name: 'Python',
        ImgUrl : python
    },
   
    {
        key : '11',
        name: 'C',
        ImgUrl : c
    },
    {
        key : '12',
        name: 'C++',
        ImgUrl : cpp
    }
]

export const socials = [
    {
        key:'1',
        name:'Instagram',
        ScmUrl:'https://www.instagram.com/shivyanshu_saini_suryavanshi/',
        ImgUrl:insta
    },
    {
        key:'2',
        name:'Linkedin',
        ScmUrl:'https://www.linkedin.com/in/shivyanshu-saini/',
        ImgUrl:linkedin
    },
    {
        key:'3',
        name:'Github',
        ScmUrl:'https://github.com/shiv75006',
        ImgUrl:github
    },
]

export const extracurriculars = [
    {
        key:'1',
        title:'Graph-e-thon | 72 Hours National Level Hackathon',
        position:'Core Committee Member',
        description:'Successfully organized and coordinated Graph-e-thon, a 72-hour national level hackathon, with 1800+ reg- istrations and facilitated workshops and mentorships to foster innovation.'
    },
    {
        key:'2',
        title:'GEU ACM Student Chapter',
        position:'Chairperson',
        description:'Implemented innovative strategies to foster a vibrant tech community, organizing workshops that saw a remarkable 95% surge in membership engagement, facilitated skill development programs and empowered members to explore their passions.'
    },
    {
        key:'3',
        title:'TEDX GraphicEraUniversity Women ',
        position:'Graphic Design Team Lead',
        description:'Mentored a team of 10 designers, nurturing their talents and fostering collaboration. Through thoughtful designs and effective communication, we amplified event visibility, witnessing a significant 90% increase in online engagement.'
    },
]

export const experience = [
    {
        key: '1',
        company: 'HashedIn by Deloitte',
        position: 'Trainee Engineer',
        duration: 'Jul 2025 – Sep 2025',
        location: 'Bangalore, India',
        description: 'Worked on backend development using Java Spring Boot for enterprise-grade applications. Developed dynamic frontends with AngularJS to enhance user experience. Implemented real-time data pipelines using Apache Kafka and Databricks. Worked with Oracle Data Integrator (ODI) for ETL processes and data integration workflows. Collaborated with cross-functional teams in agile sprints, contributing to design and implementation. Integrated REST APIs with frontend and backend services ensuring secure data transfer. Optimized SQL queries and stored procedures to improve system performance. Contributed to CI/CD pipelines with Jenkins and GitHub Actions for smooth deployments. Participated in code reviews, improving code quality and following best practices. Assisted in migrating legacy modules to microservices architecture. Documented technical processes and created knowledge-sharing guides for new team members. Analyzed and debugged production issues, reducing bug resolution time by 20%. Collaborated with senior engineers to implement scalable solutions for high-volume data processing.',
        technologies: ['Java Spring Boot', 'AngularJS', 'Apache Kafka', 'Databricks', 'Oracle Data Integrator (ODI)', 'SQL', 'Jenkins', 'GitHub Actions', 'Docker', 'Microservices Architecture'],
        achievements: [
            'Improved ETL pipeline efficiency by 15% through ODI workflow optimization',
            'Reduced API response latency by 25% after optimizing backend services',
            'Successfully contributed to a client project demo that secured a new engagement for the company'
        ]
    },
    {
        key: '2',
        company: 'Association for Advancement in Combinatorial Sciences',
        position: 'React Developer Intern',
        duration: 'Jul 2024 – Aug 2024',
        location: 'Remote',
        description: 'Built and optimized frontend components using React.js. Integrated REST APIs for dynamic content rendering. Improved website performance by optimizing state management and reusability of components. Collaborated with senior developers to implement UI/UX enhancements. Wrote clean, reusable, and maintainable code following best practices. Tested and debugged frontend modules to ensure smooth functionality. Worked in an agile environment, contributing to sprint planning and task execution.',
        technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Redux', 'REST APIs', 'Git'],
        achievements: [
            'Successfully built reusable components that reduced future development time by 20%',
            'Enhanced page load speed and responsiveness, improving user experience',
            'Recognized by mentors for delivering tasks ahead of deadlines with high code quality'
        ]
    }
]

export const certificates = [
    {
        id : '1',
        link : novamodels
    },
    {
        id : '2',
        link : devops
    },
    {
        id : '3',
        link : flashnova
    },
    {
        id : '4',
        link : genai2
    },
    {
        id : '5',
        link : genai1
    },
    {
        id : '6',
        link : genai3
    }
    
]