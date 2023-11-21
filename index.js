function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const profession = document.getElementById('profession').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }
    const infoTable = document.getElementById('infoTable');
    const newRow = infoTable.insertRow(-1);
    const cells = [
      newRow.insertCell(0),
      newRow.insertCell(1),
      newRow.insertCell(2),
      newRow.insertCell(3),
      newRow.insertCell(4),
    ];
    cells[0].innerHTML = username;
    cells[1].innerHTML = password;
    cells[2].innerHTML = email;
    cells[3].innerHTML = dob;
    cells[4].innerHTML = profession;
    infoTable.style.display = 'table';
    document.getElementById('registrationForm').reset();
  }
  