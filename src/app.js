/* ---------------- Data ---------------- */
const members = [
  {id:'m1', name:'سارا رضایی', role:'مدیر محصول', init:'س.ر', load:'6 تسک باز'},
  {id:'m2', name:'امیر حسینی', role:'توسعه‌دهنده فرانت‌اند', init:'ا.ح', load:'4 تسک باز'},
  {id:'m3', name:'نگار احمدی', role:'طراح محصول', init:'ن.ا', load:'3 تسک باز'},
  {id:'m4', name:'پویا کریمی', role:'توسعه‌دهنده بک‌اند', init:'پ.ک', load:'5 تسک باز'},
  {id:'m5', name:'مریم صادقی', role:'کارشناس QA', init:'م.ص', load:'2 تسک باز'},
  {id:'m6', name:'رضا مرادی', role:'مدیر پروژه', init:'ر.م', load:'7 تسک باز'},
];
const memberById = id => members.find(m=>m.id===id);

const projects = [
  {id:'p1', name:'ری‌دیزاین اپ موبایل', desc:'بازطراحی تجربه کاربری اپ خرید برای نسخه سه', color:'#4C7EF3', progress:64, risk:false, members:['m2','m3','m5']},
  {id:'p2', name:'زیرساخت API پرداخت', desc:'یکپارچه‌سازی درگاه‌های جدید و رفع بدهی فنی', color:'#2FB37E', progress:38, risk:true, members:['m4','m1']},
  {id:'p3', name:'کمپین لانچ محصول', desc:'هماهنگی محتوا، صفحه فرود و اطلاع‌رسانی', color:'#E8A33D', progress:81, risk:false, members:['m1','m3','m6']},
  {id:'p4', name:'وب‌سایت شرکتی', desc:'بازسازی کامل وب‌سایت با تمرکز بر سرعت بارگذاری', color:'#8B7EF0', progress:22, risk:true, members:['m2','m4']},
  {id:'p5', name:'داشبورد گزارش‌گیری', desc:'گزارش‌های فروش و عملکرد تیم برای مدیران', color:'#EE6E76', progress:50, risk:false, members:['m4','m5','m2']},
  {id:'p6', name:'اپ همکاری داخلی', desc:'ابزار داخلی برای هماهنگی بین تیم‌های پشتیبانی', color:'#2FB37E', progress:12, risk:false, members:['m3','m6']},
];

let tasks = [
  {id:'t1', title:'اصلاح فرم پرداخت در چک‌اوت', project:'p1', status:'todo', priority:'urgent', assignee:'m2', due:'2026-09-08', overdue:true, desc:'فرم پرداخت در مرورگر سافاری خطای اعتبارسنجی نشان می‌دهد و کاربر نمی‌تواند سفارش را تکمیل کند.', checklist:[{t:'شبیه‌سازی باگ در سافاری',d:true},{t:'بررسی لاگ‌های Sentry',d:true},{t:'رفع اعتبارسنجی شماره کارت',d:false},{t:'تست روی iOS و macOS',d:false}]},
  {id:'t2', title:'طراحی حالت خالی برای لیست سفارش‌ها', project:'p1', status:'todo', priority:'medium', assignee:'m3', due:'2026-09-15', desc:'وقتی کاربر هنوز سفارشی ثبت نکرده، صفحه باید راهنمای واضحی برای شروع نشان دهد.', checklist:[{t:'بررسی نمونه‌های مشابه',d:true},{t:'طراحی در فیگما',d:false}]},
  {id:'t3', title:'به‌روزرسانی کتابخانه کامپوننت‌ها', project:'p4', status:'todo', priority:'low', assignee:'m2', due:'2026-09-20', desc:'ارتقا به نسخه جدید کتابخانه UI و رفع مغایرت‌های بصری.', checklist:[]},
  {id:'t4', title:'یکپارچه‌سازی درگاه دوم پرداخت', project:'p2', status:'progress', priority:'urgent', assignee:'m4', due:'2026-09-11', overdue:true, desc:'اتصال به API درگاه جدید طبق مستندات نسخه ۲، شامل مدیریت خطاهای تراکنش ناموفق.', checklist:[{t:'مطالعه مستندات API',d:true},{t:'پیاده‌سازی endpoint پرداخت',d:true},{t:'تست تراکنش ناموفق',d:false},{t:'بررسی امنیتی',d:false}]},
  {id:'t5', title:'نوشتن کپی صفحه فرود کمپین', project:'p3', status:'progress', priority:'high', assignee:'m1', due:'2026-09-14', desc:'متن نهایی برای بخش هیرو و سه بخش ویژگی محصول.', checklist:[{t:'پیش‌نویس اول',d:true},{t:'بازخورد تیم مارکتینگ',d:false}]},
  {id:'t6', title:'تنظیم پایپ‌لاین CI برای بک‌اند', project:'p2', status:'progress', priority:'medium', assignee:'m4', due:'2026-09-18', desc:'اجرای خودکار تست‌ها روی هر پول ریکوئست.', checklist:[]},
  {id:'t7', title:'بازبینی ترجمه‌های عربی اپ', project:'p1', status:'review', priority:'medium', assignee:'m5', due:'2026-09-13', desc:'بررسی صحت متون ترجمه‌شده و راست‌چین بودن رابط کاربری.', checklist:[{t:'بررسی صفحه اصلی',d:true},{t:'بررسی صفحه پروفایل',d:true}]},
  {id:'t8', title:'تست عملکرد صفحه فرود', project:'p3', status:'review', priority:'high', assignee:'m5', due:'2026-09-12', overdue:true, desc:'اندازه‌گیری Core Web Vitals و بهینه‌سازی تصاویر.', checklist:[{t:'تست با Lighthouse',d:true},{t:'فشرده‌سازی تصاویر',d:false}]},
  {id:'t9', title:'مستندسازی API پرداخت برای تیم‌های دیگر', project:'p2', status:'done', priority:'low', assignee:'m4', due:'2026-09-05', desc:'راهنمای کامل endpointها برای تیم‌های داخلی.', checklist:[{t:'نوشتن مستندات',d:true},{t:'بررسی نهایی',d:true}]},
  {id:'t10', title:'انتشار پست معرفی محصول در بلاگ', project:'p3', status:'done', priority:'medium', assignee:'m1', due:'2026-09-02', desc:'انتشار و اشتراک‌گذاری در شبکه‌های اجتماعی شرکت.', checklist:[{t:'ویرایش نهایی',d:true},{t:'انتشار',d:true}]},
  {id:'t11', title:'طراحی آیکون‌های سفارشی برای اپ', project:'p1', status:'done', priority:'low', assignee:'m3', due:'2026-08-30', desc:'ست آیکون یکدست برای منوی اصلی.', checklist:[]},
];

const notifications = [
  {icon:'clock', text:'تسک «اصلاح فرم پرداخت در چک‌اوت» دو روز از موعدش گذشته است', time:'۲۰ دقیقه پیش', unread:true},
  {icon:'user', text:'رضا مرادی شما را در تسک «یکپارچه‌سازی درگاه دوم پرداخت» به‌عنوان بررسی‌کننده اضافه کرد', time:'۱ ساعت پیش', unread:true},
  {icon:'comment', text:'نگار احمدی روی تسک «طراحی حالت خالی» نظر جدیدی ثبت کرد', time:'۳ ساعت پیش', unread:true},
  {icon:'check', text:'پویا کریمی تسک «مستندسازی API پرداخت» را تکمیل کرد', time:'دیروز', unread:false},
  {icon:'flag', text:'اولویت تسک «تست عملکرد صفحه فرود» به فوری تغییر کرد', time:'دیروز', unread:false},
  {icon:'user', text:'مریم صادقی به پروژه «زیرساخت API پرداخت» اضافه شد', time:'۲ روز پیش', unread:false},
];

const comments = {
  t1:[{author:'امیر حسینی', text:'روی سافاری ۱۷ باگ رو تکرار کردم، مشکل از regex اعتبارسنجی شماره کارته.'}, {author:'رضا مرادی', text:'لطفاً امروز رفعش کن، این تسک مسدودکننده کمپین لانچه.'}],
  t4:[{author:'پویا کریمی', text:'endpoint پرداخت آماده شد، فقط تست تراکنش ناموفق مونده.'}],
};

const priorityLabel = {urgent:'فوری', high:'بالا', medium:'متوسط', low:'کم'};
const statusLabel = {todo:'در انتظار انجام', progress:'در حال انجام', review:'بازبینی', done:'انجام‌شده'};
const statusColor = {todo:'#9AA6B5', progress:'#4C7EF3', review:'#E8A33D', done:'#2FB37E'};

const svg = {
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c1-4.2 4-6.4 7.5-6.4s6.5 2.2 7.5 6.4"/></svg>',
  comment:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11H8l-4 4V5Z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 13l4 4L19 7"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 21V4h12l-3 4 3 4H6"/></svg>',
  warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 8v5M12 17h.01"/><path d="M10.3 3.9 2.6 18a1.8 1.8 0 0 0 1.6 2.7h15.6a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z"/></svg>',
  paperclip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12.5l6.5-6.5a3 3 0 1 1 4.2 4.2L11 18a5 5 0 1 1-7-7l7-7"/></svg>',
};

/* ---------------- Router ---------------- */
const titles = {
  dashboard:['داشبورد','وضعیت کلی پروژه‌ها و تسک‌های تیم','dashboard'],
  projects:['پروژه‌ها','همه پروژه‌های فعال تیم شما','projects'],
  kanban:['تسک‌ها','مدیریت تسک‌ها به‌صورت برد کانبان','tasks'],
  team:['تیم','اعضای تیم و بار کاری آن‌ها','team'],
  notifications:['اعلان‌ها','آخرین رویدادهای مربوط به کارهای شما','notifications'],
  profile:['پروفایل','اطلاعات حساب کاربری شما','profile'],
};
let currentProjectFilter = null;
let mobileKanbanTab = 'todo';

function go(view, opts={}){
  document.querySelectorAll('.dock-item[data-view]').forEach(n=>n.classList.toggle('active', n.dataset.view===view));
  document.getElementById('pageTitle').textContent = titles[view][0];
  document.getElementById('pageSub').textContent = titles[view][1];
  document.getElementById('breadcrumbCurrent').textContent = titles[view][0];
  document.getElementById('newTaskBtn').style.display = (view==='kanban') ? 'inline-flex' : 'none';
  closeSearch();
  if(opts.projectId!==undefined) currentProjectFilter = opts.projectId;
  const renderers = {dashboard:renderDashboard, projects:renderProjects, kanban:renderKanban, team:renderTeam, notifications:renderNotifications, profile:renderProfile};
  document.getElementById('viewport').innerHTML = renderers[view]();
  window.scrollTo(0,0);
  if(view==='kanban') initDragAndDrop();
}
document.querySelectorAll('.dock-item[data-view]').forEach(btn=>{
  btn.addEventListener('click', ()=>go(btn.dataset.view, btn.dataset.view==='kanban'?{projectId:null}:{}));
});

function openSidebar(){ /* mobile dock is always visible (bottom bar) */ }

/* ---------------- Global search ---------------- */
function closeSearch(){
  document.getElementById('searchResults').classList.remove('active');
  document.getElementById('searchBox').classList.remove('has-results');
}
function runSearch(qRaw){
  const q = qRaw.trim();
  const box = document.getElementById('searchBox');
  const wrap = document.getElementById('searchResults');
  if(!q){ closeSearch(); return; }

  const matchedTasks = tasks.filter(t=>t.title.includes(q)).slice(0,4);
  const matchedProjects = projects.filter(p=>p.name.includes(q) || p.desc.includes(q)).slice(0,3);
  const matchedMembers = members.filter(m=>m.name.includes(q) || m.role.includes(q)).slice(0,3);
  const hasAny = matchedTasks.length || matchedProjects.length || matchedMembers.length;

  let html = '';
  if(matchedTasks.length){
    html += `<div class="search-result-group-label">تسک‌ها</div>` + matchedTasks.map(t=>`
      <div class="search-result-row" onclick="pickSearchResult('task','${t.id}')">
        <span class="badge p-${t.priority}" style="flex-shrink:0;">${priorityLabel[t.priority]}</span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.title}</span>
      </div>`).join('');
  }
  if(matchedProjects.length){
    html += `<div class="search-result-group-label">پروژه‌ها</div>` + matchedProjects.map(p=>`
      <div class="search-result-row" onclick="pickSearchResult('project','${p.id}')">
        <div class="proj-swatch" style="width:22px;height:22px;font-size:10px;background:${p.color};flex-shrink:0;">${p.name.charAt(0)}</div>
        <span>${p.name}</span>
      </div>`).join('');
  }
  if(matchedMembers.length){
    html += `<div class="search-result-group-label">اعضای تیم</div>` + matchedMembers.map(m=>`
      <div class="search-result-row" onclick="pickSearchResult('member','${m.id}')">
        <div class="avatar sm">${m.init}</div>
        <span>${m.name}<span style="color:var(--muted-soft);"> · ${m.role}</span></span>
      </div>`).join('');
  }
  if(!hasAny){ html = `<div class="search-empty">چیزی برای «${q}» پیدا نشد</div>`; }

  wrap.innerHTML = html;
  wrap.classList.add('active');
  box.classList.add('has-results');
}
function pickSearchResult(type, id){
  document.getElementById('globalSearch').value = '';
  closeSearch();
  if(type==='task'){ go('kanban', {projectId:null}); openTask(id); }
  else if(type==='project'){ openProjectBoard(id); }
  else if(type==='member'){ go('team'); }
}
document.addEventListener('click', e=>{
  if(!e.target.closest('#searchBox')) closeSearch();
});

/* ---------------- Dashboard ---------------- */
function renderDashboard(){
  const overdueTasks = tasks.filter(t=>t.overdue);
  const openTasks = tasks.filter(t=>t.status!=='done');
  const doneThisWeek = tasks.filter(t=>t.status==='done').length;
  const riskyProjects = projects.filter(p=>p.risk);

  const stageCols = [
    {key:'todo', label:'در انتظار انجام', color:'#9AA6B5'},
    {key:'progress', label:'در حال انجام', color:'#4C7EF3'},
    {key:'review', label:'بازبینی', color:'#E8A33D'},
    {key:'done', label:'انجام‌شده', color:'#2FB37E'},
  ];
  const flowNodes = stageCols.map((c,i)=>{
    const stageTasks = tasks.filter(t=>t.status===c.key);
    const assignees = [...new Set(stageTasks.map(t=>t.assignee))].slice(0,4);
    const avatars = assignees.map(id=>`<div class="mini-avatar" title="${memberById(id).name}">${memberById(id).init}</div>`).join('');
    return `<div class="flow-node">
        <div class="flow-node-top"><span class="flow-dot" style="background:${c.color}"></span><span class="flow-node-label">${c.label}</span></div>
        <div class="flow-node-count">${stageTasks.length}</div>
        <div class="flow-stack">${avatars}</div>
      </div>${i<stageCols.length-1?'<div class="flow-connector"></div>':''}`;
  }).join('');

  const overdueRows = overdueTasks.map(t=>{
    const p = projects.find(pr=>pr.id===t.project);
    return `<div class="task-row" onclick="openTask('${t.id}')">
      <div class="task-row-main">
        <div class="task-row-title">${t.title}</div>
        <div class="task-row-meta"><span>${p.name}</span>·<span style="color:var(--coral);font-weight:700;">موعد گذشته: ${formatDate(t.due)}</span></div>
      </div>
      <span class="badge p-${t.priority}">${priorityLabel[t.priority]}</span>
    </div>`;
  }).join('');

  const progressRows = projects.slice(0,4).map(p=>`
    <div class="proj-progress-item">
      <div class="ppi-top"><span class="ppi-name">${p.name}</span><span class="ppi-pct">${p.progress}٪</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${p.progress}%;background:${p.color};"></div></div>
      ${p.risk ? `<div class="ppi-risk">${svg.warn} ممکن است این پروژه با تأخیر مواجه شود</div>` : ''}
    </div>`).join('');

  // donut chart via conic-gradient
  const total = tasks.length;
  const counts = stageCols.map(c=>tasks.filter(t=>t.status===c.key).length);
  let acc = 0;
  const segs = stageCols.map((c,i)=>{
    const pct = counts[i]/total*100;
    const seg = `${c.color} ${acc}% ${acc+pct}%`;
    acc += pct;
    return seg;
  }).join(', ');

  return `
  <div class="view-inner">
    <div class="flow-panel glass">
      <div class="flow-head"><span class="flow-title">زنجیره کاری تسک‌ها</span><a class="link-btn" onclick="go('kanban')">مشاهده برد کامل</a></div>
      <div class="flow-track">${flowNodes}</div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card glass">
        <div class="kpi-top"><div class="kpi-icon" style="background:var(--blue-soft);color:#2F5FCB;">${svg.check}</div></div>
        <div class="kpi-label">تسک‌های باز</div><div class="kpi-value">${openTasks.length}</div><div class="kpi-foot">در ${projects.length} پروژه فعال</div>
      </div>
      <div class="kpi-card glass">
        <div class="kpi-top"><div class="kpi-icon" style="background:var(--coral-soft);color:#C6414A;">${svg.warn}</div></div>
        <div class="kpi-label">عقب‌افتاده</div><div class="kpi-value" style="color:var(--coral);">${overdueTasks.length}</div><div class="kpi-foot">${riskyProjects.length} پروژه ممکن است تحت‌تأثیر باشد</div>
      </div>
      <div class="kpi-card glass">
        <div class="kpi-top"><div class="kpi-icon" style="background:var(--mint-soft);color:#1E8A5F;">${svg.flag}</div></div>
        <div class="kpi-label">تکمیل‌شده این هفته</div><div class="kpi-value">${doneThisWeek}</div><div class="kpi-foot">از ${tasks.length} تسک کل</div>
      </div>
      <div class="kpi-card glass">
        <div class="kpi-top"><div class="kpi-icon" style="background:var(--amber-soft);color:#A66A15;">${svg.user}</div></div>
        <div class="kpi-label">اعضای تیم</div><div class="kpi-value">${members.length}</div><div class="kpi-foot">در حال کار روی ${projects.length} پروژه</div>
      </div>
    </div>

    <div class="dash-grid">
      <div class="panel glass">
        <div class="panel-head"><span class="panel-title">تسک‌های عقب‌افتاده</span><a class="link-btn" onclick="go('kanban')">مشاهده همه</a></div>
        <div class="overdue-alert">
          ${svg.warn}
          <div>
            <div class="overdue-alert-title">${overdueTasks.length} تسک عقب‌افتاده</div>
            <div class="overdue-alert-sub">${riskyProjects.length} پروژه ممکن است تحت‌تأثیر قرار بگیرد</div>
          </div>
        </div>
        <div style="margin-top:4px;">${overdueRows}</div>
      </div>

      <div style="display:flex;flex-direction:column;gap:var(--sp-5);">
        <div class="panel glass">
          <div class="panel-head"><span class="panel-title">پراکندگی وضعیت تسک‌ها</span></div>
          <div class="donut-wrap">
            <div class="donut" style="background:conic-gradient(${segs});">
              <div class="donut-hole"><b>${total}</b><span>کل تسک</span></div>
            </div>
            <div class="donut-legend">
              ${stageCols.map((c,i)=>`<div class="legend-row"><span class="legend-dot" style="background:${c.color}"></span>${c.label}<span class="legend-count">${counts[i]}</span></div>`).join('')}
            </div>
          </div>
        </div>
        <div class="panel glass">
          <div class="panel-head"><span class="panel-title">پیشرفت پروژه‌ها</span><a class="link-btn" onclick="go('projects')">مشاهده همه</a></div>
          ${progressRows}
        </div>
      </div>
    </div>
  </div>`;
}

/* ---------------- Projects ---------------- */
function renderProjects(){
  const cards = projects.map(p=>{
    const avatars = p.members.map(id=>{const m=memberById(id); return `<div class="avatar sm" title="${m.name}">${m.init}</div>`;}).join('');
    return `<div class="proj-card glass" onclick="openProjectBoard('${p.id}')">
      <div class="proj-card-top">
        <div class="proj-swatch" style="background:${p.color}">${p.name.charAt(0)}</div>
        ${p.risk ? `<span class="badge p-high">در معرض تأخیر</span>` : `<span class="badge s-progress">در مسیر</span>`}
      </div>
      <div class="proj-card-name">${p.name}</div>
      <div class="proj-card-desc">${p.desc}</div>
      <div class="bar-track" style="margin-top:14px;"><div class="bar-fill" style="width:${p.progress}%;background:${p.color};"></div></div>
      <div class="proj-card-foot">
        <div class="avatar-stack">${avatars}</div>
        <span style="font-size:12px;color:var(--muted);font-weight:700;">${p.progress}٪</span>
      </div>
    </div>`;
  }).join('');
  return `<div class="view-inner"><div class="proj-grid">${cards}</div></div>`;
}

function openProjectBoard(id){
  currentProjectFilter = id;
  go('kanban', {projectId:id});
}

/* ---------------- Kanban ---------------- */
function renderKanban(){
  const proj = currentProjectFilter ? projects.find(p=>p.id===currentProjectFilter) : null;
  const filtered = proj ? tasks.filter(t=>t.project===proj.id) : tasks;
  const cols = [
    {key:'todo', label:'در انتظار انجام', color:'#9AA6B5'},
    {key:'progress', label:'در حال انجام', color:'#4C7EF3'},
    {key:'review', label:'بازبینی', color:'#E8A33D'},
    {key:'done', label:'انجام‌شده', color:'#2FB37E'},
  ];

  const filterBar = proj ? `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:var(--sp-5);">
      <div class="proj-swatch" style="width:28px;height:28px;font-size:12px;background:${proj.color};">${proj.name.charAt(0)}</div>
      <strong style="font-size:14px;">${proj.name}</strong>
      <button class="btn ghost" style="font-size:12px;" onclick="currentProjectFilter=null; go('kanban',{projectId:null});">مشاهده همه تسک‌ها</button>
    </div>` : '';

  const tabs = `<div class="kanban-tabs">${cols.map(c=>`<button class="kanban-tab ${mobileKanbanTab===c.key?'active':''}" onclick="setMobileTab('${c.key}')">${c.label}</button>`).join('')}</div>`;

  const columns = cols.map(c=>{
    const colTasks = filtered.filter(t=>t.status===c.key);
    const cards = colTasks.map(t=>{
      const isOverdue = t.overdue && t.status!=='done';
      return `<div class="task-card" draggable="true" data-id="${t.id}" onclick="openTask('${t.id}')">
        <div class="task-card-title">${t.title}</div>
        <div class="task-card-foot">
          <span class="badge p-${t.priority}">${priorityLabel[t.priority]}</span>
          <div style="display:flex;align-items:center;gap:8px;">
            <span class="task-card-due ${isOverdue?'overdue':''}">${formatDate(t.due)}</span>
            <div class="avatar sm" title="${memberById(t.assignee).name}">${memberById(t.assignee).init}</div>
          </div>
        </div>
      </div>`;
    }).join('');
    return `<div class="col glass ${mobileKanbanTab===c.key?'tab-active':''}" data-status="${c.key}" style="--col-color:${c.color};">
      <div class="col-head">
        <div class="col-head-left"><span class="col-dot" style="background:${c.color}"></span><span class="col-title">${c.label}</span></div>
        <span class="col-count">${colTasks.length}</span>
      </div>
      <div class="card-list" data-status="${c.key}">${cards || ''}</div>
      <button class="add-task-btn" onclick="openNewTask('${c.key}')">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg> افزودن تسک
      </button>
    </div>`;
  }).join('');

  return `<div class="view-inner">${filterBar}${tabs}<div class="board">${columns}</div></div>`;
}
function setMobileTab(key){ mobileKanbanTab = key; go('kanban', {projectId: currentProjectFilter}); }

function initDragAndDrop(){
  document.querySelectorAll('.task-card').forEach(card=>{
    card.addEventListener('dragstart', e=>{ e.dataTransfer.setData('text/plain', card.dataset.id); setTimeout(()=>card.style.opacity='0.4',0); });
    card.addEventListener('dragend', ()=>{ card.style.opacity='1'; });
  });
  document.querySelectorAll('.col').forEach(col=>{
    col.addEventListener('dragover', e=>{ e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', ()=>col.classList.remove('drag-over'));
    col.addEventListener('drop', e=>{
      e.preventDefault(); col.classList.remove('drag-over');
      const id = e.dataTransfer.getData('text/plain');
      const task = tasks.find(t=>t.id===id);
      if(task){ task.status = col.dataset.status; if(col.dataset.status==='done') task.overdue=false; go('kanban', {projectId: currentProjectFilter}); }
    });
  });
}

/* ---------------- Team ---------------- */
function renderTeam(){
  const cards = members.map(m=>`
    <div class="member-card glass">
      <div class="avatar lg">${m.init}</div>
      <div>
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
        <div class="member-load">${m.load}</div>
      </div>
    </div>`).join('');
  return `<div class="view-inner"><div class="team-grid">${cards}</div></div>`;
}

/* ---------------- Notifications ---------------- */
function renderNotifications(){
  const rows = notifications.map(n=>`
    <div class="notif-item ${n.unread?'unread':''}">
      <div class="notif-icon">${svg[n.icon]}</div>
      <div class="notif-content">
        <div class="notif-text">${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
    </div>`).join('');
  return `<div class="view-inner"><div class="panel glass">${rows}</div></div>`;
}

/* ---------------- Profile ---------------- */
function renderProfile(){
  return `<div class="view-inner">
    <div class="panel glass" style="padding:var(--sp-6);display:flex;align-items:center;gap:var(--sp-5);margin-bottom:var(--sp-5);">
      <div class="avatar lg" style="width:72px;height:72px;font-size:24px;">س.ر</div>
      <div>
        <div style="font-size:18px;font-weight:800;">سارا رضایی</div>
        <div style="font-size:13px;color:var(--muted);margin-top:3px;">مدیر محصول · sara.rezaei@taskflow.app</div>
      </div>
    </div>
    <div class="panel glass empty-state">
      ${svg.user}
      <div class="empty-state-title">بخش تنظیمات پروفایل</div>
      <div class="empty-state-sub">این نسخه یک نمونهٔ اولیه است؛ ویرایش اطلاعات حساب در نسخه بعدی اضافه می‌شود</div>
    </div>
  </div>`;
}

/* ---------------- Task drawer ---------------- */
function formatDate(iso){
  const d = new Date(iso);
  const months = ['ژانویه','فوریه','مارس','آوریل','مه','ژوئن','ژوئیه','اوت','سپتامبر','اکتبر','نوامبر','دسامبر'];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

function openTask(id){
  const t = tasks.find(x=>x.id===id);
  const p = projects.find(pr=>pr.id===t.project);
  const a = memberById(t.assignee);
  const checklistHtml = t.checklist.length ? t.checklist.map((c,i)=>`
    <label class="checklist-item ${c.d?'done':''}">
      <input type="checkbox" ${c.d?'checked':''} onchange="toggleChecklist('${t.id}',${i})">
      <span class="checklist-label">${c.t}</span>
    </label>`).join('') : `<div style="font-size:12px;color:var(--muted-soft);">آیتمی ثبت نشده است</div>`;

  const commentList = (comments[t.id]||[]);
  const commentsHtml = commentList.length ? commentList.map(c=>`
    <div class="comment">
      <div class="avatar sm">${memberById(members.find(m=>m.name===c.author)?.id || 'm1').init}</div>
      <div class="comment-body"><div class="comment-author">${c.author}</div>${c.text}</div>
    </div>`).join('') : `<div style="font-size:12px;color:var(--muted-soft);">هنوز نظری ثبت نشده است</div>`;

  document.getElementById('drawerBody').innerHTML = `
    <h2 class="drawer-title">${t.title}</h2>
    <div class="field-grid">
      <div><div class="field-label">وضعیت</div><div class="field-value"><span class="badge s-${t.status}">${statusLabel[t.status]}</span></div></div>
      <div><div class="field-label">اولویت</div><div class="field-value"><span class="badge p-${t.priority}">${priorityLabel[t.priority]}</span></div></div>
      <div><div class="field-label">مسئول</div><div class="field-value"><div class="avatar sm">${a.init}</div>${a.name}</div></div>
      <div><div class="field-label">موعد</div><div class="field-value" style="${t.overdue?'color:var(--coral);font-weight:700;':''}">${formatDate(t.due)}</div></div>
    </div>
    <div class="field-label">پروژه</div>
    <div class="field-value" style="margin-bottom:var(--sp-2);">
      <div class="proj-swatch" style="width:20px;height:20px;font-size:10px;background:${p.color};">${p.name.charAt(0)}</div>${p.name}
    </div>

    <div class="section-title">توضیحات</div>
    <div class="desc-text">${t.desc}</div>

    <div class="section-title">چک‌لیست</div>
    <div>${checklistHtml}</div>

    <div class="section-title">پیوست‌ها</div>
    <div class="attachment-chip">${svg.paperclip} spec-final-v2.fig</div>

    <div class="section-title">نظرات</div>
    <div>${commentsHtml}</div>

    <div class="section-title">فعالیت</div>
    <div class="activity-item">${a.name} این تسک را ${statusLabel[t.status]==='انجام‌شده'?'تکمیل کرد':'ایجاد کرد'} · ${formatDate(t.due)}</div>
  `;
  document.getElementById('drawerOverlay').classList.add('active');
}
function toggleChecklist(taskId, idx){
  const t = tasks.find(x=>x.id===taskId);
  t.checklist[idx].d = !t.checklist[idx].d;
  openTask(taskId);
}
function closeDrawer(e){
  if(e && e.target!==e.currentTarget) return;
  document.getElementById('drawerOverlay').classList.remove('active');
}
function openNewTask(status){
  document.getElementById('drawerBody').innerHTML = `
    <h2 class="drawer-title">تسک جدید</h2>
    <div class="form-group"><label class="form-label">عنوان تسک</label><input class="form-input" placeholder="مثلاً: بررسی باگ فرم ورود" autofocus></div>
    <div class="field-grid">
      <div><label class="form-label">وضعیت</label>
        <select class="form-input"><option ${status==='todo'?'selected':''}>در انتظار انجام</option><option ${status==='progress'?'selected':''}>در حال انجام</option><option ${status==='review'?'selected':''}>بازبینی</option><option ${status==='done'?'selected':''}>انجام‌شده</option></select>
      </div>
      <div><label class="form-label">اولویت</label><select class="form-input"><option>کم</option><option>متوسط</option><option selected>بالا</option><option>فوری</option></select></div>
    </div>
    <div class="field-grid">
      <div><label class="form-label">مسئول</label><select class="form-input">${members.map(m=>`<option>${m.name}</option>`).join('')}</select></div>
      <div><label class="form-label">موعد</label><input class="form-input" type="date"></div>
    </div>
    <div class="form-group"><label class="form-label">توضیحات</label><textarea class="form-input" rows="4" placeholder="جزئیات تسک را بنویسید..."></textarea></div>
    <button class="btn" style="width:100%;justify-content:center;" onclick="closeDrawer()">ایجاد تسک</button>
  `;
  document.getElementById('drawerOverlay').classList.add('active');
}

/* ---------------- Login ---------------- */
document.getElementById('loginForm').addEventListener('submit', e=>{
  e.preventDefault();
  const email = document.getElementById('emailInput');
  const pass = document.getElementById('passInput');
  const emailGroup = document.getElementById('emailGroup');
  const passGroup = document.getElementById('passGroup');
  const emailValid = /\S+@\S+\.\S+/.test(email.value);
  const passValid = pass.value.length > 0;
  emailGroup.classList.toggle('invalid', !emailValid);
  passGroup.classList.toggle('invalid', !passValid);
  if(emailValid && passValid){
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('app').classList.add('active');
    go('dashboard');
  }
});

/* init */
go('dashboard');
