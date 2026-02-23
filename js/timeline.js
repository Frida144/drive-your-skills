   
        // Gestion du scroll et de la progression
        const timelineProgress = document.getElementById('timelineProgress');
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineDots = document.querySelectorAll('.timeline-dot');
        const timelineContainer = document.querySelector('.timeline-container');

        function updateTimeline() {
            const containerRect = timelineContainer.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            const windowHeight = window.innerHeight;

            // Calculer la progression (0 à 100%)
            let scrollProgress = 0;
            if (containerTop < windowHeight / 2) {
                const scrolled = (windowHeight / 2) - containerTop;
                scrollProgress = (scrolled / containerHeight) * 100;
                scrollProgress = Math.max(0, Math.min(100, scrollProgress));
            }

            // Mettre à jour la ligne de progression
            timelineProgress.style.height = scrollProgress + '%';

            // Activer les items et les dots en fonction du scroll
            timelineItems.forEach((item, index) => {
                const itemRect = item.getBoundingClientRect();
                const itemMiddle = itemRect.top + (itemRect.height / 2);
                
                // Rendre visible l'item
                if (itemRect.top < windowHeight * 0.8) {
                    item.classList.add('visible');
                }

                // Activer le dot
                if (itemMiddle < windowHeight / 2) {
                    timelineDots[index].classList.add('active');
                } else {
                    timelineDots[index].classList.remove('active');
                }
            });
        }

        // Écouter le scroll
        window.addEventListener('scroll', updateTimeline);
        window.addEventListener('resize', updateTimeline);

        // Initialiser au chargement
        updateTimeline();

        // Animation d'entrée progressive
        timelineItems.forEach((item, index) => {
            item.style.transitionDelay = (index * 0.2) + 's';
        });
   