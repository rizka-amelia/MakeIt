const resepData = {
  rendang: {
    judul: "Rendang",
    gambar: "assets/resep/rendang.png",
    waktu: "4 jam",
    kesulitan: "Sulit",
    bahan: [
      "1 kg daging sapi, potong kotak",
      "400 ml santan kental",
      "200 ml santan cair",
      "3 lembar daun jeruk",
      "2 batang serai, memarkan",
      "3 lembar daun salam",
      "2 sdt garam",
      "1 sdm gula merah"
    ],
    bumbu: [
      "8 siung bawang merah",
      "6 siung bawang putih",
      "10 buah cabai merah",
      "5 buah cabai rawit",
      "1 ruas kunyit",
      "1 ruas jahe",
      "1 ruas lengkuas",
      "6 butir kemiri"
    ],
    langkah: [
      "Haluskan semua bumbu hingga halus",
      "Tumis bumbu halus hingga harum dan matang",
      "Masukkan daging, aduk hingga berubah warna",
      "Tuang santan cair, masak hingga mendidih",
      "Tambahkan daun jeruk, serai, dan daun salam",
      "Masak dengan api kecil sambil diaduk sesekali",
      "Setelah kuah menyusut, tambahkan santan kental",
      "Terus masak hingga kuah mengental dan berminyak",
      "Koreksi rasa, masak hingga daging empuk dan bumbu meresap"
    ]
  },
  
  gudeg: {
    judul: "Gudeg",
    gambar: "assets/resep/gudeg.png",
    waktu: "3 jam",
    kesulitan: "Sedang",
    bahan: [
      "500 gram nangka muda, potong-potong",
      "5 butir telur rebus",
      "500 ml santan kental",
      "750 ml air kelapa",
      "3 lembar daun salam",
      "1 batang serai, memarkan",
      "3 lembar daun jati",
      "2 sdt garam",
      "2 sdm gula merah"
    ],
    bumbu: [
      "6 siung bawang merah",
      "4 siung bawang putih",
      "4 butir kemiri",
      "1 sdt ketumbar bubuk",
      "1 ruas kunyit",
      "1 ruas jahe"
    ],
    langkah: [
      "Rebus nangka muda bersama daun jati selama 15 menit",
      "Haluskan semua bumbu",
      "Tumis bumbu halus bersama daun salam dan serai",
      "Masukkan nangka muda dan telur rebus",
      "Tuang air kelapa dan santan",
      "Masak dengan api kecil selama 2-3 jam",
      "Aduk sesekali hingga kuah menyusut",
      "Koreksi rasa, masak hingga matang"
    ]
  },
  
  mie_ayam: {
    judul: "Mie Ayam",
    gambar: "assets/resep/mie_ayam.png",
    waktu: "45 menit",
    kesulitan: "Mudah",
    bahan: [
      "400 gram mie basah",
      "300 gram daging ayam, potong dadu",
      "3 siung bawang putih, cincang",
      "2 sdm kecap manis",
      "1 sdm kecap asin",
      "1 sdt garam",
      "1 sdt gula",
      "2 sdm minyak goreng",
      "1 liter air kaldu ayam"
    ],
    langkah: [
      "Tumis bawang putih hingga harum",
      "Masukkan daging ayam, masak hingga berubah warna",
      "Tambahkan kecap manis, kecap asin, garam, dan gula",
      "Masak hingga ayam matang dan bumbu meresap",
      "Rebus mie basah hingga matang, tiriskan",
      "Siapkan mangkuk, masukkan mie dan ayam",
      "Siram dengan kuah kaldu panas",
      "Sajikan selagi hangat"
    ]
  },
  
  soto_ayam: {
    judul: "Soto Ayam",
    gambar: "assets/resep/soto_ayam.png",
    waktu: "1 jam",
    kesulitan: "Mudah",
    bahan: [
      "500 gram ayam, potong-potong",
      "2 batang serai, memarkan",
      "3 lembar daun jeruk",
      "2 liter air",
      "1 sdm garam",
      "1 sdt gula",
      "2 sdm minyak goreng"
    ],
    bumbu: [
      "6 siung bawang merah",
      "4 siung bawang putih",
      "4 butir kemiri",
      "1 ruas kunyit",
      "1 ruas jahe"
    ],
    langkah: [
      "Haluskan semua bumbu",
      "Tumis bumbu halus hingga harum",
      "Masukkan ayam, aduk hingga berubah warna",
      "Tambahkan air, serai, dan daun jeruk",
      "Rebus hingga ayam matang dan empuk",
      "Tambahkan garam dan gula",
      "Koreksi rasa, masak hingga kuah gurih",
      "Sajikan dengan nasi, telur, dan sambal"
    ]
  },
  
  ayam_geprek: {
    judul: "Ayam Geprek",
    gambar: "assets/resep/ayam_geprek.png",
    waktu: "30 menit",
    kesulitan: "Mudah",
    bahan: [
      "4 potong ayam fillet",
      "100 gram tepung terigu",
      "2 butir telur",
      "100 gram tepung roti",
      "1 sdt garam",
      "1 sdt merica",
      "Minyak untuk menggoreng"
    ],
    bumbu: [
      "10 buah cabai rawit",
      "3 siung bawang putih",
      "1 sdt garam",
      "1 sdt gula"
    ],
    langkah: [
      "Marinasi ayam dengan garam dan merica",
      "Celupkan ayam ke telur kocok",
      "Gulingkan dalam tepung terigu",
      "Celupkan lagi ke telur, lalu ke tepung roti",
      "Goreng hingga golden brown dan matang",
      "Haluskan semua bumbu sambal",
      "Geprek ayam yang sudah digoreng",
      "Campur dengan sambal, sajikan"
    ]
  },
  bubuy_ayam: {
    judul: "Bubuy Ayam",
    gambar: "assets/resep/bubuy_ayam.png",
    waktu: "3 Jam",
    kesulitan: "Sedang",
    bahan: [
      "1 ekor ayam kampung (sekitar 1 kg), potong menjadi 4 bagian",
      "5 lembar daun salam",
      "4 batang serai, memarkan",
      "6 lembar daun jeruk",
      "2 sdm air asam jawa",
      "1 sdm gula merah sisir",
      "2 sdt garam",
      "1 sdt kaldu bubuk (opsional)",
      "1 sdt lada bubuk",
      "Daun pisang secukupnya untuk membungkus",
      "Tusuk lidi atau benang untuk mengikat"
    ],
    bumbu: [
      "0 siung bawang merah",
      "6 siung bawang putih",
      "5 butir kemiri, sangrai",
      "1 sdm ketumbar sangrai",
      "1 ruas jahe",
      "1 ruas kunyit",
      "1 ruas lengkuas",
      "1 ruas kencur",
      "10 buah cabai merah keriting (sesuaikan selera)",
      "5 buah cabai rawit (jika suka pedas)"
    ],
    langkah: [
      "Haluskan semua bumbu halus dengan blender atau ulekan.",
      "Tumis bumbu halus hingga harum, lalu masukkan daun salam, daun jeruk, dan serai.",
      "Tambahkan air asam jawa, gula merah, garam, lada bubuk, dan kaldu bubuk. Masak hingga bumbu matang dan meresap.",
      "Masukkan ayam ke dalam tumisan bumbu. Masak hingga ayam setengah matang dan bumbu agak meresap.",
      "Siapkan daun pisang, layukan terlebih dahulu di atas api agar lentur.",
      "Bungkus ayam bersama bumbunya dalam daun pisang. Sematkan dengan lidi atau ikat dengan benang.",
      "Kukus ayam yang sudah dibungkus selama 1 jam agar benar-benar empuk dan bumbu meresap.",
      "Setelah dikukus, panggang atau bakar ayam di atas bara api atau teflon untuk memberikan aroma asap khas bubuy.",
      "Sajikan hangat bersama nasi putih dan sambal terasi."
    ]
  },
  sate_pusut: {
    judul: "Sate Pusut",
    gambar: "assets/resep/sate_pusut.webp",
    waktu: "1 Jam",
    kesulitan: "Sedang",
    bahan: [
      "300 gram daging cincang",
      "150 gram ampas kelapa muda parut (kelapa muda parut yang sudah diperas santannya)",
      "1 sendok makan minyak goreng (untuk mencampur adonan)",
      "1 sendok teh garam",
      "1 sendok makan gula pasir"
    ],
    bumbu: [
      "3 siung bawang putih",
      "3 siung bawang merah",
      "5 buah cabai rawit",
      "5 buah cabai keriting",
      "2 buah cabai merah besar",
      "1 sendok teh ketumbar",
      "1/2 ruas jari kunyit (kupas dan potong kecil untuk memudahkan menghaluskan)",
      "10 buah cabai merah keriting (sesuaikan selera)",
      "1/2 sendok teh merica"
    ],
    langkah: [
      "Campur bawang putih, bawang merah, cabai rawit, cabai keriting dan cabai merah dengan cara dihaluskan", 
      "Setelah adonan tercampur rata, tambahkan lagi bubuk ketumbar, kunyit  dan merica bubuk lalu aduk hingga merata",
      "Siapkan mangkuk besar",
      "Masukkan cincang halus daun jeruk  dan parutan ampas kelapa muda, lalu aduk hingga rata",
      "Masukkan daging giling dan campur dengan ampas kelapa muda",
      "Tambahkan garam dan gula pasir, lalu aduk hingga rata",
      "Tempatkan bumbu haluskan dalam mangkuk",
      "Aduk dengan tangan",
      "Gunakan tusuk sate dengan tulang rusuk daun kelapa pipih"
    ]
  },
  bebek: {
    judul: "Bebek Goreng Madura",
    gambar: "assets/resep/bebek_madura.jpg",
    waktu: "2 Jam",
    kesulitan: "Sedang",
    bahan: [
      "Daging bebek",
      "Jeruk Nipis",
      "Bawang merah",
      "Bawang putih",
      "Cabe merah",
      "Kemiri",
      "Batang Sereh",
      "Daun jeruk",
      "Lengkuas",
      "Jahe",
      "Kunyit",
      "Ketumbar",
      "Lada",
      "Asem jawa",
      "Garam, penyedap rasa dan gula putih",
      "Air",
      "Minyak Goreng"
    ],
    bumbu: [
      "Bawang merah",
      "Bawang putih",
      "Cabe merah",
      "Kemiri",
      "Batang Sereh",
      "Daun jeruk",
      "Lengkuas",
      "Jahe",
      "Kunyit",
      "Ketumbar",
      "Lada",
      "Garam, penyedap rasa dan gula putih"
    ],
    langkah: [
      "Cuci bersih daging bebek dan potomg-potong sesuai ukuran yang diinginkan. Setelah air sudah tiris, lumuri daging bebek dengan perasan jeruk nipis. Cara ini berguna untuk menghilangkan bau amis dan biarkanlah selama 30 menit. Potong-potong sesuai selera. Lalu kucuri dgn jeruk nipis, diamkan sekitar 30mnt, bilas kembali.", 
      "Tumis bumbu yang sudah dihaluskan di atas dengan minyak yang sedikit. Sambil diaduk-aduk hingga harum, berikanlah air secukupnya pda bumbu yang sudah ditumis. Kecilkan api agar air tidak cepat mengering.",
      "Masukan daging bebek yang sudah dibersihkan. Masaklah hingga daging bebek benar-benar empuk. Jika masih belum empuk masak lagi daging bebek selama 30 menit hingga air menyusut.",
      "Pisahkan bebek dengan bumbu tersebut. Berikutnya bumbu yang tersedia akan dibuatkan bumbu hitam untuk bebek goreng khas madura.",
      "Tambahkan minyak kelapa di bumbu ungkep bebek goreng. Tambahkan garam dan penyedap rasa secukupnya",
      "Aduklah secara terus menerus selama kurang lebih 30 menit - 1 jam tergantung banyaknya bumbu yang dibutuhkan.",
      "Koreksi rasa dan tambahkan penyedap rasa jika diperlukan. Siram keatas bebek yang sudah di goreng"
    ]
  },
  tekwan: {
    judul : "Tekwan",
    gambar: "assets/resep/tekwan.jpeg",
    waktu: "1,5 Jam",
    kesulitan: "Sedang",
    bahan: [
      "250 gram daging ikan tenggiri",
      "150 ml air es",
      "150 gram tepung tapioka {kanji)",
      "1 putih telur",
      "1 sendok teh garam",
      "1/2 sendok teh lada putih bubuk",
      "1/2 sendok teh penyedap rasa",
      "2 liter air",
      "150 gram udang segar (kupas, simpan kulit dan kepala untuk kaldu)",
      "2 siung bawang putih (cincang halus)",
      "1 batang daun bawang (iris tipis)",
      "2 batang seledri (iris tipis)",
      "1 sendok teh gula pasir",
      "Garam dan merica secukupnya",
      "1 sendok makan minyak untuk menumis",
      "Bihun (seduh air panas)",
      "Jamur kuping (rendam, iris tipis)",
      "Bengkuang atau labu siam (iris korek api dan rebus)",
      "Daun bawang dan seledri (iris halus)",
      "Bawang goreng secukupnya",
      "Sambal (opsional)",
      "Jeruk kunci atau jeruk nipis"
    ],
    bumbu: [
      "2 liter air",
      "150 gram udang segar (kupas, simpan kulit dan kepala untuk kaldu",
      "2 siung bawang putih (cincang halus)",
      "1 batang daun bawang (iris tipis)",
      "2 batang seledri (iris tipis)",
      "1 sendok teh gula pasir",
      "Garam dan merica secukupnya",
      "1 sendok makan minyak untuk menumis"
      ],
    langkah: [
      "Campurkan daging ikan giling, air es, garam, lada, dan putih telur. Aduk hingga halus dan rata.",
      "Tambahkan tepung tapioka sedikit demi sedikit hingga adonan kalis dan bisa dibentuk.",
      "Ambil adonan menggunakan sendok kecil, bentuk bulat kecil (seperti bakso), lalu masukkan ke dalam air mendidih.",
      "Rebus hingga mengapung, angkat dan tiriskan. Sisihkan.",
      "Rebus kulit dan kepala udang dalam 2 liter air selama ±15 menit. Saring air kaldunya.",
      "Tumis bumbu halus hingga harum, lalu masukkan udang kupas, tumis sebentar.",
      "Tuang ke dalam kaldu udang, tambahkan garam, gula, merica, dan penyedap jika suka.",
      "Masukkan jamur kuping dan bengkuang/labu siam. Masak hingga matang.",
      "Siapkan mangkuk. Tata bihun, tekwan, jamur, bengkuang/labu, dan siram dengan kuah panas.",        "Taburi daun bawang, seledri, dan bawang goreng.",
      "Sajikan bersama sambal dan perasan jeruk kunci agar lebih segar."
       ]
      },
  sate_emprit: {
    judul : "Sate Emprit Khas Kediri",
    gambar: "assets/resep/sate_emprit.jpg",
    waktu: "1 Jam",
    kesulitan: "Sedang",
    bahan: [
      "500 gram daging burung emprit, bersihkan dan buang tulangnya",
      "1 sendok makan air jeruk nipis",
      "1/2 sendok teh garam",
      "1 sendok makan gula merah, sisir halus",
      "1 sendok makan kecap manis",
      "Garam secukupnya",
      "Minyak goreng secukupnya"
    ],
    bumbu: [
      "5 siung bawang merah",
      "3 siung bawang putih",
      "2 butir kemiri, sangrai",
      "1 cm jahe",
      "1 cm kunyit",
      "1/2 sendok teh ketumbar bubuk",
      "1/4 sendok teh jintan bubuk",
      "1/4 sendok teh merica bubuk",
      ],
    langkah: [
      "Haluskan bawang merah, bawang putih, kemiri sangrai, jahe, kunyit, ketumbar bubuk, jintan bubuk, dan merica bubuk hingga halus.",
      "Panaskan minyak goreng dalam wajan. Tumis bumbu halus hingga harum dan matang.",
      "Masukkan daging emprit ke dalam bumbu tumisan. Aduk rata hingga bumbu meresap. Tambahkan gula merah, kecap manis, dan garam. Aduk rata dan masak hingga bumbu mengental dan daging emprit matang sempurna.",
      "Tusuk daging emprit ke dalam tusuk sate.",
      "Bakar sate di atas bara api atau panggangan hingga matang dan sedikit kecokelatan. Bolak-balik sate agar matang merata.",
      "Sajikan sate emprit dengan taburan bawang merah iris, cabai rawit iris (jika suka), dan perasan jeruk limau (jika suka). Tambahkan kecap manis sesuai selera."
      ]
      },
  kupat_tahu: {
    judul : "Kupat Tahu Khas Magelang",
    gambar: "assets/resep/kupat_tahu.webp",
    waktu: "45 Menit",
    kesulitan: "Mudah",
    bahan: [
      "10 buah tahu putih kecil",
      "Minyak goreng (untuk menggoreng tahu)",
      "100 gram tauge",
      "100 gram kol, iris kasar",
      "2 buah timun, iris kasar",
      "100 gram gula Jawa, iris halus",
      "600 ml air",
      "100 ml kecap manis",
      "1 sendok makan cuka masak",
      "Bawang merah goreng",
      "Kacang tanah goreng",
      "Seledri cincang"
    ],
    bumbu: [
      "10–15 buah cabai rawit merah",
      "5 siung bawang putih",
      "1 sendok teh garam",
      ],
   langkah: [
      "Cuci tahu hingga bersih lalu tiriskan.",
      "Goreng tahu hingga kulitnya kecokelatan dan agak kering lalu angkat. Potong-potong tahu goreng dan sisihkan.",
      "Seduh atau rebus sebentar tauge dan kol lalu tiriskan.",
      "Untuk saus: Rebus air, gula Jawa, dan cuka masak hingga gula larut. Setelah itu angkat dan saring kuahnya.",
      "Setelah saus hangat, campurkan dengan bumbu halus yang terdiri dari cabai rawit merah, bawang putih, dan garam. Aduk rata hingga tercampur sempurna.",
      "Susun potongan tahu di atas piring saji. Tambahkan kol, tauge, dan irisan timun di atas tahu.",
      "Siram seluruh bahan dengan saus yang telah dicampur bumbu halus.",
      "Sajikan kupat tahu dengan taburan bawang merah goreng, kacang tanah goreng, dan seledri cincang di atasnya."
      ]
    },
  soto_seger: {
    judul: "Soto Seger Khas Boyolali",
    gambar: "assets/resep/soto_seger.avif",
    waktu: "50 Menit",
    kesulitan: "Sedang",
    bahan: [
      "250 gram daging sapi, potong dadu",
      "1,5 liter air",
      "6 lembar daun jeruk",
      "3 lembar daun salam",
      "1 batang serai, dimemarkan",
      "1 ruas lengkuas, dimemarkan",
      "1 ruas jahe, dimemarkan",
      "1/2 sendok makan ketumbar bubuk",
      "1/2 sendok makan merica bubuk",
      "Kaldu jamur secukupnya",
      "Daun bawang secukupnya, iris tipis",
      "Taoge secukupnya",
      "Seledri secukupnya, cincang",
      "Garam secukupnya",
      "Gula pasir secukupnya"
    ],
    bumbu: [
      "8 buah bawang merah",
      "5 siung bawang putih"
    ],
    langkah: [
      "Siapkan air di dalam panci, lalu rebus air hingga mendidih.",
      "Setelah air mendidih, masukkan potongan daging sapi. Masak hingga daging empuk.",
      "Sambil menunggu daging empuk, haluskan bawang putih dan bawang merah.",
      "Masukkan bumbu halus ke dalam rebusan daging, aduk rata.",
      "Tambahkan daun jeruk, daun salam, serai, lengkuas, dan jahe ke dalam panci. Aduk hingga merata.",
      "Tambahkan ketumbar bubuk, merica bubuk, gula pasir, garam, dan kaldu jamur. Koreksi rasa sesuai selera.",
      "Masak hingga bumbu meresap dan daging benar-benar empuk.",
      "Masukkan irisan daun bawang, aduk sebentar lalu matikan kompor.",
      "Ambil nasi dan letakkan di dalam mangkuk saji.",
      "Tambahkan bihun (jika ada), taoge, dan seledri, lalu siram dengan kuah dan daging soto di atasnya."
    ]
  },
  tahu_kecap: {
    judul: "Tahu Kecap Pedas Manis",
    gambar: "assets/resep/tahu_kecap.png",
    waktu: "15 Menit",
    kesulitan: "Mudah",
    bahan: [
      "1 kotak tahu, potong sesuai selera",
      "Kecap manis secukupnya",
      "Minyak goreng secukupnya",
      "1 batang daun bawang, cincang kasar",
      "1 batang daun seledri, cincang kasar",
      "4 buah cabai merah besar, buang isi dan iris serong",
      "1/2 buah bawang bombay, iris tipis",
      "Air secukupnya"
    ],
    bumbu: [
      "3 siung bawang putih",
      "5 siung bawang merah",
      "Garam secukupnya",
      "Gula secukupnya",
      "Kaldu ayam bubuk secukupnya",
      "Lada bubuk secukupnya"
    ],
    langkah: [
      "Goreng tahu yang telah dipotong hingga setengah matang. Angkat dan tiriskan.",
      "Panaskan sedikit minyak goreng, lalu tumis bumbu halus hingga harum.",
      "Masukkan tahu goreng ke dalam tumisan bumbu, aduk hingga rata.",
      "Tambahkan daun bawang, cabai merah, daun seledri, dan irisan bawang bombay. Aduk kembali hingga merata.",
      "Tuangkan kecap manis sesuai selera, lalu aduk rata agar meresap.",
      "Tambahkan sedikit air, masak hingga matang dan bumbu meresap sempurna.",
      "Tahu kecap siap disajikan selagi hangat."
    ]
  },
  nasi_goreng_jawa: {
    judul: "Nasi Goreng Jawa",
    gambar: "assets/resep/nasi_goreng.jpg",
    waktu: "20 Menit",
    kesulitan: "Mudah",
    bahan: [
      "3 piring nasi dingin",
      "1 butir telur",
      "5–7 butir bakso, iris-iris (bisa diganti ayam atau protein lain)",
      "Minyak goreng secukupnya untuk menumis",
      "1 sendok makan gula",
      "2 sendok makan minyak wijen",
      "1 sendok teh kaldu jamur",
      "Kecap manis secukupnya",
      "2 sendok makan garam"
    ],
    bumbu: [
      "4 butir bawang putih",
      "6 butir bawang merah",
      "2 butir kemiri",
      "Ebi secukupnya, rendam hingga lunak",
      "1 sendok makan merica butir (bisa diganti lada halus)"
    ],
    langkah: [
      "Haluskan bawang putih, bawang merah, kemiri, ebi, dan merica hingga benar-benar halus.",
      "Panaskan sedikit minyak goreng di wajan, lalu tumis bumbu halus hingga harum dan matang.",
      "Masukkan irisan bakso dan telur ke dalam bumbu. Orak-arik telur sambil diaduk bersama bakso hingga setengah matang.",
      "Tambahkan nasi dingin, lalu aduk rata dengan bumbu dan bahan lainnya.",
      "Tambahkan gula, minyak wijen, kecap manis, kaldu jamur, dan garam. Aduk hingga semua bahan tercampur sempurna dan nasi terasa gurih serta merata.",
      "Koreksi rasa, masak sebentar lagi hingga nasi goreng benar-benar matang.",
      "Angkat dan sajikan nasi goreng Jawa dengan kerupuk, lalapan, dan taburan bawang merah goreng sesuai selera."
    ]
  },
  udang_asam_manis: {
    judul: "Udang Asam Manis",
    gambar: "assets/resep/udang_asam_manis.jpg",
    waktu: "30 Menit",
    kesulitan: "Sedang",
    bahan: [
      "2 sendok makan margarin",
      "500 gram udang pacet, belah punggung dan bersihkan",
      "2 sendok makan Bango Kecap Manis",
      "2 sendok makan air jeruk nipis",
      "1 sendok makan air asam jawa",
      "1 sendok teh gula merah",
      "1 sendok teh Royco Kaldu Ayam"
    ],
    bumbu: [
      "8 butir bawang merah",
      "6 buah cabai merah",
      "4 siung bawang putih",
      "1 buah bawang bombay",
      "1 buah tomat, buang bijinya"
    ],
    langkah: [
      "Masukkan seluruh bumbu (bawang merah, cabai merah, bawang putih, bawang bombay, dan tomat) ke dalam blender. Proses hingga halus.",
      "Panaskan margarin dalam wajan. Tumis bumbu halus hingga harum dan matang.",
      "Masukkan udang yang telah dibersihkan ke dalam tumisan. Aduk dan masak hingga udang berubah warna.",
      "Tambahkan Bango Kecap Manis, air jeruk nipis, air asam jawa, gula merah, dan Royco Kaldu Ayam ke dalam wajan.",
      "Aduk rata semua bahan dan masak hingga udang matang sempurna serta bumbu meresap.",
      "Angkat dan sajikan Udang Asam Manis selagi hangat."
    ]
  },
  seblak_kuah_kerupuk: {
    judul: "Seblak Kuah Kerupuk Basah",
    gambar: "assets/resep/seblak.png",
    waktu: "23 Menit",
    kesulitan: "Mudah",
    bahan: [
      "1 kg kerupuk aci atau kerupuk kanji warna putih",
      "Air panas secukupnya untuk merendam kerupuk",
      "8 butir telur ayam",
      "200 ml air",
      "4 sendok teh garam",
      "1 sendok teh gula pasir",
      "2 sendok teh kaldu ayam bubuk",
      "4 batang daun bawang, iris halus",
      "8 sendok makan minyak goreng untuk menumis",
      "12 buah sosis sapi, potong bulat diameter 1–2 cm",
      "10 buah bakso sapi, potong bulat tipis",
      "Bawang merah goreng secukupnya untuk taburan"
    ],
    bumbu: [
      "20 siung bawang putih",
      "6 butir bawang merah",
      "2 cm kencur",
      "5 buah cabai merah keriting",
      "10 buah cabai rawit"
    ],
    langkah: [
      "Rendam kerupuk dalam air panas hingga bening, lalu angkat dan tiriskan.",
      "Rebus kerupuk sebentar hingga lunak, tiriskan, lalu rendam kembali dalam air panas dan tiriskan kembali.",
      "Haluskan bumbu yang terdiri dari bawang putih, bawang merah, kencur, cabai merah keriting, dan cabai rawit.",
      "Panaskan minyak dalam wajan, lalu tumis bumbu halus hingga harum.",
      "Masukkan telur ke dalam wajan dan aduk hingga telur berbutir.",
      "Tambahkan potongan bakso dan sosis ke dalam tumisan, aduk rata.",
      "Masukkan kerupuk yang telah direbus dan daun bawang, lalu aduk hingga tercampur rata.",
      "Tambahkan garam, gula pasir, dan kaldu ayam bubuk. Aduk rata kembali.",
      "Tuangkan 200 ml air ke dalam wajan dan masak hingga semua bahan matang dan bumbu meresap.",
      "Sajikan seblak kuah kerupuk basah dalam keadaan hangat dengan taburan bawang merah goreng di atasnya."
    ]
  },
  oseng_kacang_tempe: {
    judul: "Oseng Kacang Panjang Tempe Kecap Pedas",
    gambar: "assets/resep/oseng_kacang_tempe.jpeg",
    waktu: "23 Menit",
    kesulitan: "Mudah",
    bahan: [
      "1 ikat kacang panjang, potong korek api",
      "1 papan tempe besar, potong dadu",
      "Garam secukupnya",
      "Gula pasir secukupnya",
      "Kaldu bubuk secukupnya",
      "Kecap manis secukupnya",
      "Saori saus tiram secukupnya"
    ],
    bumbu: [
      "4 siung bawang merah",
      "3 siung bawang putih",
      "5 cabai rawit merah",
      "10 cabai rawit hijau"
    ],
    langkah: [
      "Cuci bersih kacang panjang yang sudah dipotong korek api, lalu sisihkan.",
      "Goreng tempe yang sudah dipotong dadu hingga berwarna keemasan, lalu tiriskan.",
      "Tumis bumbu halus hingga harum. Tambahkan garam, gula, kecap manis, saus tiram, dan kaldu bubuk, lalu aduk rata.",
      "Masukkan kacang panjang ke dalam tumisan, aduk hingga tercampur rata, lalu tambahkan sedikit air.",
      "Masukkan tempe goreng, oseng-oseng sebentar hingga bumbu meresap. Koreksi rasa.",
      "Angkat dan sajikan selagi hangat."
    ]
  },
urap_sayur: {
  judul: "Urap Sayur",
  gambar: "assets/resep/urap.jpg",
  waktu: "30 Menit",
  kesulitan: "Sedang",
  bahan: [
    "6 buah kacang panjang",
    "2 genggam tauge",
    "2 buah wortel, potong korek api",
    "2 ikat bayam, petiki daunnya",
    "1 ikat kemangi",
    "1 ikat kecipir, iris serong",
    "1/2 butir kelapa setengah tua, parut",
    "5 lembar daun jeruk",
    "Secukupnya garam & gula merah"
  ],
  bumbu: [
    "5 siung bawang merah",
    "3 siung bawang putih",
    "1 ruas kencur",
    "1 buah cabai merah besar",
    "5 buah cabai merah keriting",
    "1/2 sendok teh terasi matang"
  ],
  langkah: [
    "Haluskan bumbu urap yang terdiri dari bawang merah, bawang putih, kencur, cabai merah besar, cabai merah keriting, dan terasi.",
    "Campurkan bumbu halus dengan kelapa parut, tambahkan daun jeruk, garam, dan gula merah.",
    "Masak campuran kelapa dan bumbu tersebut dengan cara digongso di atas api kecil sambil terus diaduk hingga kelapa matang dan bumbu meresap. Angkat dan dinginkan.",
    "Rebus semua sayuran (kacang panjang, tauge, wortel, bayam, kecipir) hingga matang namun tetap segar, lalu tiriskan.",
    "Campurkan semua sayuran rebus dan daun kemangi dalam mangkuk besar.",
    "Tambahkan bumbu kelapa yang sudah dimasak, aduk rata hingga semua sayuran terbalut bumbu.",
    "Sajikan urap sayur sebagai pelengkap nasi."
  ]
},
capcay_goreng: {
  judul: "Capcay Goreng",
  gambar: "assets/resep/capcay_goreng.jpg",
  waktu: "29 Menit",
  kesulitan: "Sedang",
  bahan: [
    "100 gram wortel, potong serong",
    "100 gram brokoli, potong",
    "150 gram bunga kol, potong",
    "50 gram kapri",
    "10 buah bakso, iris",
    "150 gram udang kecil, kupas kepala dan ekornya",
    "1 lembar kembang tahu, rendam air panas hingga lunak, potong",
    "1 batang daun bawang seledri, iris bulat",
    "4 siung bawang putih, memarkan dan cincang halus",
    "2 sendok teh merica",
    "2 sendok teh garam",
    "Minyak goreng secukupnya",
    "100 ml air"
  ],
  bumbu: [],
  langkah: [
    "Tumis bawang putih hingga harum.",
    "Tambahkan udang dan bakso, masak hingga udang berubah warna.",
    "Masukkan wortel dan air, masak hingga air mendidih.",
    "Tambahkan brokoli, kapri, kembang tahu, dan daun bawang.",
    "Beri garam dan merica, aduk rata, masak sebentar hingga matang.",
    "Sajikan capcay goreng selagi hangat."
  ]
},
tumis_jamur_tiram: {
  judul: "Tumis Jamur Tiram Cabe Ijo",
  gambar: "assets/resep/tumis_jamur_tiram.jpeg",
  waktu: "25 Menit",
  kesulitan: "Mudah",
  bahan: [
    "200 gram jamur tiram, bersihkan dan potong-potong",
    "2 buah cabai hijau besar, iris tipis",
    "3 siung bawang putih, cincang halus",
    "2 sendok makan kecap manis",
    "1 sendok makan saus tiram",
    "1 sendok teh gula pasir",
    "1/2 sendok teh garam",
    "1/4 sendok teh merica bubuk",
    "Minyak untuk menumis"
  ],
  bumbu: [],
  langkah: [
    "Panaskan sedikit minyak dalam wajan.",
    "Tumis bawang putih hingga harum.",
    "Masukkan irisan cabai hijau, tumis hingga layu.",
    "Tambahkan jamur tiram, aduk rata dan masak hingga matang.",
    "Tuangkan kecap manis, saus tiram, gula, garam, dan merica.",
    "Aduk merata dan masak sebentar hingga bumbu meresap.",
    "Angkat dan sajikan."
  ]
},
plecing_kangkung: {
  judul: "Plecing Kangkung",
  gambar: "assets/resep/plecing.jpeg",
  waktu: "20 Menit",
  kesulitan: "Mudah",
  bahan: [
    "1 ikat kangkung",
    "1 buah tomat",
    "3 buah cabai rawit",
    "5 buah cabai merah keriting",
    "4 siung bawang merah",
    "2 siung bawang putih",
    "1/2 sendok teh terasi bakar",
    "1/2 sendok teh gula merah",
    "1/2 sendok teh garam",
    "1 buah jeruk limau",
    "Kacang goreng secukupnya (opsional)"
  ],
  bumbu: [],
  langkah: [
    "Potong tomat menjadi beberapa bagian.",
    "Didihkan air dalam panci, rebus tomat, cabai keriting, cabai rawit, bawang merah, dan bawang putih hingga matang, lalu tiriskan.",
    "Haluskan bahan sambal bersama gula merah, garam, dan terasi hingga halus.",
    "Tambahkan air perasan jeruk limau ke dalam sambal, aduk rata.",
    "Didihkan kembali air, rebus kangkung hingga matang, angkat dan tiriskan.",
    "Tata kangkung di piring saji, tuangkan sambal di atasnya.",
    "Taburi kacang goreng di atasnya bila suka, dan plecing kangkung siap dinikmati."
  ]
},
beberuk_terong: {
  judul: "Beberuk Terong",
  gambar: "assets/resep/beberuk_terong.jpeg",
  waktu: "30 Menit",
  kesulitan: "Mudah",
  bahan: [
    "3 buah terong bulat, potong tipis",
    "2 batang kacang panjang, potong kecil",
    "1 buah tomat, potong dadu",
    "1 buah jeruk limau",
    "2 sendok makan minyak goreng"
  ],
  bumbu: [
    "5 buah cabai keriting",
    "3 buah cabai rawit",
    "1 cm kencur (opsional)",
    "½ sachet terasi udang bubuk",
    "½ sendok teh garam",
    "1 sendok teh gula aren"
  ],
  langkah: [
    "Potong-potong terong, kacang panjang, dan tomat. Campurkan dalam mangkuk besar.",
    "Haluskan cabai keriting, cabai rawit, dan kencur menggunakan ulekan.",
    "Tambahkan terasi udang bubuk, garam, dan gula aren ke dalam ulekan. Ulek hingga merata.",
    "Masukkan bumbu halus ke dalam campuran sayur, aduk rata.",
    "Panaskan minyak goreng, tumis bawang merah sebentar hingga harum.",
    "Tuangkan minyak beserta bawangnya ke dalam campuran beberuk, aduk rata.",
    "Peras jeruk limau ke dalam beberuk dan aduk kembali hingga semua bahan tercampur.",
    "Beberuk terong siap disajikan sebagai pendamping lauk atau nasi hangat."
  ]
}
};

function loadResep() {
  const urlParams = new URLSearchParams(window.location.search);
  const resepId = urlParams.get('id');
  
  if (!resepId || !resepData[resepId]) {
    document.getElementById('resep-judul').textContent = 'Resep tidak ditemukan';
    return;
  }
  
  const resep = resepData[resepId];
  
  document.getElementById('resep-judul').textContent = resep.judul;
  document.getElementById('resep-gambar').src = resep.gambar;
  document.getElementById('resep-gambar').alt = resep.judul;
  document.getElementById('resep-waktu').textContent = resep.waktu;
  document.getElementById('resep-kesulitan').textContent = resep.kesulitan;
  
  const bahanList = document.getElementById('bahan-list');
  bahanList.innerHTML = '';
  resep.bahan.forEach(bahan => {
    const li = document.createElement('li');
    li.textContent = bahan;
    bahanList.appendChild(li);
  });
  
  if (resep.bumbu && resep.bumbu.length > 0) {
    document.getElementById('resep-bumbu').style.display = 'block';
    const bumbuList = document.getElementById('bumbu-list');
    bumbuList.innerHTML = '';
    resep.bumbu.forEach(bumbu => {
      const li = document.createElement('li');
      li.textContent = bumbu;
      bumbuList.appendChild(li);
    });
  }
  
  const langkahList = document.getElementById('langkah-list');
  langkahList.innerHTML = '';
  resep.langkah.forEach(langkah => {
    const li = document.createElement('li');
    li.textContent = langkah;
    langkahList.appendChild(li);
  });
  
  setupFavoritBtn(resepId);
  setupRatingBtn(resepId);
}

function setupFavoritBtn(resepId) {
  const btnFavorit = document.getElementById('btn-favorit');
  if (!btnFavorit) return;
  
  updateFavoritButtonDisplay(resepId);
  
  btnFavorit.addEventListener('click', function() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      swal("Login Required", "Silakan login untuk menambah favorit!", "warning").then(() => {
        window.location.href = "login.html";
      });
      return;
    }

    const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '[]');
    
    if (favoriteItems.includes(resepId)) {
      const index = favoriteItems.indexOf(resepId);
      favoriteItems.splice(index, 1);
      swal("Berhasil", "Resep dihapus dari favorit!", "success");
    } else {
      favoriteItems.push(resepId);
      swal("Berhasil", "Resep ditambahkan ke favorit!", "success");
    }
    
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    updateFavoritButtonDisplay(resepId);
  });
}

function updateFavoritButtonDisplay(resepId) {
  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '[]');
  const btnFavorit = document.getElementById('btn-favorit');
  
  if (btnFavorit) {
    if (favoriteItems.includes(resepId)) {
      btnFavorit.innerHTML = '❤️ Hapus dari Favorit';
      btnFavorit.classList.remove('btn-outline-warning');
      btnFavorit.classList.add('btn-warning');
    } else {
      btnFavorit.innerHTML = '❤️ Tambah ke Favorit';
      btnFavorit.classList.remove('btn-warning');
      btnFavorit.classList.add('btn-outline-warning');
    }
  }
}

function setupRatingBtn(resepId) {
  const stars = document.querySelectorAll('.star');
  const ratingText = document.getElementById('rating-text');
  const savedRating = localStorage.getItem(`rating_${resepId}`);
  
  // INISIALISASI BINTANG JADI ABU-ABU DULU (FIX BUG)
  stars.forEach(star => {
    star.style.cursor = 'pointer';
    star.style.fontSize = '24px';
    star.style.color = '#ddd';
    star.style.marginRight = '5px';
  });
  
  // KALAU ADA RATING TERSIMPAN, BARU TAMPILKAN
  if (savedRating) {
    updateStarsDisplay(parseInt(savedRating));
    if (ratingText) {
      ratingText.textContent = `Rating Anda: ${savedRating}/5 bintang`;
    }
  } else {
    // KALAU BELUM ADA RATING, TAMPILKAN PESAN DEFAULT
    if (ratingText) {
      ratingText.textContent = 'Belum ada rating. Klik bintang untuk memberi rating!';
    }
  }
  
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (!loggedInUser) {
        swal("Login Required", "Silakan login untuk memberi rating!", "warning").then(() => {
          window.location.href = "login.html";
        });
        return;
      }

      const rating = parseInt(this.dataset.rating);
      localStorage.setItem(`rating_${resepId}`, rating);
      updateStarsDisplay(rating);
      if (ratingText) {
        ratingText.textContent = `Rating Anda: ${rating}/5 bintang`;
      }
      swal("Terima kasih!", `Anda memberi rating ${rating} bintang!`, "success");
    });
  });
}

function updateStarsDisplay(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = '#ffc107';
    } else {
      star.style.color = '#ddd';
    }
  });
}

document.addEventListener('DOMContentLoaded', loadResep);