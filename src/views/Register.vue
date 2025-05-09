<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

const handleSocialSignup = (provider: string) => {
  console.log(`Sign up with ${provider}`);
  // Implement social signup logic here
};

const handleContinue = () => {
  if (email.value) {
    console.log('Continue with email:', email.value);
    // Implement email signup logic here
  } else {
    alert('Please enter your email address');
  }
};

const handleLoginClick = () => {
  console.log('Navigate to login page');
  // Implement login navigation here
};
</script>


<template>
  <div class="login-container">
    <div class="left-panel">
      <div class="logo">
        <div class="logo-circle"></div>
        <div class="logo-text">motion</div>
      </div>

      <div class="try-motion">
        <h1>👋 Try Motion for free!</h1>
      </div>

      <div class="signup-options">Sign up with your Google, Microsoft, or Apple account</div>

      <div class="terms">
        By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
      </div>

      <div class="social-buttons">
        <button class="social-button" @click="handleSocialSignup('google')">

          <span>Sign up with Google</span>
        </button>
        <button class="social-button" @click="handleSocialSignup('microsoft')">

          <span>Sign up with Microsoft</span>
        </button>
        <button class="social-button" @click="handleSocialSignup('apple')">

          <span>Sign up with Apple</span>
        </button>
      </div>

      <div class="divider">Or</div>

      <input type="email" class="email-input" placeholder="name@company.com" v-model="email">
      <button class="continue-button" @click="handleContinue">Continue</button>

      <div class="login-link">
        Already have an account? <a href="#" @click.prevent="handleLoginClick">Log in</a>
      </div>

      <div class="support-text">
        Having trouble with your account or subscription? Don't worry, just head over to <a href="#">help.usemotion.com</a> and our support team will be happy to assist you!
      </div>
    </div>

    <div class="right-panel">
      <div class="right-content">
        <h2 class="right-heading">Over 1 million top performers manage their busy schedules with Motion.</h2>

        <div class="partner-logos">
          <div class="partner-logo">

            <span>Combinator</span>
          </div>
          <div class="partner-logo">

            <span>On Deck</span>
          </div>
          <div class="partner-logo">

            <span>efficient app</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.login-container {
  display: flex;
  height: 100%;

  overflow-x: hidden;
}

.left-panel {
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.right-panel {
  width: 50%;
  background-color: #584fa5;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 80px;
  overflow: hidden;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
}

.logo-circle {
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
  margin-right: 8px;
}

.logo-text {
  font-size: 22px;
  font-weight: 500;
}

.try-motion {
  margin-bottom: 16px;
}

.try-motion h1 {
  font-size: 28px;
  font-weight: 600;
  margin-left: 8px;
}

.signup-options {
  color: #666;
  margin-bottom: 4px;
}

.terms {
  font-size: 12px;
  color: #888;
  margin-bottom: 16px;
}

.terms a {
  color: #666;
  text-decoration: underline;
}

.social-buttons {
  margin-bottom: 24px;
}

.social-button {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.social-button:hover {
  background-color: #f5f5f5;
}

.social-button img {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.divider {
  display: flex;
  align-items: center;
  margin: 0 16px 24px;
  color: #888;
}

.divider::before, .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: #ddd;
}

.email-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 12px;
  font-size: 14px;
}

.continue-button {
  width: 100%;
  padding: 12px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 16px;
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #4285f4;
  text-decoration: none;
}

.support-text {
  margin-top: 60px;
  font-size: 12px;
  color: #888;
  line-height: 1.5;
}

.support-text a {
  color: #4285f4;
  text-decoration: none;
}

.right-content {
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.right-heading {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 50px;
}

.partner-logos {
  display: flex;
  gap: 24px;
}

.partner-logo {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 4px;
}

.partner-logo img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.partner-logo span {
  font-size: 14px;
}

@media (max-width: 1024px) {
  .left-panel, .right-panel {
    width: 100%;
  }

  .right-panel {
    display: none;
  }
}
</style>
