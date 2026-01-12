// Portfolio data and interactions for a clean, fast single-page site
(function () {
    const placeholderThumb = 'assets/thumbs/placeholder.svg';

    const portfolioItems = [
        // 3D graphics
        {
            id: '3d-1', title: 'ArchViz - Liminální prostor', category: '3D',
            description: 'Architektonická vizualizace liminálního prostoru.',
            Role: '3D graphics', Nástroje: ['Blender'], outcome: 'Improved hard-surface workflow.',
            folder: 'assets/3D/ARCHVIZ', extension: 'png', thumb: 'assets/3D/ARCHVIZ/1.png',
            links: {}
        },
        {
            id: '3d-2', title: 'Maskot - Plyšové auto', category: '3D',
            description: '3D model plyšového auta jako maskot.',
            Role: '3D graphics', Nástroje: ['Blender'], outcome: 'Balanced composition and light.',
            folder: 'assets/3D/CAR', files: ['car1.png', 'car2.png'], thumb: 'assets/3D/CAR/car1.png',
            links: {}
        },
        {
            id: '3d-3', title: 'Concept art - Gun', category: '3D',
            description: 'Model zbraně navržené na základě vlastního concept artu.',
            Role: '3D graphics', Nástroje: ['Blender'], outcome: 'Reusable material library.',
            folder: 'assets/3D/GUN', files: ['Untitled.png', 'Untitled2.png'], thumb: 'assets/3D/GUN/Untitled.png',
            links: {}
        },
        {
            id: '3d-4', title: 'Charakter pro videohru', category: '3D',
            description: 'Úprava a animace modelu nepřátelského NPC pro hru Pale Trial.',
            Role: '3D graphics', Nástroje: ['Blender'], outcome: '',
            folder: 'assets/3D/SPIDER', files: ['potvora.png', 'potvora2.png'], thumb: 'assets/3D/SPIDER/potvora.png',
            links: {}
        },

        // Posters / graphic design
        {
            id: 'poster-1', title: 'Poster: Kvartet Plamenomet + BackStep', category: 'Posters',
            description: 'Poster design pro koncert Kvartet Plamenomet a BackStep.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator','Adobe Photoshop','Blender'], outcome: 'Eye-catching poster design.',
            images: ['assets/POSTERS/kvartetbackstep.jpg'], thumb: 'assets/POSTERS/kvartetbackstep.jpg', links: {}
        },
        {
            id: 'poster-2', title: 'Poster: Kvartet Plamenomet + Shizzle Orchestra', category: 'Posters',
            description: 'Poster design pro koncert Kvartet Plamenomet a Shizzle Orchestra.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator'], outcome: 'Eye-catching poster design.',
            images: ['assets/POSTERS/kvartetshizzle.jpg'], thumb: 'assets/POSTERS/kvartetshizzle.jpg', links: {}
        },
        {
            id: 'poster-3', title: 'Poster: Death Grips Berlin', category: 'Posters',
            description: 'Poster design pro koncert Death Grips v Berlíně.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator'], outcome: 'Energetický plakát s výraznou typografií.',
            images: ['assets/POSTERS/deathgrips.jpg'], thumb: 'assets/POSTERS/deathgrips.jpg', links: {}
        },

        // Campaigns (case studies)
        {
            id: 'camp-ecomail', title: 'Ecomail Campaign', category: 'Campaigns', caseStudy: true, year: '2024',
            description: 'Marketingové vizuály zaměřené na srozumitelnost a přehlednost.',
            Role: 'Grafik', Nástroje: ['Adobe Photoshop','Adobe Illustrator'], outcome: 'Consistent visual set increasing engagement.',
            folder: 'assets/ECOMAIL', pattern: 'EcomailPrezentace2_{i}', extension: 'jpg', thumb: 'assets/ECOMAIL/EcomailPrezentace2_1.jpg',
            links: {}
        },
        {
            id: 'camp-fis', title: 'VŠE Green FIS Campaign', category: 'Campaigns', caseStudy: true, year: '2023',
            description: 'University faculty campaign emphasizing information architecture.',
            Role: 'Grafik', Nástroje: ['Adobe InDesign','Adobe Illustrator'], outcome: 'Unified look across materials.',
            folder: 'assets/CSR', pattern: 'CSR-prez-nahled_{i}', extension: 'jpg', thumb: 'assets/CSR/CSR-prez-nahled_1.jpg',
            links: {}
        },
        {
            id: 'camp-pps', title: 'PPS (Pražské popelářské služby) – Visual Identity', category: 'Campaigns', caseStudy: true, year: '2022',
            description: 'Fictional brand with complete identity system: logo, color, typography.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator','Adobe InDesign'], outcome: 'Coherent brand guide and assets.',
            folder: 'assets/PPS', files: [
                'banner1.png','banner2.png','banner3.png',
                'mockup1.png','mockup2.png','mockup3.png','mockup4.png','mockup5.png',
                'case_study.jpg'
            ],
            thumb: 'assets/PPS/logo.jpg', links: {}
        },
        {
            id: 'camp-jezevec', title: 'Vizuál filmu pro Donio - Jezevec', category: 'Campaigns', caseStudy: true, year: '2021',
            description: 'Vizuál filmu v souladu s jeho tónem a poselstvím.',
            Role: 'Grafik', Nástroje: ['Adobe Illustrator','Adobe Photoshop'], outcome: 'Consistent visuals for outreach.',
            folder: 'assets/JEZEVEC', extension: 'png', thumb: 'assets/JEZEVEC/1.png',
            links: {}
        },


        // Video & Game (work cards)
        {
            id: 'vid-cowboy', title: 'Cowboy Stuff - Animace', category: 'Video&Game',
            description: 'Krátká animace Cowboy Stuff.',
            Role: 'animation', Nástroje: ['After Effects','DaVinci Resolve'], outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=ZYn0Ihbhkpk',
            thumb: 'https://img.youtube.com/vi/ZYn0Ihbhkpk/hqdefault.jpg',
            images: [], links: {}
        },
        {
            id: 'vid-mezi', title: 'Mezi Zdmi - Dokument', category: 'Video&Game',
            description: 'Dokumentární film Mezi Zdmi.',
            Role: 'Režie', Nástroje: ['DaVinci Resolve','Premiere Pro'], outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=nDyv7YVN5Lw',
            thumb: 'https://img.youtube.com/vi/nDyv7YVN5Lw/hqdefault.jpg',
            images: [], links: {}
        },
        {
            id: 'vid-synteza', title: 'Syntéza - Reportáž', category: 'Video&Game',
            description: 'Reportáž Syntéza.',
            Role: 'Režie', Nástroje: ['DaVinci Resolve','Premiere Pro'], outcome: '',
            videoUrl: 'https://www.youtube.com/watch?v=F6IqYw3F4_g',
            thumb: 'https://img.youtube.com/vi/F6IqYw3F4_g/hqdefault.jpg',
            images: [], links: {}
        },
        {
            id: 'game-pale', title: 'Pale Trial - Videohra', category: 'Video&Game',
            description: 'Videohra The Pale Trial – příspěvek k vývoji.',
            Role: 'Vývojář, Animátor', Nástroje: ['Godot','Blender'], outcome: 'Cleaner UI and asset pipeline.',
            images: ['assets/PALETRIAL/paletrial.jpg'], thumb: 'assets/PALETRIAL/paletrial.jpg', 
            links: { 'Hrát na itch.io': 'https://aristrela.itch.io/the-pale-trial' }
        }
    ];

    const externalLinks = [
        { id: 'link-doc', title: 'Documentary (directed by me)', href: '#', description: 'Long-form storytelling project.' },
        { id: 'link-report', title: 'Reportage (directed by me)', href: '#', description: 'On-location coverage.' },
        { id: 'link-anim', title: 'Animation (created by me)', href: '#', description: 'Motion study and experiments.' },
        { id: 'link-game', title: 'Videogame (I contributed)', href: '#', description: 'Collaborative dev experience.' },
    ];

    // Smooth scroll for anchor links
    document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Theme (no toggle in UI; respect stored preference and allow manual change via devtools)
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) root.setAttribute('data-theme', savedTheme);

    // Rendering helpers
    const workGrid = document.getElementById('work-grid');
    let currentFilter = 'All';

    function el(tag, attrs = {}, children = []) {
        const node = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => {
            if (k === 'class') node.className = v;
            else if (k === 'dataset') Object.entries(v).forEach(([dk, dv]) => node.dataset[dk] = dv);
            else if (k in node) node[k] = v; else node.setAttribute(k, v);
        });
        children.forEach(ch => node.append(ch));
        return node;
    }

    function img(src, alt) {
        const i = el('img', { alt: alt || '', loading: 'lazy' });
        i.src = src || placeholderThumb;
        i.classList.add('skeleton');
        i.addEventListener('load', () => i.classList.remove('skeleton'));
        return i;
    }

    function createCard(item) {
        const card = el('article', { class: 'card', tabindex: 0, role: 'group', 'aria-label': item.title });
        const thumbSrc = item.thumb
            || (item.images && item.images[0])
            || (item.folder ? `${item.folder}/${item.pattern ? item.pattern.replace('{i}', 1) : 1}.${item.extension || 'png'}` : placeholderThumb);
        const thumb = el('div', { class: 'thumb' }, [img(thumbSrc, item.title)]);
        const body = el('div', { class: 'body' });
        body.append(el('div', { class: 'title' }, [document.createTextNode(item.title)]));
        body.append(el('div', { class: 'meta' }, [document.createTextNode(item.category)]));
        const actions = el('div', { class: 'actions' });
        if (item.links && item.links.website) {
            const extBtn = el('a', { class: 'btn btn-outline', href: item.links.website, target: '_blank', rel: 'noopener' }, [document.createTextNode('Visit')]);
            actions.append(extBtn);
            body.append(actions);
        }
        card.append(thumb, body);
        card.addEventListener('click', () => openModal(item));
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(item); });
        return card;
    }

    function renderWork() {
        const items = portfolioItems.filter(i => currentFilter === 'All' ? true : i.category === currentFilter);
        workGrid.innerHTML = '';
        items.forEach(item => workGrid.append(createCard(item)));
    }

    // Projects section removed

    // Photo section removed

    // Links section removed

    // Filters
    document.querySelectorAll('.filters .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filters .chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-selected', 'false'); });
            chip.classList.add('active');
            chip.setAttribute('aria-selected', 'true');
            currentFilter = chip.dataset.filter;
            renderWork();
        });
    });

    // Modal logic
    const modal = document.getElementById('modal');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalRole = modal.querySelector('.modal-role');
    const modalTools = modal.querySelector('.modal-tools');
    const modalLinks = modal.querySelector('.modal-links');
    const modalGallery = modal.querySelector('.modal-gallery');
    let lastFocus = null;

    function openModal(item) {
        lastFocus = document.activeElement;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.description;
        modalRole.textContent = item.Role || item.role || '';
        modalTools.textContent = (item.Nástroje || item.tools || []).join(', ');
        modalLinks.innerHTML = '';
        if (item.links) {
            Object.entries(item.links).forEach(([key, href]) => {
                const a = el('a', { class: 'btn btn-outline', href, target: '_blank', rel: 'noopener' }, [document.createTextNode(key)]);
                modalLinks.append(a);
            });
        }
        modalGallery.innerHTML = '';

        if (item.videoUrl) {
            // Embed YouTube player and also offer an external open link
            const playLink = el('a', { class: 'btn btn-outline', href: item.videoUrl, target: '_blank', rel: 'noopener' }, [document.createTextNode('Přehrát na YouTube')]);
            modalLinks.append(playLink);

            let embed = item.videoUrl;
            embed = embed.replace('watch?v=', 'embed/');
            embed = embed.replace('youtu.be/', 'www.youtube.com/embed/');

            const iframe = document.createElement('iframe');
            iframe.src = embed;
            iframe.title = item.title;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            modalGallery.append(iframe);
        }

        if (item.folder) {
            const filenames = item.files && item.files.length
                ? item.files
                : null;
            if (filenames) {
                filenames.forEach(name => {
                    const src = `${item.folder}/${name}`;
                    const imageEl = img(src, item.title);
                    imageEl.loading = 'eager';
                    modalGallery.append(imageEl);
                    imageEl.addEventListener('error', () => imageEl.remove());
                });
            } else {
                const maxCount = 30;
                for (let i = 1; i <= maxCount; i++) {
                    const filename = item.pattern ? item.pattern.replace('{i}', i) : i;
                    const src = `${item.folder}/${filename}.${item.extension || 'png'}`;
                    const imageEl = img(src, item.title);
                    imageEl.loading = 'eager';
                    modalGallery.append(imageEl);
                    imageEl.addEventListener('error', () => imageEl.remove());
                }
            }
        } else if (!item.videoUrl) {
            (item.images || [placeholderThumb]).forEach(src => {
                const imageEl = img(src, item.title);
                imageEl.loading = 'eager';
                modalGallery.append(imageEl);
            });
        }
        modal.setAttribute('aria-hidden', 'false');
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.focus();
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        if (lastFocus) lastFocus.focus();
    }

    modal.addEventListener('click', (e) => { if (e.target.matches('[data-close]')) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal(); });

    // Focus trap inside modal
    modal.addEventListener('keydown', (e) => {
        if (modal.getAttribute('aria-hidden') === 'true') return;
        if (e.key !== 'Tab') return;
        const focusables = modal.querySelectorAll('a, button, input, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0]; const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    // Contact form: open mailto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const d = new FormData(form);
        const name = encodeURIComponent(d.get('name'));
        const email = encodeURIComponent(d.get('email'));
        const message = encodeURIComponent(d.get('message'));
        const subject = `Portfolio Contact from ${name}`;
        const body = `Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
    });

    // Init
    renderWork();
})();
