# React-Bootstrap-Portfolio
Front-End portfolio style website made using Vite, React JavaScript library, HTML, and CSS Bootstrap Framework. Custom CSS Styling was also implemented to make the website responsive and optimized for mobile.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This front-end, simple portfolio website was built using Vite and React, which enabled me to create a dynamic, fast-rendering, and responsive website. Choosing a React site for my portfolio enabled me to quickly install all necessary dependencies to get started and run a development server while coding the site. As a React site, it relies on a single HTML page (index.html), where all of the site's content gets rendered onto, as the user switches between pages. Although there is a downside in terms of the site's Search Engine Optimization (SEO), the benefit of using a technology such as React is that content quickly gets rendered without the site having to refresh or reload. Content will dynamically display as the user clicks around the Navigation links and switches between sections, which each utilize a React component/template for rendering HTML and CSS (for that particular section or "page").

The CSS Bootstrap Framework was used here throughout the site because of how quick it enabled me to set up certain elements and design choices, such as using card containers for my Work Page. However, most of the website was custom styled, even with CSS as I still had to set up media queries, combined with Flexbox and Grid display properties in order to get elements to display the way I wanted to. Additional JavaScript was also applied so that my website's Light and Dark mode themes could be enabled and also toggled back and forth. This was a fun project to practice and apply some of my Front-End skills, including React, which I have come to enjoy using.

## Project Structure
- /client
    - /node_modules
    - /public (folder where all of the site's images are saved)
    - /src (folder containing all of the site's main JavaScript and CSS code)
        - /assets (folder containing CSS files)
        - /components (folder where reused React templates are saved, such as Header or Footer)
        - /pages (folder that contains all of the site's "page" templates aka different rendered sections of site)
        - App.jsx (file that contains Routes for each of the "page" paths, as well as where each of the page templates are pulled in)
        - main.jsx (another main file where the App.jsx file gets rendered and manipulates the DOM)
    - eslintrc.cjs (file containing export object properties for React project)
    - index.html (single, main HTML file where all content gets rendered)
    - .gitignore (file that lists other files to be ignored by Github when pushing to repository, such as /node_modules folder)
    - package.json (file containing JSON npm dependencies and script commands)
    - vite.config.js (file containing configuration and plugins for Vite/React project)
- LICENSE (license used for this repository - MIT License)
- README (information file containing information about this specific project/application)

## Tools and Technologies Used in This Project
- Javascript
- Vite (https://vitejs.dev/)
- React (Installed through Vite prompt)
- HTML
- CSS
- CSS Bootstrap Framework
- Additional Node Modules:
  - React Router DOM module (https://reactrouter.com/en/main)
  - React Switch module (https://www.npmjs.com/package/react-switch)
- VS Code platform used to code and build pages
- Github (website hosted and deployed on Github servers)

## How to Use
This website, being Front-End is straightforward to use. The only real difference, due to the technology being used, is that React will dynamically render HTML and CSS files (and consequently content) as the user navigates the site and clicks around. Along with most other standard websites, there is a mixture of content and elements within the site, including a header, footer, links, buttons, and various pages. Since this is a portfolio website, when a user visits and interacts with the site, the main purpose will be to learn a little more about me, see some of the work that I've developed, fill out a contact form, and download my resume. The user will be able to do all of this by simply clicking around the site. The main goal here is for the user to see some of the projects I've completed, as well as contact me in some way. The work section of the site contains links to github repositories and demo urls for each of the corresponding work item cards.

Additionally, the website was created also as a PWA (Progressive Web App), which means that on a Desktop computer, it can be downloadable from the browser (if using Chrome for example, look for the install option). If the user chooses to install the site, it will be installed on their computer (with an application icon) and accessible from their desktop, similar to any other app/program. This enables my website to be accessible offline (through a browser service worker). If on a mobile device, such as an iPhone for example, the user can still technically install the site as a PWA, but the process is a little different. In the Safari browser for example, the user would just need to click the share icon (located in bottom nav of screen) and when that opens, scroll down and click "Add to Home Screen", which gives an option to install as an App on the phone device's homescreen with an App icon.

To use the Light and Dark modes of this site, a toggle switch is located in the header/navigation. Just toggle it to "checked" to enable Dark mode or toggle it to "unchecked" to enable Light mode (Dark mode is the standard from initial access of the site). Additionally, if the user were to click the profile image of me (located on the About Me page), they would find that this also toggles between either Light or Dark mode (and it changes the profile image as well to suit which mode was chosen)!

## Demo/Deployment
Live URL: https://anthonypurificato.com/

## Credits
Website built from start to finish by Anthony Purificato using React.

## License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me on [LinkedIn](https://www.linkedin.com/in/apurificato/)

[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/apurificato/)