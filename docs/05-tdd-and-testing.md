# TDD and Testing Report

## TDD Cycle 1

### Issue tested

Issue 1: User can create a Course.

### Behavior under test

Ketika user memasukkan nama Course yang valid, Course harus berhasil dibuat dan masuk ke daftar Course.

### Public interface

Function `addCourse`.

### RED

Saya menulis test terlebih dahulu untuk memastikan Course dengan nama valid dapat ditambahkan.

Hasil awal test gagal karena function `addCourse` belum tersedia.

Evidence:

```text
FAIL: addCourse should add a valid course
addCourse is not a function

## TDD Cycle 2

### Issue tested

Issue 5: User can mark Study Session as Completed.

### Behavior under test

Ketika Study Session memiliki status `pending`, user dapat menandai Study Session tersebut sebagai `completed`.

### Public interface

Function `markSessionCompleted`.

### RED

Saya menulis test terlebih dahulu untuk memastikan Study Session dengan status `pending` dapat berubah menjadi `completed`.

Pada tahap RED, test gagal karena function `markSessionCompleted` belum tersedia.

Evidence:

```text
FAIL: markSessionCompleted should change status from pending to completed
markSessionCompleted is not a function
```

Screenshot evidence:

```text
assets/screenshots/red-failing-test.png.jpeg
```

### GREEN

Saya menambahkan implementasi minimum untuk function `markSessionCompleted`.

Function ini menerima daftar Study Session dan `sessionId`, lalu mengembalikan daftar Study Session baru dengan status session yang sesuai berubah menjadi `completed`.

Hasil test setelah GREEN:

```text
PASS: markSessionCompleted should change status from pending to completed
```

### REFACTOR

Saya merapikan function `markSessionCompleted` menjadi pure function agar lebih mudah dites dan tidak langsung bergantung pada DOM atau LocalStorage.

Setelah refactor, test tetap pass.

### Final result

Pass.

---

## Final Test Result

Command yang digunakan untuk menjalankan test:

```bash
node tests/app.test.js
```

Final result:

```text
PASS: addCourse should add a valid course
PASS: markSessionCompleted should change status from pending to completed
```

## Screenshot Evidence

Bukti RED failing test:

```text
assets/screenshots/red-failing-test.png.jpeg
```

Bukti GREEN dan REFACTOR passing test:

```text
assets/screenshots/green-refactor-passing-test.png.jpeg
```

## Notes

* RED menunjukkan test gagal karena function belum tersedia.
* GREEN menunjukkan implementasi minimum membuat test berhasil.
* REFACTOR dilakukan untuk merapikan logic tanpa mengubah behavior.
* Setelah refactor, semua test tetap pass.


---

## Browser and Chrome DevTools Verification

### Main Flow

Main flow berhasil diuji di browser.

Flow yang diuji:

- User membuat Course.
- User melihat Course di Course List.
- User membuat Study Session untuk Course tertentu.
- User melihat Study Session di Study Session List.
- User menandai Study Session sebagai Completed.
- Setelah halaman di-refresh, data masih muncul.

Screenshot evidence:

```text
assets/screenshots/app-working-browser.png

Validation Error

Validasi input berhasil diuji di browser.

Error yang diuji:

Course kosong menampilkan pesan error.
Study Session dengan field kosong menampilkan pesan error.
Input tidak valid menampilkan pesan error.

Console Check

Chrome DevTools Console dicek saat aplikasi dijalankan. Tidak ada error merah yang mengganggu main flow aplikasi.

LocalStorage Check

Data diuji secara manual dengan refresh browser. Course dan Study Session tetap muncul setelah halaman di-refresh, sehingga penyimpanan LocalStorage dianggap berjalan sesuai kebutuhan v1.

Mobile Layout Check

Layout aplikasi dicek pada tampilan browser yang diperkecil. Form dan daftar masih dapat digunakan.

assets/screenshots/app-working-browser.png
assets/screenshots/validation-error-browser.png

