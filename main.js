const groups = [
    {
        name: 'Ordering & Decisions',
        tasks: [
            { id: 'o1', name: 'Color Temp & Look Decision', start: '2026-05-04', end: '2026-05-07', urgency: 'imminent', decision: true, deps: [] },
            { id: 'o2', name: 'Bathroom Floor Decision', start: '2026-05-04', end: '2026-05-08', urgency: 'imminent', decision: true, deps: [] },
            { id: 'o3', name: 'Bar Tiled Border Decision', start: '2026-05-05', end: '2026-05-08', urgency: 'imminent', decision: true, deps: [] },
            { id: 'o4', name: 'Order Central Mirror', start: '2026-05-04', end: '2026-05-05', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'o5', name: 'Order Bath Sinks/Panels', start: '2026-05-04', end: '2026-05-06', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'o6', name: 'Order Black Formica', start: '2026-05-05', end: '2026-05-06', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'o7', name: 'Order Zinc Bar Surface', start: '2026-04-14', end: '2026-04-15', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'o8', name: 'Order Bar Foot Rail', start: '2026-05-05', end: '2026-05-06', urgency: 'next', decision: false, deps: [] }
        ]
    },
    {
        name: 'Ceiling & Lighting',
        tasks: [
            { id: 'c1', name: 'Relocate Wall Boxes', start: '2026-05-04', end: '2026-05-05', urgency: 'imminent', decision: false, deps: [] },
            { id: 'c2', name: 'Patch Ceiling Holes', start: '2026-05-05', end: '2026-05-06', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'c3', name: 'Install Tin Brackets', start: '2026-05-06', end: '2026-05-08', urgency: 'coming-next', decision: false, deps: ['c1'] },
            { id: 'c4', name: 'Tin Ceiling + Trims', start: '2026-05-09', end: '2026-05-12', urgency: 'next', decision: false, deps: ['c3'] },
            { id: 'c5', name: 'Primer on Ceiling', start: '2026-05-13', end: '2026-05-14', urgency: 'next', decision: false, deps: ['c4'] },
            { id: 'c6', name: 'Final Color Ceiling', start: '2026-05-15', end: '2026-05-17', urgency: 'next', decision: false, deps: ['c5', 'o1'] },
            { id: 'c7', name: 'Bar Crown Molding', start: '2026-05-18', end: '2026-05-19', urgency: 'final', decision: false, deps: ['c6'] },
        ]
    },
    {
        name: 'Bathrooms (Priority target May 13th)',
        tasks: [
            { id: 'b1', name: 'Demolish Bathrooms', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', decision: false, deps: [] },
            { id: 'b2', name: 'Remove Doors/Trim', start: '2026-05-06', end: '2026-05-08', urgency: 'coming-next', decision: false, deps: ['b1'] },
            { id: 'b3', name: 'Paint to Ceiling', start: '2026-05-08', end: '2026-05-10', urgency: 'next', decision: false, deps: ['b1'] },
            { id: 'b4', name: 'Install Black Formica', start: '2026-05-11', end: '2026-05-12', urgency: 'next', decision: false, deps: ['b2', 'o6'] },
            { id: 'b5', name: 'Install Panels/Sinks', start: '2026-05-12', end: '2026-05-14', urgency: 'final', decision: false, deps: ['b4', 'o5'] },
        ]
    },
    {
        name: 'Audio & Speakers',
        tasks: [
            { id: 'a1', name: 'Audio Wires Ceiling', start: '2026-05-04', end: '2026-05-06', urgency: 'imminent', decision: false, deps: [] },
            { id: 'a2', name: 'South Spkr Cab & Mesh', start: '2026-05-06', end: '2026-05-09', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'a3', name: 'Modify NW Cabinet', start: '2026-05-06', end: '2026-05-09', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'a4', name: 'Install Left Col Amps', start: '2026-05-10', end: '2026-05-12', urgency: 'next', decision: false, deps: ['a1'] },
        ]
    },
    {
        name: 'The Bar',
        tasks: [
            { id: 'bar1', name: 'Modify Radiator Cover', start: '2026-05-07', end: '2026-05-09', urgency: 'coming-next', decision: true, deps: [] },
            { id: 'bar2', name: 'Install Central Mirror', start: '2026-05-10', end: '2026-05-11', urgency: 'next', decision: false, deps: ['o4'] },
            { id: 'bar3', name: 'Modify Shelves (Central)', start: '2026-05-12', end: '2026-05-14', urgency: 'next', decision: false, deps: ['bar2'] },
            { id: 'bar4', name: 'Tiles on Bar Footing', start: '2026-05-15', end: '2026-05-18', urgency: 'next', decision: false, deps: ['o3'] },
            { id: 'bar5', name: 'Epoxy Grout Tiles', start: '2026-05-19', end: '2026-05-20', urgency: 'next', decision: false, deps: ['bar4'] },
            { id: 'bar6', name: 'Anchor Bar Foot Rail', start: '2026-05-21', end: '2026-05-22', urgency: 'final', decision: false, deps: ['bar5', 'o8'] },
            { id: 'bar7', name: 'Clean/Osmo Bar Wood', start: '2026-05-23', end: '2026-05-26', urgency: 'final', decision: false, deps: ['bar6'] },
            { id: 'bar8', name: 'Zinc Surface & Gutter', start: '2026-06-08', end: '2026-06-11', urgency: 'final', decision: false, deps: ['o7'] },
        ]
    },
    {
        name: 'Walls / Booths',
        tasks: [
            { id: 'w1', name: 'Produce Missing Wainscot', start: '2026-05-06', end: '2026-05-11', urgency: 'coming-next', decision: false, deps: [] },
            { id: 'w2', name: 'Install Missing Wainscot', start: '2026-05-12', end: '2026-05-14', urgency: 'next', decision: false, deps: ['w1'] },
            { id: 'w3', name: 'Clean/Osmo Wainscot', start: '2026-05-15', end: '2026-05-18', urgency: 'next', decision: false, deps: ['w2'] },
            { id: 'w4', name: 'Install SW Booth Bench', start: '2026-05-19', end: '2026-05-21', urgency: 'final', decision: false, deps: ['w3'] },
        ]
    }
];

const START_DATE = new Date('2026-04-14T12:00:00');
const END_DATE = new Date('2026-07-06T12:00:00');
const msPerDay = 1000 * 60 * 60 * 24;
const totalDays = Math.round((END_DATE - START_DATE) / msPerDay);

function initGantt() {
    renderTimeline();
    renderTasks();

    const scrollContainer = document.querySelector('.gantt-container-scroll');
    if (scrollContainer) {
        // Intro Animation
        // Start scroll bar all the way to the left
        scrollContainer.scrollLeft = 0;

        // Wait 800ms before starting animation so user feels the UX 
        setTimeout(() => {
            const targetDate = new Date('2026-07-05T12:00:00');
            const targetLeftPercent = (targetDate - START_DATE) / (END_DATE - START_DATE);
            const scrollMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            // Target is to pan over to the actual date flag
            const targetScroll = Math.min((scrollContainer.scrollWidth * targetLeftPercent) - (scrollContainer.clientWidth / 2), scrollMax);

            const duration = 2500;
            const startTime = performance.now();
            const startScroll = scrollContainer.scrollLeft;

            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // easeInOutCubic for very smooth pan
                const ease = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                scrollContainer.scrollLeft = startScroll + (targetScroll - startScroll) * ease;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            requestAnimationFrame(animate);
        }, 800);
    }

    const depToggle = document.getElementById('dependencies-toggle');
    if (depToggle) {
        depToggle.addEventListener('change', (e) => {
            const lines = document.getElementById('dependency-lines');
            lines.style.display = e.target.checked ? 'block' : 'none';
            if (e.target.checked) renderDependencies();
        });
    }

    // Resize observer allows dependency lines to redraw magically when accordions open/close
    if (window.ResizeObserver) {
        const resizeObserver = new ResizeObserver(() => {
            if (depToggle && depToggle.checked) {
                renderDependencies();
            }
        });
        resizeObserver.observe(document.getElementById('gantt-tasks'));
    } else {
        setTimeout(renderDependencies, 500);
    }
}

function renderTimeline() {
    const timelineEl = document.getElementById('gantt-timeline');
    for (let i = 0; i <= totalDays; i++) {
        const d = new Date(START_DATE.getTime() + i * msPerDay);
        const marker = document.createElement('div');
        marker.className = 'date-marker';

        if (i % 3 === 0) {
            marker.textContent = `${d.getMonth() + 1}/${d.getDate()}`;
        }

        const gridLine = document.createElement('div');
        gridLine.className = 'date-marker-line';

        if (d.getMonth() === 4 && d.getDate() === 31) {
            gridLine.classList.add('milestone-marker-handoff');
        }
        if (d.getMonth() === 6 && d.getDate() === 5) {
            gridLine.classList.add('milestone-marker-finish');
        }

        marker.appendChild(gridLine);
        timelineEl.appendChild(marker);
    }
}

function renderTasks() {
    const tasksEl = document.getElementById('gantt-tasks');

    groups.forEach((group) => {
        const groupEl = document.createElement('div');
        groupEl.className = 'task-group expanded';

        const headerRow = document.createElement('div');
        headerRow.className = 'task-row group-header';
        headerRow.onclick = () => {
            groupEl.classList.toggle('expanded');
        };

        const headerLabel = document.createElement('div');
        headerLabel.className = 'task-label';

        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'expand-toggle';
        toggleBtn.textContent = '▶';

        const textSpan = document.createElement('span');
        textSpan.textContent = group.name;

        headerLabel.appendChild(toggleBtn);
        headerLabel.appendChild(textSpan);
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
            bar.textContent = `${(tStart.getMonth() + 1)}/${tStart.getDate()} - ${task.name}`;

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

function renderDependencies() {
    const svg = document.getElementById('dependency-lines');
    if (!svg) return;
    svg.innerHTML = '';
    const svgRect = svg.getBoundingClientRect();

    groups.forEach(g => {
        g.tasks.forEach(task => {
            if (!task.deps || task.deps.length === 0) return;
            const toBar = document.getElementById(`bar-${task.id}`);
            if (!toBar) return;

            task.deps.forEach(depId => {
                const fromBar = document.getElementById(`bar-${depId}`);
                if (!fromBar) return;

                // If collapsed, height drops to 0, so skip drawing to prevent broken floating lines
                if (fromBar.offsetHeight === 0 || toBar.offsetHeight === 0) return;

                const fromRect = fromBar.getBoundingClientRect();
                const toRect = toBar.getBoundingClientRect();

                const startX = fromRect.right - svgRect.left;
                const startY = fromRect.top + fromRect.height / 2 - svgRect.top;
                const endX = toRect.left - svgRect.left;
                const endY = toRect.top + toRect.height / 2 - svgRect.top;

                drawDependencyCurve(svg, startX, startY, endX, endY);
            });
        });
    });
}

function drawDependencyCurve(svg, x1, y1, x2, y2) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'dependency-line');

    const offset = Math.max(15, (x2 - x1) / 2);
    let d = "";
    if (x2 < x1 + 10) {
        d = `M ${x1} ${y1} C ${x1 + 20} ${y1}, ${x1 + 20} ${y1 + (y2 - y1) / 2}, ${x1 - 10} ${y1 + (y2 - y1) / 2} C ${x2 - 20} ${y1 + (y2 - y1) / 2}, ${x2 - 20} ${y2}, ${x2 - 2} ${y2}`;
    } else {
        d = `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2 - 2} ${y2}`;
    }

    path.setAttribute('d', d);
    svg.appendChild(path);

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute('class', 'dependency-arrow');
    arrow.setAttribute('points', `${x2},${y2} ${x2 - 6},${y2 - 4} ${x2 - 6},${y2 + 4}`);
    svg.appendChild(arrow);
}

document.addEventListener('DOMContentLoaded', initGantt);
