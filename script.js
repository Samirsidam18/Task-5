const posts = [
  {
    title:"AI Future",
    category:"tech",
    image:"https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content:"AI is transforming development with automation, productivity, and smarter systems."
  },
  {
    title:"Design Systems",
    category:"design",
    image:"https://images.unsplash.com/photo-1559028012-481c04fa702d",
    content:"Design systems ensure consistency and scalability in UI development."
  },
  {
    title:"JavaScript Promises",
    category:"js",
    image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    content:"Promises simplify async JavaScript and improve readability."
  }
];

function loadPosts(list){
  const container = document.getElementById("cards");
  container.innerHTML = "";

  list.forEach((p, i)=>{
    container.innerHTML += `
      <div class="card" onclick="openArticle(${i})">
        <img src="${p.image}">
        <div class="card-content">
          <h3>${p.title}</h3>
        </div>
      </div>
    `;
  });
}

loadPosts(posts);

// NAVIGATION
function showSection(id){
  document.querySelectorAll(".section")
    .forEach(sec => sec.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

// FILTER
function filterPosts(cat, btn){
  if(btn){
    document.querySelectorAll(".filters button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  if(cat === "all") loadPosts(posts);
  else loadPosts(posts.filter(p => p.category === cat));
}

// ARTICLE
function openArticle(index){
  const p = posts[index];

  showSection("article");

  document.getElementById("articleImg").src = p.image;
  document.getElementById("articleTitle").innerText = p.title;
  document.getElementById("articleContent").innerText = p.content;
}

// SUBSCRIBE
function subscribe(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if(!name || !email){
    alert("Fill all fields");
    return;
  }

  document.getElementById("formBox").style.display="none";
  document.getElementById("successBox").style.display="block";
}

// DEFAULT
showSection("home");
