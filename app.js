const STORAGE_KEY = 'lecta-app-state-v1';

const iconPaths = {
  cap: '<path d="M2 10 12 5l10 5-10 5L2 10Z"/><path d="M6 12v5c3.5 2.4 8.5 2.4 12 0v-5"/>',
  dashboard: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  folder: '<path d="M3 6h7l2 2h9l-2 11H3V6Z"/>',
  archive: '<path d="M4 7h16v14H4zM3 3h18v4H3zM9 11h6"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  play: '<path d="m8 5 11 7-11 7V5Z"/>',
  pause: '<path d="M9 5v14M15 5v14"/>',
  reset: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  checkCircle: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  alert: '<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  stopwatch: '<circle cx="12" cy="13" r="8"/><path d="M12 9v5l3 2M9 2h6M12 2v3"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  arrowLeft: '<path d="m15 18-6-6 6-6M9 12h11"/>',
  filter: '<path d="M4 5h16M7 10h10M10 15h4"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  ellipsis: '<path d="M5 12h.01M12 12h.01M19 12h.01"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/>',
  paperclip: '<path d="m20 12-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-9.5 9.5a2 2 0 0 1-3-3L15 7"/>',
  book: '<path d="M4 5a3 3 0 0 1 3-3h5v18H7a3 3 0 0 0-3 2V5ZM20 5a3 3 0 0 0-3-3h-5v18h5a3 3 0 0 1 3 2V5Z"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 14h8"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  file: '<path d="M6 2h9l5 5v15H6V2Z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1"/>',
  mapPin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  video: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3M15 4h5v16h-5"/>'
};

function icon(name, cls = '') {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.file}</svg>`;
}

const initialState = {
  page: 'dashboard',
  lastPage: 'planner',
  taskFilter: 'all',
  courses: { group: true, personal: true },
  projectTab: 'active',
  resourceTab: 'all',
  search: '',
  mobileNav: false,
  popover: null,
  projectMenuId: null,
  settings: { notifications: true, reminders: true, weeklyDigest: false },
  breakTimer: { mode: 'focus', duration: 1500, remaining: 1500, running: false, endAt: null },
  events: [
    { id: 'e1', title: 'Bootcamp Challenge', start: '09:00', end: '10:30', type: 'location', detail: 'Class 2.31', tone: 'blue' },
    { id: 'e2', title: 'Final Project Meeting', start: '13:00', end: '14:00', type: 'video', detail: 'Zoom Link', tone: 'green' }
  ],
  tasks: [
    { id: 't1', title: 'Research Plan Lecta', course: 'Personal Project', type: 'personal', due: todayISO(), dueLabel: 'Today, 11:59 PM', priority: 'high', status: 'in-progress', completion: 75, reminder: true, notes: 'Feedback from classmates.', project: 'Lecta Student App', overdue: false },
    { id: 't2', title: 'Sprint 1 Presentation OWOW', course: 'Group Project', type: 'group', due: addDaysISO(1), dueLabel: 'Tomorrow', priority: 'medium', status: 'not-started', completion: 0, reminder: false, notes: 'Prepare the final deck for tomorrow’s lecture.', project: 'OWOW Atlas', overdue: false },
    { id: 't3', title: 'GIT Merge OWOW Atlas', course: 'Group Project', type: 'group', due: addDaysISO(12), dueLabel: 'June 24', priority: 'low', status: 'not-started', completion: 0, reminder: false, notes: 'Review open pull requests before merging.', project: 'OWOW Atlas', overdue: true }
  ],
  projects: [
    { id: 'p1', name: 'Lecta Student App', status: 'Due Tomorrow', statusTone: 'danger', progress: 85, color: '#087de2', section: 'Remaining Tasks', archived: false, members: ['SK'], tasks: [{ title: 'Finalize competitor analysis slides', due: 'Due 5:00 PM', urgent: true }, { title: 'Proofread executive summary', due: 'Due 8:00 PM' }] },
    { id: 'p2', name: 'OWOW Atlas', status: 'Due in 5 days', statusTone: 'warning', progress: 40, color: '#b76e2c', section: 'Current Sprint', archived: false, members: ['DK','AJ'], tasks: [{ title: 'Wireframe initial user flows', due: 'Oct 24', member: 'DK' }, { title: 'Conduct user interviews (5)', due: 'Completed', done: true, member: 'AJ' }] },
    { id: 'p3', name: 'Bootcamp Challenges', status: 'Just Started', statusTone: 'blue', progress: 10, color: '#087de2', section: 'Setup Phase', archived: false, members: [], tasks: [{ title: 'Initialize Git repo & CI/CD', due: 'Nov 2' }, { title: 'Define database schema', due: 'Nov 5' }] },
    { id: 'p4', name: 'Portfolio Sprint', status: 'Archived', statusTone: 'blue', progress: 100, color: '#0a875f', section: 'Completed', archived: true, members: ['SK'], tasks: [{ title: 'Publish portfolio case study', due: 'Completed', done: true }] }
  ],
  resources: [
    { id: 'r1', name: 'Research Plan', category: 'courses', kind: 'PDF', meta: 'Viewed 2 hrs ago', icon: 'file', tone: 'red' },
    { id: 'r2', name: 'UX Design Project', category: 'projects', kind: 'Folder', meta: 'Viewed yesterday', icon: 'folder', tone: 'blue' },
    { id: 'r3', name: 'User testing', category: 'feedback', kind: 'Sheet', meta: 'Viewed Wed', icon: 'dashboard', tone: 'green' }
  ],
  shortcuts: ['My Class Timetable', 'Agile Dev - GitHub Repo', 'Final Research Paper...']
};

function todayISO() { return new Date().toISOString().slice(0, 10); }
function addDaysISO(days) { const d = new Date(); d.setDate(d.getDate() + days); return d.toISOString().slice(0, 10); }

let state = loadState();
let editingTaskId = null;
let editingEventId = null;
let timerInterval = null;
normalizeBreakTimer();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...structuredClone(initialState), ...saved, page: 'dashboard', search: '', popover: null, projectMenuId: null, mobileNav: false } : structuredClone(initialState);
  } catch { return structuredClone(initialState); }
}
function saveState() {
  const { page, search, popover, projectMenuId, mobileNav, ...persisted } = state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

function normalizeBreakTimer() {
  if (!state.breakTimer) state.breakTimer = structuredClone(initialState.breakTimer);
  const timer = state.breakTimer;
  if (timer.running && timer.endAt) {
    timer.remaining = Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));
    if (timer.remaining === 0) { timer.running = false; timer.endAt = null; }
  }
}

function selectBreakDuration(duration, mode) {
  state.breakTimer = { mode, duration, remaining: duration, running: false, endAt: null };
  saveState(); render();
}

function toggleBreakTimer() {
  normalizeBreakTimer();
  const timer = state.breakTimer;
  if (timer.running) {
    timer.remaining = Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));
    timer.running = false;
    timer.endAt = null;
  } else {
    if (timer.remaining <= 0) timer.remaining = timer.duration;
    timer.running = true;
    timer.endAt = Date.now() + timer.remaining * 1000;
  }
  saveState(); render();
}

function resetBreakTimer() {
  const timer = state.breakTimer;
  timer.remaining = timer.duration;
  timer.running = false;
  timer.endAt = null;
  saveState(); render();
}

function syncTimerTicker() {
  if (timerInterval) clearInterval(timerInterval);
  normalizeBreakTimer();
  updateTimerDom();
  if (state.breakTimer.running) timerInterval = setInterval(tickBreakTimer, 500);
}

function tickBreakTimer() {
  const timer = state.breakTimer;
  timer.remaining = Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));
  updateTimerDom();
  if (timer.remaining === 0) {
    timer.running = false;
    timer.endAt = null;
    clearInterval(timerInterval);
    timerInterval = null;
    saveState();
    render();
    toast(timer.mode === 'focus' ? 'Focus session complete — time for a short break.' : 'Break complete — ready to focus again?');
  }
}

function updateTimerDom() {
  const timer = state.breakTimer;
  const display = document.querySelector('.timer-display');
  const progress = document.querySelector('.timer-progress');
  if (display) display.textContent = formatTimer(timer.remaining);
  if (progress) progress.style.strokeDashoffset = 653.45 * (1 - timer.remaining / timer.duration);
}

function render() {
  const app = document.querySelector('#app');
  app.innerHTML = `<div class="app-shell">${sidebar()}<main class="main">${topbar()}<div class="content">${pageView()}</div></main></div>`;
  bindGlobalEvents();
  syncTimerTicker();
}

function sidebar() {
  const items = [
    ['dashboard','dashboard','Dashboard'], ['planner','calendar','Planner'], ['projects','folder','Projects'], ['resources','archive','Resources'], ['break','stopwatch','Break Mode'], ['settings','settings','Settings']
  ];
  const active = state.page === 'task-details' ? 'planner' : state.page;
  return `<aside class="sidebar ${state.mobileNav ? 'open' : ''}">
    <div class="brand"><span class="brand-mark">${icon('cap')}</span><span><div class="brand-name">Lecta</div><div class="brand-sub">Student Life</div></span></div>
    <nav class="nav" aria-label="Main navigation">${items.map(([page,ic,label]) => `<button class="nav-item ${active === page ? 'active' : ''}" data-nav="${page}">${icon(ic)}<span>${label}</span></button>`).join('')}</nav>
    <button class="quick-add" data-action="add-task">${icon('plus')} Quick Add</button>
  </aside>`;
}

function topbar() {
  const placeholders = { dashboard: 'Search tasks, classes...', planner: 'Search tasks, courses...', 'task-details': 'Search tasks, courses...', projects: 'Search projects...', resources: 'Search resources, links, or docs...', break: 'Focus on one thing at a time...', settings: 'Search settings...' };
  return `<header class="topbar">
    <button class="icon-btn mobile-menu" data-action="mobile-menu" aria-label="Open navigation">${icon('list')}</button>
    <label class="search-wrap">${icon('search')}<input class="search-input" id="global-search" value="${esc(state.search)}" placeholder="${placeholders[state.page]}" aria-label="Search" /></label>
    <div class="top-actions">
      <button class="icon-btn" data-action="notifications" aria-label="Notifications">${icon('bell')}<span class="notification-dot"></span></button>
      <button class="avatar" data-action="profile" aria-label="Open profile">SK</button>
    </div>
  </header>${popoverView()}`;
}

function popoverView() {
  if (state.popover === 'notifications') return `<div class="popover"><h3>Notifications</h3><div class="notification"><b>Research Plan is due today</b><span>Don’t forget to attach your final notes.</span></div><div class="notification"><b>New comment in OWOW Atlas</b><span>David replied to your wireframes.</span></div><button class="link-btn" data-action="close-popover">Mark all as read</button></div>`;
  if (state.popover === 'profile') return `<div class="popover profile-menu"><button class="menu-btn" data-nav="settings">${icon('settings')} Account settings</button><button class="menu-btn" data-action="reset-demo">${icon('clock')} Reset demo data</button><button class="menu-btn">${icon('logout')} Sign out</button></div>`;
  return '';
}

function pageView() {
  switch (state.page) {
    case 'planner': return plannerView();
    case 'task-details': return taskDetailsView();
    case 'projects': return projectsView();
    case 'resources': return resourcesView();
    case 'break': return breakModeView();
    case 'settings': return settingsView();
    default: return dashboardView();
  }
}

function dashboardView() {
  const visible = matchingTasks(state.tasks).slice(0, 3);
  const openTasks = state.tasks.filter(t => t.status !== 'completed');
  return `<section>
    <h1 class="greeting">Good morning, Kadir</h1><p class="page-subtitle">Let's make today productive. Here is your overview.</p>
    <div class="stats-grid">
      ${statCard('checkCircle','blue',openTasks.length,'tasks today')}
      ${statCard('alert','red',state.tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length,'deadlines this week')}
      ${statCard('users','green',1,'group meeting')}
    </div>
    <div class="dash-main">
      <article class="card task-card"><div class="card-heading"><h2 class="section-title">Today's Tasks</h2><button class="link-btn" data-nav="planner">View All ${icon('chevronRight')}</button></div>
        <div class="task-list">${visible.length ? visible.map(dashboardTask).join('') : emptyState('checkCircle','No tasks match your search.')}</div>
      </article>
      <aside class="card deadline-card"><div class="deadline-title">${icon('stopwatch')}<span>Upcoming<br/>Deadlines</span></div><div class="deadline-items"><div class="deadline-item"><div class="deadline-item-head"><span>Portfolio Review #2</span><span class="days-badge">2 Days</span></div><p>Final draft submission via Canvas.</p></div><div class="deadline-item"><div class="deadline-item-head"><span>Bootcamp Challenge</span><span class="days-badge soft">4 Days</span></div><p>Three.js animation.</p></div></div><button class="btn btn-wide" data-nav="planner">View Planner</button></aside>
    </div>
    <div class="dash-bottom">
      <article class="card schedule-card"><div class="card-heading"><h2 class="section-title">Today's Schedule</h2><button class="link-btn" data-action="add-event">${icon('plus')} Add event</button></div><div class="timeline">${state.events.length ? state.events.sort((a,b)=>a.start.localeCompare(b.start)).map(scheduleEvent).join('') : '<div class="empty-state">Nothing scheduled yet.</div>'}</div></article>
      <article class="card overview-card"><h2 class="section-title">Project Overview</h2><div class="project-bars">${state.projects.filter(p => !p.archived).slice(0,3).map(projectBar).join('')}</div><button class="btn btn-wide" data-nav="projects">View All Projects</button></article>
    </div>
  </section>`;
}

function statCard(ic, tone, num, label) { return `<div class="card stat-card"><span class="stat-icon ${tone}">${icon(ic)}</span><span><div class="stat-number">${num}</div><div class="stat-label">${label}</div></span></div>`; }
function projectBar(p) { return `<div><div class="bar-label"><span>${esc(p.name)}</span><span>${p.progress}%</span></div><div class="bar-track"><div class="bar-fill ${p.color === '#ef7826' ? 'orange' : p.color === '#0a875f' ? 'green' : ''}" style="width:${p.progress}%;background:${p.color}"></div></div></div>`; }
function scheduleEvent(event) {
  return `<div class="event ${event.tone === 'green' ? 'green' : ''}"><div class="event-time">${formatTime(event.start)} – ${formatTime(event.end)}</div><div class="event-box"><b>${esc(event.title)}</b><button class="icon-btn event-edit" data-event-edit="${event.id}" aria-label="Edit ${esc(event.title)}">${icon('edit')}</button><div class="event-meta">${icon(event.type === 'video' ? 'video' : 'mapPin')} ${esc(event.detail)}</div></div></div>`;
}
function dashboardTask(t) {
  return `<button class="task-row ${t.overdue ? 'overdue' : ''}" data-task-open="${t.id}"><span class="round-check ${t.status === 'completed' ? 'completed' : ''}">${t.status === 'completed' ? icon('check') : ''}</span><span class="task-copy"><div class="task-name">${esc(t.title)}</div><div class="task-meta">${esc(t.course)} • ${t.overdue ? 'Overdue' : t.dueLabel === 'Tomorrow' ? "For tomorrow's lecture" : `Due ${esc(t.dueLabel)}`}</div></span><span class="task-tags">${t.overdue ? '<span class="chip high">Overdue</span>' : ''}<span class="chip ${t.priority}">${capitalize(t.priority)} Priority</span></span></button>`;
}

function plannerView() {
  const tasks = matchingTasks(state.tasks).filter(t => {
    if (!state.courses[t.type]) return false;
    if (state.taskFilter === 'today') return t.due === todayISO();
    if (state.taskFilter === 'week') return daysFromNow(t.due) <= 7;
    if (state.taskFilter === 'later') return daysFromNow(t.due) > 7;
    return true;
  });
  return `<section><div class="page-head-row"><div><h1 class="page-title">Planner</h1><p class="page-subtitle">Manage your upcoming deadlines and tasks.</p></div><div class="filter-pills">${[['all','All Tasks'],['today','Today'],['week','This Week'],['later','Later']].map(([v,l]) => `<button class="pill ${state.taskFilter === v ? 'active' : ''}" data-task-filter="${v}">${l}</button>`).join('')}</div></div>
    <div class="planner-layout"><div class="planner-list">${tasks.length ? tasks.map(plannerTask).join('') : emptyState('calendar','No tasks found for these filters.')}</div>
      <aside class="card course-filter"><div class="filter-title">${icon('filter')} Filter by Course</div><label class="check-label"><input type="checkbox" data-course="group" ${state.courses.group ? 'checked' : ''}/> Group Project <span class="count-badge">${state.tasks.filter(t=>t.type==='group').length}</span></label><label class="check-label"><input type="checkbox" data-course="personal" ${state.courses.personal ? 'checked' : ''}/> Personal Project <span class="count-badge">${state.tasks.filter(t=>t.type==='personal').length}</span></label></aside>
    </div></section>`;
}

function plannerTask(t) {
  const status = t.status === 'not-started' ? '<span class="chip low">Not started</span>' : t.completion ? `<span class="mini-progress"><span style="width:${t.completion}%"></span></span>` : '';
  return `<article class="planner-task priority-${t.priority}"><button class="round-check ${t.status === 'completed' ? 'completed' : ''}" data-task-toggle="${t.id}" aria-label="Toggle task">${t.status === 'completed' ? icon('check') : ''}</button><div class="planner-task-main" data-task-open="${t.id}"><div class="task-name">${esc(t.title)}</div><div class="task-meta">${esc(t.course)}</div></div><div class="planner-tags"><span class="chip ${t.priority}">${capitalize(t.priority)}${t.priority !== 'low' ? ' !' : ''}</span><span class="chip low">${icon('calendar')} ${esc(t.dueLabel)}</span>${status}</div></article>`;
}

function taskDetailsView() {
  const task = state.tasks.find(t => t.id === state.selectedTaskId) || state.tasks[0];
  if (!task) return emptyState('calendar','This task no longer exists.');
  return `<section><button class="back-btn" data-nav="planner">${icon('arrowLeft')} Back to Planner</button><div class="details-layout"><div><article class="card detail-hero"><div class="detail-badges"><span class="chip ${task.priority}">● &nbsp; ${task.priority.toUpperCase()} PRIORITY</span><span class="chip blue">↻ &nbsp; ${task.status === 'completed' ? 'Completed' : 'In Progress'}</span></div><h1 class="detail-title">${esc(task.title)}</h1><div class="detail-info"><span class="info-item due">${icon('calendar')} Due ${esc(task.dueLabel)}</span>${task.reminder ? `<span class="info-item">${icon('clock')} Alert 1 hour before</span>` : ''}</div><div class="completion"><div class="completion-label"><span>Completion</span><b style="color:#0074c9">${task.completion}%</b></div><div class="bar-track"><div class="bar-fill" style="width:${task.completion}%"></div></div></div></article>
      <article class="card detail-notes"><div class="notes-head"><h2 class="section-title notes-title">${icon('list')} Notes</h2><button class="icon-btn" data-action="edit-task" aria-label="Edit notes">${icon('edit')}</button></div><div class="notes-box">${esc(task.notes || 'No notes added yet.')}</div></article></div>
      <aside><article class="card detail-actions"><button class="btn btn-primary btn-wide" data-action="edit-task">${icon('edit')} Edit Task Details</button><button class="btn btn-wide" data-task-toggle="${task.id}">${icon('check')} ${task.status === 'completed' ? 'Mark as In Progress' : 'Mark as Complete'}</button><div class="separator"></div><button class="btn btn-danger btn-wide" data-action="delete-task">${icon('trash')} Delete Task</button></article><article class="card context-card"><div class="eyebrow">Context & Links</div><div class="related-project">${icon('folder')}<div><div class="related-label">Related Project</div><b>${esc(task.project || 'No project')}</b></div></div><div class="attachment-box">${icon('paperclip')}No attachments yet<br/><button data-action="fake-upload">Add file</button></div></article></aside></div></section>`;
}

function projectsView() {
  const projects = state.projects.filter(p => p.archived === (state.projectTab === 'archived')).filter(p => p.name.toLowerCase().includes(state.search.toLowerCase()));
  return `<section><h1 class="page-title">Group Projects</h1><div class="project-toolbar"><div class="tab-group"><button class="pill ${state.projectTab === 'active' ? 'active' : ''}" data-project-tab="active">Active Projects (${state.projects.filter(p=>!p.archived).length})</button><button class="pill ${state.projectTab === 'archived' ? 'active' : ''}" data-project-tab="archived">Archived</button></div><button class="btn new-project-btn" data-action="new-project">${icon('plus')} New Project</button></div><div class="project-grid">${projects.length ? projects.map(projectCard).join('') : emptyState('folder','No projects in this view.')}</div></section>`;
}
function projectCard(p) {
  return `<article class="card project-card"><div class="project-card-head"><div><span class="status-tag ${p.statusTone}">${p.statusTone === 'danger' ? '⚠' : p.statusTone === 'warning' ? '▣' : '⚑'} ${esc(p.status)}</span><h2 class="project-title">${esc(p.name)}</h2></div><button class="icon-btn" data-project-menu="${p.id}" aria-label="Project menu for ${esc(p.name)}">${icon('ellipsis')}</button>${state.projectMenuId === p.id ? `<div class="project-popover"><button data-project-add-task="${p.id}">${icon('plus')} Add task</button><button data-project-archive="${p.id}">${icon(p.archived ? 'folder' : 'archive')} ${p.archived ? 'Restore project' : 'Archive project'}</button></div>` : ''}</div><div class="progress-label"><span>Progress</span><b>${p.progress}%</b></div><div class="bar-track"><div class="bar-fill" style="width:${p.progress}%;background:${p.color}"></div></div><div class="project-task-box"><div class="project-task-box-title">${icon('list')} ${esc(p.section)}</div>${p.tasks.length ? p.tasks.map((t,index) => `<div class="project-task-line ${t.done ? 'done' : ''}"><button class="round-check ${t.done ? 'completed' : ''}" data-project-task-toggle="${p.id}" data-task-index="${index}" aria-label="${t.done ? 'Reopen' : 'Complete'} ${esc(t.title)}">${t.done ? icon('check') : ''}</button><span class="task-copy"><div class="task-name">${esc(t.title)}</div><div class="project-task-due ${t.urgent ? 'red' : ''}">${t.urgent ? '◷ ' : '▣ '}${esc(t.due)}</div></span>${t.member ? `<span class="member-bubble">${t.member}</span>` : ''}</div>`).join('') : '<div class="project-empty">No tasks yet. Add the first one from the project menu.</div>'}</div><div class="project-card-footer"><div class="members">${p.members.map(m=>`<span class="member-bubble">${m}</span>`).join('')}${p.members.length ? `<span>${p.members.length} Member${p.members.length>1?'s':''}</span>` : ''}</div><button class="link-btn" data-action="workspace" data-project-id="${p.id}">Go to Workspace ${icon('chevronRight')}</button></div></article>`;
}

function resourcesView() {
  const tabs = ['all','courses','projects','portfolio','tools','feedback'];
  const resources = state.resources.filter(r => state.resourceTab === 'all' || r.category === state.resourceTab).filter(r => r.name.toLowerCase().includes(state.search.toLowerCase()));
  return `<section><h1 class="page-title">Resources Hub</h1><p class="page-subtitle">Your central workspace for courses, projects, and feedback.</p><div class="resource-tabs">${tabs.map(t=>`<button class="pill ${state.resourceTab===t?'active':''}" data-resource-tab="${t}">${capitalize(t)}</button>`).join('')}</div><div class="resources-layout"><div class="resource-main"><section class="resource-section"><h2 class="section-title">Recently Opened</h2><div class="recent-grid" style="margin-top:18px">${resources.length ? resources.map(resourceCard).join('') : emptyState('archive','No resources match this filter.')}</div></section><section class="resource-section"><h2 class="section-title resource-section-title">${icon('cap')} Course Links</h2><div class="link-grid"><article class="card course-link-card"><span class="resource-icon blue">${icon('book')}</span><button class="icon-btn">${icon('ellipsis')}</button><h3>Portfolio</h3><div class="resource-meta">Canvas Portal</div></article><article class="card course-link-card green"><span class="resource-icon green">${icon('flask')}</span><button class="icon-btn">${icon('ellipsis')}</button><h3>DOT Framework</h3><div class="resource-meta">Course Site</div></article></div></section><section class="resource-section"><h2 class="section-title resource-section-title" style="color:#9b5105">${icon('briefcase')} <span style="color:var(--ink)">Project Workspaces</span></h2><div class="workspace-grid"><article class="card workspace-card"><div class="workspace-head"><span class="workspace-dot">🗂</span><b>Lecta Student App</b></div><p>Shared folder containing all research documents, slide decks, and final reports for the Q4 case study.</p></article><article class="card workspace-card"><div class="workspace-head"><span class="workspace-dot">🌐</span><b>OWOW Atlas</b></div><p>Interactive prototypes, wireframes, and design system components for the capstone app project.</p></article></div></section></div><aside class="card favorites"><div class="favorites-head"><span>Saved & Favorites</span>${icon('bookmark')}</div><div class="favorite-list">${state.shortcuts.map((s,i)=>`<div class="favorite-item"><span class="favorite-icon">${icon(i===0?'clock':i===1?'link':'file')}</span>${esc(s)}</div>`).join('')}</div><button class="shortcut-btn" data-action="add-shortcut">＋ &nbsp; Add Shortcut</button></aside></div></section>`;
}
function resourceCard(r) { return `<button class="card recent-card" data-action="open-resource" style="border:0;text-align:left"><span class="resource-icon ${r.tone}">${icon(r.icon)}</span><span><div class="resource-name">${esc(r.name)}</div><div class="resource-meta">${esc(r.meta)}</div></span></button>`; }

function breakModeView() {
  const timer = state.breakTimer;
  const circumference = 653.45;
  const offset = circumference * (1 - timer.remaining / timer.duration);
  const isFocus = timer.mode === 'focus';
  return `<section class="break-page"><div class="break-heading"><div><h1 class="page-title">Break Mode</h1><p class="page-subtitle">A calm space for focused work and intentional rest.</p></div><span class="focus-status ${timer.running ? 'running' : ''}">${timer.running ? 'Session in progress' : 'Ready when you are'}</span></div><article class="card break-card"><div class="timer-tabs"><button class="timer-option ${timer.mode === 'focus' ? 'active' : ''}" data-break-duration="1500" data-break-mode="focus"><b>25 min</b><span>Focus</span></button><button class="timer-option ${timer.mode === 'break' ? 'active' : ''}" data-break-duration="300" data-break-mode="break"><b>5 min</b><span>Short break</span></button></div><div class="timer-shell"><svg class="timer-ring" viewBox="0 0 240 240" aria-hidden="true"><circle class="timer-track" cx="120" cy="120" r="104"/><circle class="timer-progress ${isFocus ? '' : 'rest'}" cx="120" cy="120" r="104" style="stroke-dasharray:${circumference};stroke-dashoffset:${offset}"/></svg><div class="timer-center"><span class="timer-label">${isFocus ? 'FOCUS' : 'BREAK'}</span><strong class="timer-display">${formatTimer(timer.remaining)}</strong><span>${timer.running ? 'Stay with it' : isFocus ? 'Study with full attention' : 'Step away and recharge'}</span></div></div><div class="timer-actions"><button class="btn timer-reset" data-action="reset-timer">${icon('reset')} Reset</button><button class="btn btn-primary timer-toggle" data-action="toggle-timer">${icon(timer.running ? 'pause' : 'play')} ${timer.running ? 'Pause' : timer.remaining < timer.duration ? 'Resume' : 'Start'}</button></div><p class="timer-tip">${isFocus ? 'Put distractions aside and focus on one meaningful task for 25 minutes.' : 'Take five minutes away from the screen. Stretch, breathe, or get some water.'}</p></article></section>`;
}

function settingsView() {
  return `<section><h1 class="page-title">Settings</h1><p class="page-subtitle">Choose how Lecta works for you.</p><div class="settings-grid"><article class="card settings-card"><h2>Preferences</h2>${settingRow('notifications','Notifications','Show alerts for new project activity.')}${settingRow('reminders','Task reminders','Remind me before a task is due.')}${settingRow('weeklyDigest','Weekly digest','Email a summary every Monday morning.')}</article><article class="card settings-card profile-card"><div class="profile-avatar">SK</div><h2 style="margin-bottom:0">Kadir</h2><p>Student account</p><button class="btn btn-wide" data-action="save-settings">Save preferences</button></article></div></section>`;
}
function settingRow(key,title,desc) { return `<div class="setting-row"><div class="setting-copy"><b>${title}</b><span>${desc}</span></div><button class="toggle ${state.settings[key]?'on':''}" data-setting="${key}" role="switch" aria-checked="${state.settings[key]}"></button></div>`; }

function matchingTasks(tasks) { const q = state.search.trim().toLowerCase(); return q ? tasks.filter(t => `${t.title} ${t.course} ${t.project} ${t.notes}`.toLowerCase().includes(q)) : tasks; }
function daysFromNow(iso) { return Math.ceil((new Date(`${iso}T23:59:00`) - new Date()) / 86400000); }
function formatTime(value) { const [hours, minutes] = value.split(':').map(Number); const period = hours >= 12 ? 'PM' : 'AM'; return `${String(hours % 12 || 12).padStart(2,'0')}:${String(minutes).padStart(2,'0')} ${period}`; }
function formatTimer(totalSeconds) { const safe = Math.max(0, totalSeconds); return `${String(Math.floor(safe / 60)).padStart(2,'0')}:${String(safe % 60).padStart(2,'0')}`; }
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
function esc(v='') { return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function emptyState(ic,msg) { return `<div class="card empty-state">${icon(ic)}<div>${msg}</div></div>`; }

function bindGlobalEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => navigate(el.dataset.nav)));
  document.querySelector('[data-action="add-task"]')?.addEventListener('click', () => openTaskModal());
  document.querySelector('[data-action="mobile-menu"]')?.addEventListener('click', () => { state.mobileNav = !state.mobileNav; render(); });
  document.querySelector('[data-action="notifications"]')?.addEventListener('click', () => { state.popover = state.popover === 'notifications' ? null : 'notifications'; render(); });
  document.querySelector('[data-action="profile"]')?.addEventListener('click', () => { state.popover = state.popover === 'profile' ? null : 'profile'; render(); });
  document.querySelector('[data-action="close-popover"]')?.addEventListener('click', () => { state.popover = null; render(); });
  document.querySelector('[data-action="reset-demo"]')?.addEventListener('click', resetDemo);
  const search = document.querySelector('#global-search');
  search?.addEventListener('input', e => { state.search = e.target.value; updatePageOnly(); });
  document.querySelectorAll('[data-task-open]').forEach(el => el.addEventListener('click', e => { if (e.target.closest('[data-task-toggle]')) return; state.selectedTaskId = el.dataset.taskOpen; state.lastPage = state.page; navigate('task-details'); }));
  document.querySelectorAll('[data-task-toggle]').forEach(el => el.addEventListener('click', e => { e.stopPropagation(); toggleTask(el.dataset.taskToggle); }));
  document.querySelectorAll('[data-task-filter]').forEach(el => el.addEventListener('click', () => { state.taskFilter = el.dataset.taskFilter; render(); }));
  document.querySelectorAll('[data-course]').forEach(el => el.addEventListener('change', () => { state.courses[el.dataset.course] = el.checked; saveState(); render(); }));
  document.querySelectorAll('[data-project-tab]').forEach(el => el.addEventListener('click', () => { state.projectTab = el.dataset.projectTab; render(); }));
  document.querySelectorAll('[data-project-menu]').forEach(el => el.addEventListener('click', () => { state.projectMenuId = state.projectMenuId === el.dataset.projectMenu ? null : el.dataset.projectMenu; render(); }));
  document.querySelectorAll('[data-project-task-toggle]').forEach(el => el.addEventListener('click', () => toggleProjectTask(el.dataset.projectTaskToggle, Number(el.dataset.taskIndex))));
  document.querySelectorAll('[data-project-add-task]').forEach(el => el.addEventListener('click', () => openProjectTaskModal(el.dataset.projectAddTask)));
  document.querySelectorAll('[data-project-archive]').forEach(el => el.addEventListener('click', () => toggleProjectArchive(el.dataset.projectArchive)));
  document.querySelectorAll('[data-resource-tab]').forEach(el => el.addEventListener('click', () => { state.resourceTab = el.dataset.resourceTab; render(); }));
  document.querySelectorAll('[data-action="edit-task"]').forEach(el => el.addEventListener('click', () => openTaskModal(state.tasks.find(t=>t.id===state.selectedTaskId))));
  document.querySelector('[data-action="delete-task"]')?.addEventListener('click', confirmDeleteTask);
  document.querySelector('[data-action="fake-upload"]')?.addEventListener('click', () => toast('Attachment picker is ready for backend integration.'));
  document.querySelector('[data-action="new-project"]')?.addEventListener('click', openProjectModal);
  document.querySelector('[data-action="add-event"]')?.addEventListener('click', () => openEventModal());
  document.querySelectorAll('[data-event-edit]').forEach(el => el.addEventListener('click', () => openEventModal(state.events.find(event => event.id === el.dataset.eventEdit))));
  document.querySelector('[data-action="add-shortcut"]')?.addEventListener('click', openShortcutModal);
  document.querySelectorAll('[data-action="open-resource"]').forEach(el => el.addEventListener('click', () => toast('Resource opened.')));
  document.querySelectorAll('[data-action="workspace"]').forEach(el => el.addEventListener('click', () => toast('Workspace opened.')));
  document.querySelectorAll('[data-setting]').forEach(el => el.addEventListener('click', () => { const k=el.dataset.setting; state.settings[k]=!state.settings[k]; saveState(); render(); }));
  document.querySelector('[data-action="save-settings"]')?.addEventListener('click', () => toast('Preferences saved.'));
  document.querySelectorAll('[data-break-duration]').forEach(el => el.addEventListener('click', () => selectBreakDuration(Number(el.dataset.breakDuration), el.dataset.breakMode)));
  document.querySelector('[data-action="toggle-timer"]')?.addEventListener('click', toggleBreakTimer);
  document.querySelector('[data-action="reset-timer"]')?.addEventListener('click', resetBreakTimer);
}

function updatePageOnly() {
  render();
  const input = document.querySelector('#global-search');
  input?.focus();
  input?.setSelectionRange(input.value.length,input.value.length);
}

function navigate(page) {
  state.page = page;
  state.search = '';
  state.popover = null;
  state.mobileNav = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function toggleTask(id) {
  const task = state.tasks.find(t => t.id === id);
  if (!task) return;
  const completed = task.status === 'completed';
  task.status = completed ? 'in-progress' : 'completed';
  if (completed) {
    task.completion = task.previousCompletion ?? 75;
    delete task.previousCompletion;
  } else {
    task.previousCompletion = task.completion;
    task.completion = 100;
  }
  task.overdue = false;
  saveState(); render(); toast(completed ? 'Task moved back to in progress.' : 'Nice work — task completed!');
}

function openTaskModal(task = null) {
  editingTaskId = task?.id || null;
  const root = document.querySelector('#overlay-root');
  const due = task?.due || addDaysISO(1);
  root.innerHTML = `<div class="overlay" data-overlay><form class="modal" id="task-form"><div class="modal-head"><h2>${task ? 'Edit Task' : 'Add New Task'}</h2><button type="button" class="icon-btn" data-modal-close aria-label="Close">✕</button></div><div class="modal-body"><div class="field"><label for="task-title">Task Title</label><input class="control" id="task-title" name="title" required value="${esc(task?.title || '')}" placeholder="e.g., Read chapter 4" /></div><div class="field-row"><div class="field"><label for="task-course">Course / Project</label><select class="control" id="task-course" name="course"><option ${task?.course==='Personal Project'?'selected':''}>Personal Project</option><option ${task?.course==='Group Project'?'selected':''}>Group Project</option><option ${task?.course==='Lecta Student App'?'selected':''}>Lecta Student App</option><option ${task?.course==='OWOW Atlas'?'selected':''}>OWOW Atlas</option></select></div><div class="field"><label for="task-deadline">Deadline</label><input class="control" id="task-deadline" name="due" type="date" min="${todayISO()}" required value="${due}" /></div></div><div class="field"><label>Priority</label><div class="priority-select">${['low','medium','high'].map(p=>`<button type="button" class="priority-option ${p===(task?.priority||'medium')?'selected':''}" data-priority="${p}">${capitalize(p)}</button>`).join('')}</div><input type="hidden" name="priority" value="${task?.priority||'medium'}" /></div><div class="reminder-row"><span class="reminder-icon">${icon('bell')}</span><div class="reminder-copy"><b>Set Reminder</b><select name="reminderTime"><option>1 hour before</option><option>1 day before</option><option>At deadline</option></select></div><button type="button" class="toggle ${task?.reminder===false?'':'on'}" data-modal-reminder role="switch"></button><input type="hidden" name="reminder" value="${task?.reminder===false?'false':'true'}" /></div><div class="field"><label for="task-notes">Notes <span style="color:#8b949f">(Optional)</span></label><textarea class="control" id="task-notes" name="notes" placeholder="Add any additional details...">${esc(task?.notes||'')}</textarea></div></div><div class="modal-footer"><button type="button" class="btn" data-modal-close>Cancel</button><button class="btn btn-primary" id="task-submit" type="submit" ${task?.title?.trim() ? '' : 'disabled'}>${task?'Save Changes':'Save Task'}</button></div></form></div>`;
  bindModalBasics();
  root.querySelectorAll('[data-priority]').forEach(b => b.addEventListener('click', () => { root.querySelectorAll('[data-priority]').forEach(x=>x.classList.remove('selected')); b.classList.add('selected'); root.querySelector('[name="priority"]').value=b.dataset.priority; }));
  root.querySelector('[data-modal-reminder]').addEventListener('click', e => { e.currentTarget.classList.toggle('on'); root.querySelector('[name="reminder"]').value=e.currentTarget.classList.contains('on'); });
  root.querySelector('#task-title').addEventListener('input', e => { root.querySelector('#task-submit').disabled = !e.target.value.trim(); });
  root.querySelector('#task-form').addEventListener('submit', saveTaskFromModal);
  setTimeout(()=>root.querySelector('#task-title')?.focus(),50);
}

function saveTaskFromModal(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const due = data.get('due');
  if (due < todayISO()) return toast('Deadline cannot be earlier than today.');
  const taskData = { title: data.get('title').trim(), course: data.get('course'), type: data.get('course') === 'Personal Project' ? 'personal' : 'group', due, dueLabel: humanDue(due), priority: data.get('priority'), reminder: data.get('reminder') === 'true', notes: data.get('notes').trim(), project: data.get('course'), overdue: false };
  if (editingTaskId) Object.assign(state.tasks.find(t=>t.id===editingTaskId), taskData);
  else state.tasks.unshift({ id: `t${Date.now()}`, status: 'not-started', completion: 0, ...taskData });
  saveState(); closeModal(); render(); toast(editingTaskId ? 'Task updated.' : 'Task added to your planner.'); editingTaskId=null;
}

function humanDue(iso) {
  if (iso === todayISO()) return 'Today, 11:59 PM';
  if (iso === addDaysISO(1)) return 'Tomorrow';
  return new Date(`${iso}T12:00:00`).toLocaleDateString(undefined,{month:'short',day:'numeric'});
}

function confirmDeleteTask() {
  const task = state.tasks.find(t=>t.id===state.selectedTaskId);
  if (!task) return;
  document.querySelector('#overlay-root').innerHTML = `<div class="overlay" data-overlay><div class="modal confirm-modal">${icon('trash')}<h2>Delete task?</h2><p>“${esc(task.title)}” will be permanently removed.</p><div class="confirm-actions"><button class="btn" data-modal-close>Cancel</button><button class="btn btn-danger" data-confirm-delete>Delete</button></div></div></div>`;
  bindModalBasics();
  document.querySelector('[data-confirm-delete]').addEventListener('click',()=>{ state.tasks=state.tasks.filter(t=>t.id!==task.id); saveState(); closeModal(); navigate('planner'); toast('Task deleted.'); });
}

function openEventModal(event = null) {
  editingEventId = event?.id || null;
  const root = document.querySelector('#overlay-root');
  root.innerHTML = `<div class="overlay" data-overlay><form class="modal" id="event-form"><div class="modal-head"><h2>${event ? 'Edit Schedule Event' : 'Add Schedule Event'}</h2><button type="button" class="icon-btn" data-modal-close aria-label="Close">✕</button></div><div class="modal-body"><div class="field"><label for="event-title">Event title</label><input class="control" id="event-title" name="title" required value="${esc(event?.title || '')}" placeholder="e.g., Study group" /></div><div class="field-row"><div class="field"><label for="event-start">Starts</label><input class="control" id="event-start" name="start" type="time" required value="${event?.start || '09:00'}" /></div><div class="field"><label for="event-end">Ends</label><input class="control" id="event-end" name="end" type="time" required value="${event?.end || '10:00'}" /></div></div><div class="field-row"><div class="field"><label for="event-type">Event type</label><select class="control" id="event-type" name="type"><option value="location" ${event?.type !== 'video' ? 'selected' : ''}>In person</option><option value="video" ${event?.type === 'video' ? 'selected' : ''}>Video call</option></select></div><div class="field"><label for="event-detail">Location or link</label><input class="control" id="event-detail" name="detail" required value="${esc(event?.detail || '')}" placeholder="Room or meeting link" /></div></div></div><div class="modal-footer">${event ? `<button type="button" class="btn btn-danger" data-delete-event="${event.id}">${icon('trash')} Delete</button>` : ''}<span class="modal-footer-spacer"></span><button type="button" class="btn" data-modal-close>Cancel</button><button class="btn btn-primary" type="submit">${icon('check')} ${event ? 'Save Changes' : 'Add Event'}</button></div></form></div>`;
  bindModalBasics();
  root.querySelector('#event-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('end') <= data.get('start')) return toast('End time must be after the start time.');
    const eventData = { title: data.get('title').trim(), start: data.get('start'), end: data.get('end'), type: data.get('type'), detail: data.get('detail').trim(), tone: data.get('type') === 'video' ? 'green' : 'blue' };
    if (editingEventId) Object.assign(state.events.find(item => item.id === editingEventId), eventData);
    else state.events.push({ id: `e${Date.now()}`, ...eventData });
    saveState(); closeModal(); render(); toast(editingEventId ? 'Schedule event updated.' : 'Event added to today’s schedule.'); editingEventId = null;
  });
  root.querySelector('[data-delete-event]')?.addEventListener('click', el => {
    state.events = state.events.filter(item => item.id !== el.currentTarget.dataset.deleteEvent);
    saveState(); closeModal(); render(); toast('Schedule event deleted.'); editingEventId = null;
  });
  setTimeout(() => root.querySelector('#event-title')?.focus(), 50);
}

function toggleProjectTask(projectId, taskIndex) {
  const project = state.projects.find(item => item.id === projectId);
  const task = project?.tasks[taskIndex];
  if (!project || !task) return;
  task.done = !task.done;
  if (task.done) { task.previousDue = task.due; task.due = 'Completed'; }
  else { task.due = task.previousDue || 'No deadline'; delete task.previousDue; }
  project.progress = project.tasks.length ? Math.round(project.tasks.filter(item => item.done).length / project.tasks.length * 100) : 0;
  saveState(); render(); toast(task.done ? 'Project task completed.' : 'Project task reopened.');
}

function openProjectTaskModal(projectId) {
  state.projectMenuId = null;
  const project = state.projects.find(item => item.id === projectId);
  if (!project) return;
  const root = document.querySelector('#overlay-root');
  root.innerHTML = `<div class="overlay" data-overlay><form class="modal" id="project-task-form"><div class="modal-head"><h2>Add task to ${esc(project.name)}</h2><button type="button" class="icon-btn" data-modal-close aria-label="Close">✕</button></div><div class="modal-body"><div class="field"><label for="project-task-title">Task title</label><input class="control" id="project-task-title" name="title" required placeholder="e.g., Review prototype" /></div><div class="field"><label for="project-task-due">Due date or note</label><input class="control" id="project-task-due" name="due" placeholder="e.g., Friday, 5:00 PM" /></div></div><div class="modal-footer"><button type="button" class="btn" data-modal-close>Cancel</button><button class="btn btn-primary" type="submit">${icon('plus')} Add Task</button></div></form></div>`;
  bindModalBasics();
  root.querySelector('#project-task-form').addEventListener('submit', e => {
    e.preventDefault(); const data = new FormData(e.currentTarget);
    project.tasks.push({ title: data.get('title').trim(), due: data.get('due').trim() || 'No deadline', done: false });
    project.progress = Math.round(project.tasks.filter(item => item.done).length / project.tasks.length * 100);
    saveState(); closeModal(); render(); toast('Task added to the project.');
  });
  setTimeout(() => root.querySelector('#project-task-title')?.focus(), 50);
}

function toggleProjectArchive(projectId) {
  const project = state.projects.find(item => item.id === projectId);
  if (!project) return;
  project.archived = !project.archived;
  state.projectMenuId = null;
  saveState(); render(); toast(project.archived ? 'Project archived.' : 'Project restored.');
}

function openProjectModal() {
  document.querySelector('#overlay-root').innerHTML = `<div class="overlay" data-overlay><form class="modal" id="project-form"><div class="modal-head"><h2>New Project</h2><button type="button" class="icon-btn" data-modal-close>✕</button></div><div class="modal-body"><div class="field"><label>Project name</label><input class="control" name="name" required placeholder="e.g., Graduation Portfolio" /></div><div class="field"><label>First task</label><input class="control" name="task" placeholder="e.g., Create project brief" /></div></div><div class="modal-footer"><button type="button" class="btn" data-modal-close>Cancel</button><button class="btn btn-primary">Create Project</button></div></form></div>`;
  bindModalBasics();
  document.querySelector('#project-form').addEventListener('submit', e=>{ e.preventDefault(); const d=new FormData(e.currentTarget); state.projects.unshift({id:`p${Date.now()}`,name:d.get('name').trim(),status:'Just Started',statusTone:'blue',progress:0,color:'#087de2',section:'Setup Phase',archived:false,members:['SK'],tasks:d.get('task').trim()?[{title:d.get('task').trim(),due:'No deadline'}]:[]}); saveState(); closeModal(); render(); toast('Project created.'); });
}

function openShortcutModal() {
  document.querySelector('#overlay-root').innerHTML = `<div class="overlay" data-overlay><form class="modal" id="shortcut-form"><div class="modal-head"><h2>Add Shortcut</h2><button type="button" class="icon-btn" data-modal-close>✕</button></div><div class="modal-body"><div class="field"><label>Shortcut name</label><input class="control" name="name" required placeholder="e.g., Course timetable" /></div><div class="field"><label>URL</label><input class="control" type="url" name="url" placeholder="https://" /></div></div><div class="modal-footer"><button type="button" class="btn" data-modal-close>Cancel</button><button class="btn btn-primary">Add Shortcut</button></div></form></div>`;
  bindModalBasics();
  document.querySelector('#shortcut-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);state.shortcuts.push(d.get('name').trim());saveState();closeModal();render();toast('Shortcut added.');});
}

function bindModalBasics() {
  document.querySelectorAll('[data-modal-close]').forEach(el=>el.addEventListener('click',closeModal));
  document.querySelector('[data-overlay]')?.addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal();});
  document.addEventListener('keydown', escapeModal, { once:true });
}
function escapeModal(e){if(e.key==='Escape')closeModal();}
function closeModal(){document.querySelector('#overlay-root').innerHTML='';document.removeEventListener('keydown',escapeModal);}

function resetDemo(){ localStorage.removeItem(STORAGE_KEY); state=structuredClone(initialState); render(); toast('Demo data reset.'); }
function toast(message){const root=document.querySelector('#toast-root');const el=document.createElement('div');el.className='toast';el.textContent=message;root.appendChild(el);setTimeout(()=>el.remove(),2800);}

render();
