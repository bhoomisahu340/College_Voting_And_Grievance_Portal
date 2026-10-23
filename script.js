/*--------------------------------------------------
   1. GLOBAL ALERTS FOR COMING SOON MODULES
--------------------------------------------------*/
function showComingSoon(moduleName) {
    alert(moduleName + ' section coming soon with Java Servlets/PostgreSQL!');
}


/*--------------------------------------------------
   2. AUTHENTICATION PLACEHOLDER LOGIC
--------------------------------------------------*/
// Handles login and registration form submits cleanly
function handleAuthSubmit(event, portalType) {
    event.preventDefault();
    if (portalType === 'login') {
        alert('Login backend logic coming soon with Java Servlets/PostgreSQL!');
        window.location.href = 'dashboard.html'; // Redirect to student dashboard for demo
    } else if (portalType === 'register') {
        alert('Registration backend logic coming soon with Java Servlets/PostgreSQL!');
        window.location.href = 'login.html'; // Redirect to login page after registration
    }
}


/*--------------------------------------------------
   3. DYNAMIC VOTING BALLOT DATA & RENDER LOGIC
--------------------------------------------------*/
// Data bank mapping different poll keys to their respective titles, descriptions, and candidates
const pollData = {
    "cr": {
        title: "1. CR Appointment - Secure Voting",
        desc: "Select your preferred candidate for Class Representative.",
        candidates: [
            { name: "Alex Fernandes", manifesto: "Focus on digital lab upgrades, transparent fest funding, and student welfare.", value: "alex_fernandes" },
            { name: "Priya Naik", manifesto: "Promoting technical hackathons, improved library hours, and sports facility access.", value: "priya_naik" },
            { name: "Rahul Dessai", manifesto: "Better canteen management, streamlined grievance redressal, and active club representation.", value: "rahul_dessai" }
        ]
    },
    "teacher": {
        title: "2. Teacher Evaluation - Semester Feedback",
        desc: "Submit your semester feedback for faculty members.",
        candidates: [
            { name: "Dr. Ramesh Kumar (Data Structures)", manifesto: "Rating based on conceptual clarity, lab support, and approachable mentoring.", value: "dr_ramesh_kumar" },
            { name: "Prof. Sneha Vernekar (Digital Logic)", manifesto: "Rating based on structured notes, regular assignments, and doubt-solving sessions.", value: "prof_sneha_vernekar" },
            { name: "Dr. Anthony Dias (Applied Math)", manifesto: "Rating based on problem-solving techniques, pacing, and exam preparation assistance.", value: "dr_anthony_dias" }
        ]
    },
    "placement": {
        title: "3. Placement Polls - Corporate Drives",
        desc: "Vote on upcoming corporate placement drives and internship preferences.",
        candidates: [
            { name: "Tech Mahindra Software Engineering Drive", manifesto: "Preferred slot: Late October. Focus: Full-stack development roles.", value: "tech_mahindra" },
            { name: "Infosys Specialist Programmer Track", manifesto: "Preferred slot: Early November. Focus: Advanced problem-solving and algorithms.", value: "infosys_track" }
        ]
    },
    "committee": {
        title: "4. Committee Elections - Student Council",
        desc: "Vote for cultural fest leads and technical club coordinators.",
        candidates: [
            { name: "Neha Shirodkar", manifesto: "Vision: Scaling up the annual technical fest with national-level coding competitions.", value: "neha_shirodkar" },
            { name: "Sameer Gaonkar", manifesto: "Vision: Organizing regular cultural music nights, sports tournaments, and club meetups.", value: "sameer_gaonkar" }
        ]
    },
    "infrastructure": {
        title: "5. Infrastructure & Facilities Feedback",
        desc: "Share your quick ratings and feedback on campus amenities.",
        candidates: [
            { name: "Wi-Fi Network & Laboratory Systems", manifesto: "Priority: Upgrading router bandwidth across academic wings and computer labs.", value: "wifi_labs" },
            { name: "Canteen Seating & Food Quality", manifesto: "Priority: Extending seating capacity and introducing healthier meal options.", value: "canteen_amenities" }
        ]
    },
    "fest": {
        title: "6. Annual Tech/Cultural Fest Theme",
        desc: "Help select this year's festival theme, branding, and student activities.",
        candidates: [
            { name: "Theme: Cyberpunk Odyssey (Tech-focused)", manifesto: "Focus on neon aesthetics, robotics showcases, and hackathons.", value: "cyberpunk_theme" },
            { name: "Theme: Rhythms of Heritage (Cultural-focused)", manifesto: "Focus on traditional arts, classical music, and folk exhibitions.", value: "heritage_theme" }
        ]
    }
};

// Automatically loads the correct poll content when vote.html is opened with a URL parameter
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pollKey = urlParams.get('poll') || 'cr'; // Default to 'cr' if no parameter is provided

    const currentPoll = pollData[pollKey] || pollData['cr'];

    // Select HTML elements
    const titleEl = document.getElementById('poll-title');
    const descEl = document.getElementById('poll-desc');
    const inputEl = document.getElementById('pollTypeInput');
    const container = document.getElementById('candidates-container');

    // Populate header info safely
    if (titleEl) titleEl.innerText = currentPoll.title;
    if (descEl) descEl.innerText = currentPoll.desc;
    if (inputEl) inputEl.value = pollKey;

    // Render candidate options dynamically if container exists on page
    if (container) {
        container.innerHTML = ""; // Clear out placeholder content

        currentPoll.candidates.forEach(cand => {
            const label = document.createElement('label');
            label.className = "candidate-card";
            label.innerHTML = `
                <div class="candidate-info">
                    <h4>${cand.name}</h4>
                    <p>${cand.manifesto}</p>
                </div>
                <input type="radio" name="candidate" value="${cand.value}" class="vote-radio" required>
            `;
            container.appendChild(label);
        });
    }
});

/*----------------------------------------------------
   GRIEVANCE SUBMISSION LOGIC
----------------------------------------------------*/
function handleGrievanceSubmit(event) {
    event.preventDefault();
    alert('Grievance submission backend logic coming soon with Java Servlets/PostgreSQL!');
    window.location.href = 'dashboard.html'; // Redirect back to student dashboard after submit
}