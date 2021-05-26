
const Projects =[
    {
        name:"Proflix",
        summary:"Envisioned and developed a video streaming platform for content sourced by the user, complete with authentication and with support of up to 5 profiles per user comparable to Netflix",
        link:"https://github.com/bjain853/Proflix",
        images:["../public/media/proflix_1.png","../public/media/proflix_2.png","../public/media/proflix_3.png","../public/media/proflix_4.png"],
        techStack:["NextJS","NodeJS","ExpressJS","Material-UI","MySQL","Redis","JSON Web Tokens"]
    },
    {
        name:"Code Collab",
        summary:`Built a cloud-based code editor, which supports multiple programming languages (HTML, CSS, JavaScript)
        real-time code editing and rendering of the result aimed at making code collaboration easier. Unique feature includes an image to code convertor which employs Machine Learning algorithms to convert
        an image of code snippet to actual code.`,
        images:["../public/media/codecollab_1.png","../public/media/codecollab_2.png","../public/media/codecollab_3.png","../public/media/codecollab_4.png","../public/media/codecollab_5.png","../public/media/codecollab_6.png","../public/media/codecollab_7.png"],
        link:"https://github.com/bjain853/codecollab",
        techStack:["ReactJS","NodeJS","GraphQL","Express","TessaractJS","Tailwind CSS"]
    },
    {
        name:"Web Gallery",
        summary:"Created a secure image repository which focuses on providing an intuitive User Experience along with a space for users to share and comment on other users’ posts",
        images:["../public/media/webgallery_1.png","../public/media/webgallery_2.png","../public/media/webgallery_3.png","../public/media/webgallery_4.png"],
        link:"https://github.com/bjain853/webgallery",
        techStack:["HTML","Javascript (ES6)","CSS3","NodeJS","Clam Scan Anti-virus"]
    },
    {
        name:"Microblog",
        summary:"A simple blog page where people can post their thoughts while also being able to comment on and like and/or dislike other user's posts",
        images:["../public/media/microblog_1.png","../public/media/microblog_2.png","../public/media/microblog_3.png","../public/media/microblog_4.png"],
        link:"https://github.com/bjain853/microblog",
        techStack:["HTML","CSS3","JavaScript","NodeJS"]
    },
    {
        name:"UImpactify MVP",
        summary:"A beautiful online course management system built for an Ed-Tech, UImpactify",
        link:"https://github.com/bjain853/UImpactify",
        images:["../public/media/UImpactify_1.png","../public/media/UImpactify_2.png","../public/media/UImpactify_3.png","../public/media/UImpactify_4.png","../public/media/UImpactify_5.png","../public/media/UImpactify_6.png"],
        techStack:["GatsbyJS","MongoDB","NodeJS","ExpressJS","Material UI"]
    },
];

function renderProjects(){
    let projectHTML = '';
    Projects.forEach(function(project,idx){
        projectHTML+=`
        <div class="project-slide">
            <div class="images-slider">
            ${renderProjectImages(project.images,idx)}
            </div>
            <div class="project-detail-container">
                <span class="project-title">
                    <a href="${project.link}" target="_blank">
                         ${project.name}
                    </a>
                </span>
                <span class="project-summary">
                    ${project.summary}
                </span>
                ${renderTechStack(project.techStack)}
            </div>  
        </div>
        `;

    });
    return projectHTML;
}

function renderTechStack(technologies){
    let techStackHTML = "";
    technologies.forEach(function(tech){
        techStackHTML +=` 
        <li>
            ${tech} 
        </li>
        `;
    });
    return `<div class="tech-stack-project">
               <span> Tech stack learnt </span>
                <ul>
                 ${techStackHTML}
                </ul>
            </div>
    `;
};


function renderProjectImages(images){
    

    let projectImages = '';
    images.forEach(function(image,idx){
        projectImages+=`
        <div id="slide-${idx}">
                <img  src="${image}" alt="No Image Available"  />
        </div>
        `;
    });

    return ` 
    <div class="glider">
         ${projectImages}
    </div>`;
};


export default renderProjects;