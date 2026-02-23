    // Animation du titre de section
    gsap.from('#stagger-title', {
      scrollTrigger: {
        trigger: '#stagger-title',
        start: 'top 80%', // Déclenche quand le haut de l'élément atteint 80% de la viewport
        toggleActions: 'play none none reverse' // play, pause, resume, reverse
      },
      y: 100,
      opacity: 0,
      duration: 1
    });

    // Animation des cartes avec stagger (décalage)
    gsap.from('.card', {
      scrollTrigger: {
        trigger: '.cards-grid',
        start: 'top 70%'
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2, // Décalage de 0.2s entre chaque carte
      ease: 'power3.out'
    });

    // Animation au hover de chaque carte
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        gsap.to(this, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', function() {
        gsap.to(this, {
          y: 0,
          duration: 0.3
        });
      });
    });
