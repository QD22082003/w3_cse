function handleScroll() {
  const nav = document.getElementById('js-nav');
  const logoImage = document.getElementById('logoImage');
  const secondarySrc = logoImage.dataset.secondarySrc;
  const firstSrc = logoImage.dataset.firstSrc;  
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
    if (secondarySrc) {
      logoImage.src = secondarySrc;
    }
  } else {
    nav.classList.remove('scrolled');
    logoImage.src = firstSrc;
  }
}

// Thêm sự kiện scroll vào trang
window.addEventListener('scroll', handleScroll);

// Gọi hàm khi trang được tải để kiểm tra trạng thái ban đầu
handleScroll();

function changeContentAndBackgroundPeriodically() {
  const header = document.querySelector('.header');
  const dynamicContent = document.getElementById('js-dynamic-content');
  const changeContentButton = document.getElementById('changeContentButton');
  const leftButton = document.getElementById('js-leftButton');
  const rightButton = document.getElementById('js-rightButton');
  let currentIndex = 1;

  function changeContentAndBackground() {
      const nextIndex = currentIndex % 3 + 1;
      const nextBgSrc = header.dataset[`bgSrc${nextIndex}`];
      const nextContent = dynamicContent.dataset[`content${nextIndex}`];
      const nextButtonText = changeContentButton.dataset[`btn${nextIndex}`];

      if (nextBgSrc && nextContent && nextButtonText) {
          header.style.backgroundImage = `url(${nextBgSrc})`;
          dynamicContent.textContent = nextContent;
          changeContentButton.textContent = nextButtonText;
          currentIndex = nextIndex;
      }
  }
  function goToNext() {
    currentIndex = currentIndex % 3 + 1;
    console.log(currentIndex); // Kiểm tra giá trị currentIndex
    changeContentAndBackground();
  }

  function goToPrevious() {
    currentIndex = (currentIndex - 1 + 3) % 3 + 1;
    console.log(currentIndex); // Kiểm tra giá trị currentIndex
    changeContentAndBackground();
  }
  
  setInterval(changeContentAndBackground, 3000);
  leftButton.addEventListener('click', goToPrevious);
  rightButton.addEventListener('click', goToNext)
}

document.addEventListener("DOMContentLoaded", changeContentAndBackgroundPeriodically);

function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.getElementById('menuIcon');

  // Kiểm tra xem mobileMenu có đang hiển thị không
  const isMenuVisible = getComputedStyle(mobileMenu).display !== 'none';

  // Chuyển đổi giữa 'none' và 'block'
  mobileMenu.style.display = isMenuVisible ? 'none' : 'block';

  // Thay đổi icon
  menuIcon.className = isMenuVisible ? 'fa-solid fa-bars' : 'fa-solid fa-x';
}







