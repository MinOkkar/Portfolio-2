const text =
  "Hi this is Min Okkar and I am focusing on Web development and others.|";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();
