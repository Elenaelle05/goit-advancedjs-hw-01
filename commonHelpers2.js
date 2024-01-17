import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{g as e}from"./assets/gallery-items-68ceb2de.js";console.log(e);const o=document.querySelector(".gallery");function i(l){return l.map(({preview:a,original:t,description:r})=>`
    <li class="gallery__item">
      <a class="gallery__link" href="${t}">
        <img
          class="gallery__image"
          src="${a}"
          alt="${r}"
        />
      </a>
    </li>`).join("")}o.insertAdjacentHTML("beforeend",i(e));new SimpleLightbox(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers2.js.map
