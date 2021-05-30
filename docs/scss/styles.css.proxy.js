// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap\");\n:root {\n  --color-base: #fdf6e3;\n  --color-card-base: #eeeeeaaf;\n  --color-card-text: black;\n  --color-card-title: #3178b3;\n  --color-card-dots: #265d8b;\n  --color-text: #657b83;\n  --color-user: #6c71c4;\n  --color-secondary-text: #72716e;\n  --color-cursorColor: #23918c;\n  --color-skill-bar: #002b36;\n  --color-selected-text: #586e75;\n  --color-links: #005bbb;\n  --theme: \"light\";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-base: #002b36;\n    --color-card-base: #4e6a75;\n    --color-card-text: white;\n    --color-card-title: #20dbd2;\n    --color-card-dots: #19afa7;\n    --color-text: #839496;\n    --color-secondary-text: #b9c7c7;\n    --color-user: #6c71c4;\n    --color-cursorColor: #d33682;\n    --color-skill-bar: #2aa198;\n    --color-selected-text: #93a1a1;\n    --color-links: #c04c44;\n    --theme: \"dark\";\n  }\n}\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n  overflow-x: visible;\n}\n\nbody {\n  font-family: \"Fira Code\", \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  background-color: var(--color-base);\n  color: var(--color-text);\n  line-height: 1.5;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnav {\n  position: absolute;\n  top: 0;\n  width: 90%;\n  overflow-x: scroll;\n}\nnav ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  list-style-type: none;\n}\n@media only screen and (max-width: 868px) {\n  nav ul {\n    margin-bottom: 5rem;\n  }\n}\nnav ul li {\n  margin: 1.5rem;\n  cursor: pointer;\n}\n\nmain {\n  width: 80%;\n  padding-top: 5rem;\n}\nmain p {\n  font-weight: 300;\n  font-size: 1.2rem;\n}\nmain h1 {\n  color: var(--color-user);\n  margin-bottom: 1rem;\n  word-spacing: -2px;\n  font-size: 2.5rem;\n}\nmain h2 {\n  color: var(--color-secondary-text);\n  font-size: 2rem;\n}\n\n.container {\n  min-height: 100vh;\n  position: relative;\n  padding-bottom: 2.5rem;\n  width: 60%;\n}\n\n.underline:hover {\n  color: var(--color-selected-text);\n}\n\n.underline {\n  position: relative;\n}\n\n.underline::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background-color: var(--color-selected-text);\n  transform-origin: bottom right;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n}\n\n.underline:hover::before {\n  transform-origin: bottom left;\n  transform: scaleX(1);\n}\n\n#page-title {\n  color: var(--color-cursorColor);\n}\n\n#contact-info li {\n  list-style: none;\n  margin-bottom: 20px;\n  font-size: large;\n}\n#contact-info li div {\n  display: flex;\n  flex-direction: column;\n}\n#contact-info a {\n  text-decoration: none;\n  color: var(--color-links);\n}\n\n.skill-item {\n  margin-bottom: 20px;\n}\n.skill-item .language {\n  font-weight: 600;\n}\n.skill-item .skill-bar {\n  height: 24px;\n  background-color: var(--color-skill-bar);\n}\n\n#framework-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  /* This will result on two rows, each one of 300px */\n  grid-template-rows: 100px 100px 100px;\n}\n@media only screen and (max-width: 868px) {\n  #framework-grid {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    /* This will result on two rows, each one of 300px */\n    grid-template-rows: 100px 100px 100px 100px;\n  }\n}\n\n.skill-image {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 80px;\n  width: 80px;\n  border: 0;\n  text-decoration: none;\n  outline: none;\n}\n\n.tech-stack {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--color-secondary-text);\n  text-decoration: underline;\n  margin-top: 1rem;\n  word-break: break-all;\n  margin-right: auto;\n  margin-bottom: 1em;\n}\n\n#react {\n  background-image: url(\"../public/media/react.svg\");\n}\n\n#nextjs {\n  background-image: url(\"../public/media/nextjs.svg\");\n}\n\n#gatsby {\n  background-image: url(\"../public/media/gatsby.svg\");\n}\n\n#nodejs {\n  background-image: url(\"../public/media/nodejs.svg\");\n}\n\n#numpy {\n  background-image: url(\"../public/media/numpy.png\");\n}\n\n#material-ui {\n  background-image: url(\"../public/media/material-ui.svg\");\n}\n\n#bootstrap {\n  background-image: url(\"../public/media/bootstrap.svg\");\n}\n\n#express {\n  background-image: url(\"../public/media/expressjs.jpg\");\n}\n\n#linux {\n  background-image: url(\"../public/media/linux.svg\");\n}\n\n#graphql {\n  background-image: url(\"../public/media/graphql.svg\");\n}\n\n#mysql {\n  background-image: url(\"../public/media/mysql.svg\");\n}\n\n#git {\n  background-image: url(\"../public/media/git.svg\");\n}\n\n#docker {\n  background-image: url(\"../public/media/docker.svg\");\n}\n\n#rest {\n  background-image: url(\"../public/media/rest.png\");\n}\n\n#mongodb {\n  background-image: url(\"../public/media/MongoDB.svg\");\n}\n\n#postgres {\n  background-image: url(\"../public/media/postgresql.svg\");\n}\n\n#springboot {\n  background-image: url(\"../public/media/springboot.png\");\n}\n\n#android {\n  background-image: url(\"../public/media/android.png\");\n}\n\n#excel {\n  background-image: url(\"../public/media/excel.svg\");\n}\n\n#word {\n  background-image: url(\"../public/media/word.svg\");\n}\n\n#powerpoint {\n  background-image: url(\"../public/media/powerpoint.svg\");\n}\n\n#project-slider {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  margin: 4rem;\n}\n#project-slider .project-slide {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 125%;\n  background-color: var(--color-card-base);\n  color: var(--color-card-text);\n  margin: 5px;\n  padding: 1.5rem;\n}\n#project-slider .project-slide .image-slider {\n  width: 100%;\n}\n#project-slider .project-slide .image-slider ul {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: scroll;\n}\n#project-slider .project-slide .image-slider li {\n  flex-shrink: 0;\n  width: 100%;\n  max-height: 30rem;\n  margin: 3px;\n}\n#project-slider .project-slide .image-slider .image-slide img {\n  height: 100%;\n  width: 100%;\n}\n#project-slider .project-slide .project-detail-container {\n  display: flex;\n  flex-direction: column;\n  padding: 2%;\n  overflow: scroll;\n  margin-top: 2rem;\n}\n#project-slider .project-slide .project-detail-container .project-title a {\n  color: var(--color-card-title);\n  font-size: 1.5rem;\n  text-decoration: none;\n  font-weight: 700;\n  margin-right: auto;\n  word-wrap: normal;\n}\n#project-slider .project-slide .project-detail-container .project-summary {\n  font-size: 1em;\n  color: var(--color-card-text);\n  font-size: medium;\n  margin-top: 0.5em;\n  overflow: scroll;\n}\n#project-slider .project-slide .project-detail-container .tech-stack-project {\n  margin-top: 10px;\n  font-weight: bold;\n}\n#project-slider .project-slide .project-detail-container .tech-stack-project ul {\n  list-style: none;\n  margin-top: 0;\n  margin-left: 0;\n}\n#project-slider .project-slide .project-detail-container .tech-stack-project span {\n  color: var(--color-text);\n}\n#project-slider .glider-dot.active {\n  background: var(--color-card-dots);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}