// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@400&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&display=swap\");\n:root {\n  --color-base: #fdf6e3;\n  --color-card-base: #d8d8c1af;\n  --color-card-text: black;\n  --color-text: #657b83;\n  --color-user: #6c71c4;\n  --color-secondary-text: #72716e;\n  --color-cursorColor: #23918c;\n  --color-skill-bar: #002b36;\n  --color-selected-text: #586e75;\n  --color-links: #005bbb;\n  --theme: \"light\";\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-base: #002b36;\n    --color-card-base: #6b96a7;\n    --color-card-text: white;\n    --color-text: #839496;\n    --color-secondary-text: #b9c7c7;\n    --color-user: #6c71c4;\n    --color-cursorColor: #d33682;\n    --color-skill-bar: #2aa198;\n    --color-selected-text: #93a1a1;\n    --color-links: #c04c44;\n    --theme: \"dark\";\n  }\n}\nnav {\n  width: 70%;\n}\nnav ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  list-style-type: none;\n}\nnav ul li {\n  margin: 1.5rem;\n  cursor: pointer;\n}\n\nbody {\n  font-family: \"Fira Code\", \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  background-color: var(--color-base);\n  color: var(--color-text);\n  line-height: 1.5;\n}\n\nmain {\n  width: 80%;\n}\nmain h1 {\n  color: var(--color-user);\n  margin-bottom: 2rem;\n  word-spacing: -2px;\n}\nmain h2 {\n  color: var(--color-secondary-text);\n}\nmain .main-content {\n  display: flex;\n  flex-direction: column;\n}\n\n.container {\n  max-width: 900px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.underline:hover {\n  color: var(--color-selected-text);\n}\n\n.underline {\n  position: relative;\n}\n\n.underline::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background-color: var(--color-selected-text);\n  transform-origin: bottom right;\n  transform: scaleX(0);\n  transition: transform 0.5s ease;\n}\n\n.underline:hover::before {\n  transform-origin: bottom left;\n  transform: scaleX(1);\n}\n\n#page-title {\n  color: var(--color-cursorColor);\n}\n\n#contact-info li {\n  list-style: none;\n  margin-bottom: 20px;\n}\n#contact-info li div {\n  display: flex;\n  flex-direction: column;\n}\n#contact-info a {\n  text-decoration: none;\n  color: var(--color-links);\n}\n\n.skill-item {\n  margin-bottom: 20px;\n}\n.skill-item .language {\n  font-weight: 600;\n}\n.skill-item .skill-bar {\n  height: 24px;\n  background-color: var(--color-skill-bar);\n}\n\n#framework-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  /* This will result on two rows, each one of 300px */\n  grid-template-rows: 100px 100px 100px;\n  grid-gap: 1rem;\n}\n\n.skill-image {\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 80px;\n  width: 80px;\n  border: 0;\n  text-decoration: none;\n  outline: none;\n}\n\n#react {\n  background-image: url(\"../public/media/react.svg\");\n}\n\n#nextjs {\n  background-image: url(\"../public/media/nextjs.svg\");\n}\n\n#gatsby {\n  background-image: url(\"../public/media/gatsby.svg\");\n}\n\n#nodejs {\n  background-image: url(\"../public/media/nodejs.svg\");\n}\n\n#numpy {\n  background-image: url(\"../public/media/numpy.png\");\n}\n\n#material-ui {\n  background-image: url(\"../public/media/material-ui.svg\");\n}\n\n#bootstrap {\n  background-image: url(\"../public/media/bootstrap.svg\");\n}\n\n#express {\n  background-image: url(\"../public/media/express.svg\");\n}\n\n#linux {\n  background-image: url(\"../public/media/linux.svg\");\n}\n\n#graphql {\n  background-image: url(\"../public/media/graphql.svg\");\n}\n\n#mysql {\n  background-image: url(\"../public/media/mysql.svg\");\n}\n\n#git {\n  background-image: url(\"../public/media/git.svg\");\n}\n\n#docker {\n  background-image: url(\"../public/media/docker.svg\");\n}\n\n#rest {\n  background-image: url(\"../public/media/rest.png\");\n}\n\n#mongodb {\n  background-image: url(\"../public/media/MongoDB.svg\");\n}\n\n#postgres {\n  background-image: url(\"../public/media/postgresql.svg\");\n}\n\n#springboot {\n  background-image: url(\"../public/media/springboot.png\");\n}\n\n#android {\n  background-image: url(\"../public/media/android.png\");\n}\n\n#excel {\n  background-image: url(\"../public/media/excel.svg\");\n}\n\n#word {\n  background-image: url(\"../public/media/word.svg\");\n}\n\n#powerpoint {\n  background-image: url(\"../public/media/powerpoint.svg\");\n}\n\n#projects-contents {\n  display: grid;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-gap: 1rem;\n  margin-bottom: 25px;\n}\n@media (min-width: 600px) {\n  #projects-contents .cards {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (min-width: 900px) {\n  #projects-contents .cards {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n.project-card {\n  padding: 1rem;\n  display: flex;\n  height: 200px;\n  background-color: var(--color-card-base);\n}\n\n.project-detail-container {\n  display: flex;\n  flex-direction: column;\n  padding: 2%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tech-stack {\n  font-size: 2rem;\n  font-weight: 800;\n  text-decoration: underline;\n  margin-top: 1rem;\n  word-break: break-all;\n  margin-right: auto;\n  margin-bottom: 1em;\n}\n\n.project-summary {\n  font-size: 1em;\n  color: var(--color-card-text);\n  font-size: medium;\n  margin-left: auto;\n  margin-top: 0.5em;\n}\n\n.project-title {\n  font-size: 1.5em;\n  font-weight: 700;\n  margin-right: auto;\n  word-wrap: normal;\n}\n.project-title a {\n  text-decoration: none;\n  color: var(--color-links);\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}