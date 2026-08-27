const body=document.body;
const themeToggle=document.getElementById("themeToggle");
const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");

const savedTheme=localStorage.getItem("portfolio-theme");
if(savedTheme==="dark"){body.classList.add("dark");themeToggle.textContent="☀";}
themeToggle.addEventListener("click",()=>{
  body.classList.toggle("dark");
  const dark=body.classList.contains("dark");
  themeToggle.textContent=dark?"☀":"☾";
  localStorage.setItem("portfolio-theme",dark?"dark":"light");
});

menuToggle.addEventListener("click",()=>navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".placeholder-link").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    alert("Please add your real LinkedIn/GitHub/project URL in index.html.");
  });
});

document.getElementById("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const subject=document.getElementById("subject").value.trim();
  const message=document.getElementById("message").value.trim();
  const bodyText=`Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href=`mailto:Pechazhagan2021@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
});
