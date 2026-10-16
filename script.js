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
    "nav.contact": "Kontak",
    "hero.badge": "Tersedia untuk Peluang Kerja",
    "hero.greeting": "Halo, Saya",
    "hero.desc": 'Mahasiswa Teknik Informatika tingkat akhir yang passionate di bidang <strong>Web Development</strong>, <strong>Jaringan Komputer</strong>, dan <strong>IT Solutions</strong>. Based di Jakarta Barat 🇮🇩',
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
    "tijari.1": "Mengembangkan sistem berbasis digital, termasuk desain konsep dan pengembangan fitur",
    "tijari.2": "Mengimplementasikan solusi IT untuk mendukung kebutuhan bisnis dan operasional perusahaan",
    "edu.title": "Riwayat",
    "edu.title2": "Pendidikan",
    "edu.ubl.degree": "S1 Teknik Informatika",
    "edu.active": "🟢 Aktif",
    "edu.now": "Sekarang",
    "edu.ubl.desc": "Mendalami ilmu komputer, pengembangan perangkat lunak, sistem informasi, dan infrastruktur jaringan.",
    "edu.smk.degree": "Teknik Komputer dan Jaringan",
    "edu.grad": "✅ Lulus",
    "edu.smk.desc": "Fondasi kuat di bidang Teknik Komputer dan Jaringan — konfigurasi hardware, software, dan infrastruktur jaringan.",
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
    "contact.sub": "Terbuka untuk peluang kerja, kolaborasi, atau sekadar ngobrol!",
    "contact.loc": "Lokasi",
    "contact.form.title": "Kirim Pesan",
    "contact.form.name": "Nama",
    "contact.form.name.ph": "Nama Anda",
    "contact.form.msg": "Pesan",
    "contact.form.msg.ph": "Tulis pesan Anda di sini...",
    "contact.form.send": "Kirim Pesan",
    "contact.success.title": "WhatsApp Terbuka!",
    "contact.success.desc": "WhatsApp lo terbuka dengan pesan yang sudah terisi. Tinggal tekan Kirim! ✅",
    "nav.home": "Beranda",
    "about.sub": "Mengenal lebih dekat latar belakang, karakter, dan minat saya",
    "skills.sub": "Keahlian teknis, soft skills, dan alat pendukung yang saya kuasai",
    "exp.sub": "Riwayat pekerjaan, peran profesional, dan kontribusi proyek",
    "edu.sub": "Latar belakang pendidikan formal dari SMK hingga Universitas",
    "org.sub": "Pengalaman kepanitiaan dan organisasi kemahasiswaan",
    "cert.sub": "Sertifikasi keahlian, kompetisi, dan pengakuan profesional",
    "back.home": "← Kembali ke Beranda",
    "explore.title": "Jelajahi Profil",
    "explore.sub": "Pilih menu di bawah untuk melihat informasi lengkap portofolio saya",
  },
  en: {
    "loading": "Loading portfolio...",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.organization": "Organizations",
    "nav.certifications": "Certifications",
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
    "tijari.1": "Developed digital-based systems, including concept design and feature development",
    "tijari.2": "Implemented IT solutions to support business and operational needs of the company",
    "edu.title": "Education",
    "edu.title2": "History",
    "edu.ubl.degree": "Bachelor of Informatics Engineering",
    "edu.active": "🟢 Active",
    "edu.now": "Present",
    "edu.ubl.desc": "Studying computer science, software development, information systems, and network infrastructure.",
    "edu.smk.degree": "Computer and Network Engineering",
    "edu.grad": "✅ Graduated",
    "edu.smk.desc": "Strong foundation in Computer and Network Engineering — hardware, software, and network infrastructure configuration.",
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
    "contact.sub": "Open to job opportunities, collaboration, or just a chat!",
    "contact.loc": "Location",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name",
    "contact.form.name.ph": "Your Name",
    "contact.form.msg": "Message",
    "contact.form.msg.ph": "Write your message here...",
    "contact.form.send": "Send Message",
    "contact.success.title": "WhatsApp Opened!",
    "contact.success.desc": "WhatsApp is opening with your message pre-filled. Just hit Send! ✅",
    "nav.home": "Home",
    "about.sub": "Get to know more about my background, character, and interests",
    "skills.sub": "Technical skills, soft skills, and tools I specialize in",
    "exp.sub": "Work history, professional roles, and project contributions",
    "edu.sub": "Formal educational background from vocational high school to university",
    "org.sub": "Committee and student organization experiences",
    "cert.sub": "Skill certifications, competitions, and professional credentials",
    "back.home": "← Back to Home",
    "explore.title": "Explore Profile",
    "explore.sub": "Select a section below to explore detailed portfolio information",
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

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  updateActiveNav();
});

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
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
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Build WhatsApp message
  const waNumber = "6281382473906"; // 08138... → 6281382...
  const waText = encodeURIComponent(
    `Halo Imtiyazian! 👋\n\n` +
    `Nama  : ${name}\n` +
    `Email : ${email}\n\n` +
    `Pesan :\n${message}`
  );
  const waURL = `https://wa.me/${waNumber}?text=${waText}`;

  // Show loading briefly then redirect
  btn.disabled = true;
  text.textContent = currentLang === "en" ? "Opening WhatsApp..." : "Membuka WhatsApp...";

  setTimeout(() => {
    // Show success UI
    form.style.display = "none";
    success.style.display = "block";

    // Open WhatsApp in new tab
    window.open(waURL, "_blank");

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
