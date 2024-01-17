import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{g as o}from"./assets/gallery-items-68ceb2de.js";import{S as i}from"./assets/vendor-ceec3c52.js";const a=document.querySelector(".gallery");console.log(a);function n(l){return l.map(({preview:r,original:e,description:t})=>`
      <li className="gallery__item">
        <a class="gallery__link" href="${e}">
          <img
            class="gallery__image"
            src="${r}"
            alt="${t}"
            data-source="${e}"
          />
        </a>
      </li>
    `).join("")}a.insertAdjacentHTML("beforeend",n(o));new i(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
