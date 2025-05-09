<script setup lang="ts">

</script>

<template>
  <div class="container">
    <!-- Header -->
    <header class="header">
      <div class="logo">
        <div class="logo-image"></div>
        <span class="logo-text">AI OFFICE</span>
      </div>

      <nav class="nav"></nav>

      <div class="auth-buttons">
        <button class="login-btn">Log In</button>
        <button class="get-started-btn">Get Started</button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h1 class="hero-title">AI OFFICE for work</h1>
      <p class="hero-subtitle">您的智能办公助手</p>
      <button class="cta-button">开始</button>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.83854L14 3.8V3H7.4C6.55992 3 6.13988 3 5.81901 3.16349C5.53677 3.3073 5.3073 3.53677 5.16349 3.81901C5 4.13988 5 4.55992 5 5.4V7.00078C5.1168 6.99998 5.23832 6.99999 5.36391 7H5.36391L5.4 7H8.20471L8.26397 6.99992C8.49595 6.99944 8.75877 6.99891 9.01652 7.06079C9.241 7.11468 9.4556 7.20357 9.65244 7.32419C9.87845 7.46269 10.0639 7.64891 10.2276 7.81328L10.2276 7.81329L10.2695 7.85525L12.1448 9.73054C12.2547 9.84046 12.3141 9.8995 12.3603 9.94174C12.3804 9.96006 12.3915 9.96908 12.3959 9.97256C12.4118 9.98183 12.4288 9.98888 12.4465 9.99351C12.4522 9.99421 12.4664 9.99566 12.4935 9.9969C12.5561 9.99976 12.6398 10 12.7953 10H18.6L18.6361 10C18.7617 9.99999 18.8832 9.99998 19 10.0008V8H18.2L18.1615 8C17.6343 8.00002 17.1795 8.00003 16.805 7.96943C16.4096 7.93713 16.0164 7.86581 15.638 7.67302C15.0735 7.3854 14.6146 6.92646 14.327 6.36197C14.1342 5.98359 14.0629 5.59037 14.0306 5.19503C14 4.82046 14 4.36569 14 3.83854ZM18.9086 12.0004C18.816 12.0001 18.7138 12 18.6 12H12.7953L12.736 12.0001H12.736C12.504 12.0006 12.2412 12.0011 11.9835 11.9392C11.759 11.8853 11.5444 11.7964 11.3476 11.6758C11.1215 11.5373 10.9361 11.3511 10.7724 11.1867L10.7305 11.1448L8.85525 9.26946C8.74532 9.15954 8.68595 9.1005 8.63966 9.05826C8.61959 9.03995 8.60852 9.03093 8.60405 9.02744C8.58823 9.01817 8.57121 9.01112 8.55347 9.00649C8.54784 9.00579 8.53364 9.00434 8.50649 9.0031C8.4439 9.00024 8.36017 9 8.20471 9H5.4C5.24744 9 5.11556 9.0001 5 9.00092V10.6C5 11.4401 5 11.8601 5.16349 12.181C5.3073 12.4632 5.53677 12.6927 5.81901 12.8365C6.13988 13 6.55992 13 7.4 13H16.6C17.4401 13 17.8601 13 18.181 12.8365C18.4632 12.6927 18.6927 12.4632 18.8365 12.181C18.8653 12.1245 18.889 12.0649 18.9086 12.0004ZM16 3.8V3.08982C16.0372 3.10674 16.0733 3.12595 16.1083 3.14736C16.2092 3.2092 16.2957 3.29568 16.4686 3.46862L16.4686 3.46863L18.5314 5.53137C18.7043 5.70432 18.7908 5.7908 18.8526 5.89172C18.874 5.92665 18.8933 5.96282 18.9102 6H18.2C17.6234 6 17.2512 5.99922 16.9678 5.97607C16.6962 5.95388 16.5955 5.9162 16.546 5.89101C16.3578 5.79513 16.2049 5.64215 16.109 5.45399C16.0838 5.40455 16.0461 5.30383 16.0239 5.03216C16.0008 4.74883 16 4.37655 16 3.8Z" fill="#222222"/>
            <path d="M3 11.4C3 10.5599 3 10.1399 3.16349 9.81901C3.3073 9.53677 3.53677 9.3073 3.81901 9.16349C4.13988 9 4.55992 9 5.4 9H8.20471C8.49822 9 8.64497 9 8.78308 9.03316C8.90552 9.06255 9.02258 9.11104 9.12994 9.17683C9.25104 9.25104 9.35481 9.35481 9.56236 9.56236L11.4376 11.4376C11.6452 11.6452 11.749 11.749 11.8701 11.8232C11.9774 11.889 12.0945 11.9374 12.2169 11.9668C12.355 12 12.5018 12 12.7953 12H18.6C19.4401 12 19.8601 12 20.181 12.1635C20.4632 12.3073 20.6927 12.5368 20.8365 12.819C21 13.1399 21 13.5599 21 14.4V19.6C21 20.4401 21 20.8601 20.8365 21.181C20.6927 21.4632 20.4632 21.6927 20.181 21.8365C19.8601 22 19.4401 22 18.6 22H5.4C4.55992 22 4.13988 22 3.81901 21.8365C3.53677 21.6927 3.3073 21.4632 3.16349 21.181C3 20.8601 3 20.4401 3 19.6V11.4Z" fill="#222222"/>
          </svg>
        </div>
        <div class="feature-label">文档管理</div>
      </div>

      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M16 3L16 6M8 3L8 6" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4H10L10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6L6 4.07612C5.02492 4.17203 4.36857 4.38879 3.87868 4.87868C3 5.75736 3 7.17157 3 10V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V10C21 7.17157 21 5.75736 20.1213 4.87868C19.6314 4.38879 18.9751 4.17203 18 4.07612L18 6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6L14 4ZM7 12C7 11.4477 7.44772 11 8 11L16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17L16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15L8 15Z" fill="#222222"/>
          </svg>
        </div>
        <div class="feature-label">日程管理</div>
      </div>

      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 44 44" fill="none">
            <path d="M36.8587 21.721H36.6051C35.5634 17.0652 31.4058 13.5688 26.442 13.5688H23.2717V12.4094C24.8478 11.8478 25.9891 10.3532 25.9891 8.58694C25.9891 6.34057 24.1594 4.51086 21.913 4.51086C19.6666 4.51086 17.8369 6.34057 17.8369 8.58694C17.8369 10.3532 18.9782 11.8478 20.5543 12.4094V13.5688H17.384C12.4203 13.5688 8.26267 17.0652 7.221 21.721H6.96738C5.47281 21.721 4.24998 22.9438 4.24998 24.4384V27.1558C4.24998 28.6503 5.47281 29.8732 6.96738 29.8732H7.46556C8.5344 33.2065 11.2337 35.7971 14.6214 36.7391C14.3677 37.2735 14.2138 37.8532 14.2138 38.4782C14.2138 39.2301 14.8206 39.8369 15.5724 39.8369H28.2536C29.0054 39.8369 29.6123 39.2301 29.6123 38.4782C29.6123 37.8532 29.4583 37.2645 29.2047 36.7391C32.5924 35.8061 35.2916 33.2065 36.3605 29.8732H36.8587C38.3532 29.8732 39.5761 28.6503 39.5761 27.1558V24.4384C39.5761 22.9438 38.3532 21.721 36.8587 21.721ZM21.913 7.22825C22.6648 7.22825 23.2717 7.83513 23.2717 8.58694C23.2717 9.33875 22.6648 9.94564 21.913 9.94564C21.1612 9.94564 20.5543 9.33875 20.5543 8.58694C20.5543 7.83513 21.1612 7.22825 21.913 7.22825ZM26.442 34.4022H17.384C13.1359 34.4022 9.68477 30.9511 9.68477 26.7029V23.9855C9.68477 19.7373 13.1359 16.2862 17.384 16.2862H26.442C30.6902 16.2862 34.1413 19.7373 34.1413 23.9855V26.7029C34.1413 30.9511 30.6902 34.4022 26.442 34.4022Z" fill="black"/>
            <path d="M16.9311 19.9094C15.4366 19.9094 14.2138 21.1322 14.2138 22.6268V25.3442C14.2138 26.8388 15.4366 28.0616 16.9311 28.0616C18.4257 28.0616 19.6485 26.8388 19.6485 25.3442V22.6268C19.6485 21.1322 18.4257 19.9094 16.9311 19.9094Z" fill="black"/>
            <path d="M26.8949 19.9094C25.4003 19.9094 24.1775 21.1322 24.1775 22.6268V25.3442C24.1775 26.8388 25.4003 28.0616 26.8949 28.0616C28.3895 28.0616 29.6123 26.8388 29.6123 25.3442V22.6268C29.6123 21.1322 28.3895 19.9094 26.8949 19.9094Z" fill="black"/>
            <path d="M12.4293 7.15578L15.1467 8.06158C15.2917 8.10687 15.4366 8.13404 15.5724 8.13404C16.1431 8.13404 16.6685 7.77172 16.8587 7.20107C17.0942 6.48549 16.7138 5.71557 15.9982 5.48006L13.2808 4.57426C12.5743 4.33875 11.8043 4.71919 11.5598 5.43477C11.3152 6.15035 11.7047 6.92028 12.4203 7.15578H12.4293Z" fill="black"/>
            <path d="M12.8551 12.663C13 12.663 13.1449 12.6449 13.2808 12.5906L15.9982 11.6848C16.7138 11.4493 17.0942 10.6793 16.8587 9.96375C16.6232 9.24817 15.8532 8.86774 15.1377 9.10325L12.4203 10.009C11.7047 10.2445 11.3243 11.0145 11.5598 11.7301C11.75 12.3007 12.2753 12.663 12.846 12.663H12.8551Z" fill="black"/>
            <path d="M28.2536 8.13404C28.3985 8.13404 28.5435 8.11593 28.6793 8.06158L31.3967 7.15578C32.1123 6.92028 32.4927 6.15035 32.2572 5.43477C32.0217 4.71919 31.2518 4.33875 30.5362 4.57426L27.8188 5.48006C27.1032 5.71557 26.7228 6.48549 26.9583 7.20107C27.1485 7.77172 27.6739 8.13404 28.2445 8.13404H28.2536Z" fill="black"/>
            <path d="M27.8279 11.6848L30.5453 12.5906C30.6902 12.6359 30.8351 12.663 30.971 12.663C31.5416 12.663 32.067 12.3007 32.2572 11.7301C32.4927 11.0145 32.1123 10.2445 31.3967 10.009L28.6793 9.10325C27.9728 8.86774 27.1938 9.24817 26.9583 9.96375C26.7228 10.6793 27.1032 11.4493 27.8188 11.6848H27.8279Z" fill="black"/>
          </svg>
        </div>
        <div class="feature-label">智能助手</div>
      </div>

      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2V7L12 7.05441C11.9999 7.47848 11.9998 7.8906 12.0455 8.23052C12.097 8.61372 12.2226 9.051 12.5858 9.41421C12.949 9.77743 13.3863 9.90295 13.7695 9.95447C14.1094 10.0002 14.5215 10.0001 14.9456 10H14.9456L15 10H20V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H12ZM14 2.00462V7C14 7.49967 14.0021 7.77383 14.0277 7.96402L14.0287 7.97131L14.036 7.97231C14.2262 7.99788 14.5003 8 15 8H19.9954C19.9852 7.58836 19.9525 7.31595 19.8478 7.06306C19.6955 6.69552 19.4065 6.40649 18.8284 5.82843L16.1716 3.17157C15.5935 2.59351 15.3045 2.30448 14.9369 2.15224C14.684 2.04749 14.4116 2.01481 14 2.00462Z" fill="#222222"/>
          </svg>
        </div>
        <div class="feature-label">知识库管理</div>
      </div>

      <div class="feature">
        <div class="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C13.4992 2 14.7004 2 15.6773 2.07361C15.5629 2.3601 15.5 2.6727 15.5 3V3.5H15C13.6193 3.5 12.5 4.61929 12.5 6C12.5 7.38071 13.6193 8.5 15 8.5H15.5V9C15.5 10.3807 16.6193 11.5 18 11.5C18.8178 11.5 19.5439 11.1073 20 10.5002V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H8ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H14C14.5523 16 15 15.5523 15 15C15 14.4477 14.5523 14 14 14H8ZM8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H12C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17H8Z" fill="#222222"/>
            <path d="M18 3L18 9" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
            <path d="M21 6L15 6" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="feature-label">知识条录</div>
      </div>

      <!--      <div class="feature">-->
      <!--        <div class="feature-icon"></div>-->
      <!--        <div class="feature-label">Buffer Time</div>-->
      <!--      </div>-->

      <!--      <div class="feature">-->
      <!--        <div class="feature-icon"></div>-->
      <!--        <div class="feature-label">Time Tracking</div>-->
      <!--      </div>-->
    </section>
  </div>
</template>

<style lang="scss" scoped>
/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  width: 100vw;
  //max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  background: url("../assets/1.png") no-repeat center center;
  background-size:cover ;
  height: 100vh;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 120px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 52px;
  height: 40px;
  background: linear-gradient(135deg, #9536e7, #ff00c8);
  margin-right: 20px;
  border-radius: 3px;
}

.logo-text {
  font-weight: bold;
  font-size: 28px;
  color: #000;
}

.nav {
  flex: 1;
}

.auth-buttons {
  display: flex;
  gap: 15px;
  align-items: center;
}

.login-btn {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}

.get-started-btn {
  background-color: #222;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}

/* Hero Styles */
.hero {
  text-align: center;
  margin-bottom: 140px;
  padding: 0 20px;
}

.hero-title {
  font-size: 80px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 15px;
}

.hero-subtitle {
  font-size: 36px;
  color: #333;
  margin-bottom: 40px;
  font-weight: 400;
}

.cta-button {
  background: linear-gradient(135deg, #7c53e3, #ff17b1);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
}

/* Features Styles */
.features {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0 80px;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px; /* 设置固定宽度 */
  height: 180px; /* 设置固定高度 */
  aspect-ratio: 1/1; /* 保持宽高比为1:1，即正方形 */
  transition: all 0.3s ease;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 垂直居中对齐 */
  align-items: center; /* 水平居中对齐 */
  padding: 10px; /* 内边距 */
}

.feature-icon {
  font-size: 42px;
  margin-bottom: 12px;
  color: #6c5ce7;

}

/* 添加悬停效果 */
.feature:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-3px);
}

.feature-label {
  font-size: 24px;
  color: #333;
  font-weight: 500;

}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 62px;
  }

  .hero-subtitle {
    font-size: 28px;
  }

  .features {
    width: 100%;
  }

  .feature {
    width: 14%;
  }
}

@media (max-width: 900px) {
  .hero-title {
    font-size: 52px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .auth-buttons {
    gap: 10px;
  }

  .get-started-btn {
    padding: 8px 15px;
    font-size: 13px;
  }

  .feature {
    width: 16%;
  }
}

@media (max-width: 600px) {
  .header {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
  }

  .nav {
    display: none;
  }

  .hero-title {
    font-size: 42px;
  }

  .hero-subtitle {
    font-size: 20px;
  }

  .features {
    flex-wrap: wrap;
  }

  .feature {
    width: 33%;
    margin-bottom: 30px;
  }
}

@media (max-width: 350px) {
  .hero-title {
    font-size: 32px;
  }

  .hero-subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .cta-button {
    padding: 12px 25px;
    font-size: 16px;
  }

  .feature {
    width: 50%;
  }
}
</style>
