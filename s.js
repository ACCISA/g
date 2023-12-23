alert("trying to go to login")
fetch('/login.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'hello'
  },
  body: 'username=rome&password=x'
});
console("worked")
