const nav_btn = document.querySelector('.nav_toggle');
const nav_close = document.querySelector('.nav_close');
const nav_menu = document.querySelector('.nav_menu');
const overlay = document.querySelector('.overlay');
nav_btn.onclick = () => {
    nav_menu.classList.add('active');
    overlay.classList.add('active');
}

nav_close.onclick = () => {
    nav_menu.classList.remove('active');
    overlay.classList.remove('active');
}


  window.addEventListener("scroll", function() {
    let navArea = document.querySelector(".header");
    
    if (window.pageYOffset > 0) {
    navArea.classList.add("is-sticky");
    } else {
    navArea.classList.remove("is-sticky");
    }
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

  sr.reveal('.home_content,.principe_content,.matiere,.exercie_container,.banner_title,.nous_content,.footer,.banner, .about_banner, .expert, .langue_container',{}); 
  sr.reveal('.home_banner,.nous_banner,.banner_wrapper,.principe_img, .about_title, .section_subtitle, .section_title, .about_content, .skills_img',{delay: 400}); 
  sr.reveal('.expert_card,.matiere_card,.lesson_item,.box-card, .nous_banner .img-holder',{ interval: 200}); 
  sr.reveal(`.pedagogique_banner, .caractere_content`,{origin: 'left'})
  sr.reveal(`.pedagogique_content, .caractere_banner`,{origin: 'right'})   
  sr.reveal('.skills_data, .niveaux_card,.pdf_container,.pdf_title,.program_card, .contact_field, .newsletter_form, iframe',{interval: 200}); 

  $(".default_option").click(function(){
    $(this).parent().toggleClass("active");
  })
  
  $(".select_ul li").click(function(){
    var currentele = $(this).html();
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
  })


  var swiper = new Swiper(".exercie_container", {
    slidesPerView: 1,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper_next",
      prevEl: ".swiper_prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    loop: true,
  });

