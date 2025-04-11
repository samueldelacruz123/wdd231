const characters = {
    coach: {
        name: "Coach",
        description: "Before the apocalypse, Coach was a beloved high school football coach in Savannah, Georgia. Known for his booming voice, optimistic attitude, and natural leadership, Coach spent years mentoring young athletes. Despite his bad knee, which ended his own sports career, he dedicated himself to teaching others the value of teamwork and perseverance. A big man with an even bigger heart, Coach cares deeply for his team and the group, often putting their safety above his own. His southern charm and passion for food, especially burgers, provide a rare source of comfort in the harshness of the apocalypse.",
        image: "images/coach.webp"
    },
    rochelle: {
        name: "Rochelle",
        description: "Rochelle was a driven and determined associate producer for a cable news network in Cleveland, Ohio. Her job often sent her into chaotic situations, covering natural disasters and human conflicts. This prepared her to stay calm and focused under pressure when the infection spread. A journalist at heart, Rochelle always sought the truth and felt a deep sense of responsibility to inform the public. She was on assignment covering the infection when everything went wrong, leaving her with little more than her microphone and resolve. Despite her tough exterior, she remains compassionate and fiercely loyal to her group, proving that even in a world falling apart, humanity can survive.",
        image: "images/rochelle.webp"
    },
    ellis: {
        name: "Ellis",
        description: "Ellis was a young, happy-go-lucky mechanic from Savannah, Georgia, with a talent for fixing anything with an engine. He worked at a local garage, spending his days repairing cars and cracking jokes with his friends. Known for his endless enthusiasm and hilarious (but often rambling) stories about his buddy Keith, Ellis brought a sense of levity to any situation. His upbringing in a blue-collar community taught him the value of hard work, and his skills as a mechanic have been invaluable to the group. With his infectious smile and unshakable optimism, Ellis serves as the group's morale booster, always seeing the silver lining even in the darkest of times.",
        image: "images/ellis.webp"
    },
    nick: {
        name: "Nick",
        description: "Nick was a professional gambler and con artist, living a life of high stakes and deception before the apocalypse. Traveling from one casino to another in a sharp white suit, Nick was used to working alone, trusting no one but himself. Beneath his sarcastic exterior lies a man shaped by years of hustling and surviving in a world where everyone was out for themselves. While he initially views the group as just another gamble, his resourcefulness and quick thinking prove invaluable. Over time, Nick finds himself reluctantly caring for his newfound companions, even if he’d never admit it outright.",
        image: "images/nick.webp"
    },

    // Left 4 Dead 1 Characters
    bill: {
        name: "Bill",
        description: "Bill is a Vietnam War veteran who spent years fighting in the jungle before returning to a society he struggled to fit into. Hardened by war and disillusioned with life, he worked various odd jobs, never staying in one place for too long. When the infection broke out, Bill’s military training kicked in, making him a natural leader and a skilled strategist. Armed with his experience and unwavering courage, he takes it upon himself to guide the group through the chaos. Despite his gruff demeanor, Bill has a deep sense of duty and will do whatever it takes to protect his teammates.",
        image: "images/bill.webp"
    },
    louis: {
        name: "Louis",
        description: "Louis was a systems analyst at a major corporation, spending his days troubleshooting IT problems and managing databases. While his 9-to-5 office life was monotonous, he secretly dreamed of being something greater. When the infection spread, Louis’s resourcefulness and quick thinking helped him survive, and he discovered a strength he never knew he had. His optimism and ability to adapt to any situation make him a vital part of the group. Though he misses the simplicity of office life, Louis has embraced his role as a survivor, bringing humor and hope to his companions even in the bleakest moments.",
        image: "images/louis.webp"
    },
    francis: {
        name: "Francis",
        description: "Francis was a rough-and-tumble biker who spent most of his life on the road with his motorcycle gang. Known for his rebellious attitude and a love for bar fights, Francis thrived in chaos long before the apocalypse. His sarcastic sense of humor and frequent one-liners mask a surprisingly loyal and protective side, especially toward those he trusts. While he claims to hate everything—except motorcycles, of course—Francis's actions often speak louder than his words. His brute strength and unshakable confidence make him a formidable ally in the fight against the infected.",
        image: "images/francis.webp"
    },
    zoey: {
        name: "Zoey",
        description: "Zoey was a college student studying film and theater before the infection. Growing up, she shared a close bond with her father, who introduced her to horror movies, sparking her love for cinema. When the outbreak began, Zoey’s quick thinking and survival instincts kicked in as she fought her way out of the chaos. While she initially struggled with the harsh realities of the apocalypse, she has grown into a brave and resourceful survivor. Her intelligence and strong moral compass often guide the group, and she remains determined to honor her father's memory by staying strong in the face of adversity.",
        image: "images/zoey.webp"
    }
};

// Modal elements
const modal = document.getElementById('character-modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.getElementById('modal-close');

// Character cards
const characterElements = document.querySelectorAll('.character');

// Open modal with character info
characterElements.forEach(character => {
    character.addEventListener('click', () => {
        const key = character.getAttribute('data-character');
        const data = characters[key];

        // Populate modal
        modalImage.src = data.image;
        modalImage.alt = data.name;
        modalName.textContent = data.name;
        modalDescription.textContent = data.description;

        // Show modal
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
    });
});

// Close modal on (X) button
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
});

// Close modal on background click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
});
