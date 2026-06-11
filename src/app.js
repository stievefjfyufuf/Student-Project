const COURSE_STORAGE_KEY = "courses";
const STUDY_SESSION_STORAGE_KEY = "studySessions";

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
  elements.courseNameInput = document.querySelector("#course-name");
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

  const courseName = elements.courseNameInput.value.trim();
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
  const studySessionData = {
    courseId: String(formData.get("courseId") || ""),
    date: String(formData.get("date") || ""),
    time: String(formData.get("time") || ""),
    duration: String(formData.get("duration") || ""),
    topic: String(formData.get("topic") || "").trim(),
  };

  const result = createStudySession(studySessionData);

  if (!result.ok) {
    showError(result.message);
    return;
  }

  elements.studySessionForm.reset();
  renderStudySessionList();
  showSuccess("Study Session berhasil ditambahkan.");
}

function handleStudySessionListClick(event) {
  const completeButton = event.target.closest("[data-complete-session-id]");

  if (!completeButton) {
    return;
  }

  const result = markStudySessionCompleted(completeButton.dataset.completeSessionId);

  if (!result.ok) {
    showError(result.message);
    return;
  }

  renderStudySessionList();
  showSuccess("Study Session berhasil ditandai sebagai Completed.");
}

function createCourse(name) {
  if (!name) {
    return {
      ok: false,
      message: "Nama Course tidak boleh kosong.",
    };
  }

  const isDuplicate = state.courses.some(
    (course) => course.name.toLowerCase() === name.toLowerCase()
  );

  if (isDuplicate) {
    return {
      ok: false,
      message: "Course dengan nama tersebut sudah ada.",
    };
  }

  const course = {
    id: createCourseId(),
    name,
  };

  state.courses.push(course);
  saveCourses(state.courses);

  return {
    ok: true,
    course,
  };
}

function loadCourses() {
  try {
    const storedCourses = localStorage.getItem(COURSE_STORAGE_KEY);
    return storedCourses ? JSON.parse(storedCourses) : [];
  } catch (error) {
    return [];
  }
}

function saveCourses(courses) {
  localStorage.setItem(COURSE_STORAGE_KEY, JSON.stringify(courses));
}

function loadStudySessions() {
  try {
    const storedStudySessions = localStorage.getItem(STUDY_SESSION_STORAGE_KEY);
    return storedStudySessions ? JSON.parse(storedStudySessions) : [];
  } catch (error) {
    return [];
  }
}

function saveStudySessions(studySessions) {
  localStorage.setItem(STUDY_SESSION_STORAGE_KEY, JSON.stringify(studySessions));
}

function createStudySession(data) {
  const duration = Number(data.duration);

  if (!data.courseId || !data.date || !data.time || !data.duration || !data.topic) {
    return {
      ok: false,
      message: "Semua field Study Session wajib diisi.",
    };
  }

  const courseExists = state.courses.some((course) => course.id === data.courseId);

  if (!courseExists) {
    return {
      ok: false,
      message: "Course yang dipilih tidak valid.",
    };
  }

  if (!Number.isFinite(duration) || duration <= 0) {
    return {
      ok: false,
      message: "Durasi harus lebih dari 0 menit.",
    };
  }

  if (isPastDate(data.date)) {
    return {
      ok: false,
      message: "Tanggal belajar tidak boleh di masa lalu.",
    };
  }

  const studySession = {
    id: createStudySessionId(),
    courseId: data.courseId,
    date: data.date,
    time: data.time,
    duration,
    topic: data.topic,
    status: "pending",
  };

  state.studySessions.push(studySession);
  saveStudySessions(state.studySessions);

  return {
    ok: true,
    studySession,
  };
}

function markStudySessionCompleted(studySessionId) {
  const studySession = state.studySessions.find((session) => session.id === studySessionId);

  if (!studySession) {
    return {
      ok: false,
      message: "Study Session tidak ditemukan.",
    };
  }

  if (studySession.status === "completed") {
    return {
      ok: false,
      message: "Study Session sudah Completed.",
    };
  }

  studySession.status = "completed";
  saveStudySessions(state.studySessions);

  return {
    ok: true,
    studySession,
  };
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

function renderStudySessionCard(studySession) {
  const course = state.courses.find((item) => item.id === studySession.courseId);
  const courseName = course ? course.name : "Course tidak ditemukan";
  const isCompleted = studySession.status === "completed";
  const actionMarkup = isCompleted
    ? '<p class="completed-note">Completed</p>'
    : `<button type="button" data-complete-session-id="${studySession.id}">Mark as Completed</button>`;

  return `
    <article class="study-session-card ${isCompleted ? "completed" : ""}">
      <div class="session-card-header">
        <div>
          <h3>${escapeHtml(courseName)}</h3>
          <p class="session-topic">${escapeHtml(studySession.topic)}</p>
        </div>
        <span class="status-badge ${isCompleted ? "completed" : "pending"}">${escapeHtml(studySession.status)}</span>
      </div>

      <div class="session-meta">
        <span>Date <strong>${formatDate(studySession.date)}</strong></span>
        <span>Time <strong>${escapeHtml(studySession.time)}</strong></span>
        <span>Duration <strong>${studySession.duration} min</strong></span>
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

function createCourseId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return `course-${globalThis.crypto.randomUUID()}`;
  }

  return `course-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createStudySessionId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return `session-${globalThis.crypto.randomUUID()}`;
  }

  return `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isPastDate(dateValue) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayValue = `${year}-${month}-${day}`;

  return dateValue < todayValue;
}

function formatDate(dateValue) {
  const [year, month, day] = dateValue.split("-");

  if (!year || !month || !day) {
    return escapeHtml(dateValue);
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
