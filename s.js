alert("trying to go to login")
fetch('/login.php', {
  method: 'POST',
  headers: {
    'User-Agent': 'hello'
  },
  body: 'username=rome&password=x'
});
console.log("worked")
