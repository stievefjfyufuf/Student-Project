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
