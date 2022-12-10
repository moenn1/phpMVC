$(function() {
  $(".fr").click(function() {
    $('html').css('font-family', 'Gilroy, sans-serif');
    $(".nav_list ul .nav_link_down").css('font-weight', '500').css('font-size','14px');
    $('.nav_list ul li a').hover(function(){
        $(this).css('transform','translateX(10px)');
      },function(){
        $(this).css('transform','translateX(0px)');
      }
    )

            //header
            $(".nav_list .nav_link").eq(0).html("Préscolaire <i class='bx bx-chevron-down'></i>");
            $(".nav_list .nav_link").eq(1).html("Primaire <i class='bx bx-chevron-down'></i>");
            $(".nav_list .nav_link").eq(2).html("Collége <i class='bx bx-chevron-down'></i>");
            $(".nav_list .nav_link").eq(3).html("Lycée <i class='bx bx-chevron-down'></i>");
            $(".nav_list .nav_link").eq(4).text("Qui Somme Nous?");
            $(".nav_list ul .nav_link_down").eq(0).html("Préliminaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list ul .nav_link_down").eq(1).html("Préparatoire <i class='bx bx-right-arrow-alt' ></i>"); 
      
            $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(0).html("Premiére Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(1).html("Deuxiéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(2).html("Troisiéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(3).html("Quatriéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(4).html("Cinquiéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
           
            $(".nav_list .college_down .nav_link_down").eq(0).html("Moyenne De La Premiére Année <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list .college_down .nav_link_down").eq(1).html("Moyenne De La Deuxiéme Année <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list .college_down .nav_link_down").eq(2).html("Moyenne De La Troisiéme Année <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list .college_down .nav_link_down").eq(3).html("Moyenne De La Quatriéme Année <i class='bx bx-right-arrow-alt' ></i>");
            
            $(".nav_list .lycee_drop .nav_link_down").eq(0).html("Premiére Année Du Secondaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list .lycee_drop .nav_link_down").eq(1).html("Deuxiéme Année Du Secondaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".nav_list .lycee_drop .nav_link_down").eq(2).html("Troisiéme Année Du Secondaire <i class='bx bx-right-arrow-alt' ></i>");
            
            // HOME SECTION
            $('.home_banner').css('order', '1');
            $('.home_shape_1').css('width', '195px');

            if($(window).width() > 767){
              $('.home_container').css('grid-template-columns', '.95fr .8fr')
            }
            $('.home_container').css('align-items', 'flex-start');
            $('.home_content').css('text-align', 'left');
            $('.home_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
            $(".home_content .section_subtitle").text("100% cours en ligne");
            $(".home_content  .home_title").html("rendons <br><span class='span'>l'Apprentissage</span>amusant et l'espace<br><span class='span'>d'Enseignement</span> ");
            $(".home_content  .home_text").html("obtenir un cours de qualité gràce en ligne");
            $(".home_content  .btn").html("Commencer");
      
            // EXPERT
            $(".expert_card:nth-child(1) .span").text('Experience');
            $(".expert_card:nth-child(1) .expert_title").text('+24 Ans');
            $(".expert_card:nth-child(2) .span").text('Matiére');
            $(".expert_card:nth-child(3) .span").text('Expert');
            $(".expert_card:nth-child(4) .span").text('étudiant Actif');
            
            // NiVEAU
            $('.niveaux_link').hover(function(){
              $(this).css('transform','translateX(10px)');
            },function(){
              $(this).css('transform','translateX(0px)');
            }
          )
            $(".niveaux .section_subtitle").text('Notre Niveaux Scolaire');
            $(".niveaux .section_title").html('trouver votre <span class="span">niveaux </span>');
            $(".niveaux_container .one .card_title").text('Préscolaire');
            $(".niveaux_container .two .card_title").text('Primaire');
            $(".niveaux_container .three .card_title").text('Collége');
            $(".niveaux_container .four .card_title").text('Lycée');
            
            $(".niveaux_container .1  .niveaux_list .niveaux_link").eq(0).html("Préliminaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .1  .niveaux_list .niveaux_link").eq(1).html("Préparatoire <i class='bx bx-right-arrow-alt' ></i>");
            $('.niveaux_container .1 .niveaux_footer .niveaux_title').html("ST.SUJETS PRIMAIRE <i class='bx bx-right-arrow-alt' ></i>");

            $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(0).html("Premiére Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(1).html("Deuxiéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(2).html("Troisiéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(3).html("Quatriéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(4).html("Cinquiéme Année Du Primaire <i class='bx bx-right-arrow-alt' ></i>");
            $('.niveaux_container .2 .niveaux_footer .niveaux_title').html("ST.SUJETS PRIMAIRE <i class='bx bx-right-arrow-alt' ></i>");

            $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(0).html("Moyenne De La Premiére Année <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(1).html("Moyenne De La Deuxiéme Année <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(2).html("Moyenne De La Troisiéme Année <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(3).html("Moyenne De La Quatriéme Année <i class='bx bx-right-arrow-alt' ></i>");
            $('.niveaux_container .3 .niveaux_footer .niveaux_title').html("THÉME ET SOLUTIONS S.A.L <i class='bx bx-right-arrow-alt' ></i>");

            $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(0).html("Premiére Année Du Secondaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(1).html("Deuxiéme Année Du Secondaire <i class='bx bx-right-arrow-alt' ></i>");
            $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(2).html("Troisiéme Année Du Secondaire <i class='bx bx-right-arrow-alt' ></i>");
            $('.niveaux_container .4 .niveaux_footer .niveaux_title').html("THÉME ET SOLUTIONS S.A.L <i class='bx bx-right-arrow-alt' ></i>");

            // About
            $('.about_container').css('grid-template-columns','.9fr 1fr').css('gap', '2rem').css('align-item','flex-start');
            $('.about_content').css('order', '1').css('text-align','left').css('max-width', '40ch');
            $('.about_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
            $(".about_content .section_subtitle").text('qui somme nous?');
            $(".about_content .section_title").html("fondation d'éducation privée  <span class='span'>New Horizon</span>");
            $(".about_content .section_text").text("L'école nouveaux horizons est un édifice pédagogique pédagogique qui a récemment émergé dans le monde des établissements privés, mais cet édifice n'est pas le fruit d'un moment actuel, mais plutôt une expérience dans le domaine de l'éducation qui a dépassé 20 ans sous la forme d'un école de langues sous divers noms, pour s'installer en 2015 sous le nom de Dawah.");
            $('.about_content .btn').text('Lire La suite');
            
            // PROGRAM
            $('.program .section_subtitle').text('notre program');
            $(".program .section_title").html('touver un <span class="span">program</span> online');
            $(".program .one .card_title").text('Traitement et suivi psychologique');
            $(".program .two .card_title").text('camps de vacances');
            $(".program .three .card_title").text('Cours et soutien');
            $(".program .four .card_title").text('Voyages et ateliers');
            
            // PRINCIPE
            $('.principe_content').css('text-align', 'left');
            $('.principe_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
            $('.principe_list li').css('justify-content', 'unset');
            $('.principe .section_subtitle').text('nos principes');
            $(".principe .section_title").html('uel est le contenu de notre mission<span class="span">éducative</span>?');
            $('.principe .section_text').text("Recréer la joie de l'éducation, en élevant un individu indépendant lié à sa communauté, avec un haut niveau de connaissances, en interaction avec sa communauté, réconcilié avec lui-même et ses valeurs, ouvert sur le monde et ouvert à l'autre, avec des compétences qui élèvent lui et son entourage à des niveaux supérieurs, et ceci en utilisant les programmes les plus récents et les plus efficaces.");
            $('.principe_list .principe_card .span').eq(0).text('apprentissage');
            $('.principe_list .principe_card .span').eq(1).text('Mise à niveau');
            $('.principe_list .principe_card .span').eq(2).text('harmonie');
            $('.principe_list .principe_card .span').eq(3).text('Coopérer');
            $('.principe_list .principe_card .span').eq(4).text('Excellence');
            $('.principe_list .principe_card .span').eq(5).text('la discipline');
            $('.principe .btn').text('Lire La Suite');
            
            // LANGUE
            $('.langue_content').css('text-align', 'left');
            $('.langue_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
            $(".langues .section_title").html('Formation Des <br>Langues <span class="span">étrangére</span>');
            $(".langues .section_text").html('Dans notre établissement, nous enseignons les langues étrangères selon un cursus professionnel et des enseignements orientés vers la formation professionnelle');
            $('.langues .btn').text('Lire La Suite');
            
            // NEWSLETTER
            $('.news_content').css('order', -1);
            $('.news_content .section_title').css('text-align', 'left');
            $('.newletter .section_title').html('Abonnez-Vous à <br>notre <span class="span">newsletter</span>');
            $('.newletter .btn').text('Savoire Plus');
            $('.news_field').eq(0).attr("placeholder", 'Entre Votre Email').val('');
            
            // Contact
            $('.contact_content').css('text-align', 'left').css('order', -1);
            $('.contact .section_subtitle').text('envoyer le Message');
            $('.contact .section_title').html('laissez-nous un <span class="span">message</span> et <span class="span">contactez-nous</span>');
            $('.contact_field').eq(0).attr("placeholder", 'Nom Et Prénom').val('');
            $('.contact .btn').text('envoyer le Message');
            
            // BANNER
            $('.banner_title').text('Qui Somme Nous?');
            $('.banner_links').eq(0).text('Accueil');
            $('.banner_links').eq(1).text('Qui Somme Nous?');

            // QUI SOMME NOUS
            $('.nous_content .section_subtitle').text('Qui nous sommes?');
            $('.nous_content .section_title').html("fondation d'éducation privée <span class='span'>New Horizon</span>");
            $('.nous_content .section_text').html("L'Ecole Nouveaux Horizons est un bâtiment d'enseignement pédagogique qui a récemment émergé dans le monde des établissements privés, mais ce bâtiment n'est pas le fruit d'un moment actuel, mais plutôt une expérience dans le domaine de l'éducation qui a dépassé 20 ans sous la forme de une école de langues sous divers noms, pour s'installer en 2015 sous le nom de Dawah.");
          
            // PEDGOGIQUE
            $('.pedagogique_content').css('text-align', 'left');
            $('.pedagogique_content .section_title').html("le processus pédagogique à l'école <span class='span'>Dawat New Horizons</span>");
            $('.pedagogique_content .section_text').eq(0).html("Le processus éducatif à l'école 'dawate nouveaux horizons' est basé sur un cadre éducatif qui part de l'administration de l'école et avec une équipe de travail intégrée et qualifiée dans les aspects éducatifs et psychologiques prenant soin du psychisme de l'élève. l'élève, l'éduquer et découvrir ses talents, ainsi que travailler à communiquer avec les parents des élèves pour les impliquer dans le processus éducatif d'apprendre à enseigner.")
            $('.pedagogique_content .section_text').eq(1).html("L'école chapeaute l'enseignement préparatoire, primaire, moyen et secondaire des garçons et des filles, et cherche à contribuer à l'amélioration du niveau d'enseignement et au relèvement du plafond de connaissances de l'apprenant afin de suivre le rythme de son temps.")
            
            // CARACTERE
            $('.caractere_content').css('text-align', 'left');
            $('.caratere_list .caratere_item').css('justify-content', 'initial')
            $('.caractere_content .section_title').eq(0).html('<span class="span">Caractéristiques</span> de notre école');
            $('.caractere_content .section_title').eq(1).html('<span class="span">localisation</span> de notre école');
            $('.caratere_list .caratere_item').eq(0).html("<i class='bx bxs-check-square' ></i> <span class='span'>Ambiance pédagogique confortable</span> ")
            $('.caratere_list .caratere_item').eq(1).html("<i class='bx bxs-check-square' ></i> <span class='span'>Suivi régulier du parcours scolaire de l'étudiant</span> ")
            $('.caratere_list .caratere_item').eq(2).html("<i class='bx bxs-check-square' ></i> <span class='span'>Clubs éducatifs</span> ")
            $('.caratere_list .caratere_item').eq(3).html("<i class='bx bxs-check-square' ></i> <span class='span'>Ateliers d'enseignement des langues étrangères</span> ")
            $('.caractere_content .section_text').text("Notre établissement est situé dans un endroit calme à l'écart de l'agitation de la ville et propice à la réussite scolaire et cognitive et facilite la capacité des parents à y accéder.L'établissement est situé dans l'ancien quartier Marjah n°03, Rouiba, Alger")
          
          
            // MATIER
            $('.matiere_card').css('text-align','right').css('justify-content', 'initial');
            $('.matiere_card .card_icon').css('order', '-1');
            $('.matiere_title').text("Explorer Le Matériel D'étude Préparatoire Dans L'éducation Lycée");
            $('.matier_link').eq(0).text("l'éducation islamique");
            $('.matier_link').eq(1).text("Langue Arabe");
            $('.matier_link').eq(2).text("MATHÉMATIQUE");
            $('.matier_link').eq(3).text("scientifique");
            $('.matier_link').eq(4).text("technologie");
            $('.matier_link').eq(5).text("éducation du sport");
            $('.matier_link').eq(6).text("éducation civique");
            $('.matier_link').eq(7).text("physique");
            $('.matier_link').eq(8).text("Histoire et géographie");
            $('.matier_link').eq(9).text("Français");
            $('.matier_link').eq(10).text("English");
            $('.matier_link').eq(11).text("L'Informatique");
            $('.matier_link').eq(12).text("L'Eduation Music");
          
            // LESSONS
            $('.lesson_card').css('text-align', 'left');  
            $('.lesson_item').css('align-items','flex-end');
            $('.lesson_icon').css('order', 1).css('padding','8px 15px');
            $('.lesson_icon a').html("<i class='bx bx-right-arrow-alt' ></i>");
            $('.lesson_title').eq(0).text('Lessons and notes');
            $('.lesson_title').eq(1).text('Livres pédagogiques pour les enfants de 4 à 6 ans et les élèves de la prépa');
            $('.lessont_item_text a').eq(0).text("Télécharger des manuels pour la première année, primaire, deuxième génération");
            $('.lessont_item_text a').eq(1).text("Plans annuels pour l'année 1 primaire deuxième génération");
            $('.lessont_item_text a').eq(2).text("Programme de deuxième génération pour l'enseignement primaire");
            $('.lessont_item_text a').eq(3).text("Réalisations tribales pour les élèves de première année du primaire");
            $('.lessont_item_text a').eq(4).text("Toutes les notes pour l'année 1 primaire 2e génération");
            $('.lessont_item_text a').eq(5).text("Livre d'archives du niveau primaire");
            $('.lessont_item_text a').eq(6).text("Manuel du Professeur Mathématiques et Enseignement Scientifique 1 Primaire 2ème Génération");
            $('.lessont_item_text a').eq(7).text("Document accompagnant les programmes de l'enseignement primaire de deuxième génération");

            $('.lessont_item_text a').eq(8).text("Télécharger des manuels pour la première année, primaire, deuxième génération");
            $('.lessont_item_text a').eq(9).text("Plans annuels pour l'année 1 primaire deuxième génération");
            $('.lessont_item_text a').eq(10).text("Programme de deuxième génération pour l'enseignement primaire");
            $('.lessont_item_text a').eq(11).text("Réalisations tribales pour les élèves de première année du primaire");
            $('.lessont_item_text a').eq(12).text("Toutes les notes pour l'année 1 primaire 2e génération");
            $('.lessont_item_text a').eq(13).text("Livre d'archives du niveau primaire");
            $('.lessont_item_text a').eq(14).text("Manuel du Professeur Mathématiques et Enseignement Scientifique 1 Primaire 2ème Génération");
            $('.lessont_item_text a').eq(15).text("Document accompagnant les programmes de l'enseignement primaire de deuxième génération");


            // EXERCICE
            $('.box_title').css('text-align','left');
            $('.exercice_title').text('Examens et exercices');
            $('.box_title a').eq(0).text("Formulaires d'examen pour toutes les matières, première année du primaire");
            $('.box_title a').eq(1).text("Mon livre aux examens du semestre 1 primaire 2ème génération");
            $('.box_title a').eq(2).text("Cahier d'activités mathématiques année 1 primaire 2ème génération");

            // PDF
            $('.pdf_title').text("Livre d'archives de niveau primaire");

            // CHAPITRE
            $('.chapitre_content, .chapiter_header').css('text-align', "left");
            $('.chapitre_card.one').css('order','1');
            $('.chapitre_card.three').css('order','3');
            $('.chapitre_item').css('justify-content', "start");
            $('.chapitre_item').hover(function(){
              $(this).css('transform','translateX(10px)');
            },function(){
              $(this).css('transform','translateX(0px)');
            }
            )

            $('.chapitre_title').eq(0).html('semestre 1')
            $('.chapitre_title').eq(1).html('semestre 2')
            $('.chapitre_title').eq(2).html('semestre 3')

            $('.chapitre_list:nth-child(1) .chapitre_subtitle').text('devoirs');
            $('.chapitre_list:nth-child(2) .chapitre_subtitle').text('Examens');

            $('.chapitre_list:nth-child(1) .chapitre_item').eq(0).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(1).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(2).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(3).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(4).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(5).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(6).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(7).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")

            $('.chapitre_list:nth-child(1) .chapitre_item').eq(8).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(9).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(10).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(11).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(12).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(13).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(14).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(15).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")

            $('.chapitre_list:nth-child(1) .chapitre_item').eq(16).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(17).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(18).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(19).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(20).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(21).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(22).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(1) .chapitre_item').eq(23).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")



            $('.chapitre_list:nth-child(2) .chapitre_item').eq(0).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(1).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(2).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(3).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(4).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(5).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(6).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(7).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(8).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 09</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(9).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 10</span> <span class='date'>2015/2016</span>")


            $('.chapitre_list:nth-child(2) .chapitre_item').eq(10).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(11).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(12).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(13).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(14).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(15).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(16).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(17).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(18).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 09</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(19).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 10</span> <span class='date'>2015/2016</span>")

            $('.chapitre_list:nth-child(2) .chapitre_item').eq(20).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(21).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(22).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(23).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(24).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(25).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(26).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(27).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(28).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 09</span> <span class='date'>2015/2016</span>")
            $('.chapitre_list:nth-child(2) .chapitre_item').eq(29).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 10</span> <span class='date'>2015/2016</span>")

            // FOOTER
            $(".footer .section_text").html("Nous croyons qu'il faut faire du monde une meilleure expérience. Excellentes idées de cours et plans de cours pour les étudiants ! ");
            $(".footer .footer_item_title").eq(0).text('Préscolaire');
            $(".footer .footer_item_title").eq(1).text('Primaire');
            $(".footer .footer_item_title").eq(2).text('Collége');
            $(".footer .footer_item_title").eq(3).text('Lycée');
            $(".footer .footer_item_title").eq(4).text('Qui Somme Nous?');
  });
});










//English
$(function() {
  $(".en").click(function() {
    $('html').css('font-family', 'Gilroy, sans-serif');
    $(".nav_list ul .nav_link_down").css('font-weight', '500').css('font-size','14px')
    $('.nav_list ul li a').hover(function(){
      $(this).css('transform','translateX(10px)');
    },function(){
      $(this).css('transform','translateX(0px)');
    }
  )
      //header
      $(".nav_list .nav_link").eq(0).html("Preschool <i class='bx bx-chevron-down'></i>");
      $(".nav_list .nav_link").eq(1).html("Primary <i class='bx bx-chevron-down'></i>");
      $(".nav_list .nav_link").eq(2).html("College <i class='bx bx-chevron-down'></i>");
      $(".nav_list .nav_link").eq(3).html("High School <i class='bx bx-chevron-down'></i>");
      $(".nav_list .nav_link").eq(4).text("Who We Are?");
      
      $(".nav_list ul .nav_link_down").eq(0).html("Preliminary <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list ul .nav_link_down").eq(1).html("Preparatory <i class='bx bx-right-arrow-alt' ></i>");

      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(0).html("First Year Of Primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(1).html("Second Year Of Primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(2).html("Third Year Of Primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(3).html("Fourth year of primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(4).html("Fifth year of primary <i class='bx bx-right-arrow-alt' ></i>");
     
      $(".nav_list .college_down .nav_link_down").eq(0).html("First Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list .college_down .nav_link_down").eq(1).html("Second Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list .college_down .nav_link_down").eq(2).html("Third Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list .college_down .nav_link_down").eq(3).html("Fourth Year Average <i class='bx bx-right-arrow-alt' ></i>");
      
      $(".nav_list .lycee_drop .nav_link_down").eq(0).html("First year of secondary school <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list .lycee_drop .nav_link_down").eq(1).html("Second year of secondary school <i class='bx bx-right-arrow-alt' ></i>");
      $(".nav_list .lycee_drop .nav_link_down").eq(2).html("Third year of secondary school <i class='bx bx-right-arrow-alt' ></i>");
      
      // HOME SECTION
      $('.home_banner').css('order', '1');
      $('.home_container').css('grid-template-columns', '.95fr .8fr');
      $('.home_container').css('align-items', 'flex-start');
      $('.home_content').css('text-align', 'left');
      $('.home_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
      $(".home_content .section_subtitle").text("100% online courses");
      $(".home_content  .home_title").html("Let's Make <br><span class='span'>Learning</span> Fun And Space<br><span class='span'>The Teaching</span>");
      $(".home_content  .home_text").html("get a quality course online");
      $(".home_content  .btn").html("Get Started");

      // EXPERT
      $(".expert_card:nth-child(1) .span").text('Experience');
      $(".expert_card:nth-child(1) .expert_title").text('+24 Year');
      $(".expert_card:nth-child(2) .span").text('Material');
      $(".expert_card:nth-child(3) .span").text('Expert');
      $(".expert_card:nth-child(4) .span").text('Active student');
      
      // NiVEAU
      $('.niveaux_link').hover(function(){
        $(this).css('transform','translateX(10px)');
      },function(){
        $(this).css('transform','translateX(0px)');
      }
    )
      $(".niveaux .section_subtitle").text('Our Grade Levels');
      $(".niveaux .section_title").html('find your <span class="span">levels </span>');
      $(".niveaux_container .one .card_title").text('Preschool');
      $(".niveaux_container .two .card_title").text('Primary');
      $(".niveaux_container .three .card_title").text('College');
      $(".niveaux_container .four .card_title").text('High School');
      
      $(".niveaux_container .1  .niveaux_list .niveaux_link").eq(0).html("Preliminary <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .1  .niveaux_list .niveaux_link").eq(1).html("Preparatory <i class='bx bx-right-arrow-alt' ></i>");
      $('.niveaux_container .1 .niveaux_footer .niveaux_title').html("ST.SUJETS PRIMAIRE <i class='bx bx-right-arrow-alt' ></i>");

      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(0).html("First Year Of Primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(1).html("Second Year Of Primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(2).html("Third Year Of Primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(3).html("Fourth year of primary <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(4).html("Fifth year of primary <i class='bx bx-right-arrow-alt' ></i>");
      $('.niveaux_container .2 .niveaux_footer .niveaux_title').html("ST.SUJETS PRIMAIRE <i class='bx bx-right-arrow-alt' ></i>");

      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(0).html("First Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(1).html("Second Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(2).html("Third Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(3).html("Fourth Year Average <i class='bx bx-right-arrow-alt' ></i>");
      $('.niveaux_container .3 .niveaux_footer .niveaux_title').html("THÉME ET SOLUTIONS S.A.L <i class='bx bx-right-arrow-alt' ></i>");

      $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(0).html("First year of secondary school <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(1).html("Second year of secondary school <i class='bx bx-right-arrow-alt' ></i>");
      $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(2).html("Third year of secondary school <i class='bx bx-right-arrow-alt' ></i>");
      $('.niveaux_container .4 .niveaux_footer .niveaux_title').html("THÉME ET SOLUTIONS S.A.L <i class='bx bx-right-arrow-alt' ></i>");

      // About
      $('.about_container').css('grid-template-columns','.9fr 1fr').css('gap', '2rem').css('align-item','flex-start');
      $('.about_content').css('order', '1').css('text-align','left').css('max-width', '40ch');
      $('.about_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
      $(".about_content .section_subtitle").text('Who We Are?');
      $(".about_content .section_title").html('private education foundation <span class="span">New Horizon</span>');
      $(".about_content .section_text").text('The New Horizons School is a pedagogical educational building that has recently emerged in the world of private establishments, but this building is not the fruit of a current moment, but rather an experience in the field of education that has exceeded 20 years in the form of a language school under various names, to settle in 2015 under the name of Dawah.');
      $('.about_content .btn').text('Read More');
      
      // PROGRAM
      $('.program .section_subtitle').text('our program');
      $(".program .section_title").html('find a <span class="span">program</span> online');
      $(".program .one .card_title").text('Psychological treatment and follow-up');
      $(".program .two .card_title").text('holiday camps');
      $(".program .three .card_title").text('Courses and support');
      $(".program .four .card_title").text('Trips and workshops');
      
      // PRINCIPE
      $('.principe_content').css('text-align', 'left');
      $('.principe_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
      $('.principe_list li').css('justify-content', 'unset')
      $('.principe .section_subtitle').text('our principles');
      $(".principe .section_title").html('What is the content of our <span class="span">educational</span> mission?');
      $('.principe .section_text').text('Recreate the joy of education, raising an independent individual linked to his community, with a high level of knowledge, interacting with his community, reconciled with himself and his values, open to the world and open to others , with skills that elevate him and his entourage to higher levels, and this using the latest and most effective programs.');
      $('.principe_list .principe_card .span').eq(0).text('learning');
      $('.principe_list .principe_card .span').eq(1).text('Upgrade');
      $('.principe_list .principe_card .span').eq(2).text('harmony');
      $('.principe_list .principe_card .span').eq(3).text('Cooperate');
      $('.principe_list .principe_card .span').eq(4).text('Excellency');
      $('.principe_list .principe_card .span').eq(5).text('discipline');
      $('.principe .btn').text('Read More');
      
      // LANGUE
      $('.langue_content').css('text-align', 'left');
      $('.langue_content .btn').css('margin-right', 'auto').css('margin-left', 'unset');
      $(".langues .section_title").html('Training Of <br>Languages <span class="span">foreign</span>');
      $(".langues .section_text").html('In our establishment, we teach foreign languages according to a professional curriculum and lessons oriented towards professional training');
      $('.langues .btn').text('Read More');
      
      // NEWSLETTER
      $('.news_content').css('order', -1);
      $('.news_content .section_title').css('text-align', 'left');
      $('.newletter .section_title').html('Subscribe to <br>our <span class="span">newsletter</span>');
      $('.newletter .btn').text('Learn More');
      $('.news_field').eq(0).attr("placeholder", 'Your Email').val('');
      
      // Contact
      $('.contact_content').css('text-align', 'left').css('order', -1);
      $('.contact .section_subtitle').text('send the message');
      $('.contact .section_title').html('leave us a <span class="span">message</span> and <br><span class="span">contact us</span>');
      $('.contact_field').eq(0).attr("placeholder", 'Name').val('');
      $('.contact .btn').text('Send The Message');
      
      // BANNER
      $('.banner_title').text('Who We Are?');
      $('.banner_links').eq(0).text('Home');
      $('.banner_links').eq(1).text('Who We Are?');

      // QUI SOMME NOUS
      $('.nous_content .section_subtitle').text('Who We Are?');
      $('.nous_content .section_title').html("private education foundation <span class='span'>New Horizon</span>");
      $('.nous_content .section_text').html("The New Horizons School is a pedagogical educational building that has recently emerged in the world of private establishments, but this building is not the fruit of a current moment, but rather an experience in the field of education that has exceeded 20 years in the form of a language school under various names, to settle in 2015 under the name of Dawah.");
    
      // PEDGOGIQUE
      $('.pedagogique_content').css('text-align', 'left');
      $('.pedagogique_content .section_title').html('the pedagogical process at <span class="span">Dawat New Horizons</span>" school');
      $('.pedagogique_content .section_text').eq(0).html('The educational process in the school "dawate new horizons" is based on an educational framework that starts from the administration of the school and with an integrated and qualified work team in the educational and psychological aspects taking care of the psyche of the student. student, educate him and discover his talents, as well as work to communicate with the parents of the students to involve them in the educational process of learning to teach.')
      $('.pedagogique_content .section_text').eq(1).html("The school oversees preparatory, primary, middle and secondary education for boys and girls, and seeks to contribute to improving the standard of education and raising the learner's knowledge ceiling in order to keep up the rhythm of his time.")
     
      // CARACTERE
      $('.caractere_content').css('text-align', 'left');
      $('.caratere_list .caratere_item').css('justify-content', 'initial')
      $('.caractere_content .section_title').eq(0).html('<span class="span">Characteristics</span> of our school');
      $('.caractere_content .section_title').eq(1).html('<span class="span">location</span> of our school');
      $('.caratere_list .caratere_item').eq(0).html("<i class='bx bxs-check-square' ></i> <span class='span'>Comfortable teaching atmosphere</span> ")
      $('.caratere_list .caratere_item').eq(1).html("<i class='bx bxs-check-square' ></i> <span class='span'>Regular monitoring of the student's academic career</span> ")
      $('.caratere_list .caratere_item').eq(2).html("<i class='bx bxs-check-square' ></i> <span class='span'>Clubs éducatifs</span> ")
      $('.caratere_list .caratere_item').eq(3).html("<i class='bx bxs-check-square' ></i> <span class='span'>Ateliers d'enseignement des langues étrangères</span> ")
      $('.caractere_content .section_text').text("Our facility is located in a quiet location away from the hustle and bustle of the city and conducive to academic and cognitive achievement and facilitates parents' ability to access it.The facility is located in the former Marjah neighborhood no. 03, Rouiba, Algiers")
      
      
      // MATIER
      $('.matiere_card').css('text-align','right').css('justify-content', 'initial');
      $('.matiere_card .card_icon').css('order', '-1');
      $('.matiere_title').text("Exploring Preparatory Study Material in High School Education");
      $('.matier_link').eq(0).text("islamic education");
      $('.matier_link').eq(1).text("Arabic language");
      $('.matier_link').eq(2).text("MATHEMATICAL");
      $('.matier_link').eq(3).text("scientific");
      $('.matier_link').eq(4).text("technology");
      $('.matier_link').eq(5).text("sports education");
      $('.matier_link').eq(6).text("civic education");
      $('.matier_link').eq(7).text("physics");
      $('.matier_link').eq(8).text("History and Geography");
      $('.matier_link').eq(9).text("French");
      $('.matier_link').eq(10).text("English");
      $('.matier_link').eq(11).text("Computing");
      $('.matier_link').eq(12).text("Music Education");
      
      
       // LESSONS
       $('.lesson_card').css('text-align', 'left');
       $('.lesson_item').css('align-items','flex-end');
       $('.lesson_icon').css('order', 1).css('padding','8px 15px');
       $('.lesson_icon a').html("<i class='bx bx-right-arrow-alt' ></i>");
       $('.lesson_title').eq(0).text('Lessons and notes');
       $('.lesson_title').eq(1).text('Educational books for children aged 4 to 6 and preparatory students');
       $('.lessont_item_text a').eq(0).text("Download textbooks for the first year, primary, second generation");
       $('.lessont_item_text a').eq(1).text("Annual plans for year 1 primary second generation");
       $('.lessont_item_text a').eq(2).text("Second Generation Curriculum for Primary Education");
       $('.lessont_item_text a').eq(3).text("tribal achievements for first grade elementary school students");
       $('.lessont_item_text a').eq(4).text("All grades for year 1 primary 2nd generation");
       $('.lessont_item_text a').eq(5).text("Livre d'archives du niveau primaire");
       $('.lessont_item_text a').eq(6).text("Teacher's Manual Mathematics and Science Education 1 Primary 2nd Generation");
       $('.lessont_item_text a').eq(7).text("Document accompanying the second generation primary education programs");

       $('.lessont_item_text a').eq(8).text("Download textbooks for the first year, primary, second generation");
       $('.lessont_item_text a').eq(9).text("Annual plans for year 1 primary second generation");
       $('.lessont_item_text a').eq(10).text("Second Generation Curriculum for Primary Education");
       $('.lessont_item_text a').eq(11).text("tribal achievements for first grade elementary school students");
       $('.lessont_item_text a').eq(12).text("All grades for year 1 primary 2nd generation");
       $('.lessont_item_text a').eq(13).text("Livre d'archives du niveau primaire");
       $('.lessont_item_text a').eq(14).text("Teacher's Manual Mathematics and Science Education 1 Primary 2nd Generation");
       $('.lessont_item_text a').eq(15).text("Document accompanying the second generation primary education programs");


       // EXERCICE
       $('.box_title').css('text-align','left');

       $('.exercice_title').text('Exams and exercises');
       $('.box-card .box_title a').eq(0).text("Examination forms for all subjects, first year of primary");
       $('.box-card .box_title a').eq(1).text("My book for the exams of semester 1 primary 2nd generation");
       $('.box-card .box_title a').eq(2).text("Mathematics activity book year 1 primary 2nd generation");

       // PDF
      $('.pdf_title').text("Primary level archival book");

      // CHAPITRE
      $('.chapitre_content, .chapiter_header').css('text-align', "left");
      $('.chapitre_item').css('justify-content', "start");
      $('.chapitre_item').hover(function(){
        $(this).css('transform','translateX(10px)');
      },function(){
        $(this).css('transform','translateX(0px)');
      }
      )

      $('.chapitre_title').eq(0).html('semestre 1')
      $('.chapitre_title').eq(1).html('semestre 2')
      $('.chapitre_title').eq(2).html('semestre 3')

      $('.chapitre_list:nth-child(1) .chapitre_subtitle').text('homework');
      $('.chapitre_list:nth-child(2) .chapitre_subtitle').text('Exams');

      $('.chapitre_list:nth-child(1) .chapitre_item').eq(0).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(1).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(2).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(3).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(4).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(5).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(6).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(7).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")

      $('.chapitre_list:nth-child(1) .chapitre_item').eq(8).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(9).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(10).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(11).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(12).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(13).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(14).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(15).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")

      $('.chapitre_list:nth-child(1) .chapitre_item').eq(16).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(17).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(18).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(19).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(20).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(21).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(22).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(23).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")



      $('.chapitre_list:nth-child(2) .chapitre_item').eq(0).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(1).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(2).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(3).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(4).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(5).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(6).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(7).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(8).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 09</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(9).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 10</span> <span class='date'>2015/2016</span>")


      $('.chapitre_list:nth-child(2) .chapitre_item').eq(10).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(11).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(12).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(13).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(14).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(15).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(16).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(17).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(18).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 09</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(19).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 10</span> <span class='date'>2015/2016</span>")

      $('.chapitre_list:nth-child(2) .chapitre_item').eq(20).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 01</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(21).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 02</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(22).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 03</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(23).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 04</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(24).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 05</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(25).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 06</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(26).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 07</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(27).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 08</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(28).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 09</span> <span class='date'>2015/2016</span>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(29).html("<i class='bx bx-right-arrow-alt' ></i> <span class='name'>Example 10</span> <span class='date'>2015/2016</span>")

      // FOOTER
      $(".footer .section_text").html('We believe in making the world a better experience. Great lesson ideas and lesson plans for students!');
      $(".footer .footer_item_title").eq(0).text('Preschool');
      $(".footer .footer_item_title").eq(1).text('Primary');
      $(".footer .footer_item_title").eq(2).text('College');
      $(".footer .footer_item_title").eq(3).text('High School');
      $(".footer .footer_item_title").eq(4).text('Who We Are?');
      
  });
});



























//ARABE
$(function() {
  $(".ar").click(function() {
    $('html').css('font-family', 'Cairo, sans-serif');
      //HEADER
      $('.nav_list ul li a').hover(function(){
        $(this).css('transform','translateX(-10px)');
      },function(){
        $(this).css('transform','translateX(0px)');
      }
    )
      $(".nav_list .nav_link").eq(0).html("<i class='bx bx-chevron-down'></i> التمهيدي");
      $(".nav_list .nav_link").eq(1).html("<i class='bx bx-chevron-down'></i> الإبتدائي");
      $(".nav_list .nav_link").eq(2).html("<i class='bx bx-chevron-down'></i> الإعدادي");
      $(".nav_list .nav_link").eq(3).html("<i class='bx bx-chevron-down'></i> الثانوي");
      $(".nav_list .nav_link").eq(4).text("من نحن؟");

      $(".nav_list ul .nav_link_down").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>التمهيدي</span>");
      $(".nav_list ul .nav_link_down ").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>الإعدادي</span>");

      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة أولى إبتدائي</span>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down ").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثانية إبتدائي</span>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(2).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثالثة إبتدائي</span>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down ").eq(3).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الرابعة إبتدائي</span>");
      $(".nav_list:nth-child(2) .dropdown .nav_link_down").eq(4).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الخامسة إبتدائي</span>");

      $(".nav_list .college_down .nav_link_down").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة أولى إعدادي</span>");
      $(".nav_list .college_down .nav_link_down ").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثانية إعدادي</span>");
      $(".nav_list .college_down .nav_link_down").eq(2).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثالثة إعدادي</span>");
      $(".nav_list .college_down .nav_link_down ").eq(3).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الرابعة إعدادي</span>");

      $(".nav_list .lycee_drop .nav_link_down ").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة أولى ثانوي</span>");
      $(".nav_list .lycee_drop .nav_link_down  ").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثانية ثانوي</span>");
      $(".nav_list .lycee_drop .nav_link_down ").eq(2).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثالثة ثانوي</span>");

      // HOME
      $('.home_banner').css('order', '-1');
      $('.home_container').css('grid-template-columns', '.8fr .95fr');
      $('.home_container').css('align-items', 'flex-start');
      $('.home_content').css('text-align', 'right');
      $('.home_content .btn').css('margin-left', 'auto').css('margin-right', 'unset');
      $(".home_content .section_subtitle").text("تعليم عبر الإنترنيت %100");
      $(".home_content  .home_title").html("لنجعل <span class='span'>التعلم</span> ممتعا و فضاء<span class='span'>تعليمي</span>  <img src='image/home_shape1.png' class='shape home_shape_1'>");
      $(".home_content  .home_text").html("الحصول على دورة تدريبية عالية الجودة عبر الإنترنت");
      $(".home_content  .btn").html("البدء");

      // EXPERT
      $(".expert_card:nth-child(1) .span").text('تجربة');
      $(".expert_card:nth-child(1) .expert_title").text('+24 سنة');
      $(".expert_card:nth-child(2) .span").text('مادة');
      $(".expert_card:nth-child(3) .span").text('خبير');
      $(".expert_card:nth-child(4) .span").text('طالب نشط');

      //NIVEAUX
      $('.niveaux_link').hover(function(){
        $(this).css('transform','translateX(-10px)');
      },function(){
        $(this).css('transform','translateX(0px)');
      }
    )
      $(".niveaux .section_subtitle").text('مستويات درجاتنا');
      $(".niveaux .section_title").html(' <span class="span">مستواك </span> إبحث عن');
      $(".niveaux_container .one .card_title").text('التمهيدي');
      $(".niveaux_container .two .card_title").text('الإبتدائي');
      $(".niveaux_container .three .card_title").text('الإعدادي');
      $(".niveaux_container .four .card_title").text('الثانوي');
      
      $(".niveaux_container .1  .niveaux_list .niveaux_link").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>التمهيدي</span>");
      $(".niveaux_container .1  .niveaux_list .niveaux_link").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>الإعدادي</span>");
      $('.niveaux_container .1 .niveaux_footer .niveaux_title').html("<i class='bx bx-left-arrow-alt'></i> مواضيع وحلول التعليم التمهيدي");

      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة أولى إبتدائي</span>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثانية إبتدائي</span>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(2).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثالثة إبتدائي</span>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(3).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الرابعة إبتدائي</span>");
      $(".niveaux_container .2  .niveaux_list .niveaux_link").eq(4).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الخامسة إبتدائي</span>");
      $('.niveaux_container .2 .niveaux_footer .niveaux_title').html("<i class='bx bx-left-arrow-alt'></i>  مواضيع وحلول التعليم الإبتدائي");

      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة أولى إعدادي</span>");
      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثانية إعدادي</span>");
      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(2).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثالثة إعدادي</span>");
      $(".niveaux_container .3  .niveaux_list .niveaux_link").eq(3).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الرابعة إعدادي</span>");
      $('.niveaux_container .3 .niveaux_footer .niveaux_title').html("<i class='bx bx-left-arrow-alt'></i> مواضيع وحلول التعليم الإعدادي");

      $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(0).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة أولى ثانوي</span>");
      $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(1).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثانية ثانوي</span>");
      $(".niveaux_container .4  .niveaux_list .niveaux_link").eq(2).html("<i class='bx bx-left-arrow-alt'></i> <span class='span'>سنة الثالثة ثانوي</span>");
      $('.niveaux_container .4 .niveaux_footer .niveaux_title').html("<i class='bx bx-left-arrow-alt'></i> مواضيع وحلول التعليم الثانوي ");

      // ABOUT
      $('.about_container').css('grid-template-columns','1fr .9fr').css('gap', '0').css('align-item','flex-end');
      $('.about_content').css('order', '-1').css('text-align','right').css('max-width', '50ch');
      $('.about_content .btn').css('margin-left', 'auto').css('margin-right', 'unset');
      $(".about_content .section_subtitle").text('من نحن؟');
      $(".about_content .section_title").html('مؤسسة التعليم الخاص <span class="span">New Horizon</span>');
      $(".about_content .section_text").text('مدرسة نيوهورايزن هي مبنى تعليمي تربوي برز حديثاً في عالم المؤسسات الخاصة ، ولكن هذا المبنى ليس ثمرة لحظة حاضرة ، بل هو تجربة في مجال التعليم تجاوزت 20 عامًا في شكل مدرسة لغات تحت مسميات مختلفة ، تستقر عام 2015 تحت مسمى الدعوة.');
      $('.about_content .btn').text('اقرأ أكثر');

      // PROGRAM
      $('.program .section_subtitle').text('برنامجنا');
      $(".program .section_title").html('إبحث عن <span class="span">برنامج</span> على الإنترنيت');
      $(".program .one .card_title").text('العلاج والمتابعة النفسية');
      $(".program .two .card_title").text('المخيمات');
      $(".program .three .card_title").text('الدورات والدعم');
      $(".program .four .card_title").text('الرحلات وورش العمل');
      
      // PRINCIPE
      $('.principe_content').css('text-align', 'right');
      $('.principe_content .btn').css('margin-left', 'auto').css('margin-right', 'unset');
      $('.principe_list li').css('justify-content', 'end');
      $('.principe .section_subtitle').text('مبادئنا');
      $(".principe .section_title").html('<span class="span">تعليمية</span> ما هو مضمون مهمة ');
      $('.principe .section_text').text('يعيد خلق متعة التعليم ، تربية فرد مستقل مرتبط بمجتمعه ، بمستوى عالٍ من المعرفة ، يتفاعل مع مجتمعه ، يتصالح مع نفسه وقيمه ، منفتح على العالم ومنفتح على الآخرين ، بمهارات ترفعه هو وذاته. حاشية إلى مستويات أعلى ، وذلك باستخدام أحدث البرامج وأكثرها فاعلية.');
      $('.principe_list .principe_card .span').eq(0).text('التعلم');
      $('.principe_list .principe_card .span').eq(1).text('رفع مستوى');
      $('.principe_list .principe_card .span').eq(2).text('انسجام');
      $('.principe_list .principe_card .span').eq(3).text('تعاون');
      $('.principe_list .principe_card .span').eq(4).text('تفوق');
      $('.principe_list .principe_card .span').eq(5).text('انضباط');
      $('.principe .btn').text('اقرأ أكثر');

      // LANGUE
      $('.langue_content').css('text-align', 'right');
      $('.langue_content .btn').css('margin-left', 'auto').css('margin-right', 'unset');
      $(".langues .section_title").html(' تدرب على<br> <span class="span">الأجنبية</span> اللغات');
      $(".langues .section_text").html('في مؤسستنا ، نقوم بتدريس اللغات الأجنبية وفقًا لمناهج ودروس مهنية موجهة نحو التدريب المهني');
      $('.langues .btn').text('اقرأ أكثر  ');


      // NEWSLETTER
      $('.news_content').css('order', 1);
      $('.news_content .section_title').css('text-align', 'right');
      $('.newletter .section_title').html(' إشتراك في<br><span class="span">نشراتنا</span>');
      $('.newletter .btn').text('إعرف المزيد');
      $('.news_field').eq(0).attr("placeholder", 'بريدك الإلكتروني').val('');
      
      // Contact
      $('.contact_content').css('text-align', 'right').css('order', 1);
      $('.contact .section_subtitle').text('أرسل الرسالة');
      $('.contact .section_title').html('اترك لنا <span class="span">رسالة</span> و <br><span class="span">تواصل معنا</span>');
      $('.contact_field').eq(0).attr("placeholder", 'Nom').val('');
      $('.contact .btn').text('أرسل الرسالة');

      // BANNER
      $('.banner_title').text('من نحن ؟');
      $('.banner_links').eq(0).text('الرئيسية');
      $('.banner_links').eq(1).text('من نحن ؟');

      // QUI SOMME NOUS
      $('.nous_content .section_subtitle').text('من نحن');
      $('.nous_content .section_title').html("مؤسسة التعليم الخاص <span class='span'>New Horizon</span>");
      $('.nous_content .section_text').html("مدرسة نيوهورايزن هي مبنى تعليمي تربوي برز حديثاً في عالم المؤسسات الخاصة ، ولكن هذا المبنى ليس ثمرة لحظة حاضرة ، بل هو تجربة في مجال التعليم تجاوزت 20 عامًا في شكل مدرسة لغات تحت مسميات مختلفة ، تستقر عام 2015 تحت مسمى الدعوة.");
       
      // PEDAGOGIQUE
      $('.pedagogique_content').css('text-align', 'right');
      $('.pedagogique_content .section_title').html('العملية التربوية في مدرسة <span class = "span">«  Dawat New Horizons </span> »');
      $('.pedagogique_content .section_text').eq(0).html('تستند العملية التعليمية في مدرسة "آفاق جديدة" إلى إطار تعليمي يبدأ من إدارة المدرسة وبفريق عمل متكامل ومؤهل في الجوانب التربوية والنفسية يهتم بنفسية الطالب. تثقيفه واكتشاف مواهبه وكذلك العمل على التواصل مع أولياء أمور الطلاب لإشراكهم في العملية التعليمية لتعلم التدريس.')
      $('.pedagogique_content .section_text').eq(1).html('تشرف المدرسة على التعليم الإعدادي والابتدائي والمتوسط ​​والثانوي للبنين والبنات ، وتسعى للمساهمة في تحسين مستوى التعليم ورفع سقف المعرفة لدى المتعلم من أجل مواكبة إيقاع عصره.')
    
      // CARACTERE
      $('.caractere_content').css('text-align', 'right');
      $('.caratere_list .caratere_item').css('justify-content', 'end')
      $('.caractere_content .section_title').eq(0).html('مدرستنا <span class="span">خصائص</span>');
      $('.caractere_content .section_title').eq(1).html('مدرستنا <span class="span">موقع</span>');
      $('.caratere_list .caratere_item').eq(0).html("<span class='span'>جو تعليمي مريح</span> <i class='bx bxs-check-square' ></i>")
      $('.caratere_list .caratere_item').eq(1).html("<span class='span'>المراقبة المنتظمة لمسيرة الطالب الأكاديمية</span> <i class='bx bxs-check-square' ></i>")
      $('.caratere_list .caratere_item').eq(2).html("<span class='span'>نوادي تعليمية</span> <i class='bx bxs-check-square' ></i>")
      $('.caratere_list .caratere_item').eq(3).html("<span class='span'>ورش عمل لتعليم اللغات الأجنبية</span> <i class='bx bxs-check-square' ></i>")
      $('.caractere_content .section_text').text('تقع مؤسستنا في مكان هادئ بعيدًا عن صخب المدينة ويؤدي إلى النجاح الأكاديمي والمعرفي ويسهل قدرة الآباء على الوصول إليها. تقع المؤسسة في حي المرجة القديم رقم 03 ، الرويبة ، الجزائر العاصمة')
    
      // MATIER
      $('.matiere_card').css('text-align','left').css('justify-content', 'end');
      $('.matiere_card .card_icon').css('order', '1');
      $('.matiere_title').text("استكشاف مواد الدراسة التحضيرية في التعليم الثانوي");
      $('.matier_link').eq(0).text("تربية اسلامية");
      $('.matier_link').eq(1).text("اللغة العربية");
      $('.matier_link').eq(2).text("الرياضيات");
      $('.matier_link').eq(3).text("العلوم");
      $('.matier_link').eq(4).text("التكنولوجيا");
      $('.matier_link').eq(5).text("التربية البدنية");
      $('.matier_link').eq(6).text("التربية المدنية");
      $('.matier_link').eq(7).text("الفيزياء");
      $('.matier_link').eq(8).text("التاريخ و الجغرافيا");
      $('.matier_link').eq(9).text("الفرنيسة");
      $('.matier_link').eq(10).text("الإنجلزية");
      $('.matier_link').eq(11).text("علوم الكمبيوتر");
      $('.matier_link').eq(12).text("التربية الموسيفية");
      

      // LESSONS
      $('.lesson_card').css('text-align', 'right');
      $('.lesson_item').css('align-items','center');
      $('.lesson_icon').css('order', -1).css('padding','8px 15px');
      $('.lesson_icon a').html("<i class='bx bx-left-arrow-alt'></i>");
      $('.lesson_title').eq(0).text('الدروس والملاحظات');
      $('.lesson_title').eq(1).text('كتب تعليمية للأطفال من سن 4 إلى 6 سنوات وطلاب المرحلة الإعدادية');
      $('.lessont_item_text a').eq(0).text("تحميل كتب مدرسية للسنة الأولى ابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(1).text("الخطط السنوية للعام الأول الابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(2).text("مناهج الجيل الثاني للتعليم الابتدائي");
      $('.lessont_item_text a').eq(3).text("الإنجازات القبلية لطلاب الصف الأول الابتدائي");
      $('.lessont_item_text a').eq(4).text("جميع الصفوف للعام الأول الابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(5).text("كتاب أرشيفية من المستوى الابتدائي");
      $('.lessont_item_text a').eq(6).text("دليل المعلم الرياضيات والعلوم 1 ابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(7).text("الوثيقة المصاحبة للجيل الثاني من برامج التعليم الابتدائي");

      $('.lessont_item_text a').eq(8).text("تحميل كتب مدرسية للسنة الأولى ابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(9).text("الخطط السنوية للعام الأول الابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(10).text("مناهج الجيل الثاني للتعليم الابتدائي");
      $('.lessont_item_text a').eq(11).text("الإنجازات القبلية لطلاب الصف الأول الابتدائي");
      $('.lessont_item_text a').eq(12).text("جميع الصفوف للعام الأول الابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(13).text("كتاب أرشيفية من المستوى الابتدائي");
      $('.lessont_item_text a').eq(14).text("دليل المعلم الرياضيات والعلوم 1 ابتدائي الجيل الثاني");
      $('.lessont_item_text a').eq(15).text("الوثيقة المصاحبة للجيل الثاني من برامج التعليم الابتدائي");
      

      // EXERCICE
      $('.box_title').css('text-align','right');
      $('.exercice_title').text('الإمتحانات و التمارين');
      $('.box-card .box_title a').eq(0).text("استمارات الامتحان لجميع المواد للسنة الأولى من المرحلة الابتدائية");
      $('.box-card .box_title a').eq(1).text("كتاب لامتحانات الفصل الأول الابتدائي الجيل الثاني");
      $('.box-card .box_title a').eq(2).text("كتاب نشاط الرياضيات للعام الأول الابتدائي الجيل الثاني");
      $('.box-card .box_title a').eq(3).text("كتاب نشاط الرياضيات للعام الأول الابتدائي الجيل الثاني");

      // CHAPITRE
      $('.chapitre_content, .chapiter_header').css('text-align', "right");
      $('.chapitre_item').css('justify-content', "end");
      $('.chapitre_card.one').css('order','3');
       $('.chapitre_card.three').css('order','1');
      $('.chapitre_item').hover(function(){
        $(this).css('transform','translateX(-10px)');
      },function(){
        $(this).css('transform','translateX(0px)');
      }
      )

      $('.chapitre_title').eq(0).html('الفصل الدراسي الأول')
      $('.chapitre_title').eq(1).html('الفصل الدراسي الثاني')
      $('.chapitre_title').eq(2).html('الفصل الدراسي الثالث')

      $('.chapitre_list:nth-child(1) .chapitre_subtitle').text('الفروض');
      $('.chapitre_list:nth-child(2) .chapitre_subtitle').text('الإمتحانات');

      $('.chapitre_list:nth-child(1) .chapitre_item').eq(0).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الأول</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(1).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثاني</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(2).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثالث</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(3).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الرابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(4).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الخامس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(5).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السادس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(6).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(7).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثامن</span> <i class='bx bx-left-arrow-alt' ></i>")

      $('.chapitre_list:nth-child(1) .chapitre_item').eq(8).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الأول</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(9).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثاني</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(10).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثالث</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(11).html("<span class='date'>2015/2016</span> <span class='name'> النمود الرابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(12).html("<span class='date'>2015/2016</span> <span class='name'>  النمود الخامس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(13).html("<span class='date'>2015/2016</span> <span class='name'> النمود السادس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(14).html("<span class='date'>2015/2016</span> <span class='name'> النمود السابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(15).html("<span class='date'>2015/2016</span> <span class='name'> النمود الثامن</span> <i class='bx bx-left-arrow-alt' ></i>")

      $('.chapitre_list:nth-child(1) .chapitre_item').eq(16).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الأول</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(17).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثاني</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(18).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثالث</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(19).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الرابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(20).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الخامس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(21).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السادس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(22).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(1) .chapitre_item').eq(23).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثامن</span> <i class='bx bx-left-arrow-alt' ></i>")


      $('.chapitre_list:nth-child(2) .chapitre_item').eq(0).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الأول</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(1).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثاني</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(2).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثالث</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(3).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الرابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(4).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الخامس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(5).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السادس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(6).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(7).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثامن</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(8).html("<span class='date'>2015/2016</span> <span class='name'>النمودج التاسع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(9).html("<span class='date'>2015/2016</span> <span class='name'> النمودج العاشر</span> <i class='bx bx-left-arrow-alt' ></i>")


      $('.chapitre_list:nth-child(2) .chapitre_item').eq(10).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الأول</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(11).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثاني</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(12).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثالث</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(13).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الرابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(14).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الخامس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(15).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السادس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(16).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(17).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثامن</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(18).html("<span class='date'>2015/2016</span> <span class='name'>النمودج التاسع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(19).html("<span class='date'>2015/2016</span> <span class='name'> النمودج العاشر</span> <i class='bx bx-left-arrow-alt' ></i>")

      $('.chapitre_list:nth-child(2) .chapitre_item').eq(20).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الأول</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(21).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثاني</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(22).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثالث</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(23).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الرابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(24).html("<span class='date'>2015/2016</span> <span class='name'> النمودج الخامس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(25).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السادس</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(26).html("<span class='date'>2015/2016</span> <span class='name'> النمودج السابع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(27).html("<span class='date'>2015/2016</span> <span class='name'>النمودج الثامن</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(28).html("<span class='date'>2015/2016</span> <span class='name'>النمودج التاسع</span> <i class='bx bx-left-arrow-alt' ></i>")
      $('.chapitre_list:nth-child(2) .chapitre_item').eq(29).html("<span class='date'>2015/2016</span> <span class='name'> النمودج العاشر</span> <i class='bx bx-left-arrow-alt' ></i>")

      // PDF
      $('.pdf_title').text('كتاب أرشيفية من المستوى الابتدائي')
    });
    
});
