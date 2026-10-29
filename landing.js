/* =========================================================
   Landing intro — แสดงครั้งแรกของแต่ละ session
   ข้ามได้ด้วยปุ่ม Skip / Enter / Esc
   ========================================================= */

(() => {
    const root = document.documentElement;
    if (!root.classList.contains('show-landing')) return;
    window.__landingBooted = true;

    const SEEN_KEY = 'al-intro-seen';
    const landing = document.getElementById('landing');
    const canvas = document.getElementById('landingCanvas');
    const ctx = canvas.getContext('2d');
    const counterEl = document.getElementById('landingCount');
    const barEl = document.getElementById('landingBar');
    const enterBtn = document.getElementById('landingEnter');
    const skipBtn = document.getElementById('landingSkip');
    const clockEl = document.getElementById('landingClock');
    const cursor = document.getElementById('landingCursor');
    const scrambleEls = landing.querySelectorAll('[data-scramble]');

    const COLORS = { text: '#f0ede8', accent: '#f57f18', muted: '#5c5a55' };
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    let W = 0, H = 0, DPR = 1;
    let particles = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let running = true;
    let exploding = false;
    let ready = false;
    let leaving = false;

    /* ---------- helpers ---------- */
    const rand = (a, b) => a + Math.random() * (b - a);
    const markSeen = () => { try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) { /* storage blocked */ } };

    /* ---------- particle text ---------- */
    function buildTargets() {
        DPR = Math.min(window.devicePixelRatio || 1, 2);
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * DPR;
        canvas.height = H * DPR;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

        const lines = W < 760 ? ['ARTHIT', 'LUNGYA'] : ['ARTHIT LUNGYA'];
        const off = document.createElement('canvas');
        off.width = W;
        off.height = H;
        const o = off.getContext('2d');

        // fit text to ~88% width and ~30% height
        let size = 200;
        o.font = `800 ${size}px Archivo, sans-serif`;
        const widest = Math.max(...lines.map((l) => o.measureText(l).width));
        size = Math.min(size * (W * 0.88) / widest, H * (lines.length > 1 ? 0.17 : 0.24));
        o.font = `800 ${size}px Archivo, sans-serif`;
        o.textAlign = 'center';
        o.textBaseline = 'middle';
        o.fillStyle = '#fff';
        const lineH = size * 0.95;
        const centerY = H * 0.46;
        lines.forEach((l, i) => o.fillText(l, W / 2, centerY + (i - (lines.length - 1) / 2) * lineH));

        const gap = Math.max(3, Math.round(size / 26));
        const data = o.getImageData(0, 0, W, H).data;
        const targets = [];
        for (let y = 0; y < H; y += gap) {
            for (let x = 0; x < W; x += gap) {
                if (data[(y * W + x) * 4 + 3] > 140) targets.push([x, y]);
            }
        }

        // reuse existing particles so a resize morphs instead of resetting
        const next = [];
        for (let i = 0; i < targets.length; i++) {
            const p = particles[i] || {
                x: rand(0, W), y: rand(0, H),
                vx: 0, vy: 0,
                delay: rand(0, 45),
            };
            p.tx = targets[i][0];
            p.ty = targets[i][1];
            p.size = gap * 0.62;
            p.color = Math.random() < 0.07 ? COLORS.accent : COLORS.text;
            next.push(p);
        }
        particles = next;
    }

    function tick() {
        if (!running) return;
        ctx.clearRect(0, 0, W, H);
        const R = Math.min(W, H) * 0.13;

        for (const p of particles) {
            if (exploding) {
                p.vx *= 1.04;
                p.vy *= 1.04;
            } else if (p.delay > 0) {
                p.delay--;
            } else {
                // spring to target
                p.vx += (p.tx - p.x) * 0.055;
                p.vy += (p.ty - p.y) * 0.055;
                // mouse repel
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < R * R) {
                        const d = Math.sqrt(d2) || 1;
                        const f = (1 - d / R) * 9;
                        p.vx += (dx / d) * f;
                        p.vy += (dy / d) * f;
                    }
                }
                p.vx *= 0.8;
                p.vy *= 0.8;
            }
            p.x += p.vx;
            p.y += p.vy;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
        requestAnimationFrame(tick);
    }

    function explode() {
        exploding = true;
        const cx = W / 2, cy = H / 2;
        for (const p of particles) {
            const a = Math.atan2(p.y - cy, p.x - cx) + rand(-0.5, 0.5);
            const s = rand(4, 16);
            p.vx = Math.cos(a) * s;
            p.vy = Math.sin(a) * s;
        }
    }

    /* ---------- text scramble ---------- */
    const GLYPHS = '!<>-_\\/[]{}—=+*^?#01ABCDEFX';
    function scramble(el, delay = 0) {
        const final = el.dataset.scramble;
        let frame = 0;
        const total = 26;
        el.textContent = '';
        setTimeout(function step() {
            let out = '';
            for (let i = 0; i < final.length; i++) {
                const revealAt = (i / final.length) * total;
                if (frame >= revealAt + 6 || final[i] === ' ') out += final[i];
                else if (frame >= revealAt) out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
            }
            el.textContent = out;
            if (frame++ < total + 6) requestAnimationFrame(step);
            else el.textContent = final;
        }, delay);
    }

    /* ---------- loading counter ---------- */
    function runCounter(done) {
        const start = performance.now();
        const dur = 1700;
        (function step(now) {
            const t = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.round(eased * 100);
            counterEl.textContent = String(val).padStart(3, '0');
            barEl.style.transform = `scaleX(${eased})`;
            if (t < 1) requestAnimationFrame(step);
            else done();
        })(start);
    }

    /* ---------- clock ---------- */
    function startClock() {
        const fmt = new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Bangkok',
        });
        const update = () => { clockEl.textContent = 'BKK ' + fmt.format(new Date()); };
        update();
        return setInterval(update, 1000);
    }

    /* ---------- cursor + magnetic button ---------- */
    function setupPointer() {
        let cx = W / 2, cy = H / 2, rx = cx, ry = cy;
        const onMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        };
        landing.addEventListener('pointermove', onMove);
        landing.addEventListener('pointerdown', onMove);
        landing.addEventListener('pointerleave', () => { mouse.active = false; });

        if (finePointer) {
            cursor.hidden = false;
            (function follow() {
                if (!running) return;
                cx = mouse.active ? mouse.x : cx;
                cy = mouse.active ? mouse.y : cy;
                rx += (cx - rx) * 0.18;
                ry += (cy - ry) * 0.18;
                cursor.style.transform = `translate(${rx}px, ${ry}px)`;
                requestAnimationFrame(follow);
            })();

            enterBtn.addEventListener('pointermove', (e) => {
                const r = enterBtn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.3;
                const y = (e.clientY - r.top - r.height / 2) * 0.4;
                enterBtn.style.transform = `translate(${x}px, ${y}px)`;
            });
            enterBtn.addEventListener('pointerenter', () => cursor.classList.add('is-hover'));
            enterBtn.addEventListener('pointerleave', () => {
                enterBtn.style.transform = '';
                cursor.classList.remove('is-hover');
            });
        }
    }

    /* ---------- enter / exit ---------- */
    function enter() {
        if (leaving) return;
        leaving = true;
        markSeen();
        explode();
        landing.classList.add('is-leaving');

        // hero starts rising while the shutters lift; overlay is removed once they finish
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent('landing:done'));
            root.classList.add('is-entered');
        }, 320);
        setTimeout(() => {
            running = false;
            if (/[?&]intro\b/.test(location.search)) history.replaceState(null, '', location.pathname + location.hash);
            clearInterval(clockTimer);
            root.classList.remove('show-landing', 'landing-lock');
            landing.remove();
        }, 1700);
    }

    /* ---------- boot ---------- */
    root.classList.add('landing-lock');
    const clockTimer = startClock();
    enterBtn.addEventListener('click', enter);
    skipBtn.addEventListener('click', enter);
    document.addEventListener('keydown', (e) => {
        if (leaving) return;
        if (e.key === 'Escape' || (ready && (e.key === 'Enter' || e.key === ' '))) {
            e.preventDefault();
            enter();
        }
    });

    const fontReady = document.fonts && document.fonts.load
        ? Promise.race([document.fonts.load('800 100px Archivo'), new Promise((r) => setTimeout(r, 1500))])
        : Promise.resolve();

    landing.classList.add('is-loading');
    let counted = false, fonted = false;
    const maybeStart = () => {
        if (!counted || !fonted) return;
        buildTargets();
        setupPointer();
        requestAnimationFrame(tick);
        landing.classList.remove('is-loading');
        landing.classList.add('is-ready');
        scrambleEls.forEach((el, i) => scramble(el, 350 + i * 180));
        setTimeout(() => { ready = true; enterBtn.focus({ preventScroll: true }); }, 900);
    };
    runCounter(() => { counted = true; maybeStart(); });
    fontReady.then(() => { fonted = true; maybeStart(); });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { if (running && !exploding && particles.length) buildTargets(); }, 150);
    });
})();
