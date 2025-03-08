const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, certificate: 'Web and Computer Programming', completed: false },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, certificate: 'Web and Computer Programming', completed: false }
];

const courseContainer = document.querySelector(".course-list");
const totalCreditsElement = document.querySelector("#total-credits"); 

// Function to display courses
function displayCourses(filteredCourses) {
    courseContainer.innerHTML = ""; // Clear previous content
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card", course.subject.toLowerCase());

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <strong>${course.subject} ${course.number}</strong>
            <span class="credits">${course.credits} Credits</span>
        `;

        courseContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    // Update total credits
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Filter functions
function filterCourses(category) {
    if (category === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.subject === category.toUpperCase());
        displayCourses(filtered);
    }
}

// Event Listeners for Buttons
document.getElementById("all-courses").addEventListener("click", () => filterCourses("all"));
document.getElementById("cse-courses").addEventListener("click", () => filterCourses("CSE"));
document.getElementById("wdd-courses").addEventListener("click", () => filterCourses("WDD"));

// Initial display
displayCourses(courses);