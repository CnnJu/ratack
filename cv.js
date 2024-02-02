const educationExperienceData = [
    { date: "2006 - 2009", name: "Bachelor Degree in Graphic Design, The Royal Academy of Fine Arts", place: "Ghent (BE)", lineBreak: false },
    { date: "2009 - 2010", name: "Master's Degree in Fine Arts, The Royal Academy of Fine Arts", place: "Ghent (BE)", lineBreak: false },
    { date: "2010", name: "Intern at Extrapool, KNUST, Sound Art Print", place: "Nijmegen (NE)", lineBreak: true },
    { date: "2012 - 2015", name: "Member of artist collective Con Artist Gallery", place: "New York (USA)", lineBreak: false },
    { date: "2017 - 2019", name: "Co-founder residency program and member of Queens Collective", place: "Marrakech (MO)", lineBreak: false },
    { date: "2014 - 2024", name: "Member of artist collective Heima", place: "Seyðisfjörður (IS)", lineBreak: true},
    { date: "Nov 2014", name: "Workshop Mural Young Adults", place: "Anzegem (BE)", lineBreak: false},
    { date: "Aug — Sep 2015", name: "Art Production Assistant Contour. Bienniale of Moving Image 2015", place: "Mechelen (BE)", lineBreak: false},
    { date: "Apr 2015", name: "Mentor workshop final Exhibition LungA Art school program", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "2015 - 2016", name: "Mentor LungA Art school Program", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Feb 2016", name: "Workshop <i>Fluidity as material</i> LungA School Program in collaboration with workshop <i>Just drumming</i> by Simon Berz", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Sep — Oct 2016", name: "Artist in Residence, Priscilla Queen of the Medina", place: "Marrakech (MO", lineBreak: false},
    { date: "Nov 2016", name: "Workshop <i>Fluidity as material</i> LungA School Program", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Jan 2017", name: "Workshop Grunnskóli Seyðisfjarðar", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Mar 2017", name: "Workshop <i>Fluidity as material</i> with Jeppe Kondrup Adelborg, LungA School Program", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Nov 2017", name: "Workshop <i>Painting</i> with Jeppe Kondrup Adelborg, LungA School Program", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Mar 2018", name: "Workshop <i>Painting</i> with Jeppe Kondrup Adelborg, LungA School Program", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Apr 2019", name: "Sound composer Lexico Collective, <i>To be announced</i> premiered during Sismògraf festival", place: "Olot (ES-CT)", lineBreak: false},
    { date: "Jan 2020", name: "Sound composer Stand Up Dance, solo Meagan O'Shea, <i>Vicarious time</i>", lineBreak: false},
    { date: "Jul 2021", name: "Painting workshop LungA Festival", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Jun 2022", name: "Sound composer Stand Up Dance, <i>Anatomalia</i>", lineBreak: false},
    { date: "Sep — Oct 2022", name: "Hosting Residency for Queer artists and activists, Heima", place: "Seyðisfjörður (IS)", lineBreak: false},
    { date: "Sep — Oct 2023", name: "Hosting Residency for Queer artists and activists, Heima", place: "Seyðisfjörður (IS)", lineBreak: false},
    
    // Add more entries as needed
];

const exhibitionsData = [
    { date: "2017", name: "Screening, <i>The silence of the strings</i>(2017) and <i>All blossoms fell in potential lonely gardens</i> (2016), Flat Earth Film Festival", place: "Herðubreið, Seyðisfjörður (IS)", lineBreak: false },
    { date: "2017", name: "The Candles, Old Net Factory, curated by Lotte Rose Kjær Skau and Daniel Grossman", place: "Herðubreið, Seyðisfjörður (IS)", lineBreak: false },
    { date: "2017", name: "The Last Supper, Solo Exhibition Four Glass Boxes", place: "KBH Kunsthal Krabbesholm Højskole, Skive (DE)", lineBreak: false },
    { date: "2017", name: "FILE 2017 - Electronic Language International Festival", place: "Fiesp Cultural Center, Sao Paulo, (BR)", lineBreak: false },
    { date: "2017", name: "Queens Collective open day, 'Do it' exhibition, Queens Collective", place: "Marrakech (MO)", lineBreak: true },
    { date: "2018", name: "Queens Collective Exhibition 0.2, group exhibition, Queens Collective", place: "Marrakech (MO)", lineBreak: false },
    { date: "2018", name: "Screening <i>Madness of Fellini</i> (2016) and <i>Why is my mother walking so much in the room</i> (2017), Flat Earth Film Festival", place: "Herðubreið, Seyðisfjörður (IS)", lineBreak: false },
    { date: "2018", name: "Queens Collective Exhibition 0.3, group exhibition, Queens Collective", place: "Marrakech (MO)", lineBreak: false },
    { date: "2018", name: "Con Artist ALL STARS, group exhibition", place: "Con Artist Collective, Lower East Side, New York (USA)", lineBreak: false },
    { date: "2018", name: "LungA Exhibition with Jökull Snær Þórðarson, Kolbrun Ínga, Kerstin Möller, Anthonia Gonsales", place: "Seyðisfjörður (IS)", lineBreak: true },
    { date: "2019", name: "Solo Exhibition", place: "Herðubreið Gallery, Seyðisfjörður (IS)", lineBreak: true },
    { date: "2020", name: "Solo Exhibition, <i>Still life #1</i>", place: "AreaA, Berlin (DE)", lineBreak: false },
    { date: "2020", name: "Solo Exhibition <i>I don’t know how to human in theater of nature</i>", place: "Sláturhúsið, Egilstaddir (IS)", lineBreak: true },
    { date: "2021", name: "<i>Theater of Nature</i>", place: "Projection Winter Lights Festival, Reykjavík (IS)", lineBreak: false },
    { date: "2021", name: "<i>Fall on me</i> light projection (in collab with Sarah Banks)", place: "List í ljósi festival, Seyðisfjörður (IS)", lineBreak: false },
    { date: "2021", name: "Two person exhibition Laura Tack and Tóti Ripper", place: "Herðubreið Gallery, Seyðisfjörður (IS)", lineBreak: false },
    { date: "2021", name: "Reykjavík Winter Lights Festival 3-6 February 2022, collaboration with Sarah Banks,", place: "Reykjavík (IS)", lineBreak: true },
    { date: "2022", name: "<i>Let me untangle your tenderness</i>, solo exhibition", place: "IMT Gallery, London (UK)", lineBreak: true },
    { date: "2023", name: "Group Exhibition", place: "Flaedi Gallery, Reykjavik (IS)", lineBreak: false },
    { date: "2023", name: "Solo Exhibition", place: "Ásmundarsalur Gallery, Reykjavik (IS)", lineBreak: false },
    { date: "2023", name: "Group Exhibition", place: "B4 Gallery, Reykjavik (IS)", lineBreak: false },
    { date: "2023", name: "Solo Exhibition", place: "Galerijke Marijke, Antwerp (BE)", lineBreak: false },
    { date: "2023", name: "Solo exhibition <i>Small works</i>", place: "Skaftfell, Seyðisfjörður (IS)", lineBreak: false },
    { date: "2023", name: "Group Exhibition LungA Festival", place: "Seyðisfjörður (IS)", lineBreak: false },
    { date: "2023", name: "Duo exhibition <i>And as always, the end is everything</i> with Florence Peake", place: "IMT gallery, London (UK)", lineBreak: false },

    // Add more entries as needed
];

function populateContent(sectionId, data) {
    const section = document.getElementById(sectionId);
    const contentDiv = section.querySelector(".content");

    data.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");

        // Create a paragraph for the entry content
        const entryContent = document.createElement("p");
        entryContent.innerHTML = `<span>${entry.date}</span> <span>${entry.name}</span> <span>${entry.place}</span>`;

        // Append the content to the entry div
        entryDiv.appendChild(entryContent);

        contentDiv.appendChild(entryDiv);

        // Add a <br> tag unless it's the last entry or 'lineBreak' is false
        if (entry.lineBreak && index !== data.length - 1) {
            const lineBreak = document.createElement("br");
            contentDiv.appendChild(lineBreak);
        }
    });
}

populateContent("educationExperience", educationExperienceData);
populateContent("exhibitions", exhibitionsData);