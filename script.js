/**
 * Portfolio Website - Main JavaScript File
 * Handles all interactive features: navigation, modals, forms, animations, carousels
 */

// ========================================
// Project Data Structure
// ========================================
// To add new projects, simply add a new object to this array
const projectsData = [
    {
        id: 1,
        title: "AROGYA MITRA",
        description: "An AI-powered health chatbot that provides instant, personalized guidance, symptom insights, and wellness support anytime, anywhere.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
        image: "arogya/a1.jpeg",
        images: [
            "arogya/a2.jpeg",
            "arogya/a3.jpeg",
            "arogya/a4.jpeg"
        ],
        features: [
            "Instant Symptom Analysis",
            "24/7 Availability",
           "Personalized Health Guidance",
           "Medication and wellness tip",
           "privacy and data security"

        ],
        challenges: [
    "Ensured accurate and reliable AI health responses",
    "Handled real-time user queries with minimal latency",
    "Maintained data privacy and secure conversation handling"
],

        liveDemo: "https://codewithahmed0309.github.io/AROGYA-MITRA/",
        githubLink: "https://github.com/CodewithAhmed0309/AROGYA-MITRA"
    },
    {
        id: 2,
        title: "HACKING SIMULATOR",
        description: "A realistic hacking simulator that lets users experience ethical hacking concepts, tools, and challenges in a safe virtual environment.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        image: "hack/h1.jpeg",
        images: [
            "hack/h4.jpeg",
            "hack/h2.jpeg"
        ],
        features: [
    "Interactive hacking missions and scenarios",
    "Virtual terminal with realistic commands",
    "Step-by-step learning mode for beginners",
    "Simulated networks and security systems",
    "Progress tracking and skill levels"
],
challenges: [
    "Designed realistic yet safe hacking simulations",
    "Balanced difficulty for beginners and advanced users",
    "Implemented secure sandboxed execution environment"
],

        liveDemo: "https://codewithahmed0309.github.io/hacking-simulator/",
        githubLink: "https://github.com/CodewithAhmed0309/hacking-simulator"
    },
    {
        id: 3,
        title: "JAVEED WORKS",
        description: "A professional portfolio website showcasing 20+ years of expert tiles and granite craftsmanship, offering high-quality residential and commercial installation services.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "javeed/j1.jpeg",
        images: [
           "javeed/j2.jpeg",
            "javeed/j3.jpeg"
        ],
        features: [
    "Professional tiles and granite service showcase",
    "Detailed service listings for residential and commercial projects",
    "High-quality project gallery by category",
    "Direct call and email contact integration",
    "Customer-focused layout highlighting experience and trust"
],
challenges: [
    "Designed a clean and professional layout for a local business",
    "Optimized images for fast loading without quality loss",
    "Ensured mobile responsiveness across all devices"
],

        liveDemo: "https://codewithahmed0309.github.io/JAVEED-WORKS/index.html#gallery",
        githubLink: "https://github.com/CodewithAhmed0309/hacking-simulator"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "jahash/jh1.jpeg",
        images: [
            "jahash/jh2.jpeg",
            "jahash/jh3.jpeg"
        ],
       features: [
    "Personal portfolio showcasing skills, projects, and experience",
    "Responsive design optimized for all devices",
    "Visual skill indicators and progress bars",
    "Downloadable resume and project navigation",
    "Integrated contact and professional links"
],
challenges: [
    "Designed a clean and professional personal branding layout",
    "Maintained performance while using animations and effects",
    "Ensured accessibility and responsiveness across screen sizes"
],

        liveDemo: "https://codewithahmed0309.github.io/my-portfolio/",
        githubLink: "https://github.com/CodewithAhmed0309/my-portfolio"
    },
    {
        id: 5,
        title: "NOTEVAULT",
        description: "A sleek digital notes library that lets users browse, preview, and access organized study materials through a clean, cinematic interface.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        image: "NOTES/n1.jpeg",
        images: [
            "NOTES/n2.jpeg",
            "NOTES/n3.png"
            
        ],
       features: [
    "Centralized library for academic and technical notes",
    "Search functionality to quickly find notes by subject",
    "Preview option before accessing full notes",
    "Clean, cinematic UI for focused reading",
    "Well-organized categories for easy navigation"
],
challenges: [
    "Designed a distraction-free and visually immersive interface",
    "Managed scalable notes data structure",
    "Optimized UI performance with smooth transitions"
],
liveDemo: "https://codewithahmed0309.github.io/notes/",
        githubLink: "https://github.com/CodewithAhmed0309/notes"

    },
    {
        id: 6,
        title: "Blog Platform",
        description: "A content management system for blogging with rich text editor, categories, tags, and comment system.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
        image: "https://via.placeholder.com/800x600/3498db/ffffff?text=Blog+Platform",
        images: [
            "https://via.placeholder.com/800x600/3498db/ffffff?text=Blog+Home",
            "https://via.placeholder.com/800x600/50c878/ffffff?text=Post+Editor"
        ],
        features: [
            "Rich text editor",
            "Category and tag system",
            "Comment threading",
            "SEO optimization",
            "Admin dashboard"
        ],
        challenges: [
            "Built custom rich text editor",
            "Implemented efficient content search",
            "Created secure admin authentication"
        ],
        liveDemo: "https://example.com/blog",
        githubLink: "https://github.com/username/blog"
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        content: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality work exceeded our expectations. Highly recommended!",
        author: "SHAIK JAVEED AHMED",
        role: "contractor",
        avatar: "jp.png"
    },
    {
        id: 2,
        content: "The website we received was not only beautiful but also highly functional and performant. The developer was responsive, professional, and delivered on time.",
        author: "VENKAT RAM",
        role: "Market Manager",
        avatar: "venk.jpg"
    },
    {
        id: 3,
        content: "Exceptional work! The developer transformed our vision into reality with a modern, user-friendly interface. Our users love the new design and functionality.",
        author: "Mohammed Suhail",
        role: "Product Manager",
        avatar: "suh.jpg"
    }
];

// ========================================
// DOM Elements
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const currentYear = document.getElementById('currentYear');
const testimonialTrack = document.getElementById('testimonialTrack');
const carouselIndicators = document.getElementById('carouselIndicators');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Initialize projects
    renderProjects();

    // Initialize testimonials
    renderTestimonials();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize skill bars animation
    initSkillBars();

    // Initialize lazy loading
    initLazyLoading();

    // Setup event listeners
    setupEventListeners();
});

// ========================================
// Navigation Functions
// ========================================
function setupEventListeners() {
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);

    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    // Close modal when clicking outside
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeLightbox();
        }
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Form validation on input
    const formInputs = contactForm?.querySelectorAll('input, textarea');
    formInputs?.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });

    // Lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Projects Functions
// ========================================
function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.transitionDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="#" class="project-link view-project" data-project-id="${project.id}">
                    <i class="fas fa-eye"></i> View Details
                </a>
                ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ''}
                ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fab fa-github"></i> GitHub
                </a>` : ''}
            </div>
        </div>
    `;

    // Add click event to view project button
    const viewBtn = card.querySelector('.view-project');
    viewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openProjectModal(project.id);
    });

    return card;
}

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-images">
            ${project.images.map(img => 
                `<img src="${img}" alt="${project.title}" class="modal-image" onclick="openLightbox('${img}')">`
            ).join('')}
        </div>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        
        <div class="modal-details">
            <h4>Technologies Used:</h4>
            <ul>
                ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
            </ul>

            <h4>Key Features:</h4>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>

            <h4>Implementation Highlights:</h4>
            <ul>
                ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
            </ul>
        </div>

        <div class="project-links" style="margin-top: 2rem;">
            ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> View Live Demo
            </a>` : ''}
            ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <i class="fab fa-github"></i> View on GitHub
            </a>` : ''}
        </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add click handlers for modal images
    modalBody.querySelectorAll('.modal-image').forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img.src);
        });
    });
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Make openLightbox globally accessible
window.openLightbox = function(src) {
    if (lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Testimonials Carousel
// ========================================
let currentTestimonial = 0;

function renderTestimonials() {
    if (!testimonialTrack || !carouselIndicators) return;

    testimonialTrack.innerHTML = '';
    carouselIndicators.innerHTML = '';

    testimonialsData.forEach((testimonial, index) => {
        // Create testimonial item
        const item = document.createElement('div');
        item.className = 'testimonial-item';
        item.innerHTML = `
            <p class="testimonial-content">"${testimonial.content}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial-avatar">
                <div>
                    <h4 class="testimonial-name">${testimonial.author}</h4>
                    <p class="testimonial-role">${testimonial.role}</p>
                </div>
            </div>
        `;
        testimonialTrack.appendChild(item);

        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => showTestimonial(index));
        carouselIndicators.appendChild(indicator);
    });

    // Carousel navigation
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => showTestimonial(currentTestimonial + 1));
    }

    // Auto-rotate testimonials (optional)
    // setInterval(() => showTestimonial(currentTestimonial + 1), 5000);
}

function showTestimonial(index) {
    const total = testimonialsData.length;
    
    if (index < 0) {
        currentTestimonial = total - 1;
    } else if (index >= total) {
        currentTestimonial = 0;
    } else {
        currentTestimonial = index;
    }

    if (testimonialTrack) {
        testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }

    // Update indicators
    const indicators = carouselIndicators?.querySelectorAll('.indicator');
    indicators?.forEach((ind, i) => {
        ind.classList.toggle('active', i === currentTestimonial);
    });
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));

    // Observe other elements
    const animateElements = document.querySelectorAll('.skill-item, .soft-skill-item, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
}

// ========================================
// Skill Bars Animation
// ========================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                entry.target.style.width = `${percent}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// ========================================
// Lazy Loading
// ========================================
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load if needed
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

// ========================================
// Form Validation
// ========================================
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}Error`);
    
    let isValid = true;
    let errorMessage = '';

    // Remove previous error class
    field.classList.remove('error');

    // Validation rules
    if (field.required && !value) {
        isValid = false;
        errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required.`;
    } else if (fieldName === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    } else if (fieldName === 'message' && value.length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters long.';
    }

    // Display error
    if (!isValid && errorElement) {
        errorElement.textContent = errorMessage;
        field.classList.add('error');
    } else if (errorElement) {
        errorElement.textContent = '';
    }

    return isValid;
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = document.getElementById(`${field.name}Error`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const formMessage = document.getElementById('formMessage');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    // Validate all fields
    let isFormValid = true;
    const fields = contactForm.querySelectorAll('input[required], textarea[required]');
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Please fix the errors above before submitting.';
        formMessage.style.display = 'block';
        return;
    }

    // Show loading state
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        formMessage.style.display = 'block';

        // Reset button
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);

        // In a real application, you would send the data to a server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(Object.fromEntries(formData))
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // })
        // .catch(error => {
        //     // Handle error
        // });
    }, 1500);
}

// ========================================
// Utility Functions
// ========================================
// Typing animation for hero tagline (optional)
function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const text = typingText.textContent;
    const phrases = ['Full Stack Web Developer', 'Frontend Specialist', 'UI/UX Enthusiast'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing animation after a delay
    setTimeout(type, 1000);
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', initTypingAnimation);

// Download resume handler (placeholder)
document.getElementById('downloadResume')?.addEventListener('click', (e) => {
    e.preventDefault();
    // In a real application, link to actual resume file
    alert('Resume download functionality would be implemented here. Replace with actual resume file link.');
});

