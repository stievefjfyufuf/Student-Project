const assert = require("assert");

global.document = {
  addEventListener: () => {},
  querySelector: () => null,
};

global.localStorage = {
  getItem: () => null,
  setItem: () => {},
};

const { addCourse, markSessionCompleted } = require("../src/app.js");

function test(name, callback) {
  try {
    callback();
    console.log(`PASS: ${name}`);
  } catch (error) {
    console.error(`FAIL: ${name}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

test("addCourse should add a valid course", () => {
  const courses = [];

  const updatedCourses = addCourse(courses, "Software Engineering");

  assert.strictEqual(updatedCourses.length, 1);
  assert.strictEqual(updatedCourses[0].name, "Software Engineering");
  assert.ok(updatedCourses[0].id);
});

test("markSessionCompleted should change status from pending to completed", () => {
  const sessions = [
    {
      id: "session-1",
      courseId: "course-1",
      date: "2026-06-12",
      time: "19:00",
      duration: 60,
      topic: "Writing PRD",
      status: "pending",
    },
  ];

  const updatedSessions = markSessionCompleted(sessions, "session-1");

  assert.strictEqual(updatedSessions[0].status, "completed");
});
