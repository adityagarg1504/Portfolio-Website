var typed = new Typed('#element', {
    strings: ['Web Developer', 'Programmer', 'coder..'],
    typeSpeed: 50,
  });
  
  function toggleContent() {
    var content = document.getElementById("aboutmee");
    var btn = document.getElementById("toggleBtn");
  
    if (content.style.height === "92px") {
      content.style.height = "auto";
      btn.innerHTML = "Read Less";
    } else {
      content.style.height = "92px";
      btn.innerHTML = "Read More";
    }
  }
  
  function sendEmail() {
    window.location.href = "mailto:gaditya1504@gmail.com";
  }
  