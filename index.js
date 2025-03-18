import{a as u,i as d,S as g}from"./assets/vendor-vWKI0L-b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const m=s=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${s.webformatURL}"
                    data-source="${s.largeImageURL}"
                    alt="${s.tags}"
                />
                </a> 
                <div class="describe">
                <div class="info">
                    <span class="label">Likes</span><br>
                    <span class="value" data-likes>${s.likes}</span>
                </div>
                <div class="info">
                    <span class="label">Views</span></span><br>
                    <span class="value" data-views>${s.views}</span>
                </div>
                <div class="info">
                    <span class="label">Comments</span><br>
                    <span class="value" data-comments>${s.comments}</span>
                </div>
                <div class="info">
                    <span class="label" >Downloads</span><br>
                    <span class="value" data-downloads>${s.downloads}</span>
                </div>  
                </div>
        </li>
    `;u.defaults.baseURL="https://pixabay.com";const h=async(s,t=1)=>u.get(`/api/?key=49388165-2207654a79f52bc7a4c348d65&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${t}`);let c,o=1,p="";const r={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},y=async s=>{s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(t===""){d.warning({title:"Warning",message:"Поле не має бути порожнім!",position:"topRight"});return}p=t,o=1,r.gallery.innerHTML="",r.loadMoreBtn.classList.add("is-hidden"),await f(!0)},f=async(s=!1)=>{try{r.loader.classList.remove("hidden");const{data:t}=await h(p,o);if(t.hits.length===0){d.warning({title:"Warning",message:"Sorry, no images found. Please try again!",position:"topRight"});return}const n=t.hits.map(e=>m(e)).join("");r.gallery.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new g(".gallery a",{captionsData:"alt",captionDelay:250}),o>1&&setTimeout(()=>{const e=r.gallery.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})},300);const l=Math.ceil(t.totalHits/15);o>=l?(r.loadMoreBtn.classList.add("is-hidden"),d.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):r.loadMoreBtn.classList.remove("is-hidden"),o++}catch(t){console.log(t)}finally{r.loader.classList.add("hidden")}};r.searchForm.addEventListener("submit",y);r.loadMoreBtn.addEventListener("click",f);
//# sourceMappingURL=index.js.map
