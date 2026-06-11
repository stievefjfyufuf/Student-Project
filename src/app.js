const STORAGE_KEYS = {
  courses: "studyPlanner.courses",
  studySessions: "studyPlanner.studySessions",
};

const state = {
  courses: [],
  studySessions: [],
};

const elements = {};

function initApp() {
  cacheElements();
  state.courses = loadCourses();
  state.studySessions = loadStudySessions();
  bindEvents();
  renderCourseList();
  renderCourseOptions();
  renderStudySessionList();
}

function cacheElements() {
  elements.errorMessage = document.querySelector("#error-message");
  elements.courseForm = document.querySelector("#course-form");
  elements.courseList = document.querySelector("#course-list");
  elements.studySessionForm = document.querySelector("#study-session-form");
  elements.studySessionList = document.querySelector("#study-session-list");
  elements.sessionCourse = document.querySelector("#session-course");
}

function bindEvents() {
  elements.courseForm.addEventListener("submit", handleCourseSubmit);
  elements.studySessionForm.addEventListener("submit", handleStudySessionSubmit);
  elements.studySessionList.addEventListener("click", handleStudySessionListClick);
}

function handleCourseSubmit(event) {
  event.preventDefault();

  const formData = new FormData(elements.courseForm);
  const courseName = String(formData.get("courseName") || "").trim();

  const result = createCourse(courseName);

  if (!result.ok) {
    showError(result.message);
    return;
  }

  elements.courseForm.reset();
  renderCourseList();
  renderCourseOptions();
  showSuccess("Course berhasil ditambahkan.");
}

function handleStudySessionSubmit(event) {
  event.preventDefault();

  const formData = new FormData(elements.studySessionForm);
  const sessionData = {
    courseId: String(formData.get("courseId") || ""),
    date: String(formData.get("date") || ""),
    time: String(formData.get("time") || ""),
    duration: String(formData.get("duration") || ""),
    topic: String(formData.get("topic") || "").trim(),
  };

  const result = createStudySession(sessionData);

  if (!result.ok) {
    showError(result.message);
    return;
  }

  elements.studySessionForm.reset();
  renderStudySessionList();
  showSuccess("Study Session berhasil ditambahkan.");
}

function handleStudySessionListClick(event) {
  const button = event.target.closest("[data-complete-session-id]");

  if (!button) {
    return;
  }

  const sessionId = button.dataset.completeSessionId;
  const result = markStudySessionCompleted(sessionId);

  if (!result.ok) {
    showError(result.message);
    return;
  }

  renderStudySessionList();
  showSuccess("Study Session ditandai sebagai Completed.");
}

function loadCourses() {
  return loadFromStorage(STORAGE_KEYS.courses);
}

function saveCourses(courses) {
  saveToStorage(STORAGE_KEYS.courses, courses);
}

function loadStudySessions() {
  return loadFromStorage(STORAGE_KEYS.studySessions);
}

function saveStudySessions(studySessions) {
  saveToStorage(STORAGE_KEYS.studySessions, studySessions);
}

function loadFromStorage(key) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  } catch (error) {
    return [];
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function createCourse(name) {
  if (!name) {
    return { ok: false, message: "Nama Course tidak boleh kosong." };
  }

  const isDuplicate = state.courses.some(
    (course) => course.name.toLowerCase() === name.toLowerCase()
  );

  if (isDuplicate) {
    return { ok: false, message: "Course dengan nama tersebut sudah ada." };
  }

  const course = {
    id: createId("course"),
    name,
  };

  state.courses.push(course);
  saveCourses(state.courses);

  return { ok: true, course };
}

function createStudySession(data) {
  const duration = Number(data.duration);

  if (!data.courseId || !data.date || !data.time || !data.duration || !data.topic) {
    return { ok: false, message: "Semua field Study Session wajib diisi." };
  }

  if (!state.courses.some((course) => course.id === data.courseId)) {
    return { ok: false, message: "Course yang dipilih tidak valid." };
  }

  if (!Number.isFinite(duration) || duration <= 0) {
    return { ok: false, message: "Durasi harus lebih dari 0 menit." };
  }

  if (isPastDate(data.date)) {
    return { ok: false, message: "Tanggal belajar tidak boleh di masa lalu." };
  }

  const studySession = {
    id: createId("session"),
    courseId: data.courseId,
    date: data.date,
    time: data.time,
    duration,
    topic: data.topic,
    status: "Pending",
  };

  state.studySessions.push(studySession);
  saveStudySessions(state.studySessions);

  return { ok: true, studySession };
}

function markStudySessionCompleted(sessionId) {
  const session = state.studySessions.find((item) => item.id === sessionId);

  if (!session) {
    return { ok: false, message: "Study Session tidak ditemukan." };
  }

  if (session.status === "Completed") {
    return { ok: false, message: "Study Session sudah Completed." };
  }

  session.status = "Completed";
  saveStudySessions(state.studySessions);

  return { ok: true, studySession: session };
}

function renderCourseList() {
  if (state.courses.length === 0) {
    elements.courseList.innerHTML = '<li class="empty-state">Belum ada Course.</li>';
    return;
  }

  elements.courseList.innerHTML = state.courses
    .map((course) => `<li class="course-item">${escapeHtml(course.name)}</li>`)
    .join("");
}

function renderCourseOptions() {
  const options = state.courses
    .map((course) => `<option value="${course.id}">${escapeHtml(course.name)}</option>`)
    .join("");

  elements.sessionCourse.innerHTML = `<option value="">Pilih Course</option>${options}`;
}

function renderStudySessionList() {
  if (state.studySessions.length === 0) {
    elements.studySessionList.innerHTML = '<p class="empty-state">Belum ada Study Session.</p>';
    return;
  }

  elements.studySessionList.innerHTML = state.studySessions.map(renderStudySessionCard).join("");
}

function renderStudySessionCard(session) {
  const course = state.courses.find((item) => item.id === session.courseId);
  const courseName = course ? course.name : "Course tidak ditemukan";
  const isCompleted = session.status === "Completed";
  const actionMarkup = isCompleted
    ? '<p class="completed-note">Completed</p>'
    : `<button type="button" data-complete-session-id="${session.id}">Mark as Completed</button>`;

  return `
    <article class="study-session-card ${isCompleted ? "completed" : ""}">
      <div class="session-card-header">
        <div>
          <h3>${escapeHtml(courseName)}</h3>
          <p class="session-topic">${escapeHtml(session.topic)}</p>
        </div>
        <span class="status-badge ${isCompleted ? "completed" : "pending"}">${session.status}</span>
      </div>

      <div class="session-meta">
        <span>Date <strong>${formatDate(session.date)}</strong></span>
        <span>Time <strong>${session.time}</strong></span>
        <span>Duration <strong>${session.duration} min</strong></span>
      </div>

      ${actionMarkup}
    </article>
  `;
}

function showError(message) {
  elements.errorMessage.textContent = message;
  elements.errorMessage.classList.add("has-error");
  elements.errorMessage.classList.remove("has-success");
}

function showSuccess(message) {
  elements.errorMessage.textContent = message;
  elements.errorMessage.classList.add("has-success");
  elements.errorMessage.classList.remove("has-error");
}

function clearError() {
  elements.errorMessage.textContent = "Belum ada error.";
  elements.errorMessage.classList.remove("has-error");
  elements.errorMessage.classList.remove("has-success");
}

function createId(prefix) {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return `${prefix}-${globalThis.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isPastDate(dateValue) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayValue = `${yyyy}-${mm}-${dd}`;

  return dateValue < todayValue;
}

function formatDate(dateValue) {
  const [year, month, day] = dateValue.split("-");

  if (!year || !month || !day) {
    return dateValue;
  }

  return `${day}/${month}/${year}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", initApp);
