/*!
* Pásztor Zsolt - Modern Portfólió Szkriptek
* Bootstrap 5 alapokon, Vanilla JS-sel
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVBAR SCROLL ANIMÁCIÓ ---
    // A navigációs sáv összemegy, ha lejjebb görgetünk
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Azonnali futtatás és figyelő hozzáadása
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // --- 2. BOOTSTRAP SCROLLSPY ---
    // A menüpontok aktív állapotának kezelése
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // --- 3. MOBIL MENÜ BEZÁRÁSA KATTINTÁS UTÁN ---
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // --- 4. SZOLGÁLTATÁSOK INTERAKCIÓ (JAVÍTOTT LOGIKA) ---
    // Megkeressük az összes szolgáltatás kártyát
    const serviceTriggers = document.querySelectorAll('.service-trigger');
    const serviceDetails = document.querySelectorAll('.service-details');

    // Alaphelyzet: minden részlet elrejtése (bár CSS-ben d-none van, biztosra megyünk)
    serviceDetails.forEach(el => el.classList.add('d-none'));

    serviceTriggers.forEach(card => {
        // Kattintás esemény
        card.addEventListener('click', (e) => {
            // Megakadályozzuk, hogy oldalugrás történjen, ha link lenne
            e.preventDefault();
            
            // Lekérjük, melyik ID-t kell megmutatni (pl. reszponzivweboldalid)
            const targetId = card.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Ha már látható ez a szekció, akkor elrejtjük (toggle funkció)
            if (targetSection && !targetSection.classList.contains('d-none')) {
                targetSection.classList.add('d-none');
                return; // Kilépünk
            }

            // Ha nem látható: Először elrejtünk minden mást
            serviceDetails.forEach(el => el.classList.add('d-none'));

            // Majd megjelenítjük a kiválasztottat
            if (targetSection) {
                targetSection.classList.remove('d-none');
                // Opcionális: Finom görgetés a megjelenő tartalomhoz
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        // Billentyűzet támogatás (Enter vagy Space lenyomásra is működjön)
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // --- 5. KAPCSOLAT MEGJELENÍTÉSE ---
    const contactBtn = document.getElementById('btn-contact-reveal');
    const contactDetails = document.getElementById('contact-details');

    if (contactBtn && contactDetails) {
        contactBtn.addEventListener('click', () => {
            contactDetails.classList.remove('d-none');
            contactBtn.classList.add('d-none'); // Gomb eltüntetése kattintás után
        });
    }

});