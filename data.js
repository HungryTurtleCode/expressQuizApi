const correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

const quizQuestions  = [
    {
        type: "text",
        text: "How much can a loggerhead weigh?",
        possibilities: [
            {
                answer: "Up to 20kg"
            },
            {
                answer: "Up to 115kg"
            },
            {
                answer: "Up to 220kg"
            },
            {
                answer: "Up to 500kg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "What is the typical lifespan of a Green Sea Turtle?",
        possibilities: [
            {
                answer: "150 years"
            },
            {
                answer: "10 years"
            },
            {
                answer: "80 years"
            },
            {
                answer: "40 years"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "image",
        text: "Which of these is the Alligator Snapping Turtle?",
        possibilities: [
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573536/2399413165_bcc8031cac_z_fqaexq.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573475/olive-ridley1_bdrbzh.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573717/Leatherback-turtle-007_p1qytx.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573639/Alligator_snapping_turtle_-_Geierschildkr_C3_B6te_-_Alligatorschildkr_C3_B6te_-_Macrochelys_temminckii_01_uwqvbi.jpg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "image",
        text: "Which of these is the Green Turtle?",
        possibilities: [
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573240/Sea-Turtles-Habitat_kiipu7.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573596/Kemp_s_Ridley_sea_turtle_nesting_jqe0fg.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573639/Alligator_snapping_turtle_-_Geierschildkr_C3_B6te_-_Alligatorschildkr_C3_B6te_-_Macrochelys_temminckii_01_uwqvbi.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573676/SCR_290360hawskbill-why-matter-LG_wqf0kl.jpg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "Where does the Kemp's Ridley Sea Turtle live?'",
        possibilities: [
            {
                answer: "Tropical waters all around the world"
            },
            {
                answer: "Eastern Australia"
            },
            {
                answer: "Coastal North Atlantic"
            },
            {
                answer: "South pacific islands"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "What is the most common turtle in US waters?",
        possibilities: [
            {
                answer: "Loggerhead turtle"
            },
            {
                answer: "Leatherback turtle"
            },
            {
                answer: "Hawksbill Turtle"
            },
            {
                answer: "Alligator Snapping Turtle"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "What is the largest sea turtle on earth?",
        possibilities: [
            {
                answer: "Eastern Snake Necked Turtle"
            },
            {
                answer: "Olive Ridley Sea Turtle"
            },
            {
                answer: "Kemp's Ridley Sea Turtle'"
            },
            {
                answer: "Leatherback"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "image",
        text: "Which of these is the Olive Ridley Turtle?",
        possibilities: [
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573757/loggerheadTurtle_2651448b_fuxtrz.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573676/SCR_290360hawskbill-why-matter-LG_wqf0kl.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573475/olive-ridley1_bdrbzh.jpg"
            },
            {
                answer: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_560/v1538573596/Kemp_s_Ridley_sea_turtle_nesting_jqe0fg.jpg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "How Heavy can a leatherback turtle be?",
        possibilities: [
            {
                answer: "900kg"
            },
            {
                answer: "40kg"
            },
            {
                answer: "110kg"
            },
            {
                answer: "300kg"
            }
        ],
        selected: null,
        correct: null
    },
    {
        type: "text",
        text: "Which of these turtles are herbivores?",
        possibilities: [
            {
                answer: "Loggerhead Turtle"
            },
            {
                answer: "Hawksbill Turtle"
            },
            {
                answer: "Leatherback Turtle"
            },
            {
                answer: "Green Turtle"
            }
        ],
        selected: null,
        correct: null
    }
];

const turtlesData = [
    {
        type: "Green Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573240/Sea-Turtles-Habitat_kiipu7.jpg",
        locations: "Tropical and subtropical oceans worldwide",
        size: "Up to 1.5m and up to 300kg",
        lifespan: "Over 80 years",
        diet: "Herbivore",
        description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
    },
    {
        type: "Loggerhead Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573757/loggerheadTurtle_2651448b_fuxtrz.jpg",
        locations: "Tropical and subtropical oceans worldwide",
        size: "90cm, 115kg",
        lifespan: "More than 50 years",
        diet: "Carnivore",
        description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
    },
    {
        type: "Leatherback Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573717/Leatherback-turtle-007_p1qytx.jpg",
        locations: "All tropical and subtropical oceans",
        size: "Up to 2m, up to 900kg",
        lifespan: "45 years",
        diet: "Carnivore",
        description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
    },
    {
        type: "Hawksbill Sea Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573676/SCR_290360hawskbill-why-matter-LG_wqf0kl.jpg",
        locations: "Tropical Coastal areas around the world",
        size: "Over 1m, 45-68kg",
        lifespan: "30-50 Years",
        diet: "Carnivore",
        description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
    },
    {
        type: "Alligator Snapping Turtle",
      image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573639/Alligator_snapping_turtle_-_Geierschildkr_C3_B6te_-_Alligatorschildkr_C3_B6te_-_Macrochelys_temminckii_01_uwqvbi.jpg",
        locations: "Along the Atlantic Coast of USA",
        size: "around 60cm, up to 100kg",
        lifespan: "20-70 years",
        diet: "Carnivore",
        description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
    },
    {
        type: "Kemp's Ridley Sea Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573596/Kemp_s_Ridley_sea_turtle_nesting_jqe0fg.jpg",
        locations: "Coastal areas of the North Atlantic",
        size: "65cm, up to 45kg",
        lifespan: "Around 50 years",
        diet: "Omnivore",
        description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
    },
    {
        type: "Olive Ridley Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573475/olive-ridley1_bdrbzh.jpg",
        locations: "Tropical coastal areas around the world",
        size: "70cm, 45kg",
        lifespan: "50 years",
        diet: "Omnivore",
        description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
    },
    {
        type: "Eastern Snake Necked Turtle",
        image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573536/2399413165_bcc8031cac_z_fqaexq.jpg",
        locations: "Eastern Australia",
        size: "Up to 30cm",
        lifespan: "25 years",
        diet: "Carnivore",
        description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
    }
];

module.exports = {
  correctAnswers,
  quizQuestions,
  turtlesData,
}
