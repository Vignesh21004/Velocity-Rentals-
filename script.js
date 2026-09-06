const STORAGE = {
  vehicles: "velocity_vehicles_v1",
  users: "velocity_users_v1",
  bookings: "velocity_bookings_v1"
};

const seedVehicles = [
  {id:1,type:"car",name:"Ford Mustang GT",rate:250,fuel:"Petrol",transmission:"RWD",seats:"4",mileage:"5000 KM",license:"KA-01-AB-2026",service:"12 Aug 2026",image:"https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=80"},
  {id:2,type:"car",name:"BMW M4 Competition",rate:320,fuel:"Petrol",transmission:"RWD",seats:"4",mileage:"8200 KM",license:"KA-02-CD-2611",service:"05 Jul 2026",image:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"},
  {id:3,type:"car",name:"Mercedes AMG C63",rate:350,fuel:"Petrol",transmission:"AWD",seats:"5",mileage:"6700 KM",license:"KA-03-EF-3308",service:"19 Jun 2026",image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"},
  {id:4,type:"car",name:"Audi A6",rate:220,fuel:"Diesel",transmission:"FWD",seats:"5",mileage:"12400 KM",license:"KA-04-GH-4110",service:"28 May 2026",image:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"},
  {id:5,type:"car",name:"Toyota Fortuner",rate:180,fuel:"Diesel",transmission:"4WD",seats:"7",mileage:"18300 KM",license:"KA-05-JK-5092",service:"02 Aug 2026",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"},
  {id:6,type:"car",name:"Hyundai Creta",rate:110,fuel:"Petrol",transmission:"FWD",seats:"5",mileage:"9100 KM",license:"KA-06-LM-6183",service:"14 Jul 2026",image:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"},
  {id:7,type:"bike",name:"Royal Enfield Himalayan",rate:90,fuel:"Petrol",transmission:"Manual",seats:"2",mileage:"7800 KM",license:"KA-51-BK-7781",service:"09 Aug 2026",image:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80"},
  {id:8,type:"bike",name:"Kawasaki Ninja 300",rate:120,fuel:"Petrol",transmission:"Manual",seats:"2",mileage:"5200 KM",license:"KA-52-BK-8102",service:"22 Jul 2026",image:"https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=80"},
  {id:9,type:"bike",name:"Yamaha MT-15",rate:75,fuel:"Petrol",transmission:"Manual",seats:"2",mileage:"4100 KM",license:"KA-53-BK-8418",service:"18 Aug 2026",image:"https://images.unsplash.com/photo-1558980664-10eaac8dba4f?auto=format&fit=crop&w=1200&q=80"},
  {id:10,type:"bike",name:"KTM Duke 390",rate:105,fuel:"Petrol",transmission:"Manual",seats:"2",mileage:"6300 KM",license:"KA-54-BK-9077",service:"31 Jul 2026",image:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80"},
  {id:11,type:"bike",name:"TVS Apache RTR 200",rate:65,fuel:"Petrol",transmission:"Manual",seats:"2",mileage:"5600 KM",license:"KA-55-BK-9450",service:"11 Aug 2026",image:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&w=1200&q=80"},
  {id:12,type:"truck",name:"Tata 407",rate:300,fuel:"Diesel",transmission:"Manual",seats:"3",mileage:"22100 KM",license:"KA-41-TR-1021",service:"06 Aug 2026",image:"https://images.unsplash.com/photo-1586191582056-9bff0b8a4d6d?auto=format&fit=crop&w=1200&q=80"},
  {id:13,type:"truck",name:"Ashok Leyland Dost",rate:260,fuel:"Diesel",transmission:"Manual",seats:"2",mileage:"17600 KM",license:"KA-42-TR-1339",service:"29 Jul 2026",image:"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80"},
  {id:14,type:"truck",name:"BharatBenz 2823",rate:520,fuel:"Diesel",transmission:"Manual",seats:"3",mileage:"34200 KM",license:"KA-43-TR-1704",service:"15 Jun 2026",image:"https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=1200&q=80"},
  {id:15,type:"truck",name:"Tata Prima",rate:600,fuel:"Diesel",transmission:"Manual",seats:"3",mileage:"29000 KM",license:"KA-44-TR-1844",service:"08 Jul 2026",image:"https://images.unsplash.com/photo-1532634896-26909d0d4bde?auto=format&fit=crop&w=1200&q=80"}
];

let vehicles = JSON.parse(localStorage.getItem(STORAGE.vehicles) || "null") || seedVehicles;
let users = JSON.parse(localStorage.getItem(STORAGE.users) || "null") || [];
let bookings = JSON.parse(localStorage.getItem(STORAGE.bookings) || "null") || [];
let currentUser = null;
let currentType = "car";
let selectedVehicle = null;
let adminType = "car";

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function save(){
  localStorage.setItem(STORAGE.vehicles, JSON.stringify(vehicles));
  localStorage.setItem(STORAGE.users, JSON.stringify(users));
  localStorage.setItem(STORAGE.bookings, JSON.stringify(bookings));
}
function escapeHtml(v){
  return String(v ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function showScreen(id){
  $$(".screen").forEach(x => x.classList.add("hidden"));
  $( "#" + id ).classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function toast(message){
  const t=$("#toast"); t.textContent=message; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2500);
}
function setMsg(el,message,error=false){
  el.textContent=message;
  el.classList.toggle("error",error);
}
function money(n){ return "₹" + Number(n).toLocaleString("en-IN"); }
function dateOnly(d){ return new Date(d+"T00:00:00"); }
function daysBetween(a,b){
  if(!a || !b) return 0;
  const diff=dateOnly(b)-dateOnly(a);
  return Math.floor(diff/86400000)+1;
}
function todayISO(){
  const d=new Date(); return new Date(d-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
}

function isVehicleBooked(vehicleId){
  const today = todayISO();
  return bookings.some(b => b.vehicleId===vehicleId && b.status==="Confirmed" && b.dropoff >= today);
}

function renderClient(){
  const query=$("#searchInput").value.toLowerCase().trim();
  let list=vehicles.filter(v=>v.type===currentType);
  list=list.filter(v=>`${v.name} ${v.fuel} ${v.transmission}`.toLowerCase().includes(query));
  const sort=$("#sortSelect").value;
  if(sort==="low") list.sort((a,b)=>a.rate-b.rate);
  if(sort==="high") list.sort((a,b)=>b.rate-a.rate);
  if(sort==="name") list.sort((a,b)=>a.name.localeCompare(b.name));

  $("#availableCount").textContent=vehicles.filter(v=>!isVehicleBooked(v.id)).length;
  $("#bookingCount").textContent=currentUser ? bookings.filter(b=>b.userPhone===currentUser.phone).length : 0;

  $("#vehicleGrid").innerHTML = list.length ? list.map(v=>{
    const booked=isVehicleBooked(v.id);
    return `<article class="vehicle-card">
      <div class="vehicle-img">
        <img src="${escapeHtml(v.image)}" alt="${escapeHtml(v.name)}" onerror="this.src='data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgFallback(v.name))}'">
        <div class="price-tag">${money(v.rate)}/DAY</div>
      </div>
      <div class="vehicle-body">
        <span class="status">${booked?"BOOKED":"OPEN"}</span>
        <div class="vehicle-name">${escapeHtml(v.name)}</div>
        <div class="vehicle-meta">${escapeHtml(v.type.toUpperCase())} · ${escapeHtml(v.fuel)} · ${escapeHtml(v.transmission)}</div>
        <button class="outline-btn" ${booked?"disabled":""} onclick="openVehicle(${v.id})">${booked?"CURRENTLY BOOKED":"VIEW & RENT"}</button>
      </div>
    </article>`;
  }).join("") : `<div class="panel" style="grid-column:1/-1">NO VEHICLES MATCH YOUR SEARCH.</div>`;

  renderClientHistory();
}
function svgFallback(name){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="#111"/><text x="50%" y="50%" fill="#555" font-size="30" text-anchor="middle" font-family="Arial">${name}</text></svg>`;
}
function renderClientHistory(){
  const mine=currentUser ? bookings.filter(b=>b.userPhone===currentUser.phone).sort((a,b)=>b.createdAt-a.createdAt) : [];
  $("#clientHistory").innerHTML=mine.length ? mine.map(b=>`
    <div class="history-item">
      <div><strong>${escapeHtml(b.vehicleName)}</strong>${b.pickup} → ${b.dropoff} · ${b.days} day(s)</div>
      <div class="amount">${money(b.total)}<br><small>${b.status}</small></div>
    </div>`).join("") : `<div style="font-size:9px;color:#444">NO RENTAL HISTORY YET.</div>`;
}

window.openVehicle=function(id){
  selectedVehicle=vehicles.find(v=>v.id===id);
  if(!selectedVehicle) return;
  $("#modalImage").src=selectedVehicle.image;
  $("#modalImage").onerror=()=>$("#modalImage").src="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svgFallback(selectedVehicle.name));
  $("#modalPrice").textContent=money(selectedVehicle.rate)+"/DAY";
  $("#modalType").textContent=`${selectedVehicle.type.toUpperCase()} · ${selectedVehicle.fuel.toUpperCase()}`;
  $("#modalTitle").textContent=selectedVehicle.name;
  $("#modalSpecs").innerHTML=[
    ["FUEL",selectedVehicle.fuel],["TRANSMISSION",selectedVehicle.transmission],
    ["SEATS",selectedVehicle.seats],["MILEAGE",selectedVehicle.mileage],
    ["LICENSE NO.",selectedVehicle.license],["LAST SERVICE",selectedVehicle.service]
  ].map(x=>`<div class="spec"><span>${x[0]}</span><strong>${escapeHtml(x[1])}</strong></div>`).join("");
  const t=todayISO();
  $("#pickupDate").min=t; $("#dropoffDate").min=t;
  $("#pickupDate").value=t;
  const tomorrow=new Date(dateOnly(t)); tomorrow.setDate(tomorrow.getDate()+1);
  $("#dropoffDate").value=new Date(tomorrow-dateOnly("1970-01-01")).toISOString().slice(0,10); // corrected below
  const drop=new Date(dateOnly(t)); drop.setDate(drop.getDate()+1);
  $("#dropoffDate").value=drop.toISOString().slice(0,10);
  updateTotal();
  setMsg($("#bookingMsg"),"");
  $("#vehicleModal").classList.remove("hidden");
}
function updateTotal(){
  if(!selectedVehicle) return;
  const days=daysBetween($("#pickupDate").value,$("#dropoffDate").value);
  $("#bookingTotal").textContent=days>0 ? money(days*selectedVehicle.rate) : "₹0";
}
$("#pickupDate").addEventListener("change",()=>{
  $("#dropoffDate").min=$("#pickupDate").value;
  if($("#dropoffDate").value < $("#pickupDate").value) $("#dropoffDate").value=$("#pickupDate").value;
  updateTotal();
});
$("#dropoffDate").addEventListener("change",updateTotal);
$("#closeVehicleModal").onclick=()=>$("#vehicleModal").classList.add("hidden");

$("#confirmBookingBtn").onclick=()=>{
  if(!currentUser){setMsg($("#bookingMsg"),"Please login first.",true);return}
  const pickup=$("#pickupDate").value, dropoff=$("#dropoffDate").value;
  const days=daysBetween(pickup,dropoff);
  if(!pickup||!dropoff||days<=0){setMsg($("#bookingMsg"),"Select valid rental dates.",true);return}
  if(isVehicleBooked(selectedVehicle.id)){setMsg($("#bookingMsg"),"Vehicle is already booked for this period.",true);return}
  bookings.push({
    id:Date.now(),vehicleId:selectedVehicle.id,vehicleName:selectedVehicle.name,
    userPhone:currentUser.phone,userName:currentUser.name,pickup,dropoff,days,
    total:days*selectedVehicle.rate,status:"Confirmed",createdAt:Date.now()
  });
  save();
  $("#vehicleModal").classList.add("hidden");
  toast("BOOKING CONFIRMED");
  renderClient();
  renderAdmin();
};

function renderAdmin(){
  const list=vehicles.filter(v=>v.type===adminType);
  $("#adminFleetCount").textContent=vehicles.length;
  $("#adminTable").innerHTML=list.map(v=>{
    const booked=isVehicleBooked(v.id);
    return `<tr>
      <td>${escapeHtml(v.name)}</td><td>${money(v.rate)}</td>
      <td><span class="status">${booked?"BOOKED":"OPEN"}</span></td>
      <td><div class="table-actions">
        <button class="mini-btn" onclick="editRate(${v.id})">EDIT</button>
        <button class="mini-btn delete" onclick="deleteVehicle(${v.id})">DEL</button>
      </div></td>
    </tr>`;
  }).join("");
  const recent=[...bookings].sort((a,b)=>b.createdAt-a.createdAt).slice(0,8);
  $("#adminActivity").innerHTML=recent.length ? recent.map(b=>`
    <div class="history-item"><div><strong>${escapeHtml(b.vehicleName)}</strong>${escapeHtml(b.userName)} · ${b.pickup} → ${b.dropoff}</div><div class="amount">${money(b.total)}</div></div>
  `).join("") : `<div style="font-size:9px;color:#444">NO BOOKINGS YET.</div>`;
}
window.editRate=function(id){
  const v=vehicles.find(x=>x.id===id); if(!v)return;
  const next=prompt(`New daily rate for ${v.name}`,v.rate);
  if(next===null)return;
  const n=Number(next);
  if(!Number.isFinite(n)||n<=0){alert("Enter a valid positive rate.");return}
  v.rate=n;save();renderAdmin();renderClient();toast("RATE UPDATED");
}
window.deleteVehicle=function(id){
  const v=vehicles.find(x=>x.id===id); if(!v)return;
  if(isVehicleBooked(id)){alert("Booked vehicles cannot be deleted.");return}
  if(confirm(`Delete ${v.name}?`)){vehicles=vehicles.filter(x=>x.id!==id);save();renderAdmin();renderClient();toast("VEHICLE REMOVED")}
}

$$("[data-screen]").forEach(btn=>btn.addEventListener("click",()=>showScreen(btn.dataset.screen)));
$(".registerBtn").onclick=()=>showScreen("registerScreen");
$("#logoutBtn").onclick=()=>{
  currentUser=null;
  $("#logoutBtn").hidden=true;
  $("#welcomeUser").textContent="";
  showScreen("landingScreen");
};

$$(".tabs .tab[data-type]").forEach(btn=>btn.addEventListener("click",()=>{
  $$(".tabs .tab[data-type]").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); currentType=btn.dataset.type; renderClient();
}));
$$(".admin-tabs .tab").forEach(btn=>btn.addEventListener("click",()=>{
  $$(".admin-tabs .tab").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); adminType=btn.dataset.adminType; renderAdmin();
}));
$("#searchInput").addEventListener("input",renderClient);
$("#sortSelect").addEventListener("change",renderClient);

$("#adminLoginForm").onsubmit=e=>{
  e.preventDefault();
  const u=$("#adminUser").value.trim(), p=$("#adminPass").value;
  if(u==="admin"&&p==="admin123"){
    setMsg($("#adminMsg"),"ACCESS GRANTED");
    setTimeout(()=>{showScreen("adminDashboard");$("#logoutBtn").hidden=false;$("#welcomeUser").textContent="ADMIN";renderAdmin()},300);
  }else setMsg($("#adminMsg"),"INVALID ADMIN CREDENTIALS",true);
};

$("#registerForm").onsubmit=e=>{
  e.preventDefault();
  const name=$("#regName").value.trim(), phone=$("#regPhone").value.trim(), pass=$("#regPass").value;
  if(users.some(u=>u.phone===phone)){setMsg($("#registerMsg"),"PHONE NUMBER ALREADY REGISTERED.",true);return}
  users.push({name,phone,password:pass});save();
  setMsg($("#registerMsg"),"ACCOUNT CREATED. REDIRECTING...");
  setTimeout(()=>showScreen("userLoginScreen"),500);
};

$("#userLoginForm").onsubmit=e=>{
  e.preventDefault();
  const phone=$("#userPhone").value.trim(), pass=$("#userPass").value;
  const user=users.find(u=>u.phone===phone&&u.password===pass);
  if(!user){setMsg($("#userMsg"),"INVALID PHONE OR PASSWORD.",true);return}
  currentUser=user; $("#clientName").textContent=user.name.toUpperCase();
  $("#logoutBtn").hidden=false; $("#welcomeUser").textContent=user.name.toUpperCase();
  showScreen("clientDashboard"); renderClient();
};

$("#addVehicleBtn").onclick=()=>$("#addVehicleModal").classList.remove("hidden");
$("#closeAddModal").onclick=()=>$("#addVehicleModal").classList.add("hidden");
$("#addVehicleForm").onsubmit=e=>{
  e.preventDefault();
  const model=$("#newModel").value.trim(), type=$("#newType").value, rate=Number($("#newRate").value);
  if(!model||!rate){setMsg($("#addMsg"),"MODEL AND RATE ARE REQUIRED.",true);return}
  const image=$("#newImage").value.trim() || "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80";
  vehicles.push({id:Date.now(),type,name:model,rate,fuel:$("#newFuel").value.trim()||"Petrol",transmission:"Manual",seats:type==="bike"?"2":"5",mileage:"NEW",license:"PENDING",service:"NOT YET SERVICED",image});
  save();renderAdmin();renderClient();
  $("#addVehicleForm").reset();$("#addVehicleModal").classList.add("hidden");toast("VEHICLE ADDED");
};

window.addEventListener("keydown",e=>{
  if(e.key==="Escape"){$("#vehicleModal").classList.add("hidden");$("#addVehicleModal").classList.add("hidden")}
});
renderClient();
