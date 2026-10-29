/* =========================================================
   Data — แก้ไข/เพิ่มผลงานและทักษะได้ที่นี่
   ========================================================= */

const GH = 'https://github.com/ArthitDev/';

const PROJECTS = [
    {
        title: 'Smart Wound Care',
        badge: '★ โปรเจกต์เด่น',
        icon: 'fa-solid fa-kit-medical',
        desc: 'เว็บแอปให้คำแนะนำการดูแลแผลอัจฉริยะ อัปโหลดรูปเพื่อวิเคราะห์ภาพแผลด้วย AI มีระบบบทความ ข้อมูลแผล และหลังบ้านสำหรับผู้ดูแล',
        tags: ['Next.js', 'TypeScript', 'MUI', 'Express', 'TypeORM', 'MySQL', 'AI'],
        category: 'web',
        featured: true,
        repo: GH + 'SWC-Web-Application',
        live: 'https://smartwoundcare.site',
    },
    {
        title: 'Claude Code Telegram (TH)',
        icon: 'fa-brands fa-telegram',
        desc: 'ควบคุม Claude Code ผ่าน Telegram เขียนโค้ด รีวิว และ deploy ได้จากทุกที่ รองรับภาษาไทย',
        tags: ['Python', 'Docker', 'DDD', 'Telegram'],
        category: 'ai',
        repo: GH + 'claude-code-telegram-th',
    },
    {
        title: 'RAG System',
        icon: 'fa-solid fa-brain',
        desc: 'ระบบถาม-ตอบจากเอกสาร (Retrieval-Augmented Generation) อ่าน PDF แล้วค้นด้วย vector search',
        tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB'],
        category: 'ai',
        repo: GH + 'RAG-System',
    },
    {
        title: 'TLGM — Telegram Message Manager',
        icon: 'fa-solid fa-paper-plane',
        desc: 'ระบบจัดการและส่งต่อข้อความระหว่างกลุ่ม Telegram พร้อมแดชบอร์ดแยกฝั่งผู้ใช้และแอดมิน',
        tags: ['Next.js', 'Tailwind', 'React Query', 'Express', 'MySQL'],
        category: 'web',
        repo: GH + 'TLGM-Front-End',
    },
    {
        title: 'Gold Trading Tracker',
        icon: 'fa-solid fa-coins',
        desc: 'แอปบันทึกและวิเคราะห์การเทรดทองคำ มีกราฟสรุปผล และให้ Gemini AI ช่วยวิเคราะห์ความเสี่ยงและกลยุทธ์',
        tags: ['Next.js', 'Recharts', 'Gemini AI'],
        category: 'ai',
        repo: GH + 'gold-trading-todolist',
    },
    {
        title: 'ระบบบันทึกสลิปโอนเงิน',
        icon: 'fa-solid fa-receipt',
        desc: 'ถ่ายรูปหรืออัปโหลดสลิปแยกตามโต๊ะ อ่านข้อมูลอัตโนมัติด้วย OCR แล้วบันทึกลงฐานข้อมูล',
        tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'OCR'],
        category: 'web',
        repo: GH + 'pay-slip-sanae-bar-demo',
    },
    {
        title: 'ตารางเวร (Shift Manager)',
        icon: 'fa-regular fa-calendar-check',
        desc: 'ปฏิทินจัดการเวร คำนวณค่าเวร ติดตามเวรที่ทำแล้ว เปลี่ยนธีมได้ ทั้งหมดในไฟล์เดียว',
        tags: ['HTML', 'CSS', 'JavaScript'],
        category: 'web',
        repo: GH + 'shift-manager',
    },
    {
        title: 'LINE Food App',
        icon: 'fa-brands fa-line',
        desc: 'เว็บแอปเกี่ยวกับอาหารที่เปิดใช้งานได้ภายใน LINE ผ่าน LIFF',
        tags: ['Next.js', 'LINE LIFF', 'Tailwind'],
        category: 'web',
        repo: GH + 'line-app-food',
    },
    {
        title: 'Agent Skills',
        icon: 'fa-solid fa-robot',
        desc: 'ชุด Skill สำหรับ AI coding agent ติดตั้งได้ด้วย npx skills',
        tags: ['AI Agent', 'Automation'],
        category: 'ai',
        repo: GH + 'agent-skills',
    },
    {
        title: 'React Games Voting',
        icon: 'fa-solid fa-gamepad',
        desc: 'เว็บให้ผู้ใช้โหวตและให้คะแนนเกมที่ชอบ พร้อม API หลังบ้าน',
        tags: ['React', 'Chakra UI', 'Express', 'MySQL'],
        category: 'web',
        repo: GH + 'React-Games-App-Deploy',
        live: 'https://react-games-voting.vercel.app/',
    },
    {
        title: 'Laravel Flower',
        icon: 'fa-solid fa-seedling',
        desc: 'เว็บให้ความรู้เรื่องดอกไม้ 3 ฤดู มีระบบสมาชิกและ CRUD หลังบ้าน',
        tags: ['Laravel', 'PHP', 'Tailwind'],
        category: 'learning',
        repo: GH + 'Laravel-Flower-Project',
    },
    {
        title: 'โปรแกรมจัดการสต๊อกสินค้า',
        icon: 'fa-brands fa-java',
        desc: 'โปรแกรมเดสก์ท็อปจัดการลูกค้า พนักงาน แผนก และสินค้า ฝึก OOP ด้วย Java',
        tags: ['Java', 'MySQL', 'OOP'],
        category: 'learning',
        repo: GH + 'Java-Project-Company-Management',
    },
    {
        title: 'Restaurant System',
        icon: 'fa-solid fa-utensils',
        desc: 'ระบบร้านอาหาร จัดการออเดอร์ ลูกค้า พนักงาน และเมนู (งานกลุ่ม)',
        tags: ['C#', 'SQL Server'],
        category: 'learning',
        repo: GH + 'Basic-Restaurant-System',
    },
];

const CATEGORIES = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'web', label: 'Web App' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'learning', label: 'งานสมัยเรียน' },
];

const SKILLS = [
    {
        title: 'ภาษาโปรแกรม',
        icon: 'fa-solid fa-code',
        items: [
            ['TypeScript', 'fa-brands fa-js'], ['JavaScript', 'fa-brands fa-js'], ['Python', 'fa-brands fa-python'],
            ['C#', 'fa-solid fa-hashtag'], ['Java', 'fa-brands fa-java'], ['PHP', 'fa-brands fa-php'],
            ['SQL', 'fa-solid fa-database'], ['Shell Script', 'fa-solid fa-terminal'],
        ],
    },
    {
        title: 'Frontend',
        icon: 'fa-solid fa-layer-group',
        items: [
            ['React', 'fa-brands fa-react'], ['Next.js', 'fa-solid fa-n'], ['HTML', 'fa-brands fa-html5'],
            ['CSS', 'fa-brands fa-css3-alt'], ['Tailwind CSS', 'fa-solid fa-wind'], ['MUI', 'fa-solid fa-cubes'],
            ['Chakra UI', 'fa-solid fa-circle-half-stroke'],
        ],
    },
    {
        title: 'Backend & Database',
        icon: 'fa-solid fa-server',
        items: [
            ['Node.js', 'fa-brands fa-node-js'], ['Express', 'fa-solid fa-route'], ['FastAPI', 'fa-solid fa-bolt'],
            ['Laravel', 'fa-brands fa-laravel'], ['MySQL', 'fa-solid fa-database'], ['PostgreSQL', 'fa-solid fa-database'],
            ['REST API', 'fa-solid fa-plug'],
        ],
    },
    {
        title: 'AI & Tools',
        icon: 'fa-solid fa-wand-magic-sparkles',
        items: [
            ['LangChain', 'fa-solid fa-link'], ['Gemini API', 'fa-solid fa-star'], ['Claude Code', 'fa-solid fa-robot'],
            ['Docker', 'fa-brands fa-docker'], ['Git / GitHub', 'fa-brands fa-github'], ['Vercel', 'fa-solid fa-caret-up'],
        ],
    },
    {
        title: 'Creative',
        icon: 'fa-solid fa-pen-nib',
        items: [
            ['Photoshop', 'fa-solid fa-image'], ['Premiere Pro', 'fa-solid fa-film'], ['After Effects', 'fa-solid fa-wand-sparkles'],
            ['Microsoft Office', 'fa-regular fa-file-lines'],
        ],
    },
    {
        title: 'Soft Skills',
        icon: 'fa-solid fa-people-group',
        items: [
            ['ทำงานเป็นทีม', 'fa-solid fa-handshake'], ['อดทนต่อแรงกดดัน', 'fa-solid fa-shield-halved'],
            ['ความเป็นผู้นำ', 'fa-solid fa-flag'], ['เรียนรู้เร็ว', 'fa-solid fa-rocket'],
        ],
    },
];

const ROLES = ['Full-Stack Developer', 'Web Developer', 'AI Tinkerer', 'Next.js · Node · Python'];

/* =========================================================
   Helpers
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* =========================================================
   Render
   ========================================================= */

function renderSkills() {
    $('#skillsGrid').innerHTML = SKILLS.map((group) => `
        <article class="card reveal">
            <h3><i class="${group.icon}"></i> ${escapeHtml(group.title)}</h3>
            <div class="chips">
                ${group.items.map(([name, icon]) => `<span class="chip"><i class="${icon}"></i>${escapeHtml(name)}</span>`).join('')}
            </div>
        </article>`).join('');
}

function renderProjects() {
    $('#projectGrid').innerHTML = PROJECTS.map((p) => `
        <article class="card project reveal${p.featured ? ' is-featured' : ''}" data-category="${p.category}">
            <div class="project__top">
                <span class="project__icon"><i class="${p.icon}"></i></span>
                <div class="project__links">
                    ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" aria-label="เปิดเว็บ ${escapeHtml(p.title)}" title="เปิดเว็บ"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                    ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" aria-label="ดูโค้ด ${escapeHtml(p.title)}" title="ดูโค้ดบน GitHub"><i class="fa-brands fa-github"></i></a>` : ''}
                </div>
            </div>
            ${p.badge ? `<span class="project__badge">${escapeHtml(p.badge)}</span>` : ''}
            <h3>${escapeHtml(p.title)}</h3>
            <p>${escapeHtml(p.desc)}</p>
            <div class="tags">${p.tags.map((t) => `<span>${escapeHtml(t)}</span>`).join('')}</div>
        </article>`).join('');

    const filters = $('#filters');
    filters.innerHTML = CATEGORIES.map((c, i) => {
        const count = c.id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c.id).length;
        return `<button class="filter${i === 0 ? ' is-active' : ''}" data-filter="${c.id}" role="tab" aria-selected="${i === 0}">${c.label}<span class="count">${count}</span></button>`;
    }).join('');

    filters.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter');
        if (!btn) return;
        filters.querySelectorAll('.filter').forEach((b) => {
            b.classList.toggle('is-active', b === btn);
            b.setAttribute('aria-selected', b === btn);
        });
        const f = btn.dataset.filter;
        document.querySelectorAll('.project').forEach((card) => {
            const show = f === 'all' || card.dataset.category === f;
            card.classList.toggle('is-hidden', !show);
        });
    });
}

/* =========================================================
   Hero effects
   ========================================================= */

function typeRoles() {
    const el = $('#roleText');
    if (reduceMotion) return;
    let r = 0, i = ROLES[0].length, deleting = true;
    const tick = () => {
        const word = ROLES[r];
        el.textContent = word.slice(0, i);
        if (deleting) {
            i--;
            if (i < 0) { deleting = false; r = (r + 1) % ROLES.length; i = 0; }
        } else {
            i++;
            if (i > ROLES[r].length) { deleting = true; setTimeout(tick, 1800); return; }
        }
        setTimeout(tick, deleting ? 40 : 80);
    };
    setTimeout(tick, 2200);
}

function runTerminal() {
    const term = $('#terminal');
    const lines = [
        { cmd: 'whoami' },
        { out: '<span class="c">arthit-lungya</span>  <span class="m"># ทิต · Developer</span>' },
        { cmd: 'cat stack.json' },
        { out: '{\n  <span class="k">"frontend"</span>: ["Next.js", "React", "Tailwind"],\n  <span class="k">"backend"</span>:  ["Node", "Express", "FastAPI"],\n  <span class="k">"ai"</span>:       ["LangChain", "Gemini", "Claude"]\n}' },
        { cmd: 'ls ~/projects' },
        { out: '<span class="c">smart-wound-care/</span>  <span class="c">rag-system/</span>\n<span class="c">tlgm/</span>  <span class="c">gold-tracker/</span>  <span class="c">shift-manager/</span>' },
        { cmd: 'echo $MOTTO' },
        { out: '"ทุกย่างก้าว มีอุปสรรคเสมอ"' },
    ];
    const prompt = '<span class="p">➜</span> <span class="m">~</span> ';

    if (reduceMotion) {
        term.innerHTML = lines.map((l) => (l.cmd ? prompt + l.cmd : l.out)).join('\n') + '\n' + prompt + '<span class="cur"></span>';
        return;
    }

    let html = '';
    let li = 0;
    const next = () => {
        if (li >= lines.length) {
            term.innerHTML = html + prompt + '<span class="cur"></span>';
            return;
        }
        const line = lines[li++];
        if (line.out) {
            html += line.out + '\n';
            term.innerHTML = html + '<span class="cur"></span>';
            setTimeout(next, 450);
            return;
        }
        let c = 0;
        const typeCmd = () => {
            term.innerHTML = html + prompt + line.cmd.slice(0, c) + '<span class="cur"></span>';
            if (c++ < line.cmd.length) setTimeout(typeCmd, 55);
            else { html += prompt + line.cmd + '\n'; setTimeout(next, 300); }
        };
        typeCmd();
    };
    setTimeout(next, 500);
}

/* =========================================================
   Page behaviour
   ========================================================= */

function setupNav() {
    const nav = $('#nav');
    const links = $('#navLinks');
    const burger = $('#navBurger');

    const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const setOpen = (open) => {
        links.classList.toggle('is-open', open);
        nav.classList.toggle('menu-open', open);
        burger.setAttribute('aria-expanded', open);
        burger.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
    };
    burger.addEventListener('click', () => setOpen(!links.classList.contains('is-open')));
    links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

    // highlight the section in view
    const anchors = [...links.querySelectorAll('a')];
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            anchors.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
}

function setupReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
    }
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 70}ms`;
        io.observe(el);
    });
}

function fillDynamicText() {
    const birth = new Date(2000, 10, 21); // 21 พ.ย. 2543
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    if (now < new Date(now.getFullYear(), birth.getMonth(), birth.getDate())) age--;
    $('#age').textContent = age;
    $('#year').textContent = now.getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    fillDynamicText();
    setupNav();
    setupReveal();
    startHeroWhenReady();
});

// รอให้ landing intro จบก่อนค่อยเริ่มพิมพ์ terminal
function startHeroWhenReady() {
    const root = document.documentElement;
    const start = () => { runTerminal(); typeRoles(); };
    if (!root.classList.contains('show-landing')) return start();
    document.addEventListener('landing:done', start, { once: true });
    // กันค้าง: ถ้า landing.js โหลดไม่ขึ้น ให้เข้าเว็บเลย
    window.addEventListener('load', () => {
        if (window.__landingBooted) return;
        document.getElementById('landing')?.remove();
        root.classList.remove('show-landing', 'landing-lock');
        start();
    });
}
