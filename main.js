const tasks = [
    // Ordering & Decisions
    { id: 'o1', name: 'Ceiling Color Decision', start: '2026-05-04', end: '2026-05-07', urgency: 'imminent', dependencies: [] },
    { id: 'o2', name: 'Order Central Mirror (5-day lead)', start: '2026-05-04', end: '2026-05-05', urgency: 'imminent', dependencies: [] },
    { id: 'o3', name: 'Order Bathroom Panels/Sinks', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', dependencies: [] },
    { id: 'o4', name: 'Bathroom Floor Decision', start: '2026-05-04', end: '2026-05-08', urgency: 'next', dependencies: [] },
    { id: 'o5', name: 'Order Black Formica', start: '2026-05-05', end: '2026-05-06', urgency: 'coming-next', dependencies: [] },
    { id: 'o6', name: 'Order Zinc Bar Surface', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', dependencies: [] },
    { id: 'o7', name: 'Bar Tiled Border Decision', start: '2026-05-05', end: '2026-05-08', urgency: 'next', dependencies: [] },
    { id: 'o8', name: 'Order Bar Foot Rail', start: '2026-05-05', end: '2026-05-07', urgency: 'coming-next', dependencies: [] },
    { id: 'o9', name: 'Order Stools, Hooks, Pedestals', start: '2026-05-06', end: '2026-05-09', urgency: 'next', dependencies: [] },
    { id: 'o10', name: 'Under Bar Lighting Plan', start: '2026-05-06', end: '2026-05-09', urgency: 'next', dependencies: [] },
    { id: 'o11', name: 'Order Tables & Chairs', start: '2026-05-05', end: '2026-05-09', urgency: 'next', dependencies: [] },

    // Audio & Speakers
    { id: 'a1', name: 'Lay Audio Wires on Ceiling', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', dependencies: [] },
    { id: 'a2', name: 'Build South Spkr Cab & Mesh', start: '2026-05-06', end: '2026-05-10', urgency: 'coming-next', dependencies: [] },
    { id: 'a3', name: 'Modify NW Cabinet & Face', start: '2026-05-06', end: '2026-05-09', urgency: 'coming-next', dependencies: [] },
    { id: 'a4', name: 'NE Angle & Bar L/R Shelves', start: '2026-05-07', end: '2026-05-10', urgency: 'coming-next', dependencies: [] },
    { id: 'a5', name: 'Install Amps in Bar Left Col.', start: '2026-05-11', end: '2026-05-13', urgency: 'next', dependencies: ['a1'] },

    // Ceiling & Lighting
    { id: 'c1', name: 'Relocate Light Boxes (W. Wall)', start: '2026-05-04', end: '2026-05-05', urgency: 'imminent', dependencies: [] },
    { id: 'c2', name: 'Patch Ceiling Wire Holes', start: '2026-05-06', end: '2026-05-07', urgency: 'coming-next', dependencies: ['a1'] },
    { id: 'c3', name: 'Install Tin Ceiling Brackets', start: '2026-05-07', end: '2026-05-08', urgency: 'coming-next', dependencies: ['c1', 'a1'] },
    { id: 'c4', name: 'Install Tin Ceiling + Trims', start: '2026-05-09', end: '2026-05-12', urgency: 'next', dependencies: ['c3', 'c2'] },
    { id: 'c5', name: 'Paint Primer on Tin Ceiling', start: '2026-05-13', end: '2026-05-14', urgency: 'next', dependencies: ['c4'] },
    { id: 'c6', name: 'Paint Final Color on Ceiling', start: '2026-05-15', end: '2026-05-17', urgency: 'next', dependencies: ['c5', 'o1'] },
    { id: 'c7', name: 'Re-install Bar Crown Molding', start: '2026-05-18', end: '2026-05-19', urgency: 'final', dependencies: ['c6'] },

    // Bathrooms (by the 13th)
    { id: 'b1', name: 'Demolish Bathrooms Partially', start: '2026-05-05', end: '2026-05-08', urgency: 'imminent', dependencies: [] },
    { id: 'b2', name: 'Remove Doors & Prep Trim', start: '2026-05-09', end: '2026-05-10', urgency: 'coming-next', dependencies: ['b1'] },
    { id: 'b3', name: 'Paint Half-Height to Ceiling', start: '2026-05-11', end: '2026-05-12', urgency: 'next', dependencies: ['b1'] },
    { id: 'b4', name: 'Install Black Formica', start: '2026-05-13', end: '2026-05-14', urgency: 'next', dependencies: ['b2', 'o5'] },
    { id: 'b5', name: 'Install SS Panels & Sinks', start: '2026-05-15', end: '2026-05-17', urgency: 'final', dependencies: ['b4', 'o3'] },
    { id: 'b6', name: 'Replace Signs & Accessories', start: '2026-05-18', end: '2026-05-19', urgency: 'final', dependencies: ['b5'] },

    // The Bar Modifications
    { id: 'bar1', name: 'Modify Radiator Cover', start: '2026-05-07', end: '2026-05-09', urgency: 'coming-next', dependencies: [] },
    { id: 'bar2', name: 'Install Central Mirror', start: '2026-05-10', end: '2026-05-11', urgency: 'next', dependencies: ['o2'] },
    { id: 'bar3', name: 'Modify Shelves for Central Bar', start: '2026-05-12', end: '2026-05-14', urgency: 'next', dependencies: ['bar2'] },
    { id: 'bar4', name: 'Install Zinc Surface & Gutter', start: '2026-05-15', end: '2026-05-18', urgency: 'next', dependencies: ['bar3', 'o6'] },
    { id: 'bar5', name: 'Install Tiles on Bar Footing', start: '2026-05-19', end: '2026-05-21', urgency: 'final', dependencies: ['bar4', 'o7'] },
    { id: 'bar6', name: 'Epoxy Grout Tiles', start: '2026-05-22', end: '2026-05-23', urgency: 'final', dependencies: ['bar5'] },
    { id: 'bar7', name: 'Install & Anchor Bar Foot Rail', start: '2026-05-24', end: '2026-05-25', urgency: 'final', dependencies: ['bar6', 'o8'] },
    { id: 'bar8', name: 'Clean, Sand, Osmo Bar Wood', start: '2026-05-26', end: '2026-05-28', urgency: 'final', dependencies: ['bar7'] },

    // Walls / Booths
    { id: 'w1', name: 'Produce Missing Wainscotting', start: '2026-05-06', end: '2026-05-11', urgency: 'coming-next', dependencies: [] },
    { id: 'w2', name: 'Install Missing Wainscotting', start: '2026-05-12', end: '2026-05-14', urgency: 'next', dependencies: ['w1'] },
    { id: 'w3', name: 'Clean, Tint, Osmo Wainscot.', start: '2026-05-15', end: '2026-05-18', urgency: 'next', dependencies: ['w2'] },
    { id: 'w4', name: 'Install SW Booth Bench', start: '2026-05-19', end: '2026-05-21', urgency: 'final', dependencies: ['w3'] }
];

const START_DATE = new Date('2026-05-03T12:00:00');
const END_DATE = new Date('2026-06-03T12:00:00'); // extended a bit to accommodate all final tests
const msPerDay = 1000 * 60 * 60 * 24;
const totalDays = Math.round((END_DATE - START_DATE) / msPerDay);

function initGantt() {
    renderTimeline();
    renderTasks();
    setTimeout(() => renderDependencies(), 150);

    document.getElementById('dependencies-toggle').addEventListener('change', (e) => {
        document.getElementById('dependency-lines').style.display = e.target.checked ? 'block' : 'none';
        if (e.target.checked) renderDependencies();
    });

    window.addEventListener('resize', () => {
        if (document.getElementById('dependencies-toggle').checked) renderDependencies();
    });

    const scrollContainer = document.querySelector('.gantt-container-scroll');
    if (scrollContainer) scrollContainer.scrollLeft = 0;
}

function renderTimeline() {
    const timelineEl = document.getElementById('gantt-timeline');
    for (let i = 0; i <= totalDays; i++) {
        const d = new Date(START_DATE.getTime() + i * msPerDay);
        const marker = document.createElement('div');
        marker.className = 'date-marker';
        marker.textContent = `${d.getMonth() + 1}/${d.getDate()}`;

        const gridLine = document.createElement('div');
        gridLine.className = 'date-marker-line';
        marker.appendChild(gridLine);

        timelineEl.appendChild(marker);
    }
}

function renderTasks() {
    const tasksEl = document.getElementById('gantt-tasks');

    tasks.forEach(task => {
        const row = document.createElement('div');
        row.className = 'task-row';
        row.id = `row-${task.id}`;

        const label = document.createElement('div');
        label.className = 'task-label';
        label.textContent = task.name;

        const barsContainer = document.createElement('div');
        barsContainer.className = 'task-bars-container';

        const tStart = new Date(task.start + 'T12:00:00');
        let tEnd = new Date(task.end + 'T12:00:00');

        const offsetLeftDays = (tStart - START_DATE) / msPerDay;
        const durationDays = ((tEnd - tStart) / msPerDay) + 1;

        const offsetPercent = (offsetLeftDays / totalDays) * 100;
        const widthPercent = (durationDays / totalDays) * 100;

        const bar = document.createElement('div');
        bar.className = `task-bar urgency-${task.urgency}`;
        bar.id = `bar-${task.id}`;
        bar.style.left = `${offsetPercent}%`;
        bar.style.width = `${widthPercent}%`;
        bar.title = `${task.name}: ${task.start} to ${task.end}`;
        bar.textContent = task.name;

        barsContainer.appendChild(bar);
        row.appendChild(label);
        row.appendChild(barsContainer);
        tasksEl.appendChild(row);
    });
}

function renderDependencies() {
    const svg = document.getElementById('dependency-lines');
    if (!svg) return;
    svg.innerHTML = '';
    const svgRect = svg.getBoundingClientRect();

    tasks.forEach(task => {
        const toBar = document.getElementById(`bar-${task.id}`);
        if (!toBar) return;

        task.dependencies.forEach(depId => {
            const fromBar = document.getElementById(`bar-${depId}`);
            if (!fromBar) return;

            const fromRect = fromBar.getBoundingClientRect();
            const toRect = toBar.getBoundingClientRect();

            const startX = fromRect.right - svgRect.left;
            const startY = fromRect.top + fromRect.height / 2 - svgRect.top;
            const endX = toRect.left - svgRect.left;
            const endY = toRect.top + toRect.height / 2 - svgRect.top;

            drawDependencyCurve(svg, startX, startY, endX, endY);
        });
    });
}

function drawDependencyCurve(svg, x1, y1, x2, y2) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'dependency-line');

    const offset = Math.max(20, (x2 - x1) / 2);
    let d = "";
    if (x2 < x1 + 10) {
        d = `M ${x1} ${y1} C ${x1 + 30} ${y1}, ${x1 + 30} ${y1 + (y2 - y1) / 2}, ${x1 - 10} ${y1 + (y2 - y1) / 2} C ${x2 - 30} ${y1 + (y2 - y1) / 2}, ${x2 - 30} ${y2}, ${x2 - 4} ${y2}`;
    } else {
        d = `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2 - 4} ${y2}`;
    }

    path.setAttribute('d', d);
    svg.appendChild(path);

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute('class', 'dependency-arrow');
    arrow.setAttribute('points', `${x2},${y2} ${x2 - 8},${y2 - 5} ${x2 - 8},${y2 + 5}`);
    svg.appendChild(arrow);
}

document.addEventListener('DOMContentLoaded', initGantt);
