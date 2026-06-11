# Requirements Clarification

## 1. Product Idea

Study Planner adalah aplikasi web sederhana berbasis HTML, CSS, dan JavaScript vanilla untuk membantu mahasiswa membuat Course dan Study Session secara manual. Data disimpan menggunakan LocalStorage agar tetap ada setelah halaman di-refresh.

## 2. Problem Statement

Mahasiswa dengan jadwal padat sering kesulitan menjaga rencana belajar tetap terarah. Mereka membutuhkan alat sederhana untuk mencatat mata kuliah, membuat sesi belajar, dan melacak sesi mana yang sudah selesai.

## 3. Target Users

Target user utama adalah mahasiswa dengan jadwal padat, misalnya:

- Mengambil sekitar 20–23 SKS.
- Memiliki banyak tugas atau ujian.
- Kuliah sekitar 4–6 jam per hari.
- Mengikuti organisasi.
- Membutuhkan tracking belajar mandiri.

## 4. User Goals

User ingin:

- Membuat Course.
- Melihat daftar Course.
- Membuat Study Session untuk Course tertentu.
- Melihat daftar Study Session.
- Menandai Study Session sebagai Completed.
- Data tetap tersimpan setelah refresh.
- Mendapat pesan error saat input kosong, duplikat, atau tidak valid.

## 5. Functional Requirements

- User dapat membuat Course dengan nama yang valid.
- Course tidak boleh memiliki nama duplikat.
- User dapat melihat daftar Course.
- User dapat membuat Study Session untuk Course tertentu.
- Study Session berisi Course, tanggal, jam, durasi dalam menit, topik, dan status.
- Status awal Study Session adalah Pending.
- User dapat mengubah status dari Pending menjadi Completed.
- Data Course dan Study Session disimpan di LocalStorage.
- Data tetap muncul setelah halaman di-refresh.
- Aplikasi mencegah Study Session dengan tanggal di masa lalu.
- Aplikasi menampilkan pesan error untuk input kosong, Course duplikat, atau input tidak valid.

## 6. Non-Functional Requirements

- Aplikasi harus sederhana dan mudah digunakan.
- Aplikasi dapat diselesaikan dalam waktu sekitar dua hari.
- Aplikasi menggunakan HTML, CSS, dan JavaScript vanilla.
- Aplikasi tidak menggunakan backend atau database.
- UI tetap usable pada ukuran layar mobile.
- Browser Console tidak menampilkan error tak terduga.
- Minimal dua fitur memiliki bukti TDD dengan proses RED, GREEN, dan REFACTOR.

## 7. Assumptions

- Aplikasi digunakan oleh satu user pada satu browser/device.
- LocalStorage cukup untuk kebutuhan v1.
- Validasi utama dilakukan di frontend.
- Satu Study Session hanya terkait dengan satu Course.
- Durasi belajar disimpan dalam menit.

## 8. Constraints

- Scope harus kecil dan realistis untuk dua hari.
- Tidak ada login/authentication.
- Tidak ada backend/database.
- Tidak ada smart priority planner di v1.
- Tidak ada automatic scheduling di v1.
- Tidak ada edit/delete Course di v1.
- Tidak ada edit/delete Study Session di v1.
- Tidak ada perubahan status dari Completed kembali ke Pending di v1.

## 9. Open Questions

Tidak ada open question kritis untuk v1.

Keputusan kecil yang bisa ditentukan saat implementasi:

- Struktur file.
- Desain UI.
- Format pesan error.
- Cara mendokumentasikan bukti TDD.
