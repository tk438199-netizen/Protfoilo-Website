const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const SK=[["HTML5","🌐",90],["CSS3","🎨",85],["Python","🐍",85],["Machine Learning","🤖",75],["Deep Learning","🧠",70],["Data Science","📊",80]];
/* EDIT: replace with your real GitHub repos */
const PJ=[["AI/ML Project","Machine learning model built end to end — data prep, training and evaluation.",["Python","ML"]],["Data Analysis Notebook","Exploratory analysis and cleaning of real-world datasets with clear insights.",["Python","Data Science"]],["Deep Learning Experiment","Neural network experiments with training pipelines and metrics.",["Deep Learning","Python"]],["Web Interface","Responsive front-end built with clean HTML5 and CSS3.",["HTML5","CSS3"]]];
const SV=[["Data Analyses","Turning datasets into decisions with clear, actionable insights."],["Data Cleaning","Fixing messy, inconsistent data so models and reports can trust it."],["Model Run","Training, running and evaluating ML models for your use case."],["Problem Solving","New logic for tough problems — practical and fast."]];
$("#sk").innerHTML=SK.map(s=>`<div class="card sk tilt"><svg viewBox="0 0 120 120"><circle class="t" cx="60" cy="60" r="50"/><circle class="v" cx="60" cy="60" r="50" stroke-dasharray="314" stroke-dashoffset="314" data-p="${s[2]}"/></svg><span class="ic">${s[1]}</span><h4>${s[0]}</h4><small data-c="${s[2]}" data-s="%">0</small></div>`).join("");
$("#pj").innerHTML=PJ.map(p=>`<a class="card pj tilt" href="https://github.com/tk438199-netizen" target="_blank" rel="noopener"><span class="tag">GitHub</span><h4>${p[0]}</h4><p>${p[1]}</p><div class="tg">${p[2].map(t=>`<span>${t}</span>`).join("")}</div><span style="color:var(--cy)">View on GitHub →</span></a>`).join("");
$("#sv").innerHTML=SV.map((s,i)=>`<div class="card sv tilt"><div class="n">0${i+1}</div><h4>${s[0]}</h4><p style="color:var(--mu)">${s[1]}</p></div>`).join("");

/* 3D universe */
(function(){
 if(!window.THREE)return;
 const c=$("#bg"),r=new THREE.WebGLRenderer({canvas:c,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,2));
 const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,200);cam.position.z=14;
 const n=1800,pos=new Float32Array(n*3);for(let i=0;i<n*3;i++)pos[i]=(Math.random()-.5)*90;
 const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(pos,3));
 const st=new THREE.Points(g,new THREE.PointsMaterial({size:.09,color:0xbfe9ff,transparent:true,opacity:.85}));sc.add(st);
 const mk=(geo,col,x,y,z)=>{const m=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:col,wireframe:true,transparent:true,opacity:.55}));m.position.set(x,y,z);sc.add(m);return m};
 const o=[mk(new THREE.IcosahedronGeometry(2.2,1),0x00f0ff,5,1,-2),mk(new THREE.TorusGeometry(2.6,.05,8,80),0xff2bd6,-6,-2,-4),mk(new THREE.TorusKnotGeometry(1.2,.3,90,10),0x8a4dff,-5,3,-3),mk(new THREE.OctahedronGeometry(1.4),0xff2bd6,7,-5,-5),mk(new THREE.TorusGeometry(4,.03,8,100),0x00f0ff,0,0,-8)];
 let mx=0,my=0,sy=0;addEventListener("mousemove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
 addEventListener("scroll",()=>sy=scrollY/innerHeight);
 function rs(){r.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}rs();addEventListener("resize",rs);
 const t0=performance.now();
 (function f(){const t=(performance.now()-t0)/1000;st.rotation.y=t*.012+sy*.1;st.rotation.x=sy*.05;
  o.forEach((m,i)=>{m.rotation.x=t*.2*(i+1)*.4;m.rotation.y=t*.25;m.position.y+=Math.sin(t+i)*.003});
  cam.position.x+=(mx*3-cam.position.x)*.04;cam.position.y+=(-my*2-cam.position.y)*.04;cam.position.z=14-sy*.8;cam.lookAt(0,0,0);r.render(sc,cam);requestAnimationFrame(f)})();
})();

/* cursor */
const dot=$(".dot"),cur=$("#cur"),trs=[...Array(8)].map(()=>{const d=document.createElement("div");d.className="tr";document.body.append(d);return{d,x:0,y:0}});
let X=innerWidth/2,Y=innerHeight/2,cx=X,cy=Y;addEventListener("mousemove",e=>{X=e.clientX;Y=e.clientY;dot.style.transform=`translate(${X}px,${Y}px)`});
(function f(){cx+=(X-cx)*.08;cy+=(Y-cy)*.08;cur.style.transform=`translate(${cx}px,${cy}px)`;let px=X,py=Y;trs.forEach((t,i)=>{t.x+=(px-t.x)*.35;t.y+=(py-t.y)*.35;t.d.style.transform=`translate(${t.x}px,${t.y}px) scale(${1-i/9})`;px=t.x;py=t.y});requestAnimationFrame(f)})();

/* interactions */
$$(".mag").forEach(b=>{b.addEventListener("mousemove",e=>{const k=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-k.left-k.width/2)*.35}px,${(e.clientY-k.top-k.height/2)*.35}px)`});b.addEventListener("mouseleave",()=>b.style.transform="")});
$$(".tilt").forEach(c=>{c.addEventListener("mousemove",e=>{const k=c.getBoundingClientRect(),x=(e.clientX-k.left)/k.width-.5,y=(e.clientY-k.top)/k.height-.5;c.style.transform=`perspective(800px) rotateY(${x*14}deg) rotateX(${-y*14}deg) translateZ(10px)`});c.addEventListener("mouseleave",()=>c.style.transform="")});
addEventListener("mousemove",e=>{const a=$("#av");if(a)a.style.translate=`${(e.clientX/innerWidth-.5)*24}px ${(e.clientY/innerHeight-.5)*24}px`});

/* typing */
const ph=["Full Stack AI/ML Engineer","Python Developer","Data Science Enthusiast","Deep Learning Explorer"];let pi=0,ci=0,del=0;
(function tp(){const w=ph[pi];ci+=del?-1:1;$("#ty").textContent=w.slice(0,ci);let d=del?35:80;if(!del&&ci===w.length){del=1;d=1400}else if(del&&!ci){del=0;pi=(pi+1)%ph.length;d=300}setTimeout(tp,d)})();

/* contact */
$("#cp").onclick=()=>{try{navigator.clipboard.writeText("tk438199@gmail.com")}catch(e){}$("#cp").textContent="Copied ✓";setTimeout(()=>$("#cp").textContent="Copy",1800)};
$("#fm").onsubmit=e=>{e.preventDefault();const n=$("#fn").value.trim(),m=$("#fe").value.trim(),g=$("#fmsg").value.trim();
 $("#e1").textContent=n.length<2?"Please enter your name":"";$("#e2").textContent=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(m)?"":"Enter a valid email";$("#e3").textContent=g.length<10?"Message needs at least 10 characters":"";
 if($$(".er").some(x=>x.textContent))return;
 location.href=`mailto:tk438199@gmail.com?subject=${encodeURIComponent("Portfolio message from "+n)}&body=${encodeURIComponent(g+"\n\n— "+n+" ("+m+")")}`;
 $("#fm").style.display="none";const o=$("#ok");o.style.display="block";if(window.gsap)gsap.from(o,{scale:.6,opacity:0,duration:.8,ease:"elastic.out(1,.5)"})};

/* AI assistant */
const KB={skills:"My skills: HTML5, CSS3, Python, Machine Learning, Deep Learning and Data Science.",projects:"Check the Projects section, or browse everything on GitHub: github.com/tk438199-netizen.",services:"I offer Data Analyses, Data Cleaning, Model Run and Problem Solving.",education:"Diploma in Computer Science & Technology from DPI. I'm a fresher, always learning.",contact:"Email tk438199@gmail.com · Phone 01833481676 · Demra, Dhaka, Bangladesh. Or use the contact form!",hire:"I'd love to work with you — use the contact form or email tk438199@gmail.com.",about:"Mubtasim Fuad (Tahmid) is a passionate Full Stack AI/ML Engineer who loves new logic and new vision."};
const al={skills:/skill|tech|python|html|css|ml|learn/,projects:/project|work|github|repo/,services:/service|offer|do you|help/,education:/educat|study|dpi|diploma|degree|school/,contact:/contact|email|phone|reach|call|location|where/,hire:/hire|job|freelanc|available/,about:/who|about|name|yourself/};
const mg=(t,c)=>{const d=document.createElement("div");d.className="m "+c;d.textContent=t;$("#msgs").append(d);$("#msgs").scrollTop=1e9};
mg("Hi! I can answer questions about Fuad's skills, projects, services, education and contact.","b");
["Skills","Projects","Services","Education","Contact"].forEach(t=>{const b=document.createElement("button");b.textContent=t;b.onclick=()=>ask(t);$("#qq").append(b)});
function ask(q){mg(q,"u");const k=Object.keys(al).find(k=>al[k].test(q.toLowerCase()));setTimeout(()=>mg(k?KB[k]:"I can help with skills, projects, services, education or contact — try one of those!","b"),450)}
$("#af").onsubmit=e=>{e.preventDefault();const v=$("#ai_i").value.trim();if(v){ask(v);$("#ai_i").value=""}};
$("#aib").onclick=()=>{const p=$("#aip");p.style.display=p.style.display==="flex"?"none":"flex"};

/* motion */
function intro(){
 $("#load").style.display="none";
 if(!window.gsap)return;
 gsap.registerPlugin(ScrollTrigger);
 if(window.Lenis){const l=new Lenis();l.on("scroll",ScrollTrigger.update);gsap.ticker.add(t=>l.raf(t*1000));gsap.ticker.lagSmoothing(0);$$("nav a").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();l.scrollTo(a.getAttribute("href"))}))}
 gsap.from("#nm span.g",{yPercent:110,opacity:0,duration:1.2,ease:"power4.out"});
 gsap.from("#home .tag,#home p,#home .row,.av",{y:50,opacity:0,stagger:.12,duration:1,delay:.3,ease:"power3.out"});
 gsap.from("nav",{y:-80,opacity:0,duration:1,delay:.6});
 $$(".rv").forEach(e=>gsap.from(e,{y:60,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 88%"}}));
 $$(".grid .card").forEach((e,i)=>gsap.from(e,{y:70,opacity:0,rotateX:-15,duration:.9,delay:(i%4)*.08,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 92%"}}));
 $$("[data-c]").forEach(e=>{const o={v:0};gsap.to(o,{v:+e.dataset.c,duration:2,ease:"power2.out",scrollTrigger:{trigger:e,start:"top 90%"},onUpdate:()=>e.textContent=Math.round(o.v)+(e.dataset.s||"")})});
 $$("circle.v").forEach(c=>gsap.to(c,{strokeDashoffset:314*(1-c.dataset.p/100),duration:2,ease:"power3.out",scrollTrigger:{trigger:c,start:"top 90%"}}));
 gsap.to(".planet",{y:-300,scrollTrigger:{scrub:1,start:0,end:"max"}});
 $$("section h2").forEach(h=>gsap.to(h,{x:30,scrollTrigger:{trigger:h,scrub:1}}));
}
let n=0,done=0;const fin=()=>{if(done++)return;gsap&&0;intro()};
const iv=setInterval(()=>{n=Math.min(100,n+4);$("#lp").textContent=n+"%";$("#lb").style.transform=`scaleX(${n/100})`;if(n>=100){clearInterval(iv);setTimeout(()=>{if(window.gsap)gsap.to("#load",{opacity:0,duration:.7,onComplete:fin});else fin()},250)}},35);
