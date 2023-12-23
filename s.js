console.log("started")
fetch('http://challenges.montrehack.ca:8580/login.php/login.php', {
  method: 'POST',
  headers: {
    'User-Agent': 'hello'
  },
  body: 'username=rome&password=somerandox'
});
console.log("worked")

