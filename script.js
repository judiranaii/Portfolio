(function () {
  var EMAIL = "judiranaivoson@gmail.com";
  var root = document.documentElement;

  /* ---------- Translations ---------- */
  var T = {
    en: {
      "skip": "Skip to content",
      "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.edu": "Education", "nav.contact": "Contact",
      "hire": "Hire Me",
      "hero.badge": "Software engineering student",
      "hero.hi": "Hi, I'm",
      "hero.tag": "I design and build digital solutions.",
      "hero.lead": "Bachelor 2 Computer Science student in Antananarivo. I'm training in software development and web, with a strong interest in graphic design and UI/UX.",
      "hero.avail": "Open to internships & collaborations",
      "hero.cta1": "View my work", "hero.cta2": "Download CV",
      "hero.tech": "Technologies I work with",
      "about.eyebrow": "About me",
      "about.title": "A motivated student passionate about building digital products",
      "about.p1": "I'm in my second year of a Computer Science degree, software engineering track, at Université Adventiste Zurcher in Sambaina. I don't have professional experience yet, but I learn by building: websites, C# applications and graphic creations.",
      "about.p2": "I like connecting code and design: an interface should be clear, consistent and pleasant to use. I'm looking for internship and project opportunities to grow alongside a team.",
      "about.btn": "Get in touch",
      "st.degree": "Computer Science, software eng.", "st.skills": "Technical skills", "st.projects": "Projects completed", "st.langs": "Languages spoken",
      "sk.eyebrow": "My skills", "sk.title": "Technologies & tools",
      "sk.java": "Java", "sk.csharp": "C#", "sk.c": "C", "sk.html": "HTML & CSS", "sk.php": "PHP",
      "sk.gd": "Graphic design", "sk.uiux": "UI / UX", "sk.erd": "Database modeling (ERD)", "sk.pc": "Computer troubleshooting",
      "lv.int": "Intermediate", "lv.adv": "Advanced",
      "lg.eyebrow": "Languages", "lg.title": "I communicate in 3 languages",
      "lg.mg": "Malagasy", "lg.fr": "French", "lg.en": "English", "lg.native": "Native", "lg.fluent": "Fluent",
      "pj.eyebrow": "Projects", "pj.title": "Some of my work",
      "f.all": "All", "f.web": "Web", "f.software": "Software", "f.design": "Design",
      "p1.t": "Pizzeria website", "p1.d": "Static showcase website for a pizzeria: menu, atmosphere and contact details, with a responsive layout.",
      "p2.t": "Real estate website", "p2.d": "Static website presenting properties for sale, designed for clear navigation and quick reading of listings.",
      "p3.t": "MVola account management", "p3.d": "C# application for managing an account inspired by MVola: core account operations and object-oriented business logic.",
      "p4.t": "Adobe Illustrator designs", "p4.d": "Graphic design work made with Adobe Illustrator: visual identity, vector illustrations and visuals. Source files are on GitHub.",
      "p5.t": "UI/UX design in Figma", "p5.d": "Interface designs, wireframes and prototypes created in Figma, with a focus on clarity and consistency.",
      "p6.t": "Arusa Furniture", "p6.d": "E-commerce mockup for a furniture store: product pages, shopping flow and a clean user-centred interface.",
      "link.gh": "View on GitHub", "link.figma": "View on Figma",
      "ed.eyebrow": "Background", "ed.title": "Education",
      "ed.date": "2025 — Present", "ed.degree": "Bachelor 2 — Computer Science, software engineering",
      "ed.b1": "Programming: Java, C#, C, PHP", "ed.b2": "Web development: HTML, CSS", "ed.b3": "Database design (ERD)",
      "ed.expLabel": "Experience", "ed.expTitle": "No professional experience yet",
      "ed.expDesc": "I build my path through personal and university projects, and I'm looking for a first internship.",
      "ed.intLabel": "Interests", "ed.interests": "Technology, basketball, reading",
      "ct.eyebrow": "Let's work together",
      "ct.title": "A project, an internship, a question?",
      "ct.desc": "I'm open to internships, collaborations and small web projects. Write to me, I'll be happy to reply.",
      "ct.copy": "Copy", "ct.copied": "Copied!", "ct.loc": "Antananarivo, Madagascar",
      "fm.name": "Name", "fm.nameph": "Your name", "fm.email": "Email", "fm.emailph": "you@email.com",
      "fm.msg": "Message", "fm.msgph": "Tell me about your project…",
      "fm.send": "Send by email", "fm.note": "This button opens your email app with the message already written.",
      "ft.rights": "All rights reserved.", "ft.made": "Made in Antananarivo, Madagascar",
      "mail.hireSubject": "Opportunity / Collaboration - Portfolio", "mail.hireBody": "Hello Judicaël,\n\n",
      "mail.formSubject": "Message from your portfolio - ",
      "title": "Judicaël Ranaivoson — Portfolio | Software Engineering Student",
      "toTop": "Back to top"
    },
    fr: {
      "skip": "Aller au contenu",
      "nav.home": "Accueil", "nav.about": "À propos", "nav.skills": "Compétences", "nav.projects": "Projets", "nav.edu": "Formation", "nav.contact": "Contact",
      "hire": "Me recruter",
      "hero.badge": "Étudiant en génie logiciel",
      "hero.hi": "Salut, je suis",
      "hero.tag": "Je conçois et je code des solutions numériques.",
      "hero.lead": "Étudiant en Licence 2 Informatique à Antananarivo, je me forme au développement logiciel et au web, avec un goût particulier pour le design graphique et l'UI/UX.",
      "hero.avail": "Ouvert aux stages et collaborations",
      "hero.cta1": "Voir mes projets", "hero.cta2": "Télécharger mon CV",
      "hero.tech": "Technologies que j'utilise",
      "about.eyebrow": "À propos",
      "about.title": "Étudiant motivé, passionné par la création de produits numériques",
      "about.p1": "Je suis en deuxième année de Licence en Informatique, parcours génie logiciel, à l'Université Adventiste Zurcher de Sambaina. Je n'ai pas encore d'expérience professionnelle, mais j'apprends en construisant : sites web, applications en C# et créations graphiques.",
      "about.p2": "J'aime relier le code et le design : une interface doit être claire, cohérente et agréable à utiliser. Je recherche des opportunités de stage et de projets pour progresser auprès d'une équipe.",
      "about.btn": "Me contacter",
      "st.degree": "Informatique, génie logiciel", "st.skills": "Compétences techniques", "st.projects": "Projets réalisés", "st.langs": "Langues parlées",
      "sk.eyebrow": "Mes compétences", "sk.title": "Technologies et outils",
      "sk.java": "Java", "sk.csharp": "C#", "sk.c": "C", "sk.html": "HTML & CSS", "sk.php": "PHP",
      "sk.gd": "Design graphique", "sk.uiux": "UI / UX", "sk.erd": "Conception MCD", "sk.pc": "Dépannage informatique",
      "lv.int": "Intermédiaire", "lv.adv": "Avancé",
      "lg.eyebrow": "Langues", "lg.title": "Je communique en 3 langues",
      "lg.mg": "Malgache", "lg.fr": "Français", "lg.en": "Anglais", "lg.native": "Langue maternelle", "lg.fluent": "Courant",
      "pj.eyebrow": "Projets", "pj.title": "Quelques réalisations",
      "f.all": "Tous", "f.web": "Web", "f.software": "Logiciel", "f.design": "Design",
      "p1.t": "Site de pizzeria", "p1.d": "Site vitrine statique pour une pizzeria : menu, ambiance et informations de contact, avec une mise en page responsive.",
      "p2.t": "Site de vente immobilière", "p2.d": "Site statique de présentation de biens immobiliers, pensé pour une navigation claire et une lecture rapide des annonces.",
      "p3.t": "Gestion de compte MVola", "p3.d": "Application en C# de gestion de compte inspirée de MVola : opérations de base sur un compte et logique métier orientée objet.",
      "p4.t": "Créations Adobe Illustrator", "p4.d": "Travaux de design graphique réalisés sous Adobe Illustrator : identité visuelle, illustrations vectorielles et visuels. Fichiers sources sur GitHub.",
      "p5.t": "Design UI/UX sur Figma", "p5.d": "Maquettes d'interfaces, wireframes et prototypes créés sur Figma, avec un souci de clarté et de cohérence.",
      "p6.t": "Arusa Furniture", "p6.d": "Maquette e-commerce pour un magasin de mobilier : pages produits, parcours d'achat et interface centrée sur l'utilisateur.",
      "link.gh": "Voir sur GitHub", "link.figma": "Voir sur Figma",
      "ed.eyebrow": "Parcours", "ed.title": "Formation",
      "ed.date": "2025 — Aujourd'hui", "ed.degree": "Licence 2 — Informatique, génie logiciel",
      "ed.b1": "Programmation : Java, C#, C, PHP", "ed.b2": "Développement web : HTML, CSS", "ed.b3": "Conception de bases de données (MCD)",
      "ed.expLabel": "Expérience", "ed.expTitle": "Pas encore d'expérience professionnelle",
      "ed.expDesc": "Je construis mon parcours par des projets personnels et universitaires, et je recherche un premier stage.",
      "ed.intLabel": "Centres d'intérêt", "ed.interests": "Technologie, basketball, lecture",
      "ct.eyebrow": "Travaillons ensemble",
      "ct.title": "Un projet, un stage, une question ?",
      "ct.desc": "Je suis ouvert aux stages, aux collaborations et aux petits projets web. Écris-moi, je réponds avec plaisir.",
      "ct.copy": "Copier", "ct.copied": "Copié !", "ct.loc": "Antananarivo, Madagascar",
      "fm.name": "Nom", "fm.nameph": "Ton nom", "fm.email": "Email", "fm.emailph": "ton@email.com",
      "fm.msg": "Message", "fm.msgph": "Parle-moi de ton projet…",
      "fm.send": "Envoyer par e-mail", "fm.note": "Ce bouton ouvre ton application e-mail avec le message déjà rédigé.",
      "ft.rights": "Tous droits réservés.", "ft.made": "Fait à Antananarivo, Madagascar",
      "mail.hireSubject": "Opportunité / Collaboration - Portfolio", "mail.hireBody": "Bonjour Judicaël,\n\n",
      "mail.formSubject": "Message depuis ton portfolio - ",
      "title": "Judicaël Ranaivoson — Portfolio | Étudiant en génie logiciel",
      "toTop": "Retour en haut"
    }
  };

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  var lang = load("lang") === "fr" ? "fr" : "en";

  function setLang(l) {
    lang = l;
    var d = T[l];
    root.lang = l;
    document.title = d["title"];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = d[el.getAttribute("data-i18n")];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      el.placeholder = d[el.getAttribute("data-i18n-ph")];
    });
    document.querySelectorAll(".lang-btn span").forEach(function (s) {
      s.classList.toggle("on", s.getAttribute("data-l") === l);
    });
    document.getElementById("toTop").setAttribute("aria-label", d["toTop"]);
    document.getElementById("hireMe").href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(d["mail.hireSubject"]) + "&body=" + encodeURIComponent(d["mail.hireBody"]);
    store("lang", l);
  }

  document.getElementById("langBtn").addEventListener("click", function () { setLang(lang === "en" ? "fr" : "en"); });

  /* ---------- Theme ---------- */
  var meta = document.querySelector('meta[name="theme-color"]');
  function syncMeta() { meta.setAttribute("content", root.getAttribute("data-theme") === "light" ? "#FFFFFF" : "#050C1C"); }
  syncMeta();
  document.getElementById("themeBtn").addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", t);
    store("theme", t);
    syncMeta();
  });

  /* ---------- Misc ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  var burger = document.getElementById("burger");
  var links = document.getElementById("navLinks");
  burger.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { links.classList.remove("open"); burger.setAttribute("aria-expanded", false); }
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      en.target.querySelectorAll(".fill").forEach(function (f) { f.style.width = f.dataset.w + "%"; });
      io.unobserve(en.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  var navLinks = document.querySelectorAll(".nav-links a");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      navLinks.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

  // Project filters
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (b) {
    b.addEventListener("click", function () {
      filters.forEach(function (x) { x.classList.toggle("active", x === b); });
      var f = b.getAttribute("data-f");
      document.querySelectorAll(".project").forEach(function (p) {
        p.classList.toggle("hide", f !== "all" && p.getAttribute("data-cat") !== f);
      });
    });
  });

  // Copy email
  var copyBtn = document.getElementById("copyBtn");
  copyBtn.addEventListener("click", function () {
    function done() {
      var s = copyBtn.querySelector("span");
      s.textContent = T[lang]["ct.copied"];
      setTimeout(function () { s.textContent = T[lang]["ct.copy"]; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done, done);
    } else {
      var t = document.createElement("textarea"); t.value = EMAIL; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(t); done();
    }
  });

  // Back to top
  var toTop = document.getElementById("toTop");
  window.addEventListener("scroll", function () { toTop.classList.toggle("show", window.scrollY > 600); }, { passive: true });
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // Contact form -> mail app
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target;
    var subject = T[lang]["mail.formSubject"] + f.name.value;
    var body = f.message.value + "\n\n--\n" + f.name.value + "\n" + f.email.value;
    window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  setLang(lang);
})();
