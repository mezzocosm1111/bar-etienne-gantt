const groups = [
    {
        name: 'Ordering & Decisions',
        tasks: [
            { id: 'o1', name: 'Color Temp & Look Decision', start: '2026-05-04', end: '2026-05-07', urgency: 'imminent', decision: true },
            { id: 'o2', name: 'Bathroom Floor Decision', start: '2026-05-04', end: '2026-05-08', urgency: 'imminent', decision: true },
            { id: 'o3', name: 'Bar Tiled Border Decision', start: '2026-05-05', end: '2026-05-08', urgency: 'imminent', decision: true },
            { id: 'o4', name: 'Order Central Mirror (5-day)', start: '2026-05-04', end: '2026-05-05', urgency: 'coming-next', decision: false },
            { id: 'o5', name: 'Order Bathroom Sinks/Panels', start: '2026-05-04', end: '2026-05-06', urgency: 'coming-next', decision: false },
            { id: 'o6', name: 'Order Black Formica', start: '2026-05-05', end: '2026-05-06', urgency: 'coming-next', decision: false },
            { id: 'o7', name: 'Order Zinc Bar Surface', start: '2026-04-14', end: '2026-04-15', urgency: 'coming-next', decision: false }, // started april 14
            { id: 'o8', name: 'Order Bar Foot Rail', start: '2026-05-05', end: '2026-05-07', urgency: 'next', decision: false },
            { id: 'o9', name: 'Order Stools, Hooks, Pedestals', start: '2026-05-06', end: '2026-05-09', urgency: 'next', decision: false },
            { id: 'o10', name: 'Order Tables & Chairs', start: '2026-05-05', end: '2026-05-09', urgency: 'next', decision: false },
        ]
    },
    {
        name: 'Ceiling & Lighting',
        tasks: [
            { id: 'c1', name: 'Relocate Light Boxes (W. Wall)', start: '2026-05-04', end: '2026-05-05', urgency: 'imminent', decision: false },
            { id: 'c2', name: 'Patch Ceiling Wire Holes', start: '2026-05-05', end: '2026-05-06', urgency: 'coming-next', decision: false },
            { id: 'c3', name: 'Install Tin Ceiling Brackets', start: '2026-05-06', end: '2026-05-08', urgency: 'coming-next', decision: false },
            { id: 'c4', name: 'Install Tin Ceiling + Trims', start: '2026-05-09', end: '2026-05-12', urgency: 'next', decision: false },
            { id: 'c5', name: 'Paint Primer on Tin Ceiling', start: '2026-05-13', end: '2026-05-14', urgency: 'next', decision: false },
            { id: 'c6', name: 'Paint Final Color on Ceiling', start: '2026-05-15', end: '2026-05-17', urgency: 'next', decision: false },
            { id: 'c7', name: 'Re-install Bar Crown Molding', start: '2026-05-18', end: '2026-05-19', urgency: 'final', decision: false },
        ]
    },
    {
        name: 'Bathrooms (Priority Finish May 13)',
        tasks: [
            { id: 'b1', name: 'Demolish Bathrooms Partially', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', decision: false },
            { id: 'b2', name: 'Remove Doors & Prep Trim', start: '2026-05-06', end: '2026-05-08', urgency: 'coming-next', decision: false },
            { id: 'b3', name: 'Install Black Formica', start: '2026-05-08', end: '2026-05-10', urgency: 'next', decision: false },
            { id: 'b4', name: 'Paint Half-Height to Ceiling', start: '2026-05-08', end: '2026-05-11', urgency: 'next', decision: false },
            { id: 'b5', name: 'Install SS Panels & Sinks', start: '2026-05-11', end: '2026-05-13', urgency: 'final', decision: false },
            { id: 'b6', name: 'Replace Signs & Accessories', start: '2026-05-12', end: '2026-05-13', urgency: 'final', decision: false },
        ]
    },
    {
        name: 'Audio & Speakers',
        tasks: [
            { id: 'a1', name: 'Lay Audio Wires on Ceiling', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', decision: false },
            { id: 'a2', name: 'Build South Spkr Cab & Mesh', start: '2026-05-06', end: '2026-05-10', urgency: 'coming-next', decision: false },
            { id: 'a3', name: 'Modify NW Cabinet & Face', start: '2026-05-06', end: '2026-05-09', urgency: 'coming-next', decision: false },
            { id: 'a4', name: 'NE Angle & Bar L/R Shelves', start: '2026-05-07', end: '2026-05-10', urgency: 'coming-next', decision: false },
            { id: 'a5', name: 'Install Amps in Bar Left Col.', start: '2026-05-11', end: '2026-05-13', urgency: 'next', decision: false },
        ]
    },
    {
        name: 'The Bar',
        tasks: [
            { id: 'bar1', name: 'Modify Radiator Cover', start: '2026-05-07', end: '2026-05-09', urgency: 'coming-next', decision: true },
            { id: 'bar2', name: 'Install Central Mirror', start: '2026-05-10', end: '2026-05-11', urgency: 'next', decision: false },
            { id: 'bar3', name: 'Modify Shelves (Central Bar)', start: '2026-05-12', end: '2026-05-14', urgency: 'next', decision: false },
            { id: 'bar5', name: 'Install Tiles on Bar Footing', start: '2026-05-15', end: '2026-05-18', urgency: 'next', decision: false },
            { id: 'bar6', name: 'Epoxy Grout Tiles', start: '2026-05-19', end: '2026-05-20', urgency: 'next', decision: false },
            { id: 'bar7', name: 'Anchor Bar Foot Rail', start: '2026-05-21', end: '2026-05-22', urgency: 'final', decision: false },
            { id: 'bar8', name: 'Clean, Sand, Osmo Bar Wood', start: '2026-05-23', end: '2026-05-26', urgency: 'final', decision: false },
            { id: 'bar4', name: 'Install Zinc Surface & Gutter', start: '2026-06-08', end: '2026-06-11', urgency: 'final', decision: false }, // 8 weeks relative to April 14
        ]
    },
    {
        name: 'Walls / Booths',
        tasks: [
            { id: 'w1', name: 'Produce Missing Wainscotting', start: '2026-05-06', end: '2026-05-11', urgency: 'coming-next', decision: false },
            { id: 'w2', name: 'Install Missing Wainscotting', start: '2026-05-12', end: '2026-05-14', urgency: 'next', decision: false },
            { id: 'w3', name: 'Clean/Tint/Osmo Wainscotting', start: '2026-05-15', end: '2026-05-18', urgency: 'next', decision: false },
            { id: 'w4', name: 'Install SW Booth Bench', start: '2026-05-19', end: '2026-05-21', urgency: 'final', decision: false },
            { id: 'w5', name: 'Setup Under Bar Lighting', start: '2026-05-22', end: '2026-05-24', urgency: 'final', decision: false },
        ]
    }
];

const START_DATE = new Date('2026-04-14T12:00:00');
const END_DATE = new Date('2026-07-06T12:00:00'); // Spans past opening date July 5th
const msPerDay = 1000 * 60 * 60 * 24;
const totalDays = Math.round((END_DATE - START_DATE) / msPerDay);

function initGantt() {
    renderTimeline();
    renderTasks();

    // Automatically pan the Gantt chart to the current target work period roughly "May 1st"
    const scrollContainer = document.querySelector('.gantt-container-scroll');
    if (scrollContainer) {
        const offsetPercent = ((new Date('2026-05-01T12:00:00') - START_DATE) / msPerDay) / totalDays;
        scrollContainer.scrollLeft = scrollContainer.scrollWidth * offsetPercent - 100;
    }
}

function renderTimeline() {
    const timelineEl = document.getElementById('gantt-timeline');
    for (let i = 0; i <= totalDays; i++) {
        const d = new Date(START_DATE.getTime() + i * msPerDay);
        const marker = document.createElement('div');
        marker.className = 'date-marker';
        // Only show label every few days or specifically skip to prevent visual clutter
        if (i % 3 === 0) {
            marker.textContent = `${d.getMonth() + 1}/${d.getDate()}`;
        }

        const gridLine = document.createElement('div');
        gridLine.className = 'date-marker-line';
        marker.appendChild(gridLine);

        timelineEl.appendChild(marker);
    }
}

function renderTasks() {
    const tasksEl = document.getElementById('gantt-tasks');

    groups.forEach((group) => {
        const groupEl = document.createElement('div');
        groupEl.className = 'task-group';

        // --- Group Header ---
        const headerRow = document.createElement('div');
        headerRow.className = 'task-row group-header';

        const headerLabel = document.createElement('div');
        headerLabel.className = 'task-label';
        headerLabel.textContent = group.name + ' ▼'; // Indicator of sub-tasks
        headerRow.appendChild(headerLabel);

        const headerBars = document.createElement('div');
        headerBars.className = 'task-bars-container';

        let minStart = END_DATE;
        let maxEnd = START_DATE;
        group.tasks.forEach(t => {
            const ts = new Date(t.start + 'T12:00:00');
            const te = new Date(t.end + 'T12:00:00');
            if (ts < minStart) minStart = ts;
            if (te > maxEnd) maxEnd = te;
        });

        if (minStart <= maxEnd) {
            const offsetLeftDays = (minStart - START_DATE) / msPerDay;
            const durationDays = ((maxEnd - minStart) / msPerDay) + 1;
            const offsetPercent = (offsetLeftDays / totalDays) * 100;
            const widthPercent = (durationDays / totalDays) * 100;

            const groupBar = document.createElement('div');
            groupBar.className = 'group-bar';
            groupBar.style.left = `${offsetPercent}%`;
            groupBar.style.width = `${widthPercent}%`;
            headerBars.appendChild(groupBar);
        }
        headerRow.appendChild(headerBars);
        groupEl.appendChild(headerRow);

        // --- Sub Tasks ---
        const subTasksContainer = document.createElement('div');
        subTasksContainer.className = 'sub-tasks';
        const subTasksInner = document.createElement('div');
        subTasksInner.className = 'sub-tasks-inner';

        group.tasks.forEach(task => {
            const row = document.createElement('div');
            row.className = 'task-row subtask';
            row.id = `row-${task.id}`;

            const label = document.createElement('div');
            label.className = 'task-label';
            if (task.decision) {
                label.innerHTML = `<span class="decision-icon">❗️</span>${task.name}`;
            } else {
                label.textContent = task.name;
            }

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

            barsContainer.appendChild(bar);
            row.appendChild(label);
            row.appendChild(barsContainer);
            subTasksInner.appendChild(row);
        });

        subTasksContainer.appendChild(subTasksInner);
        groupEl.appendChild(subTasksContainer);
        tasksEl.appendChild(groupEl);
    });
}

document.addEventListener('DOMContentLoaded', initGantt);
