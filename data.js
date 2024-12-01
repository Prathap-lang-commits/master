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
            "description": "As a dedicated technical professional, I have consistently delivered advanced technical support to client environments, resolving complex application issues through efficient screen-sharing and remote diagnostics, ensuring high client satisfaction. I have successfully managed and optimized both client and internal systems, overseeing intricate application setups and deployments to maintain peak system performance and reliability.\n\nWith a strong focus on project delivery, I developed and executed detailed deployment plans, aligning with project schedules and requirements to ensure successful software releases. My proactive approach to monitoring and analyzing application performance has allowed me to address potential issues in real-time, preventing end-user impact and enhancing system stability.\n\nAdditionally, I have played a key role in fostering team development by mentoring junior team members, contributing to their professional growth while also improving the overall effectiveness and cohesion of the team. My commitment to excellence in both technical execution and team collaboration has consistently supported the success of projects and client satisfaction."
        },
        {
            "title": "DevOps Engineer",
            "company": "CGI",
            "duration": "Apr 2022 - Present",
            "description": "As a results-driven professional, I spearheaded daily build processes to ensure the accurate and timely generation of software builds, maintaining rigorous standards of quality and consistency. I proactively identified and resolved internal project issues by collaborating with development teams, troubleshooting challenges, and implementing effective solutions to keep projects on track.\n\nIn addition to my technical expertise, I created and maintained comprehensive documentation covering installation procedures, configuration settings, and troubleshooting processes. This documentation facilitated knowledge sharing, ensuring consistency and empowering teams to work more efficiently.\n\nI worked closely with cross-functional teams to integrate and deploy software updates, ensuring seamless alignment with project requirements while minimizing disruptions. My commitment to continuous improvement led me to engage in root cause analysis of recurring issues, where I recommended and implemented strategic enhancements to prevent future occurrences and further elevate system reliability."
        }
    ],
    "education": [
        {
            "degree": "B.Tech. in Mechanical Engineering",
            "institution": "Annamacharya Institute of Technology and Sciences, Rajampet",
            "year": "2016 - 2020"
        }
    ],
    "contact": "prathapg2112@gmail.com",
    "resumeLink": "Prathap_Ganjikunta_December2024.pdf"
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
        li.innerHTML = `<strong>${exp.title}</strong> at ${exp.company} (${exp.duration})<br>${exp.description.replace(/\n/g, '<br>')}`;
        experienceList.appendChild(li);
    });

    const educationList = document.getElementById("education-list");
    data.education.forEach(edu => {
        const li = document.createElement("li");
        li.innerHTML = `${edu.degree} from ${edu.institution} (${edu.year})`;
        educationList.appendChild(li);
    });

    document.getElementById("contact-info").textContent = data.contact;

    const resumeLinkElement = document.getElementById("resume-link");
    if (resumeLinkElement) {
        resumeLinkElement.innerHTML = `<a href="${data.resumeLink}" target="_blank">Click here to view my Resume</a>`;
    }
});
