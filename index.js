import{S as g,a as u,i as d}from"./assets/vendor-D9MSmPc2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();let c;const m=e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${e.webformatURL}"
                    data-source="${e.largeImageURL}"
                    alt="${e.tags}"
                />
                </a> 
                <div class="describe">
                <div class="info">
                    <span class="label">Likes</span><br>
                    <span class="value" data-likes>${e.likes}</span>
                </div>
                <div class="info">
                    <span class="label">Views</span></span><br>
                    <span class="value" data-views>${e.views}</span>
                </div>
                <div class="info">
                    <span class="label">Comments</span><br>
                    <span class="value" data-comments>${e.comments}</span>
                </div>
                <div class="info">
                    <span class="label" >Downloads</span><br>
                    <span class="value" data-downloads>${e.downloads}</span>
                </div>  
                </div>
        </li>
    `,h=(e,t)=>{const n=e.map(o=>m(o)).join("");t.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})},y=e=>{e.innerHTML=""},v="49388165-2207654a79f52bc7a4c348d65";u.defaults.baseURL="https://pixabay.com/api/";const b=async(e,t=1,n=15)=>{const o={key:v,q:e,page:t,per_page:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};try{const{data:a}=await u.get("",{params:o});return a}catch(a){throw console.error("Error fetching data from Pixabay:",a),new Error("Failed to fetch data")}};let l=1,p="";const r={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},L=async e=>{e.preventDefault();const t=e.currentTarget.elements["search-text"].value.trim();if(t===""){d.warning({title:"Warning",message:"Поле не має бути порожнім!",position:"topRight"});return}p=t,l=1,y(r.gallery),r.loadMoreBtn.classList.add("is-hidden"),await f(!0)},f=async(e=!1)=>{try{r.loader.classList.remove("hidden");const t=await b(p,l);if(t.hits.length===0){d.warning({title:"Warning",message:"Sorry, no images found. Please try again!",position:"topRight"});return}h(t.hits,r.gallery),l>1&&setTimeout(()=>{const o=r.gallery.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})},300);const n=Math.ceil(t.totalHits/15);l>=n?(r.loadMoreBtn.classList.add("is-hidden"),d.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):r.loadMoreBtn.classList.remove("is-hidden"),l++}catch(t){console.log(t)}finally{r.loader.classList.add("hidden")}};r.searchForm.addEventListener("submit",L);r.loadMoreBtn.addEventListener("click",f);
//# sourceMappingURL=index.js.map
