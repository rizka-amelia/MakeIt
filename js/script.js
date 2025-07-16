// ==================== REGISTER ====================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const no_hp = document.getElementById("no_hp").value.trim();

    if (!email || !password || !nama || !alamat || !no_hp) {
      swal("Gagal", "Semua field harus diisi!", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      swal("Gagal", "Format email tidak valid!", "error");
      return;
    }

    const userData = {
      email,
      password,
      nama,
      alamat,
      no_hp,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = existingUsers.some(user => user.email === email);

    if (emailExists) {
      swal("Gagal", "Email sudah terdaftar!", "error");
    } else {
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      
      console.log("User registered:", userData);
      console.log("All users:", existingUsers);
      
      swal("Berhasil", "Pendaftaran berhasil! Silakan login.", "success").then(() => {
        window.location.href = "login.html";
      });
    }
  });

  window.addEventListener("load", function () {
    const container = document.querySelector(".login-container");
    if (container) {
      container.style.opacity = "0";
      container.style.transform = "translateY(50px)";
      setTimeout(() => {
        container.style.transition = "all 0.6s ease";
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
      }, 100);
    }
  });
}

// ==================== LOGIN ====================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      swal("Gagal", "Username dan password harus diisi!", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      swal("Gagal", "Format email tidak valid!", "error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    console.log("Users data:", users);
    console.log("Login attempt:", { email, password });
    
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      swal("Berhasil", "Login berhasil!", "success").then(() => {
        window.location.href = "index.html";
      });
    } else {
      const emailExists = users.find(u => u.email === email);
      if (emailExists) {
        swal("Gagal", "Password anda salah!", "error");
      } else {
        swal("Gagal", "Username atau password anda salah!", "error"); 
      }
    }
  });

  window.addEventListener("load", function () {
    const container = document.querySelector(".register-container");
    if (container) {
      container.style.opacity = "0";
      container.style.transform = "translateY(50px)";
      setTimeout(() => {
        container.style.transition = "all 0.6s ease";
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
      }, 100);
    }
  });
}

// ==================== NAVBAR LOGIN STATUS - PERBAIKAN POIN 1 ====================
function updateNavbar() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const loginBtn = document.querySelector('.btn[href="login.html"]');
  const logoutBtn = document.querySelector('.logout-btn');
  
  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser);
    
    if (loginBtn) {
      loginBtn.innerHTML = `Hai, ${userData.nama}`;
      loginBtn.classList.remove('btn-danger');
      loginBtn.classList.add('btn-success');
      loginBtn.style.cursor = 'pointer';
      loginBtn.href = 'akun.html';
      loginBtn.onclick = null;
    }
    
    if (logoutBtn) {
      logoutBtn.style.display = 'inline-block';
    }
  } else {
    if (loginBtn) {
      loginBtn.innerHTML = 'Login';
      loginBtn.classList.remove('btn-success');
      loginBtn.classList.add('btn-danger');
      loginBtn.style.cursor = 'pointer';
      loginBtn.href = 'login.html';
      loginBtn.onclick = null;
    }
    
    if (logoutBtn) {
      logoutBtn.style.display = 'none';
    }
  }
}

// ==================== LOGOUT ====================
function logout() {
  swal({
    title: "Konfirmasi Logout",
    text: "Apakah Anda yakin ingin keluar?",
    icon: "warning",
    buttons: {
      cancel: "Batal",
      confirm: "Ya, Keluar"
    },
    dangerMode: true
  }).then((willLogout) => {
    if (willLogout) {
      localStorage.removeItem("loggedInUser");
      swal("Berhasil", "Anda telah logout!", "success").then(() => {
        window.location.reload();
      });
    }
  });
}

// ==================== PROTECTION FOR AUTHENTICATED PAGES ====================
function checkAuthStatus() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const currentPage = window.location.pathname.split('/').pop();
  
  const protectedPages = ['favorit.html', 'mode_cepat.html', 'mode_lambat.html', 'akun.html'];
  
  if (protectedPages.includes(currentPage) && !loggedInUser) {
    swal("Akses Ditolak", "Silakan login terlebih dahulu!", "warning").then(() => {
      window.location.href = "login.html";
    });
  }
}

// ==================== KELOLA PROFIL - PERBAIKAN POIN 5 ====================
document.addEventListener("DOMContentLoaded", function () {
  const profilForm = document.getElementById("profilForm");

  if (!profilForm) return;

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (!loggedInUser) {
    swal("Peringatan", "Silakan login terlebih dahulu!", "warning").then(() => {
      window.location.href = "login.html";
    });
    return;
  }

  // AUTO FILL FORM DENGAN DATA USER YANG LOGIN
  document.getElementById("email").value = loggedInUser.email || "";
  document.getElementById("password").value = loggedInUser.password || "";
  document.getElementById("nama").value = loggedInUser.nama || "";
  document.getElementById("no_hp").value = loggedInUser.no_hp || "";
  document.getElementById("alamat").value = loggedInUser.alamat || "";

  const editButton = document.querySelector(".btn-edit");
  if (editButton) {
    editButton.addEventListener("click", function () {
      try {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const nama = document.getElementById("nama").value.trim();
        const no_hp = document.getElementById("no_hp").value.trim();
        const alamat = document.getElementById("alamat").value.trim();

        if (!email || !password || !nama || !no_hp || !alamat) {
          swal("Gagal", "Semua field harus diisi!", "error");
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          swal("Gagal", "Format email tidak valid!", "error");
          return;
        }

        const currentIndex = users.findIndex(user => user.email === loggedInUser.email);

        if (currentIndex === -1) {
          swal("Gagal", "Pengguna tidak ditemukan!", "error");
          return;
        }

        if (email !== loggedInUser.email) {
          const emailExists = users.some((user, index) =>
            user.email === email && index !== currentIndex
          );
          if (emailExists) {
            swal("Gagal", "Email sudah digunakan oleh pengguna lain!", "error");
            return;
          }
        }

        const updatedUser = { email, password, nama, no_hp, alamat };
        users[currentIndex] = updatedUser;

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify(updatedUser));

        swal("Sukses!", "Profil berhasil diperbarui.", "success");
        updateNavbar();
      } catch (error) {
        console.error("Error updating profile:", error);
        swal("Gagal", "Terjadi kesalahan saat memperbarui profil!", "error");
      }
    });
  }
});

// ==================== HOME SETELAH LOGIN ====================
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userNameSpan = document.getElementById("user-name");

  const loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser) {
    const user = JSON.parse(loggedInUser);
    if (userNameSpan) {
      userNameSpan.textContent = `Halo, ${user.nama}`;
    }
    if (loginBtn) {
      loginBtn.style.display = "none";
    }
    if (logoutBtn) {
      logoutBtn.classList.remove("d-none");
    }
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      swal("Logout", "Anda telah keluar.", "success").then(() => {
        window.location.href = "index.html";
      });
    });
  }
});

// ==================== FAVORIT SYSTEM - POIN 2 ====================
function loadFavoritePage() {
  const favoriteItems = JSON.parse(localStorage.getItem('favoriteItems') || '[]');
  const grid = document.getElementById('favorit-container');
  
  if (!grid) return;
fh
  const resepList = {
    rendang: { nama: 'Rendang', gambar: 'assets/resep/rendang.png' },
    gudeg: { nama: 'Gudeg', gambar: 'assets/resep/gudeg.png' },
    mie_ayam: { nama: 'Mie Ayam', gambar: 'assets/resep/mie_ayam.png' },
    soto_ayam: { nama: 'Soto Ayam', gambar: 'assets/resep/soto_ayam.png' },
    ayam_geprek: { nama: 'Ayam Geprek', gambar: 'assets/resep/ayam_geprek.png' },
    tahu_kecap: { nama: 'Tahu Kecap', gambar: 'assets/resep/tahu_kecap.png' },
    nasi_goreng_jawa: { nama: 'Nasi Goreng Jawa', gambar: 'assets/resep/nasi_goreng.jpg' },
    udang_asam_manis: { nama: 'Udang Asam Manis', gambar: 'assets/resep/udang_asam_manis.jpg' },
    seblak_kuah_kerupuk: { nama: 'Seblak Kuah Kerupuk', gambar: 'assets/resep/seblak.png' },
    oseng_kacang_tempe: { nama: 'Oseng Kacang Tempe', gambar: 'assets/resep/oseng_kacang_tempe.jpeg' },
    urap_sayur: { nama: 'Urap Sayur', gambar: 'assets/resep/urap.jpg' },
    capcay_goreng: { nama: 'Capcay Goreng', gambar: 'assets/resep/capcay_goreng.jpg' },
    tumis_jamur_tiram: { nama: 'Tumis Jamur Tiram Cabe Ijo', gambar: 'assets/resep/tumis_jamur_tiram.jpeg' },
    plecing_kangkung: { nama: 'Plecing Kangkung', gambar: 'assets/resep/plecing.jpeg' },
    beberuk_terong: { nama: 'Beberuk Terong', gambar: 'assets/resep/beberuk.jpeg' },
    bubuy_ayam: { nama: 'Bubuy Ayam Khas Subang', gambar: 'assets/resep/bubuy_ayam.png' },
    sate_pusut: { nama: 'Sate Pusut Khas Lombok', gambar: 'assets/resep/sate_pusut.webp' },
    bebek: { nama: 'Bebek Goreng Khas Madura', gambar: 'assets/resep/bebek_madura.jpg' },
    tekwan: { nama: 'Tekwan Khas Palembang', gambar: 'assets/resep/tekwan.jpeg'},
    sate_emprit: { nama: 'Sate Emprit Khas Kediri', gambar: 'assets/resep/sate_emprit.jpg'},
    kupat_tahu: { nama: 'Kupat Tahu Khas Magelang', gambar: 'assets/resep/kupat_tahu.webp' },
    soto_seger: { nama: 'Soto Seger Khas Boyolali', gambar: 'assets/resep/soto_seger.avif' },
  };

  grid.innerHTML = '';

  if (favoriteItems.length === 0) {
    grid.innerHTML = '<div class="text-center mt-5"><h5>Belum ada resep favorit</h5><p>Tambahkan resep ke favorit untuk melihatnya di sini</p></div>';
    return;
  }

  favoriteItems.forEach(itemId => {
    const resep = resepList[itemId];
    if (resep) {
      const cardHTML = `
        <div class="favorit-recipe-card">
          <a href="resep_detail.html?id=${itemId}">
            <img src="${resep.gambar}" class="favorit-recipe-image" alt="${resep.nama}">
            <h5 class="favorit-recipe-name">${resep.nama}</h5>
          </a>
        </div>`;
      grid.innerHTML += cardHTML;
    }
  });
}

// ==================== RATING SYSTEM - POIN 3 ====================
function setupRating(resepId) {
  const stars = document.querySelectorAll('.star');
  const ratingText = document.getElementById('rating-text');
  const savedRating = localStorage.getItem(`rating_${resepId}`);
  
  if (savedRating) {
    updateStars(parseInt(savedRating));
    if (ratingText) {
      ratingText.textContent = `Rating Anda: ${savedRating}/5 bintang`;
    }
  }
  
  stars.forEach(star => {
    star.style.cursor = 'pointer';
    star.style.fontSize = '24px';
    
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
      updateStars(rating);
      if (ratingText) {
        ratingText.textContent = `Rating Anda: ${rating}/5 bintang`;
      }
      swal("Terima kasih!", `Anda memberi rating ${rating} bintang!`, "success");
    });
  });
}

function updateStars(rating) {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = '#ffc107';
    } else {
      star.style.color = '#ddd';
    }
  });
}

// ==================== SEARCH MODE Cepat - POIN 4 ====================
function setupModeCepatSearch() {
  const searchInput = document.getElementById("myinput");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const resepCards = document.querySelectorAll("#mode-resep .fast-mode");
    let foundCount = 0;

    resepCards.forEach(card => {
      const resepName = card.querySelector("h5").textContent.toLowerCase();
      const isMatch = resepName.includes(searchValue);
      
      card.style.display = isMatch ? "block" : "none";
      if (isMatch) foundCount++;
    });

    let noResultsDiv = document.getElementById("no-results");
    if (!noResultsDiv) {
      noResultsDiv = document.createElement("div");
      noResultsDiv.id = "no-results";
      noResultsDiv.innerHTML = '<div class="text-center mt-4"><h5>Tidak ada resep yang ditemukan</h5></div>';
      const modeResepContainer = document.getElementById("mode-resep");
      if (modeResepContainer) {
        modeResepContainer.appendChild(noResultsDiv);
      }
    }
    
    noResultsDiv.style.display = foundCount === 0 && searchValue !== "" ? "block" : "none";
  });
}

// ==================== SEARCH MODE CEPAT - POIN 4 ====================
function setupModeCepatSearch() {
  const searchInput = document.getElementById("myinput");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const resepCards = document.querySelectorAll("#mode-resep .fast-mode");
    let foundCount = 0;

    resepCards.forEach(card => {
      const resepName = card.querySelector("h5").textContent.toLowerCase();
      const isMatch = resepName.includes(searchValue);
      
      card.style.display = isMatch ? "block" : "none";
      if (isMatch) foundCount++;
    });

    let noResultsDiv = document.getElementById("no-results");
    if (!noResultsDiv) {
      noResultsDiv = document.createElement("div");
      noResultsDiv.id = "no-results";
      noResultsDiv.innerHTML = '<div class="text-center mt-4"><h5>Tidak ada resep yang ditemukan</h5></div>';
      const modeResepContainer = document.getElementById("mode-resep");
      if (modeResepContainer) {
        modeResepContainer.appendChild(noResultsDiv);
      }
    }
    
    noResultsDiv.style.display = foundCount === 0 && searchValue !== "" ? "block" : "none";
  });
}

// ==================== SEARCH MODE LAMBAT - POIN 4 ====================
function setupModeLambatSearch() {
  const searchInput = document.getElementById("myinput");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const resepCards = document.querySelectorAll("#mode-resep .slow-mode");
    let foundCount = 0;

    resepCards.forEach(card => {
      const resepName = card.querySelector("h5").textContent.toLowerCase();
      const isMatch = resepName.includes(searchValue);
      
      card.style.display = isMatch ? "block" : "none";
      if (isMatch) foundCount++;
    });

    let noResultsDiv = document.getElementById("no-results");
    if (!noResultsDiv) {
      noResultsDiv = document.createElement("div");
      noResultsDiv.id = "no-results";
      noResultsDiv.innerHTML = '<div class="text-center mt-4"><h5>Tidak ada resep yang ditemukan</h5></div>';
      const modeResepContainer = document.getElementById("mode-resep");
      if (modeResepContainer) {
        modeResepContainer.appendChild(noResultsDiv);
      }
    }
    
    noResultsDiv.style.display = foundCount === 0 && searchValue !== "" ? "block" : "none";
  });
}

// ==================== SEARCH MODE LAMBAT - POIN 4 ====================
function setupModeCepatSearch() {
  const searchInput = document.getElementById("myinput");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const resepCards = document.querySelectorAll("#mode-resep .fast-mode");
    let foundCount = 0;

    resepCards.forEach(card => {
      const resepName = card.querySelector("h5").textContent.toLowerCase();
      const isMatch = resepName.includes(searchValue);
      
      card.style.display = isMatch ? "block" : "none";
      if (isMatch) foundCount++;
    });

    let noResultsDiv = document.getElementById("no-results");
    if (!noResultsDiv) {
      noResultsDiv = document.createElement("div");
      noResultsDiv.id = "no-results";
      noResultsDiv.innerHTML = '<div class="text-center mt-4"><h5>Tidak ada resep yang ditemukan</h5></div>';
      const modeResepContainer = document.getElementById("mode-resep");
      if (modeResepContainer) {
        modeResepContainer.appendChild(noResultsDiv);
      }
    }
    
    noResultsDiv.style.display = foundCount === 0 && searchValue !== "" ? "block" : "none";
  });
}
// ==================== HAMBURGER MENU ====================
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('#hamburger-menu');

if (hamburger) {
  hamburger.onclick = () => {
    navbar.classList.toggle('active');
  }

  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove('active');
    }
  });
}

// ==================== HERO SLIDER ====================
function setupHeroSlider() {
  const images = document.querySelectorAll('.slider-image');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');
  let current = 0;

  if (!images.length) return;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    });

    nextBtn.addEventListener('click', () => {
      current = (current + 1) % images.length;
      showSlide(current);
    });
  }

  showSlide(current);
}

// ==================== MODE MEMASAK ====================
function tampilkanMode(mode) {
  const container = document.getElementById('modeContainer');
  const content = document.getElementById('modeContent');
  
  if (container) {
    container.classList.remove('d-none');
  }

  if (content) {
    content.innerHTML = '';

    const dataResep = {
      cepat: [
        { nama: 'Telur Dadar', gambar: 'assets/resep/telur_dadar.png' },
        { nama: 'Indomie Goreng', gambar: 'assets/resep/indomie.png' }
      ],
      lambat: [
        { nama: 'Rendang', gambar: 'assets/resep/rendang.png' },
        { nama: 'Gudeg', gambar: 'assets/resep/gudeg.png' }
      ]
    };

    if (dataResep[mode]) {
      dataResep[mode].forEach(resep => {
        const card = `
          <div class="recipe-card">
            <img src="${resep.gambar}" alt="${resep.nama}">
            <div class="recipe-title">${resep.nama}</div>
          </div>
        `;
        content.innerHTML += card;
      });
    }

    container.scrollIntoView({ behavior: 'smooth' });
  }
}

// ==================== GLOBAL FUNCTIONS ====================
function showSuccessAlert() {
  const editButton = document.querySelector(".btn-edit");
  if (editButton) {
    editButton.click();
  }
}

// ==================== MAIN INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.querySelector('.logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
  
  updateNavbar();
  checkAuthStatus();
  loadFavoritePage();
  setupModeLambatSearch();
  setupModeCepatSearch();
  setupHeroSlider();
  
  const urlParams = new URLSearchParams(window.location.search);
  const resepId = urlParams.get('id');
  if (resepId) {
    setupRating(resepId);
  }
});