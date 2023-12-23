console.log("started")
fetch('/login.php', {
  method: 'POST',
  headers: {
    'Host': 'challenges.montrehack.ca:8580',
    'Content-Length': '24',
    'Cache-Control': 'max-age=0',
    'Upgrade-Insecure-Requests': '1',
    'Origin': 'http://challenges.montrehack.ca:8580',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Referer': 'http://challenges.montrehack.ca:8580/login.php',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Cookie': 'PHPSESSID=73f98d1e9d58bd3f003cbca37683836f',
    'Connection': 'close',
    'User-Agent': 'hello'
  },
  body: 'username=rome&password=somerandox',
  mode: 'cors'
});
console.log("worked")

