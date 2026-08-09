let points = 0;
let actionsCompleted = 0;
let streak = 0;
let lastActionDate = null;
let challengeCompleted = false;

// Impact counters
let impact = {
  plastic: 0,
  bottles: 0,
  electricity: 0,
  walks: 0
};

function logAction(action, value) {
  points += value;
  actionsCompleted++;

  // Streak logic
  const today = new Date().toDateString();
  if (lastActionDate !== today) {
    streak++;
    lastActionDate = today;
  }

  // Update impact
  if (action.includes("plastic")) impact.plastic++;
  if (action.includes("bottle")) impact.bottles++;
  if (action.includes("electricity")) impact.electricity++;
  if (action.includes("Walked")) impact.walks++;

  updateDashboard();
  showFeedback(action, value);
}

function updateDashboard() {
  document.getElementById("points").textContent = points;
  document.getElementById("actions").textContent = actionsCompleted;
  document.getElementById("streak").textContent = streak;

  // Level system
  let level = "Eco Beginner";
  if (points >= 50 && points < 150) level = "Eco Explorer";
  else if (points >= 150) level = "Green Champion";
  document.getElementById("level").textContent = level;

  // Impact
  document.getElementById("plastic").textContent = impact.plastic;
  document.getElementById("bottles").textContent = impact.bottles;
  document.getElementById("electricity").textContent = impact.electricity;
  document.getElementById("walks").textContent = impact.walks;
}

function showFeedback(action, value) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = `✅ You logged "${action}" (+${value} points). Total: ${points}`;
  feedback.classList.remove("hidden");
  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 3000);
}

function completeChallenge() {
  if (!challengeCompleted) {
    logAction("Daily Challenge", 20);
    document.getElementById("challenge-btn").disabled = true;
    document.getElementById("challenge-btn").textContent = "Challenge Completed!";
    challengeCompleted = true;
  }
}

let recentActions = [];

function logAction(action, value) {
  points += value;
  actionsCompleted++;

  const today = new Date().toDateString();
  if (lastActionDate !== today) {
    streak++;
    lastActionDate = today;
  }

  if (action.includes("plastic")) impact.plastic++;
  if (action.includes("bottle")) impact.bottles++;
  if (action.includes("electricity")) impact.electricity++;
  if (action.includes("Walked")) impact.walks++;

  // Track recent actions
  recentActions.unshift(action);
  if (recentActions.length > 5) recentActions.pop();

  updateDashboard();
  showFeedback(action, value);
  updateCoach();
}

function updateDashboard() {
  document.getElementById("points").textContent = points;
  document.getElementById("actions").textContent = actionsCompleted;
  document.getElementById("streak").textContent = streak;

  let level = "Eco Beginner";
  if (points >= 50 && points < 150) level = "Eco Explorer";
  else if (points >= 150) level = "Green Champion";
  document.getElementById("level").textContent = level;

  document.getElementById("plastic").textContent = impact.plastic;
  document.getElementById("bottles").textContent = impact.bottles;
  document.getElementById("electricity").textContent = impact.electricity;
  document.getElementById("walks").textContent = impact.walks;
}

function showFeedback(action, value) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = `✅ You logged "${action}" (+${value} points). Total: ${points}`;
  feedback.classList.remove("hidden");
  setTimeout(() => {
    feedback.classList.add("hidden");
  }, 3000);
}

function completeChallenge() {
  if (!challengeCompleted) {
    logAction("Daily Challenge", 20);
    document.getElementById("challenge-btn").disabled = true;
    document.getElementById("challenge-btn").textContent = "Challenge Completed!";
    challengeCompleted = true;
  }
}

function updateCoach() {
  let suggestion = "Start your journey with an easy eco action today!";
  if (impact.plastic > 0) {
    suggestion = "Great job avoiding plastic! Try carrying reusable bags next.";
  } else if (impact.electricity > 0) {
    suggestion = "Nice energy savings! Next, unplug devices when not in use.";
  } else if (actionsCompleted < 3) {
    suggestion = "You're just starting out — try logging a simple action like using a bottle.";
  } else if (actionsCompleted >= 10) {
    suggestion = "Impressive progress! Challenge yourself with a bigger habit, like reducing car rides.";
  }

  document.getElementById("coach-suggestion").textContent = suggestion;

  // Update recent actions list
  const list = document.getElementById("recent-actions");
  list.innerHTML = "";
  recentActions.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    list.appendChild(li);
  });
}
function viewRank() {
  alert("Rank details placeholder — connect your ranking logic here.");
}

function viewStudent() {
  alert("Student details placeholder — connect your student info logic here.");
}

function viewPoints() {
  alert("Points details placeholder — connect your points logic here.");
}
