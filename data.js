const data = {
    "name": "Prathap Ganjikunta",
    "intro": "Dedicated DevOps professional with 2+ years of hands-on experience in optimizing CI/CD workflows and enhancing system performance using tools such as Jenkins, Docker, and Kubernetes. Adept at troubleshooting and resolving complex issues, collaborating with cross-functional teams, and ensuring high availability and reliability of applications. Committed to leveraging best practices and continuous improvement to support agile development and deliver robust, scalable solutions.",
    "skills": [
        "Git and GitHub", "Jenkins", "Docker", "Kubernetes", "Ansible", "Linux", "Rancher", "MySQL", "Oracle", "SQL"
    ],
    "experience": [
        {
            "title": "Client DevOps Engineer",
            "company": "CGI",
            "duration": "Apr 2022 - Present",
            "description": "Developing modern web applications using JavaScript, React, and Node.js."
        },
        {
            "title": "DevOps Engineer",
            "company": "CGI",
            "duration": "Apr 2022 - Present",
            "description": "Worked on developing backend services with Python and integrated them into the frontend."
        }
    ],
    "education": [
        {
            "degree": "B.Tech. in Mechanical Engineer",
            "institution": "Annamacharya Institute of Technology and Sciences, Rajampet",
            "year": "2016 - 2020"
        }
    ],
    "contact": "prathapg2112@gmail.com",
    // Relative link to the resume PDF in your repo
    "resumeLink": "Prathap_Ganjikunta_August2024.pdf"  // Make sure this matches the actual file name and path in your repo
};

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("name").textContent = data.name;
    document.getElementById("intro").textContent = data.intro;

    const skillsList = document.getElementById("skills-list");
    data.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    const experienceList = document.getElementById("experience-list");
    data.experience.forEach(exp => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${exp.title}</strong> at ${exp.company} (${exp.duration})<br>${exp.description}`;
        experienceList.appendChild(li);
    });

    const educationList = document.getElementById("education-list");
    data.education.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `${edu.degree} from ${edu.institution} (${edu.year})`;
        educationList.appendChild(li);
    });

    document.getElementById("contact-info").textContent = data.contact;

    // Add the Resume link to the HTML
    const resumeLinkElement = document.getElementById("resume-link");
    if (resumeLinkElement) {
        // Link to resume using the relative path
        resumeLinkElement.innerHTML = `<a href="${data.resumeLink}" target="_blank">Click here to view my Resume</a>`;
    }
});

