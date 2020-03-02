<div align="center" background="#747572">
<a href="https://loaner.onrender.com/"> 
<img src="https://i.imgur.com/UXn7VU2.jpg"/>
</a>
</div>
<br>
<div align="center">
<img src="https://img.shields.io/github/last-commit/WarOnKhoff/Loaner.svg">
<span></span>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/WarOnKhoff/Loaner.svg">
</div>

<br>

<h2>About</h2>
<ul>
<li><a href='#general'>General info</a></li>
<li><a href='#goals'>Project goals</a></li>
<li><a href='#design'>Project design</a></li>
<li><a href='#dependencies'>Dependencies</a></li>
<li><a href='#setup'>Project setup</a></li>
</ul>
<hr>

<div id='general'>
<h2>General info 💡</h2>
<p>This SPA is designed and developed  basically for frontend skills showcase. Main focus was to create a master-detail SPA using suggested technology stack and implement it according to the user story and design outline; including responsive adaptations. Also another requirement for this project was to show <code>event binding</code> with inputs and usage of <code>localStorage API</code>. The main motto is to create a lightweight and UX-friendly SPA using React for UI render. The project was originally created, designed and developed by Aleksander Voronkov.</p>
</div>
<br>
<div id='goals'>
<h2>Project goals 💎</h2>
<h4>Primary goals</h4>
<ol>
<li>Slider control and a chart ✅</li>
<li>Slider input should be persistently stored in Local Storage and reinitialized whenever visitor comes back to site (full page reload) ✅</li>
<li>Responsive design ✅</li>
</ol>
<h4>Secodary goals</h4>
<ol>
<li>Implement custom UI components like slider / toggler ✅</li>
<li>Implement dark / light mode ✅</li>
<li>Implement custom animation using CSS ✅</li>
</ol>
</div>
<br>
<div id='design'>
<h2>Project design ✏️</h2>
Project prototype has been designed by using <code>Figma</code>.
<br>
<a href="https://www.figma.com/file/47IwEEg7TdFGFaU57OwHDl/Loaner?node-id=0%3A1"> 
Link on design prototype
</a>
<img src="https://i.imgur.com/hBbJQfR.jpg">
</div>
<div id='dependencies'>
<h2>Dependencies 🛠</h2>
For styling I choosed <code>SCSS</code> preproccessor. Originally this project was bootstrapped with Create React App TypeScript template.
For global state management I choosed <code>React Context api</code> and <code>useContext</code> hooks.
For responsive design I choosed combination of media-quer, rem units and flexbox approaches.
<hr/>

        "@testing-library/jest-dom": "^4.2.4",
    	"@testing-library/react": "^9.3.2",
    	"@testing-library/user-event": "^7.1.2",
    	"@types/jest": "^24.0.0",
    	"@types/node": "^12.0.0",
    	"@types/react": "^16.9.0",
    	"@types/react-dom": "^16.9.0",
    	"@types/react-router-dom": "^5.1.3",
    	"clsx": "^1.1.0",
    	"node-sass": "^4.13.1",
    	"react": "^16.13.0",
    	"react-dom": "^16.13.0",
    	"react-router-dom": "^5.1.2",
    	"react-scripts": "3.4.0",
    	"react-typed": "^1.2.0",
    	"typescript": "~3.7.2"

</div>
<div id='setup'>
<h2>Project Setup 🔌</h2>
<p>Steps to run app localy:</p>
<ul>
<li>
<p> Clone repo to your directory:<p>
<code>
cd [project directory]
</code>
then
<code>
git clone [link to github repo]
</code>
<br>
</li>
<li>
<p> After repository is cloned install dependencies with yarn on npm<p>
<code> yarn </code> or <code>npm install</code>
</li>
<li>
<p> After all You are ready to go! To start app localy:<p>
<code> yarn start </code> or <code>npm start</code>
</li>
<p>Then open:<p>
<code>http://localhost:3000/</code>
<li>
<p> To build project:<p>
<code> yarn build </code> or <code>npm run build</code>
</li>
</ul>
</div>
<br>
