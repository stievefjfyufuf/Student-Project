# TDD and Testing Report

## TDD Cycle 1

### Issue tested

Issue 1: User can create a Course.

### Behavior under test

Ketika user memasukkan nama Course yang valid, Course harus berhasil dibuat dan disimpan.

### Public interface

Course creation behavior melalui function atau form submit.

### RED

Test ditulis terlebih dahulu untuk memastikan Course dengan nama "Software Engineering" dapat ditambahkan.

Expected failing result:

```text
Expected course list to contain "Software Engineering", but received an empty list.
```

### GREEN

Implementasi minimal dibuat:

- Membuat object Course dengan id dan name.
- Menyimpan Course ke LocalStorage.
- Mengembalikan daftar Course terbaru.

### REFACTOR

Logic penyimpanan LocalStorage dipisahkan ke helper function agar lebih mudah digunakan ulang.

### Final result

Pass.

---

## TDD Cycle 2

### Issue tested

Issue 5: User can mark Study Session as Completed.

### Behavior under test

Ketika user menandai Study Session sebagai Completed, status berubah dari Pending menjadi Completed.

### Public interface

Study Session status update behavior.

### RED

Test ditulis terlebih dahulu untuk memastikan Study Session Pending dapat berubah menjadi Completed.

Expected failing result:

```text
Expected status to be "completed", but received "pending".
```

### GREEN

Implementasi minimal dibuat:

- Mencari Study Session berdasarkan id.
- Mengubah status dari pending menjadi completed.
- Menyimpan perubahan ke LocalStorage.

### REFACTOR

Logic update status dipisahkan menjadi function kecil agar lebih mudah dites.

### Final result

Pass.

---

# Browser Verification

## Main Flow

- [ ] User dapat membuat Course.
- [ ] User dapat melihat daftar Course.
- [ ] User dapat membuat Study Session.
- [ ] User dapat melihat daftar Study Session.
- [ ] User dapat menandai Study Session sebagai Completed.
- [ ] Data tetap ada setelah halaman di-refresh.

## Invalid Input Testing

- [ ] Input Course kosong menampilkan error.
- [ ] Course duplikat menampilkan error.
- [ ] Study Session dengan field kosong menampilkan error.
- [ ] Tanggal di masa lalu menampilkan error.

## Chrome DevTools Checks

- [ ] Console tidak menampilkan error tak terduga.
- [ ] LocalStorage berisi data Course.
- [ ] LocalStorage berisi data Study Session.
- [ ] Tampilan tetap usable pada mobile viewport.

## Screenshot Evidence

Screenshot disimpan di folder:

```text
assets/screenshots/
```

Bukti minimum:

- Screenshot atau log failing test.
- Screenshot atau log passing test.
- Screenshot aplikasi berjalan di browser.
- Screenshot atau catatan Chrome DevTools.
