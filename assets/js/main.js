/**
 * Rasluck Furniture — Main Script
 * Custom scroll animations, gallery, lightbox, mobile menu.
 * No external animation library.
 */

/* ================================================================== */
/*  Mobile Menu                                                        */
/* ================================================================== */
const hamburger  = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open");
    const icon = hamburger.querySelector("i");
    if (icon) {
      icon.className = isOpen ? "fa-solid fa-bars" : "fa-solid fa-xmark";
    }
  });

  /* Close on link click */
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      const icon = hamburger.querySelector("i");
      if (icon) icon.className = "fa-solid fa-bars";
    });
  });
}

/* Header shadow on scroll */
const header = document.querySelector(".site-header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });
}

/* ================================================================== */
/*  Scroll-triggered animations                                        */
/* ================================================================== */
function initScrollAnimations() {
  const els = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right");
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach((el) => observer.observe(el));
}

/* ================================================================== */
/*  Gallery Data — every image from every folder                       */
/* ================================================================== */
const galleryData = {
  Bedframe: [
    "00a0e1a8fa72668988248594162a91a3.jpg",
    "074f0228786ef402198a55ab721f1faa.jpg",
    "1b86365b594d7d97d9d65f99519253d6.jpg",
    "1baa925dd50540db80289d769b561084.jpg",
    "1cdae15da9b0a59b77675a4455ab757e.jpg",
    "1d1c58138bb7e7f8dc0acba9e84829ba.jpg",
    "20c013b074108167840e74bed1d947da.jpg",
    "21f784520607592949aeab62ffb8c304.jpg",
    "2af4e4edd5ed3e3ff419dbee485c933d.jpg",
    "359599f8ad594529c5084629c58a0f72.jpg",
    "39cb652800850f8a57989e07493d81ca.jpg",
    "4c8e4db13ffbf4b2a8ef93d3aa43718a.jpg",
    "52bc7df529e9ee2f18619b6a8e8af089.jpg",
    "59a1edad00685dccd37952e6b74d69ba.jpg",
    "5b19dcf97165faf6c7b97df3a7294f8a.jpg",
    "7369c9d1eacf6ccddd448656ce320e6b.jpg",
    "7816ff3ec6cb381694a2ae915a5d8165.jpg",
    "7909bd78a69b318ff0d644585617b059.jpg",
    "792603a7575f79a2eb6a23a338a5ab23.jpg",
    "8c50c9e1547208b99ce6ee7872341170.jpg",
    "8d1daf5d0a872cd3d1b612f4fda72d9e.jpg",
    "930b7126cc3cf191b9645332ba15e73e.jpg",
    "979c14734a5eb8adf1c5dcd963bb8561.jpg",
    "a5349d1dccbc6d5ecd349351263a1769.jpg",
    "b10c63b419e3dc5d2dc74d6ed4d8890c.jpg",
    "b5af332749fbc0298a1f00d17c044f59.jpg",
    "b6a68bc249ae48554c02b32de5339579.jpg",
    "b8b292735abc7ccc9ff74a7825842de6.jpg",
    "bc83bf3789cc600b872531ca52e270fe.jpg",
    "bfb16a14802388ff1e625a7ff4c6eb21.jpg",
    "ca78e5fc2c14b8b4731362922ab94db0.jpg",
    "caa6becf520831d6f65cab1ef157e5a8.jpg",
    "cc1a0a28cac31b5f12421cc351e5426f.jpg",
    "dc6b39db31ee0b6b1d853750953c77f4.jpg",
    "e8451673cb3dadf176a65827369ea50b.jpg",
    "eea4b5bf26b378216f067973127713e5.jpg",
    "f109c8e551ec8078e9a27060b268f45d.jpg",
    "f1304a674cc9b28ce06aab5980fd15f1.jpg",
    "fc1e53200eec089f80a36755c5ba6ba6.jpg",
    "ff75883d3943d24a01ecd20f1d7a8c2f.jpg"
  ],
  Chair: [
    "0389a95af23d7e24c8a891d662d74c56.jpg",
    "0575b4f4b0d39e57d0596e423da1dc9e.jpg",
    "0f350699cc672ec84b7d99ac31a3cf33.jpg",
    "15f928836d288032004ab6323f012b21.jpg",
    "19f6a0d3adc68dd6278bafd8880e0e6d.jpg",
    "1a11c2734fbc205b078385b87f0e7566.jpg",
    "200f58cc4b62d1ebecffc139e00c02e5.jpg",
    "22b215706a79411b74e2d323a92bfc88.jpg",
    "2419856c5c1c7d78bd39a4ccd2b9696a.jpg",
    "261c27cd5b9efb19a0fa1fd90213ac30.jpg",
    "2863a6ff3e4ea820f3d995f06b95ed64.jpg",
    "2c479c315cd8b075e358254e4a573660.jpg",
    "32f59f8ef748e60bcac384a2bc7223ca.jpg",
    "4a3efacff779fb65553d8d55c0ad480a.jpg",
    "4c547ed1812974ca0b453eaa63bfaf6f.jpg",
    "5b3a0919ca8d5965f7de6625a281be36.jpg",
    "69c016e5f38aed9d86c6801b6bc2a999.jpg",
    "6a1f0f0c298e8d5efe9a29617028b73a.jpg",
    "72587d25137550b7e04ab1eb9b1773b7.jpg",
    "7442473f385ec23adccd2b0148d32614.jpg",
    "7ebc20e33ea826a038d56722043478ae.jpg",
    "7ecc732dc985af17e2453aeb6f5e3196.jpg",
    "8630dab60707334bebd81d67ecf56466.jpg",
    "a72dde19353d76544d071b4596592d6d.jpg",
    "b02d8c49b5f94e71a5c5182146e07814.jpg",
    "b39a279e637ddbaca573e013116d674c.jpg",
    "b5e4fcfae3bb2c0a198c8900b4432037.jpg",
    "baa70fe3dfc3fbab3bff4cb59f4116ce.jpg",
    "bd53cbca139118c7786b49ab6262e9b6.jpg",
    "bde9cfdf7c9c26f29a63a3ee6d5c1c79.jpg",
    "cc5320060ae359dd97eff9427b37374f.jpg",
    "cf949d2f69e3c4b74e3529fb86ae8486.jpg",
    "d0c3084357d84761e0a739390a2b4cac.jpg",
    "d50508886e98cb1b004cec2865a2a3c1.jpg",
    "d9fd0f34152e66c0e82155744ddf337d.jpg",
    "dbbaca1351ba0091b263ad89b2d9f949.jpg",
    "f177c5954b2cf9fbb981d8f744d85fc1.jpg",
    "f28e18dc339cff118264f54a41f7b0b2.jpg",
    "f4030fcd992e02a08947182d9cd1cfd6.jpg",
    "fbcebc1287ad318c82cca993a291ca3e.jpg"
  ],
  Kitchen: [
    "07c2342431c52d51d4b7a1200409b8d1.jpg","0e713f6aad9e9d5133c63abb2c0d63b7.jpg","10bf1a88d4e20d8fd44c4f9e3c16103e.jpg","1482b81fe0581fecd454548533b9fe63.jpg","14b1e0326fa2bb1a4783cea930ac90c7.jpg","161921c2ec0c21a57b843e3c662bfbbe.jpg","16b5c43818efc80b36a800522e50a73e.jpg","1d3e88ffe21943d7f391b21509c79fa3.jpg","2f494c6c6377122c0576d737c54eecc0.jpg","3503e1d0d07f952157d87dc26e38336f.jpg","3750f27757a5c759b1577dfd7bccd383.jpg","457e46260e8d72cc8e53522429a20da2.jpg","4acee7de57bf76c00f1de071a93c2b4c.jpg","59b8081edd6f88a6f77d442909974438.jpg","5eeb153b226c2eb73a13743c6a17c969.jpg","62114a6fc20e0831edeb64b848ae362d.jpg","6f079982e526592ef1ac434cf483d73d.jpg","7a9b29040b26af0326fd930adf31905b.jpg","80efdac75fae38f0c7b9a9e23294e652.jpg","95070dfd541ee4692f3c19d28ab694d6.jpg","a1c03ff413f3810fa2a77220b87adea3.jpg","ae7ab516433c59179e029362d434a7db.jpg","b1599b7985b5329325ed1df3fc3e3506.jpg","b1dbf6fba78c70c2b81b58dde9f0bfc4.jpg","b5d530ca8eb42be1e6e2488808ff95f4.jpg","ded5cfee141c8ff001dc768704288bcb.jpg","eddf9304bc4f5560020e1809b18e6ff0.jpg","f27f61916f7db8be69f64c0e8110eeef.jpg","f6f66efbc112e26b43b7d01e7ab3e37e.jpg","fa1c4330992c60097e43c2663ccd0c20.jpg","fcf1d2d0ab58111a2861033ac4380010.jpg"
  ],
  Office: [
    "1dffbba31164a52569f8e0e0bf8c0447.jpg","2029213676f2070e3d671564a7bf5b3c.jpg","27551b08ffe207ffa14aff70a5bd5aa2.jpg","3b569c5960279ac553e5fa54109d63df.jpg","527f7c691848b06d7d023c283ee979a4.jpg","59b6c79ff493c219832478b53cc12826.jpg","5a333ee186936f65d213c37c486c268f.jpg","5b77125b18ee281307881aa7e75aa546.jpg","63d88771f824f76c3cf29d04347ead6a.jpg","66156e1666124b3aedd51b1443bf08b1.jpg","790e20e423278aa6fab98fb81fc3d1b6.jpg","7ad4fd7b1de7b95ff423d137ad303d07.jpg","845b0cccab795cd765334cfc3e096341.jpg","8983e75eecf3ccad701fea847e763a4a.jpg","8b65ef8d6fee8aef8112bd122c2096d6.jpg","92577527f71605ebfc19d06d451b000f.jpg","97dc7d74c8ad3a42dbdb721a20a92d01.jpg","b6794aa8b7fa1bba3ee2b754732a379e.jpg","bef8ff247c467ffa810eef75b628cd16.jpg","d1209e64aa773ad4dc3a3e3d7efdcd5e.jpg","d89c056ac92413cf9c74d89b0db54e6d.jpg","da4117cbfddb37d59058240c9b115989.jpg","e904596c1c0b82457192e142ea3486c8.jpg","e99b89fb1a5e2e4493bbc6be97c1ff85.jpg"
  ],
  Bathroom: [
    "13c08703497c1e5b0acf17f5de0ae71b.jpg","15013f8d99d9e113a282a4c049bb5ebb.jpg","3763de2251149dc1629d6a2d38356e22.jpg","5aa4d690d3d95f5eb7d0693197833cbd.jpg","7ac469f07172fa771ebf0843549e1b95.jpg","8558c80bd4cf713bce4b0646307fe861.jpg","a0fbb1caa78a24a68ed7b56256ce1592.jpg","c5be443929871cf312670ed8c1f78fd3.jpg","d7f29e4ae9f7a98234b6175e56275602.jpg"
  ],
  "Bar Space": [
    "073232419641f801f5ee26293d01c020.jpg","09f47eefb31ad4e775a1b07eaeae0236.jpg","0db9fd74858d48956bb79a7f226be91a.jpg","0eac9751d2ec22ecc44c12a6d143e684.jpg","19777b63752cf191c516f48e6fd860f7.jpg","37961de2672e3118f9195f2ae60cc05f.jpg","3a5b795c202a630d397a3ac0270aba92.jpg","43c8883a9cb784692f0012c77867c054.jpg","5e6115e465eb77a7f2880ac7df31d72a.jpg","630571f161a1abcadcd4f8a494594640.jpg","6bd0be237951dc6f541fd10e5cf78854.jpg","6f15b45b541d5289a983ef603e38e702.jpg","712559b7175bd375ad2b10b84083dabc.jpg","76e5419769b5700f8edd0b7e40ef06a0.jpg","800be75fc3a09c6a38d2462b90e8bc4c.jpg","828c935d7e792b597f7d729544b878b5.jpg","94603bdbeae82463283c79d44336fc83.jpg","9669630057efabad227d4584820a4438.jpg","9ce2e3ee86afce86a197fa4864779924.jpg","9d0a62bda5ba5e4641eefb7f330beeff.jpg","afb95de68237ed9f4cc287662441d405.jpg","b04c12e826e3c9731816009e2851a2d4.jpg","b2a7e4ce32353c33ac396dfff855b6b6.jpg","b702a1b98f15e64aff82d7c57e6c380a.jpg","b87eff72f203020c6c0ffbf007d0279b.jpg","bdf90ecedd244958ba6a22cf909268dc.jpg","c3d417ad9cdc45d674b2f21f9f37656d.jpg","ca337098928df427cfd65a9af178ec99.jpg","e5818b4bb0bf6f9b8a60b2e2cd199d80.jpg","e6a8882748026e60f95fcb6ec66713c2.jpg"
  ],
  Mirror: [
    "0e713f6aad9e9d5133c63abb2c0d63b7.jpg","1846598fd1a10fb162ec269aa154c872.jpg","1c929faffaae8b78be70462b7c81e4cf.jpg","2d3f456b30a26e7a07fea5ff3eca8645.jpg","3fa0c9dba430bb9e76fa9ed90d879576.jpg","40200aade6932a8939f1a6a89fc36f29.jpg","41eb9341f315e2acca5ba766df606fbd.jpg","4a430f7a967faa994b42d2534485c865.jpg","4e6414481f90320bbe9fb1b9a90d1601.jpg","578cff7869a75399c0071fb66b420ee8.jpg","61df5de66e4ed9c06e5cf46bc1546aac.jpg","6971a102afa3e62422fab1cac6759fd7.jpg","79537696330ff3bbd24d741a15dfd390.jpg","84e12f75dc176b7477d4f50a7de6e1aa.jpg","9a21eb8974e28fe7e22a6ee5c1d01bcb.jpg","a16a57c62673291fdaffeaba229122cc.jpg","b822dafa0a5d3c1f0eec0834e6ea4709.jpg","d1758c236985885d7d2043718f70a3a4.jpg","e1358a9b10fc5b25d5523befaf80b2a4.jpg","e46dd9613183ef4f6b1ec25e4d159a5a.jpg","e88a589bbb35ce33698f38642bc8dfa9.jpg","f0ceb24da0c0e1002699df8fb9b3e0db.jpg","f35b56ed0e5f186c544787d329ff007f.jpg","f3618e0a6d499843472e51fe84a47c80.jpg"
  ],
  Wardrobe: [
    "191e16f4c9c65157e6273b23fa5200af.jpg","5177cab98aee9ff5b28647791e5c3459.jpg","7c9ff6ec7084b48bff2d736656ac1158.jpg","91394e832dfc29a9e9e347b3bb568d39.jpg","9b4a684101cec152e621f3e1244a83b2.jpg","9e98cba7d566f0cfacafc4df43309880.jpg","ac38ac74d7d223176308aff872b6db0a.jpg","aec20b3608113ec5c97f611e868f64c4.jpg","c4a935b2a502bb1bae5bcf43c538557c.jpg","cdbb943ca3c0956c98f230444abb207e.jpg","e914b01b7611051f0fa3fd4a0ae8ade4.jpg"
  ],
  "TV Console": [
    "1f1633f2c68884af07be21cf43c5fb36.jpg","2552062ba3bca4f8b7bc751be5fffec3.jpg","3e8717706befe67ecf30f9dad9998f98.jpg","53e3a133b5d27542a55c14d190219b11.jpg","54df97e5521a81673c111cf7662f72f7.jpg","55c47de4da8f11b1049c7a0f86dab743.jpg","5ce29b2ad1c2dc26dde42897ac0d9894.jpg","605a435e5f1b633162b2bf9429790c2b.jpg","6378724c24a8ed62fdf724b5ed65c7a1.jpg","66780b0d4642ff2bdae30dc3f5519c69.jpg","6b14025545f733fde88ef93601b7895c.jpg","7782c7a92d0081de31f4888056c7bdc6.jpg","799b4778426dba26fb5650d86026daed.jpg","8b199c49cb1eabaf96a7ddd51976d2f0.jpg","adf504462df6ebee02e3dc3a805eb35f.jpg","b0f69c36d56e3a316012fa7d2d2d0fc0.jpg","f79f4502b511b10c170457a87e64222a.jpg"
  ],
  "Home Appliance": [
    "./home-appliance.jpeg"
  ],
  "Solar": [
    "./solar.jpeg"
  ]
};

/* Folder mapping */
const folderMap = {
  Bedframe: "Bedframe Design", Chair: "Chair Design", Kitchen: "Kitchen Design",
  Office: "Office Design", Bathroom: "Toilet Design", "Bar Space": "Bar Space Design",
  Mirror: "Miror Design", Wardrobe: "Waldrop", "TV Console": "Tv Console",
  "Home Appliance": "", "Solar": ""
};

const labelMap = {
  Bedframe: "Bedroom", Chair: "Chair", Kitchen: "Kitchen", Office: "Office",
  Bathroom: "Bathroom", "Bar Space": "Bar Space", Mirror: "Mirror",
  Wardrobe: "Wardrobe", "TV Console": "TV Console",
  "Home Appliance": "Home Appliance", "Solar": "Solar"
};

/* ================================================================== */
/*  Lightbox                                                           */
/* ================================================================== */
let lightboxImages = [];
let lightboxIndex  = 0;

function renderGallery(categoryKey) {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const images = galleryData[categoryKey] || [];
  const folder = folderMap[categoryKey] || `${categoryKey} Design`;
  const label  = labelMap[categoryKey]  || categoryKey;

  /* ---- Homepage preview cap ----
     index.html has data-preview-limit="6" on the grid element.
     gallery.html does NOT, so it always shows every image. */
  const limitAttr = grid.getAttribute("data-preview-limit");
  const previewLimit = limitAttr ? parseInt(limitAttr, 10) : 0;
  const visibleImages = previewLimit > 0 ? images.slice(0, previewLimit) : images;

  lightboxImages = images.map((f) => f.startsWith("./") ? f : encodeURI(`Office_Design_images/${folder}/${f}`));

  visibleImages.forEach((filename, idx) => {
    const card = document.createElement("article");
    card.className = "gallery-card fade-in";
    if (idx < 12) card.style.transitionDelay = `${Math.min(idx * 60, 400)}ms`;

    const wrapper = document.createElement("div");
    wrapper.className = "gallery-img-wrapper";

    const img = document.createElement("img");
    img.alt      = `${label} design by Rasluck Furniture`;
    img.src      = filename.startsWith("./") ? filename : encodeURI(`Office_Design_images/${folder}/${filename}`);
    img.loading  = "lazy";
    img.decoding = "async";
    wrapper.appendChild(img);

    const overlay = document.createElement("div");
    overlay.className = "gallery-overlay";
    overlay.innerHTML = '<i class="fa-solid fa-expand"></i>';
    wrapper.appendChild(overlay);

    card.appendChild(wrapper);

    const content = document.createElement("div");
    content.className = "gallery-card-content";
    content.innerHTML = `<p>${label} Design</p>`;
    card.appendChild(content);

    card.addEventListener("click", () => openLightbox(idx));
    card.style.cursor = "pointer";
    grid.appendChild(card);
  });

  /* Show "View Full Gallery" button when images are capped */
  const viewAllBtn = document.getElementById("galleryViewAll");
  if (viewAllBtn) {
    viewAllBtn.style.display = previewLimit > 0 ? "" : "none";
  }

  /* Trigger animations */
  requestAnimationFrame(() => {
    grid.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
  });
}

function setActiveFilter(button) {
  document.querySelectorAll(".gallery-filter").forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function openLightbox(index) {
  lightboxIndex = index;
  const modal = document.getElementById("lightboxModal");
  if (!modal || !lightboxImages.length) return;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  updateLightboxImage();
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function updateLightboxImage() {
  const img     = document.getElementById("lightboxImg");
  const counter = document.getElementById("lightboxCounter");
  if (!img) return;
  img.src = lightboxImages[lightboxIndex];
  img.alt = `Full-size view — image ${lightboxIndex + 1} of ${lightboxImages.length}`;
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightboxImage();
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightboxImage();
}

/* ================================================================== */
/*  Nav Highlighting                                                   */
/* ================================================================== */
function highlightCurrentNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a:not(.mobile-cta .btn)").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const name = href.split("/").pop();
    if (name === path || (name === "index.html" && (path === "" || path === "index.html"))) {
      a.classList.add("active");
    }
  });
}

/* ================================================================== */
/*  Init                                                               */
/* ================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  highlightCurrentNav();

  /* Gallery filters */
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveFilter(btn);
      renderGallery(btn.dataset.filter);
    });
  });

  /* Default gallery load */
  if (document.getElementById("galleryGrid")) {
    const first = document.querySelector(".gallery-filter.active");
    renderGallery(first ? first.dataset.filter : "Bedframe");
  }

  /* Year */
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* Lightbox events */
  const lbClose = document.getElementById("lightboxClose");
  const lbPrev  = document.getElementById("lightboxPrev");
  const lbNext  = document.getElementById("lightboxNext");
  const lbModal = document.getElementById("lightboxModal");

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev)  lbPrev.addEventListener("click", lightboxPrev);
  if (lbNext)  lbNext.addEventListener("click", lightboxNext);

  if (lbModal) {
    lbModal.addEventListener("click", (e) => {
      if (e.target === lbModal || e.target.classList.contains("lightbox-backdrop")) closeLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lbModal || lbModal.classList.contains("hidden")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowLeft")  lightboxPrev();
    if (e.key === "ArrowRight") lightboxNext();
  });

  /* Swipe */
  let touchX = 0;
  if (lbModal) {
    lbModal.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].screenX; }, { passive: true });
    lbModal.addEventListener("touchend", (e) => {
      const d = e.changedTouches[0].screenX - touchX;
      if (Math.abs(d) > 50) d > 0 ? lightboxPrev() : lightboxNext();
    }, { passive: true });
  }
});
