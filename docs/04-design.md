# Design Document

## Technology Stack

Project menggunakan:

- HTML untuk struktur halaman.
- CSS untuk tampilan dan responsive layout.
- JavaScript vanilla untuk logic aplikasi.
- LocalStorage untuk penyimpanan data.

Alasan memilih stack ini adalah agar project tetap sederhana, mudah dipahami, dan realistis selesai dalam dua hari.

## User Flow

1. User membuka aplikasi Study Planner.
2. User membuat Course.
3. Aplikasi menampilkan daftar Course.
4. User membuat Study Session dengan memilih Course.
5. User mengisi tanggal, jam, durasi, dan topik.
6. Aplikasi menyimpan Study Session.
7. Aplikasi menampilkan daftar Study Session.
8. User menandai Study Session sebagai Completed.
9. Aplikasi menyimpan status Completed.

## Wireframe Sederhana

```text
+-------------------------------------+
| Study Planner                       |
+-------------------------------------+

[Create Course]
Course Name: [________________]
[Add Course]

Course List
- Software Engineering
- Database

[Create Study Session]
Course: [Dropdown]
Date: [Date]
Time: [Time]
Duration: [Minutes]
Topic: [________________]
[Add Study Session]

Study Session List
- Software Engineering | 12 June | 19:00 | 60 min | PRD | Pending | [Completed]
- Database | 13 June | 08:00 | 45 min | Normalization | Completed
```

## Data Model

### Course

```js
{
  id: "course-1",
  name: "Software Engineering"
}
```

### StudySession

```js
{
  id: "session-1",
  courseId: "course-1",
  date: "2026-06-12",
  time: "19:00",
  duration: 60,
  topic: "Writing PRD",
  status: "pending"
}
```

## Component Breakdown

### Course Form

- Menerima input nama Course.
- Melakukan validasi input.
- Menyimpan Course ke LocalStorage.

### Course List

- Menampilkan semua Course.
- Menampilkan empty state jika Course kosong.

### Study Session Form

- Menampilkan dropdown Course.
- Menerima input tanggal, jam, durasi, dan topik.
- Melakukan validasi input.
- Menyimpan Study Session ke LocalStorage.

### Study Session List

- Menampilkan semua Study Session.
- Menampilkan status Pending atau Completed.
- Menyediakan tombol Mark as Completed.

## File Structure

```text
src/
├── index.html
├── style.css
└── app.js

tests/
└── app.test.js
```

## Trade-Offs

1. LocalStorage lebih sederhana daripada database, tetapi hanya berlaku di satu browser.
2. Tidak ada login agar project lebih cepat selesai.
3. Tidak ada edit/delete agar scope tetap kecil.
4. Tidak ada automatic scheduling karena fitur tersebut terlalu besar untuk v1.
