/**
 * =========================================================================
 * APPLICATION LOGIC & DYNAMIC RENDERING
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.portfolioData || {};

  // Initialize features
  initTheme();
  renderPersonal(data.personal);
  renderSkills(data.skills);
  renderProjects(data.projects);
  renderExperience(data.experience);
  renderEducationAndCertifications(data.education, data.certifications);
  initInteractions(data.personal);

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * -------------------------------------------------------------------------
 * Theme Management (Dark / Light Mode)
 * -------------------------------------------------------------------------
 */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");

  function getPreferredTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
    localStorage.setItem("theme", theme);
  }

  applyTheme(getPreferredTheme());

  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    applyTheme(current === "dark" ? "light" : "dark");
    if (window.lucide) window.lucide.createIcons();
  });
}

/**
 * -------------------------------------------------------------------------
 * Render Personal & Hero Information
 * -------------------------------------------------------------------------
 */
function renderPersonal(personal = {}) {
  if (!personal) return;

  // Title tag & nav
  document.title = `${personal.name || "Portfolio"} | Resume & Showcase`;
  document.getElementById("nav-brand-name").textContent = personal.name || "Portfolio";

  // Hero section
  document.getElementById("hero-name").textContent = personal.name || "";
  document.getElementById("hero-role").textContent = personal.role || "";
  document.getElementById("hero-tagline").textContent = personal.tagline || "";
  document.getElementById("hero-availability").textContent = personal.availability || "Available";
  document.getElementById("hero-location").textContent = personal.location || "";

  const avatarEl = document.getElementById("hero-avatar");
  if (avatarEl && personal.avatar) {
    avatarEl.src = personal.avatar;
    avatarEl.alt = personal.name;
  }

  // Print Header
  document.getElementById("print-name").textContent = personal.name || "";
  document.getElementById("print-role").textContent = personal.role || "";
  document.getElementById("print-location").textContent = personal.location || "";
  document.getElementById("print-email").textContent = personal.email || "";
  document.getElementById("print-phone").textContent = personal.phone || "";
  document.getElementById("print-github").textContent = personal.socials?.github?.replace("https://", "") || "";
  document.getElementById("print-linkedin").textContent = personal.socials?.linkedin?.replace("https://", "") || "";

  // About Section
  const aboutContainer = document.getElementById("about-paragraphs");
  if (aboutContainer && Array.isArray(personal.about)) {
    aboutContainer.innerHTML = personal.about
      .map(p => `<p class="leading-relaxed">${escapeHtml(p)}</p>`)
      .join("");
  }

  // Social Links
  const socials = personal.socials || {};
  const setLink = (id, url) => {
    const el = document.getElementById(id);
    if (el && url) el.href = url;
  };
  setLink("social-github", socials.github);
  setLink("social-linkedin", socials.linkedin);
  setLink("social-twitter", socials.twitter);
  setLink("contact-github-link", socials.github);
  setLink("contact-linkedin-link", socials.linkedin);

  const contactEmailEl = document.getElementById("contact-email-link");
  if (contactEmailEl && personal.email) {
    contactEmailEl.textContent = personal.email;
    contactEmailEl.href = `mailto:${personal.email}`;
  }

  // Footer text
  const footerEl = document.getElementById("footer-text");
  if (footerEl) {
    const year = new Date().getFullYear();
    footerEl.textContent = `© ${year} ${personal.name}. Built with HTML5, Tailwind CSS & JavaScript. Deployed on Vercel.`;
  }
}

/**
 * -------------------------------------------------------------------------
 * Render Skills Matrix & Filtering
 * -------------------------------------------------------------------------
 */
function renderSkills(skills = []) {
  const container = document.getElementById("skills-grid");
  const filterBtns = document.querySelectorAll(".skill-filter-btn");
  if (!container) return;

  function displaySkills(category = "all") {
    const filtered = category === "all" ? skills : skills.filter(s => s.category === category);

    container.innerHTML = filtered.map(skill => `
      <div class="glass-panel rounded-2xl p-4 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all hover:-translate-y-0.5 group">
        <div class="flex items-center justify-between mb-2">
          <div class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/60 transition-colors">
            <i data-lucide="${skill.icon || 'code'}" class="w-4 h-4"></i>
          </div>
          <span class="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            ${escapeHtml(skill.level || '')}
          </span>
        </div>
        <h4 class="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          ${escapeHtml(skill.name)}
        </h4>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "shadow-sm");
        b.classList.add("text-slate-600", "dark:text-slate-400");
      });
      btn.classList.add("bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "shadow-sm");
      btn.classList.remove("text-slate-600", "dark:text-slate-400");

      displaySkills(btn.dataset.category);
    });
  });

  displaySkills("all");
}

/**
 * -------------------------------------------------------------------------
 * Render Projects Showcase & Modal
 * -------------------------------------------------------------------------
 */
function renderProjects(projects = []) {
  const container = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  if (!container) return;

  function displayProjects(filter = "all") {
    const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

    container.innerHTML = filtered.map(project => `
      <article class="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
        <div class="space-y-4">
          
          <!-- Category & Metrics Badge -->
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-indigo-400">
              ${escapeHtml(project.category)}
            </span>
            ${project.metrics ? `
              <span class="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                ${escapeHtml(project.metrics)}
              </span>
            ` : ''}
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            ${escapeHtml(project.title)}
          </h3>

          <!-- Description -->
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            ${escapeHtml(project.description)}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${(project.tags || []).map(t => `
              <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                ${escapeHtml(t)}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Links and Details CTA -->
        <div class="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <button data-project-id="${project.id}" class="open-project-modal text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1">
            <span>View Architecture</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
          
          <div class="flex items-center gap-3">
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="GitHub Code">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
            ` : ''}
            ${project.liveUrl ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors" title="Live Demo">
                <span>Demo</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    // Attach modal openers
    document.querySelectorAll(".open-project-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        const pId = btn.dataset.projectId;
        const target = projects.find(p => p.id === pId);
        if (target) openModal(target);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "shadow-sm");
        b.classList.add("text-slate-600", "dark:text-slate-400");
      });
      btn.classList.add("bg-white", "dark:bg-slate-800", "text-slate-900", "dark:text-white", "shadow-sm");
      btn.classList.remove("text-slate-600", "dark:text-slate-400");

      displayProjects(btn.dataset.filter);
    });
  });

  displayProjects("all");
}

/**
 * -------------------------------------------------------------------------
 * Render Work Experience Timeline
 * -------------------------------------------------------------------------
 */
function renderExperience(experience = []) {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = experience.map((item, idx) => `
    <div class="relative group">
      <!-- Milestone Node -->
      <div class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 ring-4 ring-indigo-100 dark:ring-indigo-950"></div>

      <!-- Experience Card -->
      <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h3 class="text-lg font-bold text-slate-900 dark:text-white">${escapeHtml(item.role)}</h3>
            <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">${escapeHtml(item.company)} • <span class="text-xs font-normal text-slate-500">${escapeHtml(item.location)}</span></p>
          </div>
          <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
            ${escapeHtml(item.period)}
          </span>
        </div>

        <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-300 pt-1">
          ${(item.achievements || []).map(ach => `
            <li class="flex items-start gap-2">
              <span class="text-indigo-500 mt-1 font-bold text-base leading-none">•</span>
              <span class="leading-relaxed">${escapeHtml(ach)}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/**
 * -------------------------------------------------------------------------
 * Render Education & Certifications
 * -------------------------------------------------------------------------
 */
function renderEducationAndCertifications(education = [], certs = []) {
  const eduContainer = document.getElementById("education-container");
  const certContainer = document.getElementById("certifications-container");

  if (eduContainer) {
    eduContainer.innerHTML = education.map(item => `
      <div class="border-l-2 border-purple-400 pl-4 py-1 space-y-1">
        <h4 class="font-bold text-slate-900 dark:text-white text-base">${escapeHtml(item.degree)}</h4>
        <p class="text-xs font-semibold text-purple-600 dark:text-purple-400">${escapeHtml(item.institution)} • ${escapeHtml(item.year)}</p>
        ${item.details ? `<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${escapeHtml(item.details)}</p>` : ''}
      </div>
    `).join("");
  }

  if (certContainer) {
    certContainer.innerHTML = certs.map(cert => `
      <div class="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
        <div>
          <h4 class="font-semibold text-sm text-slate-900 dark:text-white">${escapeHtml(cert.name)}</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(cert.issuer)} • ${escapeHtml(cert.year)}</p>
        </div>
        ${cert.credentialUrl ? `
          <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/50" title="Verify credential">
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        ` : ''}
      </div>
    `).join("");
  }
}

/**
 * -------------------------------------------------------------------------
 * General UI Interactions & Helpers
 * -------------------------------------------------------------------------
 */
function initInteractions(personal) {
  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
  }

  // Print / Save PDF Resume handlers
  const printTrigger = () => window.print();
  const btnPrint1 = document.getElementById("btn-print-resume");
  const btnPrint2 = document.getElementById("hero-btn-print");
  if (btnPrint1) btnPrint1.addEventListener("click", printTrigger);
  if (btnPrint2) btnPrint2.addEventListener("click", printTrigger);

  // Copy email to clipboard
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn && personal?.email) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(personal.email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast(`Email: ${personal.email}`);
      });
    });
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name").value;
      const subject = document.getElementById("form-subject").value;
      const message = document.getElementById("form-message").value;

      // Construct mailto link as fallback to immediately open their mail client
      const mailtoUrl = `mailto:${encodeURIComponent(personal?.email || "")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\n\n${message}`)}`;
      window.location.href = mailtoUrl;

      showToast("Thank you! Opening your email client to send message.");
      contactForm.reset();
    });
  }

  // Modal Close Listeners
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close-btn");
  if (modal && modalClose) {
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
    });
  }
}

function openModal(project) {
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-4">
      <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
        ${escapeHtml(project.category.toUpperCase())}
      </div>
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white">${escapeHtml(project.title)}</h3>
      <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(project.detailedDescription || project.description)}</p>

      ${project.metrics ? `
        <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          📈 Impact: ${escapeHtml(project.metrics)}
        </div>
      ` : ''}

      <div>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Technologies Used</h4>
        <div class="flex flex-wrap gap-2">
          ${(project.tags || []).map(t => `
            <span class="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              ${escapeHtml(t)}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="pt-4 flex items-center gap-3">
        ${project.liveUrl ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors inline-flex items-center gap-1.5 shadow-md">
            <span>View Live Project</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        ` : ''}
        ${project.githubUrl ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5 border border-slate-200 dark:border-slate-700">
            <i data-lucide="github" class="w-3.5 h-3.5"></i>
            <span>GitHub Repository</span>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  if (window.lucide) window.lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("toast-show"), 10);

  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3500);
}

function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
