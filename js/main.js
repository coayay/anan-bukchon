/* ====================================================
   북촌별서 안안 — Main JS
   Subtle editorial interactions
   ==================================================== */

(function () {
    'use strict';

    /* ---------- Header scroll state ---------- */
    const header = document.getElementById('siteHeader');
    const floatingCta = document.getElementById('floatingCta');
    const hero = document.getElementById('home');

    const handleScroll = () => {
        const y = window.scrollY;

        // Header state
        if (y > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Floating CTA — show after scrolling past hero (mobile only, via CSS)
        if (floatingCta && hero) {
            const heroBottom = hero.offsetHeight;
            if (y > heroBottom * 0.8) {
                floatingCta.classList.add('visible');
            } else {
                floatingCta.classList.remove('visible');
            }
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    /* ---------- Mobile menu ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---------- Smooth scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.length < 2) return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerH = parseInt(
                    getComputedStyle(document.documentElement).getPropertyValue('--header-h')
                ) || 76;
                const offset = target.getBoundingClientRect().top + window.scrollY - headerH + 1;

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ---------- Reveal on scroll ---------- */
    const revealSelectors = [
        '.story-chapter',
        '.story-headline',
        '.story-lead',
        '.pillar',
        '.story-closing',
        '.scenes-headline',
        '.scene-spread',
        '.scene-split',
        '.a-day-headline',
        '.day-entry',
        '.space-head',
        '.space-stats',
        '.space-info',
        '.gallery-headline',
        '.gallery-sub',
        '.g-figure',
        '.g-row',
        '.reserve-content > *',
        '.inquiry-title',
        '.inquiry-channels',
        '.footer-inner > *'
    ];

    const revealTargets = document.querySelectorAll(revealSelectors.join(','));
    revealTargets.forEach((el) => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;

                        // Stagger for siblings in grids / rows
                        const parent = el.parentElement;
                        const siblings = parent
                            ? Array.from(parent.children).filter((c) => c.classList.contains('reveal'))
                            : [];
                        const idx = siblings.indexOf(el);
                        const delay = Math.min(Math.max(idx, 0) * 90, 360);
                        el.style.transitionDelay = delay + 'ms';

                        el.classList.add('visible');
                        io.unobserve(el);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0.08
            }
        );

        revealTargets.forEach((el) => io.observe(el));
    } else {
        revealTargets.forEach((el) => el.classList.add('visible'));
    }

    /* ---------- Airbnb link placeholder ----------
       Replace AIRBNB_URL with actual listing URL at launch.
    ---------------------------------------------------- */
    const AIRBNB_URL = ''; // e.g. 'https://www.airbnb.com/rooms/XXXXXXX'

    const airbnbTargets = [
        document.getElementById('airbnbLink'),
        document.getElementById('navCta'),
        document.getElementById('floatingCta')
    ].filter(Boolean);

    airbnbTargets.forEach((el) => {
        if (AIRBNB_URL) {
            if (el.id === 'airbnbLink') {
                el.href = AIRBNB_URL;
            }
        } else {
            // Intercept only the direct booking link; nav/floating still scroll to #reserve
            if (el.id === 'airbnbLink') {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    alert(
                        '에어비앤비 리스팅 URL이 아직 연결되지 않았습니다.\n' +
                        'Airbnb listing URL will be connected at launch.\n\n' +
                        '※ js/main.js 의 AIRBNB_URL 변수에 실제 URL을 입력해 주세요.'
                    );
                });
            }
        }
    });

    /* ---------- Parallax-lite on hero image (very subtle) ---------- */
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let rafId = null;
        const onScrollParallax = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const y = window.scrollY;
                if (y < window.innerHeight) {
                    const translate = y * 0.15;
                    heroImg.style.transform = `translate3d(0, ${translate}px, 0) scale(1.02)`;
                }
                rafId = null;
            });
        };
        // Only apply after hero animation settles
        setTimeout(() => {
            window.addEventListener('scroll', onScrollParallax, { passive: true });
        }, 2000);
    }

    /* ---------- Reduced motion ---------- */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    }
})();
