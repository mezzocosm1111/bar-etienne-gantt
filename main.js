const tasks = [
    { id: 't1', name: 'Demolition & Prep', start: '2026-05-04', end: '2026-05-07', urgency: 'imminent', dependencies: [] },
    { id: 't2', name: 'Plumbing Rough-in', start: '2026-05-08', end: '2026-05-10', urgency: 'coming-next', dependencies: ['t1'] },
    { id: 't3', name: 'Electrical & HV', start: '2026-05-08', end: '2026-05-12', urgency: 'coming-next', dependencies: ['t1'] },
    { id: 't4', name: 'Drywall & Mud', start: '2026-05-13', end: '2026-05-16', urgency: 'next', dependencies: ['t2', 't3'] },
    { id: 't5', name: 'Bar Counter Install', start: '2026-05-17', end: '2026-05-19', urgency: 'next', dependencies: ['t4'] },
    { id: 't6', name: 'Mosaic Tile Floors', start: '2026-05-18', end: '2026-05-22', urgency: 'next', dependencies: ['t4'] },
    { id: 't7', name: 'Painting & Trim', start: '2026-05-23', end: '2026-05-26', urgency: 'final', dependencies: ['t5', 't6'] },
    { id: 't8', name: 'Equipment Setup', start: '2026-05-26', end: '2026-05-28', urgency: 'final', dependencies: ['t5'] },
    { id: 't9', name: 'Final Cleaning', start: '2026-05-29', end: '2026-05-31', urgency: 'final', dependencies: ['t7', 't8'] }
];

const START_DATE = new Date('2026-05-03T12:00:00'); // Offset slightly for visual padding
const END_DATE = new Date('2026-06-02T12:00:00'); 
const msPerDay = 1000 * 60 * 60 * 24;
const totalDays = Math.round((END_DATE - START_DATE) / msPerDay);

function initGantt() {
    renderTimeline();
    renderTasks();
    // Use setTimeout to ensure the DOM is fully painted before drawing SVG lines
    setTimeout(() => {
        renderDependencies();
    }, 150);
    
    document.getElementById('dependencies-toggle').addEventListener('change', (e) => {
        document.getElementById('dependency-lines').style.display = e.target.checked ? 'block' : 'none';
        if (e.target.checked) {
            renderDependencies();
        }
    });
    
    window.addEventListener('resize', () => {
        if(document.getElementById('dependencies-toggle').checked) {
            renderDependencies();
        }
    });

    // Make gantt area auto-scroll to the current day if possible
    const scrollContainer = document.querySelector('.gantt-container-scroll');
    if(scrollContainer) {
        scrollContainer.scrollLeft = 0; // Starts at beginning
    }
}

function renderTimeline() {
    const timelineEl = document.getElementById('gantt-timeline');
    for (let i = 0; i <= totalDays; i++) {
        const d = new Date(START_DATE.getTime() + i * msPerDay);
        const marker = document.createElement('div');
        marker.className = 'date-marker';
        marker.textContent = `${d.getMonth()+1}/${d.getDate()}`;
        
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
        
        // Use Noon times to avoid timezone issues when parsing simple date strings
        const tStart = new Date(task.start + 'T12:00:00');
        let tEnd = new Date(task.end + 'T12:00:00');
        
        // Calculate offsets and width
        const offsetLeftDays = (tStart - START_DATE) / msPerDay;
        // Gantt tasks often span up to end of the day, add 1 day so tasks visually cover the target day Box completely
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
    if(!svg) return;
    svg.innerHTML = ''; 
    const ganttWrapper = document.querySelector('.gantt-wrapper');
    const tasksContainer = document.getElementById('gantt-tasks');
    
    // Using relative bounding rectangles to cleanly map connecting points 
    const svgRect = svg.getBoundingClientRect();
    
    tasks.forEach(task => {
        const toBar = document.getElementById(`bar-${task.id}`);
        if (!toBar) return;
        
        task.dependencies.forEach(depId => {
            const fromBar = document.getElementById(`bar-${depId}`);
            if (!fromBar) return;
            
            const fromRect = fromBar.getBoundingClientRect();
            const toRect = toBar.getBoundingClientRect();
            
            // X and Y coords mapped to the internal SVG coordinate space
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
    
    // Control points for a cubic bezier curve to give it a nice sweeping look
    const offset = Math.max(20, (x2 - x1) / 2);
    
    let d = "";
    if (x2 < x1 + 10) {
        // Line wraps around backwards
        d = `M ${x1} ${y1} C ${x1 + 30} ${y1}, ${x1 + 30} ${y1 + (y2-y1)/2}, ${x1 - 10} ${y1 + (y2-y1)/2} C ${x2 - 30} ${y1 + (y2-y1)/2}, ${x2 - 30} ${y2}, ${x2 - 4} ${y2}`;
    } else {
        d = `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2 - 4} ${y2}`;
    }
    
    path.setAttribute('d', d);
    svg.appendChild(path);
    
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute('class', 'dependency-arrow');
    // x2 - 4 accommodates the fact that the point is the end of the polygon
    arrow.setAttribute('points', `${x2},${y2} ${x2-8},${y2-5} ${x2-8},${y2+5}`);
    svg.appendChild(arrow);
}

document.addEventListener('DOMContentLoaded', initGantt);
