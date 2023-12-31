const projectData = [
    {
        id: 1,
        title: "Shogureign",
        titleUrl: "Shogureign",
        about: "Serious game for learning kanji. October 2022-May 2023.",
        description: "<p>Team of 4 people. </p> <p>Role: Game design and game architecture development in pairs. </p> <p>We developed the game from A to Z (game story, game design, learning system, and development) during a tutored project. The game is compatible with Android and iOS and was built using the React Native framework. </p> <p> The learning system is organized in two ways: The player learns kanji characters by encountering them in the game's story. The player has recurring lessons. These lessons have an evolving level based on the player's performance in exams (every 10 lessons).Furthermore, the player can review the encountered vocabulary, both in the learning phase and the acquired phase, in the dictionary.</p>",
        image: "/images/projects_view/shogureign.png",
        tag: ["All", "Web", "Mobile"],
        skills : ["React", "React Native", "Javascript", "HTML", "CSS", "Git", "GitHub", "Agile Managment"],
        gitUrl: "https://github.com/poupsipoups/Shogureign ",
        images: ["shogureign.png", "histoire.jpg", "lecons1.png", "vocab.jpg", "prez_red.png"],
        videos: ["12C5FtjaVWA"]
    },
    {
        id: 2,
        title: "Infinitimac",
        titleUrl: "Infinitimac",
        about: "3D Animation in Blender.November-December 2022.",
        description : "<p>Solo project.</p><p>This project involved creating a 4-second (100 frames) 3D animation using Blender software.</p> <p>Constraints were imposed: we had a base file that included an already animated camera that should not be modified and a circular object. The main element of our scene had to be a circular or spherical object of the same size as the one already present in the base file.</p> <p>I made this animation inspired by the bridge of the game Spiritfahrer.</p> <p>Our instructor then compiled the work of all students to produce the video you see here : <a href='https://vimeo.com/787840222' alt='infinitmac vimeo video' className='text-[#f970a9]'>Infinitimac video</a></p>",
        image: "/images/projects_view/forestnight2.png",
        tag: ["All", "3D", "Creation"], 
        gitUrl: "",
        images:["infinitimac.png", "day.png", "evening.png", "scene.jpg", "ground.jpg", "world_shading.jpg"],
        videos:["L38F37aW4x8"]
    },
    {
        id: 3,
        title: "Ratio",
        titleUrl: "Ratio",
        about: "C++ Library for Rational Numbers. November-December 2022.",
        description :"Team of 2 people. Role: Creation of the library and mathematical reasoning. This project brings together skills acquired in C++ object-oriented programming and mathematics for computer science. We created a library containing a class for rational numbers (irreducible fractions) and overloaded mathematical operators to make these rational numbers easily usable by a user. We also implemented unit tests to verify that the functions in our library are correct.",
        image: "/images/projects_view/ratio.png",
        tag: ["All", "Software", "Maths"],
        gitUrl: "https://github.com/poupsipoups/Ratio",
        images: ["ratio.png"],
        videos: []
    },
    {
        id: 4,
        title: "@eatude",
        titleUrl: "eatude",
        about: "UX Design for a Student Assistance Application. November-December 2022.",
        description: 'Team of 4 people. Role: Each stage of creation was done as a team. The central theme of this project was "How to encourage collaboration among students to help them eat better?" To better understand the needs, we conducted interviews with several individuals to create an affinity map. From this, we derived an experience map by defining a target (Persona) and user emotions. After a workshop to gather interesting ideas, we created initial sketches through User Flow and Wireframe before final design on Figma.',
        image: "/images/projects_view/ateatude.png",
        tag: ["All", "Web", "Design"],
        gitUrl: "",
        images: ["ateatude.png"],
        videos:["lQYc_rqICTA"]
    },
    {
        id: 5,
        title: "Secretariat dashboard",
        titleUrl: "secretariat",
        about: "Internship project to improver secretariat's organization. Summer 2023",
        description: "The purpose of this internship in Veoneer Safety system was to creat from A to Z an intern application to help the secretariat's organisation and stock managment. The only constrains were to have a calendar to book events in the compagny and to have a vision of the stock's state. The first step was to imagine the app on figma and then I could develop the app with this AngularJS framework for the front-end and PHP and mySQL (SQL Server) for the back-end. (I have the authorization from the compagny to show this project here.)",
        image: "/images/projects_view/veoneer.png",
        tag: ["All", "Web", "Design"],
        gitUrl: "",
        images: ["veoneer.png", "veilleveoneer.png", "calendarfigma.png", "adminfigma.png", "calendar.png", "admin.png", "formcalendar.png"],
        videos:[]
    },
    {
        id: 6,
        title: "Papeterie",
        titleUrl: "papeterie",
        about: "OpenGL and C++ 3D Project using boids. April 2023",
        description: "School project which consisted to create boids in c++ and then create a scene with the librairie OpenGl3+. The modelisation was done on Blender and then integrated on the OpenGL project.",
        image: "/images/papeterie.png",
        tag: ["All", "Software"],
        gitUrl: "https://github.com/poupsipoups/Papeterie",
        images: ["papeterie.png", "papeterie2.png", "papeterie3.png", "papeterie4.png", "papeterie5.png"],
        videos:[]
    }
];

export default projectData;