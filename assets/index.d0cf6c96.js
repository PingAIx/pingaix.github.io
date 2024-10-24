const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};b();const w=({liElement:e,sectionElement:t})=>{const a=`
    <p class="command__helpItem">Pong !</p>
  `;t.insertAdjacentHTML("afterbegin",a),e.insertAdjacentElement("afterend",t)},_=({event:e,liElement:t,sectionElement:n,errorCounter:a})=>{if(n.classList.add("command__content--error"),n.textContent=`Error in ${e}: Command not found...`,t.insertAdjacentElement("afterend",n),a>=4){const o=`
      <p>Do you want to make a suggestion to add the <span>${e}</span> command?</p>
      <a href="https://github.com/mrLuisFer/terminal-website/issues" class="command__content--link" target="_blank" rel="noreferrer noopener">Github/mrLuisFer/terminal-website/issues</a>  
    `;n.insertAdjacentHTML("beforeend",o),I()}};function v(e){e.replaceChildren()}const x=document.querySelector("#heroMsg"),d=()=>{x.style.display="none";const e=document.querySelector("#command-list");v(e)},y=({liElement:e,sectionElement:t})=>{const n=`<p class="text">You cannot <span class="error">"exit"</span> closing the tab with <span class="info">JavaScript</span> for some reason.<br/>
    But you can open another tab clicking the button.</p>
    <a href="https://www.google.com/" class="exitLink" rel="noopener noreferrer" target="_blank" >Open another tab</a>
    `;t.insertAdjacentHTML("afterbegin",n),e.insertAdjacentElement("afterend",t)},h=({browserLogo:e,platformIcon:t,platform:n,browserIcon:a})=>`
    <div class="browser">
      <img class="browser__img" src="${e}" alt="Firefox" draggable="false" />
      <div class="browser__content">
        <p>
          ${a}
          AppName: <span>${navigator.appName}</span>
        </p>
        <p>
          ${t}
          OS:
          <span>
            ${n}
          </span>
        </p>
        <p>
          <i class="fa-solid fa-language"></i>
          Language: <span>${navigator.language}</span></p>
        <p>
          ${navigator.onLine?'<i class="fa-solid fa-wifi"></i>':'<i class="fa-solid fa-plane-up"></i>'}
          OnLine: <span>${navigator.onLine}</span></p>
      </div>
    </div>
  `,L=e=>e==="windows"?'<i class="fa-brands fa-windows"></i>':e==="linux"?'<i class="fa-brands fa-linux"></i>':"";var A="/assets/chrome-logo.d627633b.svg";function k({liElement:e,sectionElement:t}){const n=navigator.platform.toLowerCase().match(/(linux|windows)/i),a=L(n[0]),o=h({browserLogo:A,platformIcon:a,platform:navigator.platform,browserIcon:'<i class="fa-brands fa-chrome"></i>'});t.insertAdjacentHTML("beforeend",o),e.insertAdjacentElement("afterend",t)}var H="/assets/firefox-logo.5dd348d7.svg";function C({liElement:e,sectionElement:t}){const n=navigator.oscpu.toLowerCase().match(/(linux|windows)/i),a=L(n[0]),o=h({browserLogo:H,platformIcon:a,platform:navigator.oscpu,browserIcon:'<i class="fa-brands fa-firefox-browser"></i>'});t.insertAdjacentHTML("beforeend",o),e.insertAdjacentElement("afterend",t)}function M({liElement:e,sectionElement:t}){switch(navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)/i)[0].toLowerCase()){case"firefox":C({sectionElement:t,liElement:e});break;case"chrome":k({sectionElement:t,liElement:e});break;default:console.log(`Browser: ${navigator.userAgent} doesn't support`);return}}function j({liElement:e,sectionElement:t,value:n}){e.insertAdjacentElement("afterend",t);const a=n.split(" "),o=new RegExp("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)");let s="";if(a[1]!==void 0){const r=a[1];r.match(o)?window.open(r,"_blank"):a[1]==="--help"||a[1]==="help"?(s='<p class="command__content command__content--info">Help</p>',e.insertAdjacentHTML("afterend",s)):(s='<p class="command__content command__content--info">url is not valid</p>',e.insertAdjacentHTML("afterend",s))}else s='<p class="command__content command__content--info">need provide an url</p>',e.insertAdjacentHTML("afterend",s)}const S=({liElement:e,sectionElement:t})=>{const n="command__helpItem",a=`
    <p class="${n}">You can use the following commands:</p>
    <p class="${n}">Write the command and you can add <span>"--help"</span> to know more</p>
  `;t.insertAdjacentHTML("afterbegin",a);for(let[o,s]of Object.entries(E)){const r=`<p class="${n}">${s.name} - ${s.description}</p>`;t.insertAdjacentHTML("beforeend",r),e.insertAdjacentElement("afterend",t)}},$=["ping","clear","cls","c","exit","fetch","neofetch","open","help"],E={ping:{name:"ping",description:"Pong!"},clear:{name:"clear",description:"Clear the screen"},cls:{name:"cls",description:"Clear the screen"},c:{name:"c",description:"Clear the screen"},exit:{name:"exit",description:"Exit the program"},fetch:{name:"fetch",description:"Fetch a random image"},neofetch:{name:"neofetch",description:"Fetch information about the browser"},open:{name:"open",description:"Open a website"},mtrx:{name:"mtrx",description:"Create a matrix effect"},matrix:{name:"matrix",description:"Create a matrix effect"},help:{name:"help",description:"Show this help"},ayuda:{name:"ayuda",description:"Show this help"}};let m=0;const I=()=>{m=0},q=({value:e,id:t})=>{const n=document.getElementById(`${t}`),a=document.createElement("section");a.classList.add("command__content");const o=e.split(" ");switch($.includes(e)?m=0:m++,o[0]){case"ping":w({liElement:n,sectionElement:a});break;case"clear":d();break;case"cls":d();break;case"c":d();break;case"exit":y({liElement:n,sectionElement:a});break;case"fetch":break;case"neofetch":M({liElement:n,sectionElement:a});break;case"open":j({liElement:n,sectionElement:a,value:e});break;case"help":S({liElement:n,sectionElement:a});break;default:_({event:e,liElement:n,sectionElement:a,errorCounter:m});break}},N=({value:e,listElement:t,id:n})=>{let a=document.createElement("li"),o=document.createElement("p"),s=document.createElement("span");const r=' <p class="command__user"><span class="success">user</span>@user $</p>';a.classList.add("commandList__item"),a.setAttribute("id",n),o.classList.add("command__user"),s.classList.add("command__cmdValue"),s.textContent=e,a.insertAdjacentHTML("beforeend",r),a.insertAdjacentElement("beforeend",s),t!==null&&(t==null||t.appendChild(a))};let T=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");const p=document.querySelector("#collapseHeader"),O=document.querySelector("#collapseHeaderBtn"),c=document.querySelector("#header"),F=document.querySelector("#extendHeader");O.addEventListener("click",()=>{c.classList.toggle("collapsed"),c.style.display="none",p.classList.toggle("baseMinimalHeader"),p.classList.toggle("collapse__container")});F.addEventListener("click",()=>{c.classList.add("extended"),c.classList.toggle("collapsed"),c.style.display="flex",p.classList.toggle("baseMinimalHeader"),p.classList.toggle("collapse__container")});const B=document.querySelector("#command-list"),i=document.querySelector("#command-input"),f=document.querySelector("#clearIcon"),P=document.querySelector("#terminal"),u=document.querySelector("#headerMenuIcon"),g=document.querySelector("#headerMenu");window.addEventListener("load",()=>{const e=window.innerWidth;i.maxLength=e>500?50:20});document.addEventListener("click",e=>{const t=g.contains(e.target),n=u.contains(e.target);!t&&!n&&(g.classList.add("hidden"),u.classList.remove("isMenuIconClicked"))});P.addEventListener("click",()=>{i.focus()});u.addEventListener("click",()=>{g.classList.toggle("hidden"),u.classList.toggle("menuIconClicked")});let l="";i==null||i.addEventListener("change",e=>{l=e.target.value.toLowerCase();const n=T(10);l.length>0&&(N({value:l,listElement:B,id:n}),q({value:l,id:n})),e.target.value=""});f==null||f.addEventListener("click",()=>{d()});