# Product Requirements Document: Study Planner

## 1. Product Overview

Study Planner adalah aplikasi web sederhana untuk membantu mahasiswa mengatur Course dan Study Session secara manual. Aplikasi ini berfokus pada pencatatan jadwal belajar sederhana, bukan pembuatan jadwal otomatis.

## 2. Goals

- Membantu mahasiswa mencatat Course yang sedang dipelajari.
- Membantu mahasiswa membuat Study Session untuk Course tertentu.
- Membantu mahasiswa melihat jadwal belajar yang sudah dibuat.
- Membantu mahasiswa menandai Study Session yang sudah selesai.
- Menyediakan aplikasi kecil yang realistis untuk diselesaikan dalam project dua hari.

## 3. Non-Goals

- Tidak menyediakan login.
- Tidak menggunakan backend atau database.
- Tidak menyediakan reminder.
- Tidak terhubung dengan Google Calendar.
- Tidak membuat jadwal otomatis.
- Tidak menghitung prioritas belajar.
- Tidak menyediakan fitur edit/delete di v1.

## 4. Target Users

Target user adalah mahasiswa dengan jadwal padat yang ingin mencatat rencana belajar secara sederhana dan manual.

## 5. User Stories

1. Sebagai mahasiswa, saya ingin membuat Course agar saya dapat mengelompokkan sesi belajar berdasarkan mata kuliah.
2. Sebagai mahasiswa, saya ingin melihat daftar Course agar saya tahu mata kuliah apa saja yang sedang saya pelajari.
3. Sebagai mahasiswa, saya ingin membuat Study Session untuk Course tertentu agar saya tahu kapan dan apa yang harus dipelajari.
4. Sebagai mahasiswa, saya ingin melihat daftar Study Session agar saya dapat mengikuti rencana belajar saya.
5. Sebagai mahasiswa, saya ingin menandai Study Session sebagai Completed agar saya dapat melacak sesi belajar yang sudah selesai.
6. Sebagai mahasiswa, saya ingin melihat pesan error saat input tidak valid agar saya tahu apa yang harus diperbaiki.

## 6. Core Features

- Create Course.
- View Course List.
- Create Study Session.
- View Study Session List.
- Mark Study Session as Completed.
- Input Validation.

## 7. Acceptance Criteria

### Create Course

- User dapat memasukkan nama Course.
- User dapat menyimpan Course.
- Course tersimpan di LocalStorage.
- Course dengan nama duplikat ditolak.
- Input kosong menampilkan pesan error.

### View Course List

- User dapat melihat daftar Course.
- Course tetap muncul setelah halaman di-refresh.
- Jika belum ada Course, aplikasi menampilkan empty state.

### Create Study Session

- User dapat memilih Course.
- User dapat mengisi tanggal, jam, durasi, dan topik.
- Study Session tersimpan di LocalStorage.
- Tanggal di masa lalu tidak diperbolehkan.
- Input kosong menampilkan pesan error.

### View Study Session List

- User dapat melihat daftar Study Session.
- Setiap Study Session menampilkan Course, tanggal, jam, durasi, topik, dan status.
- Jika belum ada Study Session, aplikasi menampilkan empty state.

### Mark Study Session as Completed

- Study Session baru memiliki status Pending.
- User dapat menandai Study Session sebagai Completed.
- Status Completed tersimpan setelah refresh.
- Completed tidak bisa dikembalikan ke Pending di v1.

## 8. Success Criteria

Project dianggap berhasil jika:

- User dapat membuat Course.
- User dapat melihat daftar Course.
- User dapat membuat Study Session untuk Course tertentu.
- User dapat melihat daftar Study Session.
- User dapat menandai Study Session sebagai Completed.
- Data Course dan Study Session tetap ada setelah refresh.
- Aplikasi menampilkan pesan error untuk input kosong, duplikat, atau tidak valid.
- Minimal dua fitur memiliki bukti TDD RED-GREEN-REFACTOR.
- Main flow berhasil diuji manual di browser.
- Console browser tidak memiliki error tak terduga.
- UI tetap usable pada ukuran layar mobile.

## 9. Risks

- Scope bisa menjadi terlalu besar jika menambahkan fitur smart planner.
- LocalStorage hanya menyimpan data di satu browser/device.
- Validasi tanggal dan jam bisa menjadi kompleks jika terlalu detail.
- UI bisa membingungkan jika form dan daftar tidak disusun dengan baik.

## 10. Out-of-Scope Items

- Login.
- Backend.
- Database.
- Reminder.
- Calendar integration.
- Smart priority planner.
- Automatic scheduling.
- Edit/delete Course.
- Edit/delete Study Session.
