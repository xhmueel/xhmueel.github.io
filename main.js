function showModal(titleHtml, contentHtml, videoYt, itchIoLink, description, pointers, images, buttons){
    const modal = document.createElement("div");

    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-inner">
            <div class="modal-top">
                <div class="modal-title">${titleHtml}</div>
                <button class="modal-close" type="button">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="modal-content">${contentHtml}</div>
            <div class="modal-video">${videoYt}</div>
            <div class="modal-images"></div>
            <div class="modal-itch">${itchIoLink}</div>
            <div class="modal-description">${description}</div>
            <div class="modal-pointers">
                ${pointers ? `
                    <h3>Key Features:</h3>
                    <ul>
                        ${pointers.mainFeatures.map(feature => `<li>${feature}</li>`).join("")}
                    <br>
                    </ul>
                    <h3>My Contributions:</h3>
                    <ul>
                        ${pointers.contributions.map(contribution => `<li>${contribution}</li>`).join("")}
                    </ul>
                ` : ""}
            </div>
            <div class="modal-bottom"></div>
        </div>
    `;

    for(const button of buttons){
        const element = document.createElement("button");

        element.setAttribute("type", "button");
        element.classList.add("modal-button");
        element.textContent = button.label;
        element.addEventListener("click", () => {
            if (button.triggerClose){
                document.body.style.overflow = "";
                document.body.removeChild(modal);
            }

            button.onClick(modal);
        });

        modal.querySelector(".modal-bottom").appendChild(element);


    }

    const modalImagesContainer = modal.querySelector(".modal-images");
    for(const image of images){
        const element = document.createElement("img");

        element.setAttribute("src", image.src);
        // element.setAttribute("alt", image.alt);
        element.classList.add("modal-image");

        modalImagesContainer.appendChild(element);
    }

    modal.querySelector(".modal-close").addEventListener("click", () => {
        document.body.style.overflow = "";
        document.body.removeChild(modal);
    });

    document.body.style.overflow = "hidden";

    document.body.appendChild(modal);
}


document.getElementById("immortal-journey-id").addEventListener("click", function() {
    showModal(
        "ImMortal Journey",

        `<p> You will play as an immortal character whose immortality was stolen by Death. You need to complete a continuous series of challenges, such as fighting and platforming, intertwined with peaceful resting areas. Your objective is to reach the end of your journey to confront Death and take back what was stolen.<br><br>
        This game was done in the scope of the Methodology of Development of Games course at Instituto Superior Técnico.</p>
        `,

        `<iframe width="560" height="315" src="https://www.youtube.com/embed/gTWFk3XGgc0?si=mDNSBzVQkjHRR7vx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,

        `<a href="https://chiefbat.itch.io/immortal-journey" target="_blank">Available on Itch.io</a>
        `,
        `<p>This project was a great way to learn about the overall development process of a game. The feedback received ranging from casual gamers to industry professionals was very educative and rewarding.
        Our team also worked alongside both an audio design student and two writing students, all from different schools. It was a very fullfilling experience, and we were pround of how it turned out.
        </p>
        `,

        {
            mainFeatures: [
                "<strong>Compelling Story</strong>: an adventure of discovery and realization of life's value.",
                "<strong>Courage Resource</strong>: generates an important risk and reward dynamic, making the player stronger or weaker depending on the amount of courage held.",
                "<strong>The Realm of the Dead</strong>: provides extra depth to the level design and a way to avoid danger, but drains courage.",
                "<strong>Audio/Visual Transformation</strong>: In order to convey the character's emotions, the visuals and audio of the game change dynamically."
            ],
            contributions: [
                "<strong>Design</strong>: Level Design, Gameplay Elements, Gameplay Loop and other components.",
                "<strong>Programming</strong>: Enemies, Shaders, Player Movement and other functionality.",
                "<strong>Writing</strong>: NPC Dialogue and the Overall Story.",
                "<strong>Music</strong>: Composed the music for the game.",
            ]
        },

        [
            {
                src: "images/immortal-journey-3.png"
            },
            {
                src: "images/immortal-journey-2.png"
            }
        ],
        
        [
            {
                label: "Got it!",
                onClick: (modal) => {
                    console.log("Modal closed.");
                },
                triggerClose: true
            }
        ]
    );
});

document.getElementById("words-id").addEventListener("click", function() {
    showModal(
        "Words",

        `<p>What do you see? What do you read? What do you hear? What do you feel?<br>
        <br>
            This game was a solo project done in Unreal Engine 5 with Blueprints.
        </p>
        `,

        ``,

        `<a href="https://xhmueel.itch.io/words" target="_blank">Available on Itch.io</a>
        `,

        `<p>This project helped me get better understanding of Unreal Engine 5 and its editor. I also learned and deepened my knowledge about multiple components of the engine, 
        including Materials (Surface, Light Functions and Post Processing), Niagara, Audio and others.</p>
        `,

        {
            mainFeatures: [
                "<strong>A Game as an Artwork</strong>: This was a personal exercise on creating a video game designed to present itself as an artwork.",
                "<strong>Fragmented</strong>: The words do not come together, and multiple languages are used, making it so that every person will interpret it differently.",
                "<strong>Sensory Experience</strong>: Multiple dimension of the senses present themselves in multiple ways, all trying to express things in different ways.",

            ],
            contributions: [
                "<strong>Programming</strong>: Materials, Niagara, Audio.",
                "<strong>Writing</strong>: The Words.",
            ]
        },

        [
            {
                src: "images/words-1.png"
            },
            {
                src: "images/words-2.png"
            }
        ],
        
        [
            {
                label: "Got it!",
                onClick: (modal) => {
                    console.log("Modal closed.");
                },
                triggerClose: true
            }
        ]
    );
});

document.getElementById("hello-narrator-id").addEventListener("click", function() {
    showModal(
        "Hello Narrator",

        `<p>"Hello, Narrator" is a Game Dev Técnico's submission to GGJ 24 through the remote Galway jam site.<br><br>
        It's a game incorporating the theme of "Make me Laugh", where the objective is to make the grumpy narrator laugh
        by dressing yourself with outrageous clothes, solving a riddle and finally by tickling his giant foot.</p>
        `,

        "",

        `<a href="https://draike.itch.io/hello-narrator" target="_blank">Available on Itch.io</a>
        `,

        `
        `,

        {
            mainFeatures: [
                "<strong>Voiced Narrator</strong>: a grumpy narrator that reacts to the player's actions in a funny way.",
                "<strong>A LOT of Comedy</strong>: everything in this game is to make people laugh!",
            ],
            contributions: [
                "<strong>Design</strong>: Fashion Designer. (ʘ‿ʘ)",
                "<strong>Programming</strong>: Character creation level and foot tickling level.",
                "<strong>Writing</strong>: Wrote the dialogue for the narrator.",
            ]
        },

        [
            {
                src: "images/hello-narrator-1.png"
            },
            {
                src: "images/hello-narrator-4.png"
            }
        ],
        
        [
            {
                label: "Got it!",
                onClick: (modal) => {
                    console.log("Modal closed.");
                },
                triggerClose: true
            }
        ]
    );
});

document.getElementById("mirrored-id").addEventListener("click", function() {
    showModal(
        "Mirrored",

        `<p>A young girl finds herself in a public bathroom. She doesn't know how she got there and she is covered in wounds.
        <br>Why doesn't she remember it? Why is she injured?
        <br><br>This game was made for the 02A2 VN Jam 2024.</p>
        `,

        "",

        `<a href="https://despaircode777.itch.io/mirrored" target="_blank">Available on Itch.io</a>
        `,

        `This was my first time working on a Visual Novel, and it was a great experience, but it was also quite challenging due to a lot of restrictions that were in place. One of them being a maximum of 1000 words.<br>
        I pushed myself by crafting a narrative based on a mystery, where the player finds himself in a situation that he doesn't understand.<br>
        And as the story progresses, some of the mystery is revealed, but also more questions arise, leaving interpretations to each individual person.
        `,

        {
            mainFeatures: [
                "<strong>An Unraveling Mystery</strong>: As the story proceeds, the mystery will be revealed. If only a little...",
                "<strong>Tense Atmosphere</strong>: The game is designed to make the player feel uneasy and fearful for what comes next.",
            ],
            contributions: [
                "<strong>Programming</strong>: Implemented the game's narrative.",
                "<strong>Writing</strong>: Wrote the dialogue.",
                "<strong>Music</strong>: Composed the music for the game.",
            ]
        },

        [
            {
                src: "images/mirrored-1.jpg"
            },
            {
                src: "images/mirrored-2.png"
            }
        ],
        
        [
            {
                label: "Got it!",
                onClick: (modal) => {
                    console.log("Modal closed.");
                },
                triggerClose: true
            }
        ]
    );
});

document.getElementById("colorblind-id").addEventListener("click", function() {
    showModal(
        "Educational Game that tests Colorblindness on Children",

        `<p>This prototype is an educational game, focused on children from
            5-8 years old, intended to be played in class, where Ishihara tests
            are intercalated with normal numbers.<br><br>
            We intend for this to be
            an effective way to discover early on in the lives of children if they
            are colorblind, which is the opportunity we identified, but also a
            educational component to learn numbers.<br><br>
            This project was done in the scope of the Studio of Design and Interaction course at Instituto Superior Técnico.
        </p>
        `,

        "",

        `<a href="https://www.figma.com/proto/2c1YTYidyxcxXrJV5lg77q/Untitled?node-id=47-1473&starting-point-node-id=47%3A1473&t=ccjXwNOTtGCgoTxU-1" target="_blank">Available on Figma</a>
        `,

        `<p>This project challenged us to find an issue that a minority group struggles with and design a solution for it with technology. 
        We had to employ several methods to gather information such as secondary research and interviews. We also had as a co-designer a person that faced the struggle of not knowing he was colorblind when he was a child.</p>
        `,

        {
            mainFeatures: [
                "<strong>The Test as a Game</strong>: Uses the positives of an interactive and fun way for kids to learn to \"gamify\" the Ishihara test.",
                "<strong>Educational Component</strong>: Utilizes the need for the identification of the numbers in the game for both the colorblind testing and learning the numbers.",
            ],
            contributions: [
                "<strong>Design Process</strong>: Designed a solution by following the Double Diamond Design Process.",
                "<strong>Prototyping</strong>: Prototyped a solution using Figma.",
            ]
        },

        [
            {
                src: "images/DIIC-1.png"
            },
            {
                src: "images/DIIC-2.png"
            }
        ],
        
        [
            {
                label: "Got it!",
                onClick: (modal) => {
                    console.log("Modal closed.");
                },
                triggerClose: true
            }
        ]
    );
});

document.getElementById("cgj-id").addEventListener("click", function() {
    showModal(
        "Shader Project (C++ & OpenGL)",

        `<p>The main concepts that are implemented in this project are shaders and textures.<br>
            It was also implemented a non-photorealistic lighting model (Cel Shading) and a non physically-based "photorealistic" lighting model (Phong model).<br>
            Procedural noise was used to create textures for the meshes.<br><br>
            This project was done in the scope of the CGJ course at Instituto Superior Técnico.
        </p>
        `,

        `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0EiYpFecn6E?si=VlcYaQCjy3PQNLTK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,

        `<a href="https://github.com/xhmueel/GroupLabs.3rdProjectCGJ_23-24" target="_blank">Available on Github</a>
        `,

        `<p>This project helped me get better with C++ (and C) as well as an understanding of 3D space, 
        vector and matrix operations. It was also a good introduction to shader programming.</p>
        `,

        {
            mainFeatures: [
                "Cel Shading and Phong model.",
                "Procedurally generated textures by using perlin noise.",
                "Orbital camera.",
                "Hierachical scene graph.",
                "Serialization of the scene in JSON",
            ],
            contributions: [
                "<strong>Programming</strong>: Shaders, Textures and Lighting Models.",
            ]
        },

        [
            {
                src: "images/cgj-1.png"
            },
            {
                src: "images/cgj-2.png"
            }
        ],
        
        [
            {
                label: "Got it!",
                onClick: (modal) => {
                    console.log("Modal closed.");
                },
                triggerClose: true
            }
        ]
    );
});
