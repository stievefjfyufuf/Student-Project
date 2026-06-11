# Vertical-Slice Issues

## Dependency Order

1. User can create a Course.
2. User can view Course list.
3. User can create a Study Session.
4. User can view Study Session list.
5. User can mark Study Session as Completed.
6. User can see validation errors.

---

## Issue 1: User can create a Course

## Type

AFK

## What to build

Membuat form agar user dapat menambahkan Course baru dengan nama yang valid.

## User stories covered

- Sebagai mahasiswa, saya ingin membuat Course agar saya dapat mengelompokkan sesi belajar berdasarkan mata kuliah.

## Acceptance criteria

- [ ] User dapat mengetik nama Course.
- [ ] User dapat submit form Course.
- [ ] Course tersimpan di LocalStorage.
- [ ] Course duplikat tidak diperbolehkan.
- [ ] Input kosong menampilkan pesan error.

## Blocked by

None.

## Testing notes

Test bahwa Course valid dapat ditambahkan dan disimpan.

## AI usage notes

AI boleh membantu membuat form dan logic LocalStorage, tetapi hasilnya harus dicek manual.

---

## Issue 2: User can view Course list

## Type

AFK

## What to build

Menampilkan daftar Course yang sudah dibuat user.

## User stories covered

- Sebagai mahasiswa, saya ingin melihat daftar Course agar saya tahu mata kuliah apa saja yang sedang saya pelajari.

## Acceptance criteria

- [ ] Course yang dibuat muncul di daftar Course.
- [ ] Course tetap muncul setelah refresh.
- [ ] Empty state muncul jika belum ada Course.

## Blocked by

Issue 1.

## Testing notes

Test bahwa Course yang tersimpan dapat ditampilkan.

## AI usage notes

AI boleh membantu membuat rendering list, tetapi tampilan harus dicek manual di browser.

---

## Issue 3: User can create a Study Session

## Type

AFK

## What to build

Membuat form agar user dapat membuat Study Session untuk Course tertentu.

## User stories covered

- Sebagai mahasiswa, saya ingin membuat Study Session untuk Course tertentu agar saya tahu kapan dan apa yang harus dipelajari.

## Acceptance criteria

- [ ] User dapat memilih Course.
- [ ] User dapat mengisi tanggal, jam, durasi, dan topik.
- [ ] Study Session tersimpan di LocalStorage.
- [ ] Status awal Study Session adalah Pending.
- [ ] Tanggal di masa lalu tidak diperbolehkan.

## Blocked by

Issue 1.

## Testing notes

Test bahwa Study Session valid dapat dibuat dan memiliki status Pending.

## AI usage notes

AI boleh membantu membuat struktur data dan form, tetapi relasi Course dan Study Session harus dicek manual.

---

## Issue 4: User can view Study Session list

## Type

AFK

## What to build

Menampilkan daftar Study Session yang sudah dibuat user.

## User stories covered

- Sebagai mahasiswa, saya ingin melihat daftar Study Session agar saya dapat mengikuti rencana belajar saya.

## Acceptance criteria

- [ ] Study Session muncul di daftar.
- [ ] Setiap item menampilkan Course, tanggal, jam, durasi, topik, dan status.
- [ ] Empty state muncul jika belum ada Study Session.
- [ ] Data tetap muncul setelah refresh.

## Blocked by

Issue 3.

## Testing notes

Test bahwa Study Session yang tersimpan dapat ditampilkan dengan data yang benar.

## AI usage notes

AI boleh membantu membuat rendering, tetapi informasi yang tampil harus diverifikasi manual.

---

## Issue 5: User can mark Study Session as Completed

## Type

AFK

## What to build

Menambahkan tombol untuk mengubah status Study Session dari Pending menjadi Completed.

## User stories covered

- Sebagai mahasiswa, saya ingin menandai Study Session sebagai Completed agar saya dapat melacak sesi belajar yang sudah selesai.

## Acceptance criteria

- [ ] Study Session Pending memiliki tombol Mark as Completed.
- [ ] Setelah tombol diklik, status berubah menjadi Completed.
- [ ] Status Completed tersimpan di LocalStorage.
- [ ] Status tetap Completed setelah refresh.
- [ ] Completed tidak bisa dikembalikan menjadi Pending di v1.

## Blocked by

Issue 4.

## Testing notes

Test bahwa status Study Session dapat berubah dari Pending ke Completed.

## AI usage notes

AI boleh membantu membuat fungsi update status, tetapi behavior harus diuji manual.

---

## Issue 6: User can see validation errors

## Type

HITL

## What to build

Menambahkan pesan error untuk input kosong, Course duplikat, dan input tidak valid.

## User stories covered

- Sebagai mahasiswa, saya ingin melihat pesan error saat input tidak valid agar saya tahu apa yang harus diperbaiki.

## Acceptance criteria

- [ ] Input Course kosong menampilkan error.
- [ ] Course duplikat menampilkan error.
- [ ] Study Session dengan field kosong menampilkan error.
- [ ] Tanggal di masa lalu menampilkan error.
- [ ] Error hilang setelah input valid.

## Blocked by

Issue 1 dan Issue 3.

## Testing notes

Test semua skenario input invalid.

## AI usage notes

AI boleh menyarankan pesan error, tetapi wording final diputuskan oleh student.
