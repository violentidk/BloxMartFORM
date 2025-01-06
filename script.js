
document.getElementById('login-btn').addEventListener('click', function() {
  // Simulate Roblox login for simplicity
  alert('Logged in with Roblox account (mock)');
  document.getElementById('user-dashboard').style.display = 'block';
});

document.getElementById('update-btn').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const status = document.getElementById('status').value;

  if (username && status) {
    const list = document.getElementById('status-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${username}: ${status}`;
    listItem.classList.add('status-item', 'green');
    list.appendChild(listItem);

    alert('Status updated!');
  } else {
    alert('Please fill out all fields');
  }
});
