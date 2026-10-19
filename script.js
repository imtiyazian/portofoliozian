/* ==========================================
   PORTFOLIO JAVASCRIPT
   Mohammad Imtiyazian Nu'man
   ========================================== */

"use strict";

// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
  id: {
    "loading": "Memuat portofolio...",
    "nav.about": "Tentang",
    "nav.skills": "Skills",
    "nav.experience": "Pengalaman",
    "nav.education": "Pendidikan",
    "nav.organization": "Organisasi",
    "nav.certifications": "Sertifikasi",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "hero.badge": "Tersedia untuk Peluang Kerja",
    "hero.greeting": "Halo, Saya",
    "hero.desc": 'Mahasiswa Teknik Informatika tingkat akhir yang passionate di bidang <strong>Web Development</strong>, <strong>Jaringan Komputer</strong>, dan <strong>IT Solutions</strong>. Berlokasi di Jakarta Barat 🇮🇩',
    "hero.cta.contact": "Hubungi Saya",
    "hero.cta.cv": "Lihat CV",
    "hero.stat.exp": "Tahun Pengalaman",
    "hero.stat.cert": "Sertifikasi",
    "hero.stat.company": "Perusahaan",
    "about.title": "Tentang",
    "about.title2": "Saya",
    "about.p1": 'Saya adalah <strong>mahasiswa tingkat akhir Teknik Informatika</strong> di Universitas Budi Luhur, Jakarta. Dengan latar belakang pendidikan di bidang <strong>Teknik Komputer dan Jaringan</strong>, saya memiliki fondasi yang kuat di dunia IT.',
    "about.p2": 'Saya memiliki pengalaman profesional selama <strong>1+ tahun</strong> sebagai KYC Agent di <strong>PT. GoTo Gojek Tokopedia</strong> dan pengalaman sebagai <strong>IT Consultant Intern</strong> di PT. Tijari Teknologi Automasi. Saya sangat passionate dalam Web Development, administrasi jaringan, dan pengembangan solusi IT.',
    "about.p3": 'Sebagai pribadi, saya adalah seorang <strong>pemikir logis</strong>, pekerja tim yang baik, dan mampu bekerja di bawah tekanan. Saya selalu berkomitmen untuk terus belajar dan berkembang secara profesional.',
    "about.loc.label": "Lokasi",
    "about.loc.value": "Jakarta Barat",
    "about.status.label": "Status",
    "about.status.val": "Mahasiswa Tingkat Akhir",
    "about.traits.title": "Karakter",
    "trait1.name": "Pemikir Logis",
    "trait1.desc": "Analitis dalam memecahkan masalah",
    "trait2.name": "Team Player",
    "trait2.desc": "Kolaboratif dan komunikatif",
    "trait3.name": "Fast Learner",
    "trait3.desc": "Cepat adaptasi & belajar hal baru",
    "trait4.name": "Detail-Oriented",
    "trait4.desc": "Teliti dan bertanggung jawab",
    "trait5.name": "Tahan Tekanan",
    "trait5.desc": "Konsisten dalam deadline ketat",
    "skills.title": "Keahlian",
    "skills.title2": "Saya",
    "skills.soft": "Soft Skills",
    "soft.comm": "Komunikasi",
    "soft.ps": "Problem Solving",
    "soft.adapt": "Adaptif",
    "soft.time": "Manajemen Waktu",
    "skills.level": "Tingkat Keahlian",
    "skills.bar.data": "Data Entry & Verifikasi",
    "exp.title": "Pengalaman",
    "exp.title2": "Kerja",
    "exp.fulltime": "Full Time",
    "exp.intern": "Internship",
    "goto.1": "Memasukkan data klien baru ke dalam Portal GoPay secara akurat dan efisien",
    "goto.2": "Memverifikasi data klien sesuai dengan SOP perusahaan untuk keamanan transaksi",
    "goto.3": "Mempertahankan target <strong>Service Level Agreement (SLA)</strong> secara konsisten",
    "goto.4": "Menyetujui atau menolak data klien yang tidak memenuhi persyaratan KYC",
    "tijari.1": "Berkontribusi dalam pengembangan dan kustomisasi platform ERP menggunakan Odoo 18 dan Python.",
    "tijari.2": "Membantu mengembangkan sistem e-learning dengan fitur manajemen kursus, ujian, pelacakan progres peserta, dan dasbor pembelajaran.",
    "tijari.3": "Menggunakan PostgreSQL untuk pengelolaan basis data dan integrasi dengan modul Odoo.",
    "tijari.4": "Mendukung analisis proses bisnis dan perancangan alur kerja agar fungsi sistem sesuai dengan kebutuhan operasional.",
    "tijari.5": "Menggunakan Git dan GitHub untuk version control dan kolaborasi proyek.",
    "edu.title": "Riwayat",
    "edu.title2": "Pendidikan",
    "edu.ubl.degree": "S1 Teknik Informatika",
    "edu.active": "🟢 Aktif",
    "edu.now": "Sekarang",
    "edu.ubl.desc": "Mempelajari pengembangan perangkat lunak, pemrograman, basis data, analisis sistem, dan pemecahan masalah berbasis teknologi. Selama perkuliahan, saya terus mengembangkan kemampuan berpikir logis, menganalisis kebutuhan sistem, serta menerapkan pengetahuan teknis melalui proyek akademik dan pengembangan aplikasi.",
    "edu.smk.degree": "Teknik Komputer dan Jaringan",
    "edu.grad": "✅ Lulus",
    "edu.smk.desc": "Mempelajari dasar-dasar teknologi komputer dan jaringan, termasuk instalasi dan konfigurasi perangkat jaringan, administrasi sistem, serta troubleshooting perangkat keras dan perangkat lunak. Pendidikan ini menjadi dasar dalam memahami infrastruktur teknologi informasi dan pengelolaan jaringan komputer.",
    "org.title": "Pengalaman",
    "org.title2": "Organisasi",
    "org.hmti.role": "Staf Pendidikan",
    "org.hmti.desc": "Mendokumentasikan program dengan berkoordinasi bersama divisi lain, membuat video pembelajaran, dan menulis artikel pendidikan.",
    "org.pematik.role": "Anggota Panitia",
    "org.pematik.desc": "Kepanitiaan Pekan Mahasiswa Teknik Informatika — event tahunan mahasiswa Teknik Informatika Universitas Budi Luhur.",
    "org.tag.doc": "Dokumentasi",
    "org.tag.write": "Penulisan",
    "org.tag.eo": "Event Organizer",
    "org.tag.coord": "Koordinasi",
    "cert.title": "Sertifikasi &",
    "cert.title2": "Pencapaian",
    "cert.competition": "Kompetisi",
    "cert.professional": "Profesional",
    "cert.algo.issuer": "Teknologi & Komputer",
    "cert.technical": "Teknikal",
    "contact.title": "Hubungi",
    "contact.title2": "Saya",
    "contact.sub": "Untuk peluang profesional, kerja sama, atau diskusi seputar teknologi informasi.",
    "contact.loc": "Lokasi",
    "contact.loc.value": "Jakarta Barat, Indonesia",
    "edu.location": "Jakarta Selatan",
    "exp.location": "📍 Jakarta Selatan",
    "contact.form.title": "Kirim Pesan ke WhatsApp",
    "contact.form.name": "Nama",
    "contact.form.name.ph": "Nama Anda / Perusahaan",
    "contact.form.msg": "Pesan",
    "contact.form.msg.ph": "Tuliskan pesan atau tujuan Anda menghubungi saya...",
    "contact.form.send": "Kirim ke WhatsApp",
    "contact.success.title": "WhatsApp Terbuka!",
    "contact.success.desc": "WhatsApp terbuka dengan pesan yang sudah terisi. Tinggal tekan Kirim! ✅",
    "nav.home": "Beranda",
    "about.sub": "Sekilas tentang latar belakang pendidikan, pengalaman, dan kompetensi yang saya kembangkan",
    "skills.sub": "Keahlian teknis, soft skills, dan alat pendukung yang saya kuasai",
    "exp.sub": "Riwayat pekerjaan, peran profesional, dan kontribusi proyek",
    "edu.sub": "Latar belakang pendidikan dan kompetensi yang saya kembangkan",
    "org.sub": "Pengalaman kepanitiaan dan organisasi kemahasiswaan",
    "cert.sub": "Sertifikasi keahlian, kompetisi, dan pengakuan profesional",
    "explore.title": "Jelajahi Profil",
    "explore.sub": "Pilih menu di bawah untuk melihat informasi lengkap portofolio saya",
    "explore.about.link": "Buka Profil →",
    "explore.skills.link": "Lihat Skills →",
    "explore.experience.link": "Lihat Pengalaman →",
    "explore.education.link": "Lihat Pendidikan →",
    "explore.organization.link": "Lihat Organisasi →",
    "explore.certifications.link": "Lihat Sertifikasi →",
    "explore.projects.link": "Lihat Proyek →",
    "projects.title": "Portofolio",
    "projects.title2": "Proyek",
    "projects.sub": "Beberapa website dan karya yang saya buat",
    "projects.travel.description": "Website biro travel umroh yang menyajikan informasi layanan perjalanan dan membantu calon jamaah berkonsultasi dengan mudah.",
    "projects.visit": "Kunjungi Website",
    "projects.live": "Website Live",
  },
  en: {
    "loading": "Loading portfolio...",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.organization": "Organizations",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Available for Opportunities",
    "hero.greeting": "Hi, I'm",
    "hero.desc": 'A final-year Informatics Engineering student passionate about <strong>Web Development</strong>, <strong>Computer Networking</strong>, and <strong>IT Solutions</strong>. Based in West Jakarta 🇮🇩',
    "hero.cta.contact": "Contact Me",
    "hero.cta.cv": "View CV",
    "hero.stat.exp": "Years Experience",
    "hero.stat.cert": "Certifications",
    "hero.stat.company": "Companies",
    "about.title": "About",
    "about.title2": "Me",
    "about.p1": 'I am a <strong>final-year Informatics Engineering student</strong> at Universitas Budi Luhur, Jakarta. With an educational background in <strong>Computer and Network Engineering</strong>, I have a strong foundation in the IT world.',
    "about.p2": 'I have <strong>1+ year</strong> of professional experience as a KYC Agent at <strong>PT. GoTo Gojek Tokopedia</strong> and experience as an <strong>IT Consultant Intern</strong> at PT. Tijari Teknologi Automasi. I am passionate about Web Development, network administration, and IT solution development.',
    "about.p3": 'As an individual, I am a <strong>logical thinker</strong>, a good team player, and able to work under pressure. I am always committed to continuously learning and growing professionally.',
    "about.loc.label": "Location",
    "about.loc.value": "West Jakarta",
    "about.status.label": "Status",
    "about.status.val": "Final Year Student",
    "about.traits.title": "Character",
    "trait1.name": "Logical Thinker",
    "trait1.desc": "Analytical in problem solving",
    "trait2.name": "Team Player",
    "trait2.desc": "Collaborative and communicative",
    "trait3.name": "Fast Learner",
    "trait3.desc": "Quick to adapt & learn new things",
    "trait4.name": "Detail-Oriented",
    "trait4.desc": "Thorough and responsible",
    "trait5.name": "Works Under Pressure",
    "trait5.desc": "Consistent under tight deadlines",
    "skills.title": "My",
    "skills.title2": "Skills",
    "skills.soft": "Soft Skills",
    "soft.comm": "Communication",
    "soft.ps": "Problem Solving",
    "soft.adapt": "Adaptability",
    "soft.time": "Time Management",
    "skills.level": "Proficiency Level",
    "skills.bar.data": "Data Entry & Verification",
    "exp.title": "Work",
    "exp.title2": "Experience",
    "exp.fulltime": "Full Time",
    "exp.intern": "Internship",
    "goto.1": "Entered new client data into the GoPay Portal accurately and efficiently",
    "goto.2": "Verified client data according to company SOP for transaction security",
    "goto.3": "Consistently maintained <strong>Service Level Agreement (SLA)</strong> targets",
    "goto.4": "Approved or rejected client data that did not meet KYC requirements",
    "tijari.1": "Contributed to the development and customization of an ERP platform using Odoo 18 and Python.",
    "tijari.2": "Assisted in developing an e-learning system featuring course management, exams, participant progress tracking, and learning dashboards.",
    "tijari.3": "Worked with PostgreSQL for database management and integration with Odoo modules.",
    "tijari.4": "Supported business process analysis and workflow design to align system functionality with operational requirements.",
    "tijari.5": "Utilized Git and GitHub for version control and project collaboration.",
    "edu.title": "Education",
    "edu.title2": "History",
    "edu.ubl.degree": "Bachelor of Informatics Engineering",
    "edu.active": "🟢 Active",
    "edu.now": "Present",
    "edu.ubl.desc": "Studying software development, programming, databases, systems analysis, and technology-based problem solving. Throughout my studies, I have continued to develop logical thinking, analyze system requirements, and apply technical knowledge through academic projects and application development.",
    "edu.smk.degree": "Computer and Network Engineering",
    "edu.grad": "✅ Graduated",
    "edu.smk.desc": "Studied the fundamentals of computer and network technology, including installing and configuring network devices, system administration, and hardware and software troubleshooting. This education provided a foundation for understanding information technology infrastructure and computer network management.",
    "org.title": "Organization",
    "org.title2": "Experience",
    "org.hmti.role": "Education Staff",
    "org.hmti.desc": "Documented programs by coordinating with other divisions, creating learning videos, and writing educational articles.",
    "org.pematik.role": "Committee Member",
    "org.pematik.desc": "Organizing Committee for Pekan Mahasiswa Teknik Informatika — the annual event of Informatics Engineering students at Universitas Budi Luhur.",
    "org.tag.doc": "Documentation",
    "org.tag.write": "Writing",
    "org.tag.eo": "Event Organizer",
    "org.tag.coord": "Coordination",
    "cert.title": "Certifications &",
    "cert.title2": "Achievements",
    "cert.competition": "Competition",
    "cert.professional": "Professional",
    "cert.algo.issuer": "Technology & Computer",
    "cert.technical": "Technical",
    "contact.title": "Contact",
    "contact.title2": "Me",
    "contact.sub": "For professional opportunities, collaboration, or discussions about information technology.",
    "contact.loc": "Location",
    "contact.loc.value": "West Jakarta, Indonesia",
    "edu.location": "South Jakarta",
    "exp.location": "📍 South Jakarta",
    "contact.form.title": "Send a Message via WhatsApp",
    "contact.form.name": "Name",
    "contact.form.name.ph": "Your Name / Company",
    "contact.form.msg": "Message",
    "contact.form.msg.ph": "Write your message or tell me why you're reaching out...",
    "contact.form.send": "Send via WhatsApp",
    "contact.success.title": "WhatsApp Opened!",
    "contact.success.desc": "WhatsApp opened with your message pre-filled. Just tap Send! ✅",
    "nav.home": "Home",
    "about.sub": "An overview of my educational background, experience, and the competencies I have developed",
    "skills.sub": "Technical skills, soft skills, and tools I specialize in",
    "exp.sub": "Work history, professional roles, and project contributions",
    "edu.sub": "My educational background and the competencies I have developed",
    "org.sub": "Committee and student organization experiences",
    "cert.sub": "Skill certifications, competitions, and professional credentials",
    "explore.title": "Explore Profile",
    "explore.sub": "Select a section below to explore detailed portfolio information",
    "explore.about.link": "View Profile →",
    "explore.skills.link": "View Skills →",
    "explore.experience.link": "View Experience →",
    "explore.education.link": "View Education →",
    "explore.organization.link": "View Organizations →",
    "explore.certifications.link": "View Certifications →",
    "explore.projects.link": "View Projects →",
    "projects.title": "Project",
    "projects.title2": "Portfolio",
    "projects.sub": "A selection of websites and work I have created",
    "projects.travel.description": "An Umrah travel agency website presenting travel services and making it easy for prospective pilgrims to get in touch.",
    "projects.visit": "Visit Website",
    "projects.live": "Live Website",
  }
};

// ==========================================
// LANGUAGE SYSTEM
// ==========================================
let currentLang = localStorage.getItem("portfolio-lang") || "id";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  const t = translations[lang];
  document.documentElement.setAttribute("data-lang", lang);

  // Update html lang
  document.documentElement.lang = lang;

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update toggle UI
  const label = document.getElementById("langLabel");
  const other = document.getElementById("langOther");
  if (label) label.textContent = lang === "id" ? "ID" : "EN";
  if (other) other.textContent = lang === "id" ? "EN" : "ID";

  // Update typed text roles
  updateRolesForLang(lang);
}

let roles = ["Web Developer", "IT Professional", "Network Enthusiast", "IT Consultant", "Mahasiswa TI"];

function updateRolesForLang(lang) {
  if (lang === "en") {
    roles.length = 0;
    roles.push("Web Developer", "IT Professional", "Network Enthusiast", "IT Consultant", "CS Student");
  } else {
    roles.length = 0;
    roles.push("Web Developer", "IT Professional", "Network Enthusiast", "IT Consultant", "Mahasiswa TI");
  }
}

// One-click language toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("langToggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = currentLang === "id" ? "en" : "id";
      // Flip animation
      toggle.style.transform = "scale(0.92)";
      setTimeout(() => { toggle.style.transform = ""; }, 150);
      applyLanguage(next);
    });
  }

  // Apply saved language on load
  applyLanguage(currentLang);
  updateActiveNav();
});

// ==========================================
// LOADER
// ==========================================
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
      initAOS();
      initSkillBars();
    }
  }, 1600);
});

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursor = document.getElementById("cursor");
const cursorFollower = document.getElementById("cursorFollower");

if (cursor && cursorFollower && window.innerWidth > 768) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + "px";
    cursorFollower.style.top = followerY + "px";
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const interactives = document.querySelectorAll(
    "a, button, .skill-tag, .glass-card, input, textarea"
  );
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      cursorFollower.classList.add("active");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      cursorFollower.classList.remove("active");
    });
  });
}

// ==========================================
// NAVBAR
// ==========================================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
let navOverlay;

function setMobileMenuOpen(isOpen) {
  if (!hamburger || !navLinks) return;

  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  navLinks.classList.toggle("open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);

  if (isOpen && !navOverlay) {
    navOverlay = document.createElement("div");
    navOverlay.className = "nav-overlay";
    navOverlay.addEventListener("click", () => setMobileMenuOpen(false));
    navbar.after(navOverlay);
  } else if (!isOpen && navOverlay) {
    navOverlay.remove();
    navOverlay = null;
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  updateActiveNav();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navLinks?.classList.contains("open")) {
    setMobileMenuOpen(false);
  }
});

if (hamburger) {
  hamburger.addEventListener("click", () => {
    setMobileMenuOpen(!navLinks.classList.contains("open"));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navLinks?.classList.contains("open")) {
    setMobileMenuOpen(false);
    hamburger.focus();
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => setMobileMenuOpen(false));
});

function updateActiveNav() {
  const currentPath = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  let matched = false;
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    const cleanHref = href.split("#")[0];
    if (cleanHref && (cleanHref === currentPath || (currentPath === "" && cleanHref === "index.html"))) {
      link.classList.add("active-nav");
      matched = true;
    } else if (cleanHref) {
      link.classList.remove("active-nav");
    }
  });

  if (matched && currentPath !== "index.html") return;

  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((l) =>
        l.classList.remove("active-nav")
      );
      if (navLink) navLink.classList.add("active-nav");
    }
  });
}

// ==========================================
// TYPED TEXT EFFECT
// ==========================================
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById("typedText");

function typeEffect() {
  if (!typedEl) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

setTimeout(typeEffect, 1800);

// ==========================================
// ANIMATE ON SCROLL (AOS)
// ==========================================
function initAOS() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-aos-delay") || 0;
          setTimeout(() => {
            entry.target.classList.add("aos-animate");
          }, parseInt(delay));
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document.querySelectorAll("[data-aos]").forEach((el) => {
    el.style.transitionDelay = "0s";
    observer.observe(el);
  });
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================
function initSkillBars() {
  const bars = document.querySelectorAll(".bar-fill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.getAttribute("data-width");
          setTimeout(() => {
            bar.style.width = targetWidth + "%";
          }, 200);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// ==========================================
// CONTACT FORM
// ==========================================
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById("submitBtn");
  const text = document.getElementById("submitText");
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");

  const name    = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  const waText = encodeURIComponent(`Halo, saya ${name}.\n\n${message}`);
  const whatsappURL = `https://wa.me/6281382473906?text=${waText}`;

  btn.disabled = true;
  text.textContent = currentLang === "en" ? "Opening WhatsApp..." : "Membuka WhatsApp...";
  window.open(whatsappURL, "_blank", "noopener,noreferrer");

  setTimeout(() => {
    // Show success UI
    form.style.display = "none";
    success.style.display = "block";

    // Reset form after 4s
    setTimeout(() => {
      form.style.display = "flex";
      success.style.display = "none";
      form.reset();
      btn.disabled = false;
      text.textContent = translations[currentLang]["contact.form.send"];
    }, 4000);
  }, 800);
}

// ==========================================
// SMOOTH SCROLL (Anchor Links)
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;
    try {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } catch (_) {}
  });
});

// ==========================================
// PARTICLES / STARS
// ==========================================
function createParticles() {
  const hero = document.querySelector(".hero-bg");
  if (!hero) return;

  for (let i = 0; i < 30; i++) {
    const star = document.createElement("div");
    star.style.cssText = `
      position: absolute;
      width: ${Math.random() * 2 + 1}px;
      height: ${Math.random() * 2 + 1}px;
      background: rgba(255,255,255,${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
      animation-delay: ${Math.random() * 3}s;
      pointer-events: none;
    `;
    hero.appendChild(star);
  }

  if (!document.getElementById("starStyle")) {
    const style = document.createElement("style");
    style.id = "starStyle";
    style.textContent = `
      @keyframes starTwinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
      }
    `;
    document.head.appendChild(style);
  }
}

createParticles();

// ==========================================
// GLASS CARD TILT
// ==========================================
document.querySelectorAll(".glass-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// ==========================================
// ACTIVE NAV STYLE
// ==========================================
const activeNavStyle = document.createElement("style");
activeNavStyle.textContent = `
  .nav-link.active-nav {
    color: var(--text) !important;
  }
  .nav-link.active-nav::after {
    width: 70% !important;
  }
`;
document.head.appendChild(activeNavStyle);

// ==========================================
// CONSOLE GREETING
// ==========================================
console.log(
  "%c Mohammad Imtiyazian Nu'man - Portfolio ",
  "background: linear-gradient(135deg, #4f46e5, #06b6d4); color: white; padding: 8px 16px; border-radius: 4px; font-size: 14px; font-weight: bold;"
);
console.log("%c📧 mohammadzyan30@gmail.com", "color: #06b6d4; font-size: 12px;");
console.log("%c📱 081382473906", "color: #a78bfa; font-size: 12px;");
