 // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Tab switching functionality
        const tabs = document.querySelectorAll('.tab');
        const gameCards = document.querySelectorAll('.game-card');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                // Filter games
                gameCards.forEach(card => {
                    const cardCategories = card.getAttribute('data-category');
                    if (category === 'populer' || cardCategories.includes(category)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeInUp 0.6s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            gameCards.forEach(card => {
                const title = card.querySelector('.game-title').textContent.toLowerCase();
                const developer = card.querySelector('.game-developer').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || developer.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

        // Game card click animation
        gameCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-8px) scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-8px) scale(1)';
                }, 150);
            });
        });

        // Smooth scroll for navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Add smooth scrolling logic here if needed
            });
        });

        // Initialize particles
        createParticles();

        // Add staggered animation delays
        gameCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });