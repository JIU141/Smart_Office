<script setup lang="ts">
import {  reactive } from 'vue';

// Login form state
const loginForm = reactive({
  email: '',
  password: ''
});

// Form submission handler
const handleLogin = () => {
  console.log('Login attempt:', loginForm);
  // Here you would typically send the form data to your backend
};
</script>

<template>
  <div class="container">
    <!-- Left side login panel -->
    <div class="left-panel">
      <div class="logo">
        <div class="logo-circle">M</div>
        <div class="logo-text">motion</div>
      </div>

      <div class="welcome-section">
        <h1 class="welcome-title">
          <span class="welcome-icon">👋</span> Welcome back!
        </h1>
        <p class="welcome-text">Log in with your Google, Microsoft, or Apple account.</p>
      </div>

      <div class="social-buttons">
        <button class="social-login-btn">
          <span>🔍</span> Log in with Google
        </button>
        <button class="social-login-btn">
          <span>🌐</span> Log in with Microsoft
        </button>
        <button class="social-login-btn">
          <span>🍎</span> Log in with Apple
        </button>
      </div>

      <div class="divider">Or</div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-input"
            placeholder="name@company.com"
            v-model="loginForm.email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-input"
            placeholder="Enter your password"
            v-model="loginForm.password"
          />
          <div class="forgot-password">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
        <button type="submit" class="sign-in-btn">Sign in</button>
      </form>

      <p class="help-text">
        Having trouble with your account or subscription? Don't worry, just head over to
        <a href="#">help.usemotion.com</a> and our support team will be happy to assist
        you!
      </p>
    </div>

    <!-- Right side calendar preview -->
    <div class="right-panel">
      <div class="statistic">
        Over 1 million top performers manage their busy schedules with Motion.
      </div>

      <div class="calendar-preview">
        <div class="calendar-header">
          <div>May 2023</div>
          <div class="calendar-controls">
            <span>🔍</span>
            <span>📅</span>
            <span>⚙️</span>
          </div>
        </div>
        <div class="calendar-days">
          <div class="day-cell">Sun 14</div>
          <div class="day-cell current-day">Mon 15</div>
          <div class="day-cell">Tue 16</div>
          <div class="day-cell">Wed 17</div>
          <div class="day-cell">Thu 18</div>
          <div class="day-cell">Fri 19</div>
          <div class="day-cell">Sat 20</div>
        </div>
        <div class="calendar-events">
          <div class="event-cell">
            <div class="event purple" style="top: 20%; height: 10%">Design sync</div>
            <div class="event blue" style="top: 40%; height: 8%">Check emails</div>
            <div class="event green" style="top: 50%; height: 12%">User diaries</div>
            <div class="event orange" style="top: 70%; height: 10%">Team meeting</div>
          </div>
          <div class="event-cell">
            <div class="event blue" style="top: 30%; height: 15%">Write blog post</div>
            <div class="event purple" style="top: 50%; height: 15%">Design sync</div>
            <div class="event green" style="top: 70%; height: 10%">Check emails</div>
            <div class="event orange" style="top: 80%; height: 15%">Team meeting</div>
          </div>
          <div class="event-cell">
            <div class="event purple" style="top: 10%; height: 15%">Design sync</div>
            <div class="event blue" style="top: 30%; height: 10%">Check emails</div>
            <div class="event green" style="top: 40%; height: 15%">User diaries</div>
            <div class="event orange" style="top: 60%; height: 10%">Team meeting</div>
          </div>
          <div class="event-cell">
            <div class="event purple" style="top: 20%; height: 15%">Lunch @ Joey's</div>
            <div class="event blue" style="top: 40%; height: 10%">Check emails</div>
            <div class="event green" style="top: 50%; height: 15%">Motion user interviews</div>
            <div class="event orange" style="top: 70%; height: 10%">Team meeting</div>
          </div>
          <div class="event-cell">
            <div class="event purple" style="top: 30%; height: 15%">Design sync</div>
            <div class="event blue" style="top: 50%; height: 10%">Check emails</div>
            <div class="event green" style="top: 60%; height: 15%">User research</div>
            <div class="event orange" style="top: 80%; height: 10%">Team meeting</div>
          </div>
          <div class="event-cell">
            <div class="event purple" style="top: 20%; height: 15%">Harry  Gareth</div>
            <div class="event blue" style="top: 40%; height: 10%">Write blog post</div>
            <div class="event green" style="top: 50%; height: 15%">Dentist</div>
            <div class="event orange" style="top: 70%; height: 10%">Team meeting</div>
          </div>
          <div class="event-cell">
            <div class="event purple" style="top: 30%; height: 15%">Design sync</div>
            <div class="event blue" style="top: 50%; height: 10%">Check emails</div>
            <div class="event green" style="top: 60%; height: 15%">User diaries</div>
            <div class="event orange" style="top: 80%; height: 10%">Team meeting</div>
          </div>
        </div>
      </div>

      <div class="sponsors">
        <div class="sponsor">
          <div class="sponsor-icon"></div>
          <div class="sponsor-text">Combinator</div>
        </div>
        <div class="sponsor">
          <div class="sponsor-icon"></div>
          <div class="sponsor-text">On Deck</div>
        </div>
        <div class="sponsor">
          <div class="sponsor-icon"></div>
          <div class="sponsor-text">efficientapp</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
  display: flex;
  min-height: 100vh;
}

.left-panel {
  flex: 1;
  padding: 3rem;
  background-color: white;
}

.right-panel {
  width: 40%;
  background: linear-gradient(135deg, #f1b9d5 0%, #b9c5ff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.logo-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 10px;
  font-weight: bold;
}

.logo-text {
  font-weight: 500;
  font-size: 1.25rem;
}

.welcome-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.welcome-icon {
  color: #f0c34d;
  margin-right: 10px;
}

.welcome-text {
  color: #6b7280;
  margin-bottom: 2rem;
}

.social-login-btn {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  width: 100%;
  background-color: white;
}

.social-login-btn:hover {
  background-color: #f3f4f6;
}

.divider {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  color: #6b7280;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #e5e7eb;
}

.divider span {
  padding: 0 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #6b7280;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.forgot-password {
  text-align: right;
  margin-bottom: 1rem;
}

.forgot-password a {
  color: #2563eb;
  text-decoration: none;
}

.sign-in-btn {
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
}

.help-text {
  color: #6b7280;
  margin-top: 2rem;
  font-size: 0.875rem;
}

.help-text a {
  color: #6b7280;
  text-decoration: none;
}

.statistic {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  max-width: 80%;
  margin-left: auto;
}

.calendar-preview {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

.calendar-header {
  background-color: #f9fafb;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendar-controls {
  display: flex;
  gap: 10px;
}

.calendar-days {
  display: flex;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
}

.day-cell {
  flex: 1;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 500;
}

.current-day {
  background-color: #3b82f6;
  color: white;
}

.calendar-events {
  display: flex;
  height: 300px;
  overflow: hidden;
}

.event-cell {
  flex: 1;
  position: relative;
  border-right: 1px solid #e5e7eb;
}

.event {
  position: absolute;
  left: 2px;
  right: 2px;
  background-color: rgba(209, 213, 219, 0.5);
  border-radius: 4px;
  padding: 4px;
  font-size: 0.7rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #374151;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.event.purple {
  border-left: 3px solid #a855f7;
}

.event.blue {
  border-left: 3px solid #3b82f6;
}

.event.green {
  border-left: 3px solid #22c55e;
}

.event.orange {
  border-left: 3px solid #ef4444;
}

.sponsors {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
}

.sponsor {
  display: flex;
  align-items: center;
  color: white;
}

.sponsor-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-color: white;
  border-radius: 4px;
}

.sponsor-text {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
