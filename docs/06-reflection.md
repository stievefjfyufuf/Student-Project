# Reflection

## Bagaimana saya menggunakan AI saat requirements clarification?

Saya menggunakan AI sebagai interviewer Software Engineering yang ketat untuk memperjelas ide Study Planner. AI membantu menanyakan hal-hal penting seperti target user, tujuan aplikasi, workflow, batasan, edge case, dan success criteria. Dari proses itu, scope project menjadi lebih jelas dan realistis untuk dikerjakan dalam dua hari.

## Bagaimana saya menggunakan AI saat membuat PRD?

Saya menggunakan AI untuk mengubah hasil klarifikasi requirements menjadi Product Requirements Document atau PRD. PRD tersebut berisi product overview, goals, non-goals, target users, user stories, core features, acceptance criteria, success criteria, risks, dan out-of-scope items.

## Bagaimana saya menggunakan AI saat membuat issue breakdown?

Saya menggunakan AI untuk memecah PRD menjadi vertical-slice issues. Issue dibuat berdasarkan behavior yang bisa dilihat user, seperti membuat Course, melihat Course List, membuat Study Session, melihat Study Session List, menandai Completed, dan menampilkan validation errors.

## Bagaimana saya menggunakan AI saat design?

Saya menggunakan AI untuk membantu membuat design document sebelum coding. Design tersebut mencakup user flow, wireframe sederhana, component breakdown, data model, file structure, technology stack decision, dan trade-offs.

## Bagaimana saya menggunakan AI saat coding?

Saya menggunakan AI untuk membantu implementasi fitur satu per satu berdasarkan issue. Saya tidak langsung meminta AI membuat semua fitur sekaligus. Setiap hasil dari AI saya review, saya cek apakah masih sesuai PRD, lalu saya test manual di browser sebelum commit ke GitHub.

## Bagaimana saya menggunakan AI saat testing?

Saya menggunakan AI sebagai TDD coach untuk membuat test pada dua behavior utama:

- menambahkan Course yang valid
- menandai Study Session sebagai Completed

Saya mengikuti proses RED, GREEN, dan REFACTOR. Hasil testing dan evidence saya dokumentasikan di `docs/05-tdd-and-testing.md`.

## Di mana AI membuat kesalahan atau memberi saran yang kurang tepat?

AI beberapa kali mengira file tertentu sudah tersedia di workspace, padahal file tersebut belum ada. AI juga kadang perlu diarahkan ulang agar tidak menambahkan fitur di luar scope PRD. Karena itu, saya tetap harus mengecek nama file, lokasi folder, branch GitHub, dan hasil implementasi secara manual.

## Apa saja yang saya verifikasi secara manual?

Saya melakukan verifikasi manual untuk:

- membuat Course
- melihat Course List
- membuat Study Session
- melihat Study Session List
- menandai Study Session sebagai Completed
- melihat validation error
- memastikan data tetap ada setelah refresh
- mengecek aplikasi di browser dan Chrome DevTools

## Keputusan Software Engineering apa yang paling saya yakini?

Saya paling yakin dengan keputusan untuk menjaga scope v1 tetap kecil dan sederhana. Dengan menggunakan HTML, CSS, JavaScript vanilla, dan LocalStorage, project ini tetap realistis untuk dikerjakan dalam waktu dua hari, tetapi masih cukup untuk menunjukkan proses Software Engineering dari requirements sampai testing dan delivery.

## Apa yang akan saya tingkatkan jika punya lebih banyak waktu?

Jika punya lebih banyak waktu, saya akan menambahkan fitur edit dan delete, memperbaiki tampilan UI, menambahkan lebih banyak automated test, meningkatkan responsive layout, dan mungkin menambahkan backend/database agar data bisa dipakai di lebih dari satu device.
