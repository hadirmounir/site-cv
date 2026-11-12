(function () {
  'use strict';

  /* ---------- Bandeau de confiance : uniquement employeurs / clients ----------
     Les organismes de certification et les écoles (ISTQB, Google, IBM, NASM,
     PPA, URCA) sont volontairement exclus : ils figurent en Formation.
     HYROX est également exclu à la demande de Mounir. */
  var trusted = [
    { src: 'consort.png',  name: 'Consort Group' },
    { src: 'oney.png',     name: 'Oney Bank' },
    { src: 'antenia.png',  name: 'Antenia' },
    { src: 'afiesca.png',  name: 'AFI ESCA' },
    { src: 'escen.png',    name: 'ESCEN' },
    { src: 'rgis.png',     name: 'RGIS' },
    { src: 'animafac.png', name: 'Animafac' },
    { src: 'ie.png',       name: "Institut de l'Engagement" },
    { src: 'trema.png',    name: 'Trema' }
  ];

  var track = document.getElementById('track1');
  if (track) {
    var frag = document.createDocumentFragment();
    trusted.concat(trusted).forEach(function (logo) {
      var chip = document.createElement('div');
      chip.className = 'logo-chip';
      var img = document.createElement('img');
      img.src = logo.src;
      img.alt = logo.name;
      img.loading = 'lazy';
      img.width = 116;
      img.height = 34;
      chip.appendChild(img);
      frag.appendChild(chip);
    });
    track.appendChild(frag);
  }

  /* ---------- Bandeau d'outils (deux lignes, sens opposés) ---------- */
  var tools = [
    'Jira', 'Xray', 'Mantis', 'Trello', 'Bruno', 'Postman', 'Agilitest',
    'Playwright', 'SQL', 'DB2', 'Power BI', 'Excel', 'Salesforce',
    'GESTASSA', 'NEO Core', 'NEO Pricing', 'Agile / Scrum'
  ];
  var toolBand = document.getElementById('toolBand');
  if (toolBand) {
    [false, true].forEach(function (reverse) {
      var row = document.createElement('div');
      if (reverse) row.className = 'rev';
      var pool = reverse ? tools.slice().reverse() : tools;
      pool.concat(pool).forEach(function (tool) {
        var span = document.createElement('span');
        span.textContent = tool;
        row.appendChild(span);
      });
      toolBand.appendChild(row);
    });
  }

  /* ---------- Nav, progression, retour en haut ---------- */
  var nav = document.getElementById('nav');
  var bar = document.getElementById('progressBar');
  var toTop = document.getElementById('toTop');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle('scrolled', y > 24);
    if (toTop) toTop.classList.toggle('show', y > 700);
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');

  function closeMenu() {
    if (!burger || !menu) return;
    burger.classList.remove('open');
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = !menu.classList.contains('open');
      burger.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- Apparition au scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Compteurs ---------- */
  var counters = document.querySelectorAll('[data-count]');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.querySelector('i');
    var suffixHTML = suffix ? suffix.outerHTML : '';
    var duration = 1100;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.innerHTML = Math.round(target * eased) + suffixHTML;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------- Accordéons d'expérience : ouverture vers le bas ----------
     Chaque bloc s'ouvre indépendamment : ouvrir une expérience ne referme
     jamais les blocs situés au-dessus, donc la page ne remonte pas. */
  var xps = document.querySelectorAll('.xp');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  xps.forEach(function (xp) {
    var head = xp.querySelector('.xp-head');
    if (!head) return;
    head.addEventListener('click', function () {
      var isOpen = xp.getAttribute('data-open') === 'true';
      xp.setAttribute('data-open', String(!isOpen));
      head.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) return;

      /* Si le bloc est déjà bas dans l'écran, on accompagne la lecture vers
         le bas pour que le détail s'ouvre sous les yeux - jamais vers le haut. */
      var navH = nav ? nav.offsetHeight : 78;
      var top = xp.getBoundingClientRect().top;
      if (top > window.innerHeight * 0.55) {
        window.scrollTo({
          top: window.scrollY + top - navH - 14,
          behavior: reduceMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  /* ---------- Barres de langues ---------- */
  var langCards = document.querySelectorAll('.lang-card');
  if ('IntersectionObserver' in window) {
    var lio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          lio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    langCards.forEach(function (card) { lio.observe(card); });
  } else {
    langCards.forEach(function (card) { card.classList.add('in'); });
  }

  /* ---------- Lien de nav actif ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window && sections.length) {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (section) { sio.observe(section); });
  }

  /* ---------- Copier l'e-mail ---------- */
  var copyBtn = document.getElementById('copyMail');
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2400);
  }
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var mail = copyBtn.getAttribute('data-mail') || 'hadirmounir@gmail.com';
      var done = copyBtn.getAttribute('data-copied') || 'Copied ✓';
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = mail;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); showToast(done); }
        catch (e) { showToast(mail); }
        document.body.removeChild(ta);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(function () { showToast(done); }).catch(fallback);
      } else {
        fallback();
      }
    });
  }

  /* ---------- Parallaxe légère du portrait ---------- */
  var tilt = document.getElementById('tilt');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (tilt && !reduce && window.matchMedia('(hover: hover)').matches) {
    var frame = tilt.parentElement;
    frame.addEventListener('mousemove', function (e) {
      var rect = frame.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      tilt.style.transform = 'rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
    });
    frame.addEventListener('mouseleave', function () {
      tilt.style.transform = '';
    });
  }
})();
