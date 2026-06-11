const COURSE_STORAGE_KEY = "courses";

const state = {
  courses: [],
};

const elements = {};

function initApp() {
  cacheElements();
  state.courses = loadCourses();
  bindEvents();
  renderCourseList();
  renderCourseOptions();
  renderStudySessionPlaceholder();
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
  showError("Study Session belum diimplementasikan pada Issue 3.");
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

function renderStudySessionPlaceholder() {
  elements.studySessionList.innerHTML = '<p class="empty-state">Study Session belum diimplementasikan.</p>';
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

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", initApp);
