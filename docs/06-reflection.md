# Reflection on AI Usage

## How did you use AI during requirements clarification?

Saya menggunakan AI dengan gaya grill-me untuk mengklarifikasi ide Study Planner. AI menanyakan pertanyaan tentang target user, problem statement, workflow, batasan fitur, dan success criteria. Dari proses tersebut, saya memilih scope Manual Study Planner untuk v1.

## How did you use AI during PRD creation?

Saya menggunakan AI untuk membantu mengubah hasil klarifikasi menjadi PRD. Saya memeriksa kembali bagian goals, non-goals, user stories, acceptance criteria, dan out-of-scope items agar sesuai dengan project dua hari.

## How did you use AI during issue breakdown?

Saya menggunakan AI untuk memecah PRD menjadi vertical-slice issues. Saya memastikan setiap issue berfokus pada behavior yang terlihat oleh user, bukan hanya berdasarkan layer teknis seperti frontend atau database.

## How did you use AI during coding?

Saya menggunakan AI untuk membantu merancang struktur file, membuat logic JavaScript, dan memahami penggunaan LocalStorage. Saya tetap memeriksa kode dan menjalankan aplikasi secara manual di browser.

## How did you use AI during testing?

Saya menggunakan AI untuk membantu menentukan fitur yang cocok diuji dengan TDD dan membuat checklist browser testing. Saya melakukan verifikasi manual untuk memastikan hasilnya sesuai acceptance criteria.

## Where did AI make mistakes or give weak suggestions?

AI sempat menyarankan fitur yang terlalu besar untuk v1, seperti smart priority planner, reminder, deadline logic, dan automatic scheduling. Saya memutuskan untuk menunda fitur tersebut sebagai future improvement agar scope tetap realistis.

## What did you verify manually?

Saya memverifikasi secara manual bahwa:

- Course dapat dibuat.
- Course duplikat ditolak.
- Study Session dapat dibuat.
- Study Session muncul di daftar.
- Study Session dapat ditandai sebagai Completed.
- Data tetap ada setelah refresh.
- Error muncul saat input tidak valid.
- Console browser tidak menampilkan error tak terduga.
- UI tetap usable pada ukuran layar mobile.

## What software engineering decision are you most confident about?

Saya paling yakin dengan keputusan menggunakan HTML, CSS, JavaScript vanilla, dan LocalStorage karena stack ini cukup sederhana untuk project dua hari dan tetap memenuhi kebutuhan utama aplikasi.

## What would you improve with more time?

Dengan waktu tambahan, saya ingin menambahkan fitur edit/delete Course, edit/delete Study Session, filter berdasarkan Course, reminder, dan smart priority planner.
