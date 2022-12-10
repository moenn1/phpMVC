<?php require APPROOT . '/views/inc/header.php'; ?>

<main>

    <section class="section banner" style="background-image: linear-gradient(rgba(0, 38, 84,.85),rgba(0, 38, 84,.85)),url('<?php echo URLROOT. '/public/image/Banner.png';?>');">
        <div class="banner_content container grid">
            <h3 class="banner_title">من نحن ؟</h3>
            <div class="banner_wrapper">
                <a href="#" class="banner_links">من نحن ؟</a>
                <i class='bx bx-chevron-left'></i>
                <a href="index.html" class="banner_links">الرئيسية</a>
            </div>
        </div>
    </section>

    <section class="matiere">
        <div class="container section ">
            <h2 class="h2 matiere_title">استكشاف مواد الدراسة التحضيرية في التعليم الثانوي</h2>


            <div class="matiere_container grid">

                <img src="<?php echo URLROOT. '/public/image/01.svg';?>" alt="" class="shape matiere_shape1">
                <img src="<?php echo URLROOT. '/public/image/02.svg';?>" alt="" class="shape matiere_shape2">
                <img src="<?php echo URLROOT. '/public/image/03.svg';?>" alt="" class="shape matiere_shape3">
                <img src="<?php echo URLROOT. '/public/image/04.svg';?>" alt="" class="shape matiere_shape4">

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-star-and-crescent"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 2 ;?>" class="matier_link">تربية
                            اسلامية</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <img src="<?php echo URLROOT .'/public/image/arabe.png';?>" alt="">
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 9 ;?>" class="matier_link">اللغة
                            العربية</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-plus-minus"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 70 ;?>"
                           class="matier_link">الرياضيات</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-dna"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 77 ;?>" class="matier_link">العلوم</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-microchip"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 84 ;?>"
                           class="matier_link">التكنولوجيا</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-regular fa-futbol"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 91 ;?>" class="matier_link">التربية
                            البدنية</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-person-military-to-person"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 98 ;?>" class="matier_link">التربية
                            المدنية</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-atom"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 105;?>" class="matier_link">الفيزياء</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <img src="<?php echo URLROOT .'/public/image/historique.png';?>" alt="">
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 112;?>" class="matier_link">التاريخ و
                            الجغرافيا</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <img src="<?php echo URLROOT .'/public/image/french.png';?>" alt="">
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 119;?>" class="matier_link">الفرنيسة</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <img src="<?php echo URLROOT .'/public/image/English.png';?>" alt="">
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 126;?>"
                           class="matier_link">الإنجلزية</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-computer"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 133;?>" class="matier_link">علوم
                            الكمبيوتر</a>
                    </h3>
                </div>

                <div class="matiere_card">
                    <div class="card_icon">
                        <i class="fa-solid fa-guitar"></i>
                    </div>
                    <h3 class="h3">
                        <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 140;?>" class="matier_link">التربية
                            الموسيفية</a>
                    </h3>
                </div>
            </div>
    </section>


</main>

<?php require APPROOT . '/views/inc/footer.php'; ?>

