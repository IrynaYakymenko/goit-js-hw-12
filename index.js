import{S as g,a as u,i as d}from"./assets/vendor-D9MSmPc2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();let c;const m=e=>`
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
    `,h=(e,a)=>{const o=e.map(l=>m(l)).join("");a.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250})},y=e=>{e.innerHTML=""},v="49388165-2207654a79f52bc7a4c348d65";u.defaults.baseURL="https://pixabay.com/api/";u.defaults.params={key:v,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};const b=async(e,a=1)=>{const{data:o}=await u.get(`/?q=${e}&page=${a}`);return o};let n=1,p="";const r={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},L=async e=>{e.preventDefault();const a=e.currentTarget.elements["search-text"].value.trim();if(a===""){d.warning({title:"Warning",message:"Поле не має бути порожнім!",position:"topRight"});return}p=a,n=1,y(r.gallery),r.loadMoreBtn.classList.add("is-hidden"),await f(!0)},f=async(e=!1)=>{try{r.loader.classList.remove("hidden");const a=await b(p,n);if(a.hits.length===0){d.warning({title:"Warning",message:"Sorry, no images found. Please try again!",position:"topRight"});return}h(a.hits,r.gallery),n>1&&setTimeout(()=>{const l=r.gallery.getBoundingClientRect().height;window.scrollBy({top:l,behavior:"smooth"})},300);const o=Math.ceil(a.totalHits/15);n>=o?(r.loadMoreBtn.classList.add("is-hidden"),d.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):r.loadMoreBtn.classList.remove("is-hidden"),n++}catch(a){console.log(a)}finally{r.loader.classList.add("hidden")}};r.searchForm.addEventListener("submit",L);r.loadMoreBtn.addEventListener("click",f);
//# sourceMappingURL=index.js.map
