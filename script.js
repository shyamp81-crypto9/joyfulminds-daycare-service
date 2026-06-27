const mockData = {
  overview: {
    title: 'Network overview',
    rows: [
      ['Priority', 'Owner', 'Due', 'Status'],
      ['Call Maya Singh about provider documents', 'Admin', 'Today 2:00 PM', 'Hot'],
      ['Send enrollment package to Chen family', 'Enrollment', 'Today', 'Active'],
      ['Review first aid renewal for Aisha Grant', 'Compliance', 'Tomorrow', 'Pending'],
      ['Follow up with 9 parent leads from Facebook campaign', 'CRM', 'Friday', 'Active']
    ]
  },
  providers: {
    title: 'Provider leads & onboarding',
    rows: [
      ['Provider', 'City', 'Stage', 'Notes'],
      ['Maya Singh', 'Whitby', 'Documents pending', 'Police check uploaded, first aid pending'],
      ['Aisha Grant', 'Ajax', 'Training 80%', 'Ready for final interview'],
      ['Leah Thompson', 'Oshawa', 'Home readiness', 'Capacity goal: 5 children'],
      ['Nadia Brooks', 'Pickering', 'New lead', 'Interested in full-time home daycare income']
    ]
  },
  parents: {
    title: 'Parent inquiries & enrollment CRM',
    rows: [
      ['Family', 'Child age', 'Need', 'Lead status'],
      ['Chen family', '2.5 years', 'Full-time care near Whitby', 'Matched'],
      ['Patel family', '11 months', 'Infant opening for September', 'Consult booked'],
      ['Williams family', '4 years', 'Part-time preschool care', 'Documents pending'],
      ['Alvarez family', '6 years', 'After-school care', 'New inquiry']
    ]
  },
  children: {
    title: 'Child profiles, attendance, and daily reports',
    rows: [
      ['Child', 'Provider', 'Today', 'Daily report'],
      ['Noah C.', 'Aisha Grant', 'Checked in 8:12 AM', 'Lunch, nap, outdoor play logged'],
      ['Mila P.', 'Sarah Home Care', 'Absent', 'Parent note received'],
      ['Ethan W.', 'Leah Thompson', 'Checked in 7:55 AM', 'Allergy alert: peanuts'],
      ['Sofia A.', 'Aisha Grant', 'Checked out 4:48 PM', 'Report sent to parent']
    ]
  },
  payments: {
    title: 'Payments, invoices, and reminders',
    rows: [
      ['Account', 'Invoice', 'Amount', 'Status'],
      ['Chen family', 'INV-1048', '$1,250', 'Paid'],
      ['Patel family', 'INV-1049', '$300 deposit', 'Due Friday'],
      ['Williams family', 'INV-1050', '$780', 'Reminder sent'],
      ['Provider payout pool', 'June cycle', '$18,450', 'Processing']
    ]
  }
};

function statusClass(value) {
  const text = String(value).toLowerCase();
  if (text.includes('hot') || text.includes('due') || text.includes('reminder')) return 'status hot';
  if (text.includes('pending') || text.includes('processing')) return 'status warn';
  return 'status';
}

function renderDashboard(tab = 'overview') {
  const data = mockData[tab] || mockData.overview;
  const title = document.getElementById('dash-title');
  const content = document.getElementById('dash-content');
  if (!title || !content) return;
  title.textContent = data.title;
  const [head, ...rows] = data.rows;
  const table = document.createElement('table');
  table.className = 'data-table';
  table.innerHTML = `<thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((cell, idx) => idx === row.length - 1 ? `<td><span class="${statusClass(cell)}">${cell}</span></td>` : `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>`;
  content.replaceChildren(table);
}

document.querySelectorAll('.dash-tab').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.dash-tab').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    renderDashboard(button.dataset.tab);
  });
});

const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('[data-nav-links]');
if (mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileMenu.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    mobileMenu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }));
}

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const original = button.textContent;
    button.textContent = 'Demo submitted — next step: CRM follow-up';
    setTimeout(() => { button.textContent = original; }, 2600);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
renderDashboard('overview');
