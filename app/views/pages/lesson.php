<?php require APPROOT . '/views/inc/header.php';?>
<main>

    <section class="section banner" style="background-image: linear-gradient(rgba(0, 38, 84,.85),rgba(0, 38, 84,.85)),url('<?php echo URLROOT. '/public/image/Banner.png';?>');">
        <div class="banner_content container grid">
            <h3 class="banner_title">من نحن ؟</h3>
            <div class="banner_wrapper">
                <a href="#" class="banner_links">من نحن ؟</a>
                <i class='bx bx-chevron-left'></i>
                <a href="<?php echo URLROOT. '/index';?>" class="banner_links">الرئيسية</a>
            </div>
        </div>
    </section>

    <section class="matiere">
        <div class="container section ">

            <div class="matiere_container lesson_container grid">

                <img src="<?php echo URLROOT. '/public/image/01.svg';?>" alt="" class="shape matiere_shape1">
                <img src="<?php echo URLROOT. '/public/image/02.svg';?>" alt="" class="shape matiere_shape2">
                <img src="<?php echo URLROOT. '/public/image/03.svg';?>" alt="" class="shape matiere_shape3">
                <img src="<?php echo URLROOT. '/public/image/04.svg';?>" alt="" class="shape matiere_shape4">
                <div class="lesson_card">

                    <h2 class="lesson_title">الدروس والملاحظات</h2>
                    <ul class="lesson_list grid">

                       <?php foreach ($data['content'] as $content) : ?>
                       <?php if($content->lessonType == 'lesson') : ?>
                        <li class="lesson_item">
                            <p class="lessont_item_text">
                                <a href="<?php echo URLROOT ;?>/pages/pdf/<?php echo $content->id?>">
                                    <?php echo $content->title ;?>
                                </a>
                            </p>

                            <div class="lesson_icon">
                                <a href="pdf.html">
                                    <i class='bx bx-left-arrow-alt'></i>
                                </a>
                            </div>
                        </li>
                        <?php endif ;?>
                        <?php endforeach ;?>

                    </ul>
                </div>

                <div class="lesson_card">
                    <h2 class="lesson_title">كتب تعليمية</h2>
                    <ul class="lesson_list grid">
                        <?php foreach ($data['content'] as $content) : ?>
                            <?php if($content->lessonType == 'book') : ?>
                                <li class="lesson_item">
                                    <p class="lessont_item_text">
                                        <a href="<?php echo URLROOT ;?>/pages/pdf/<?php echo $content->id?>">
                                            <?php echo $content->title ;?>
                                        </a>
                                    </p>

                                    <div class="lesson_icon">
                                        <a href="<?php echo URLROOT ;?>/pages/pdf/<?php echo $content->id?>">
                                            <i class='bx bx-left-arrow-alt'></i>
                                        </a>
                                    </div>
                                </li>
                            <?php endif ;?>
                        <?php endforeach ;?>
                    </ul>
                </div>
    </section>

    <section class="exercice section">
        <div class="container">
            <h2 class="exercice_title">الإمتحانات و التمارين</h2>

            <div class="my-swiper-container">
                <div class="exercie_container">
                    <div class="swiper-wrapper">
                        <?php if($content->lessonType == 'test') : ?>
                            <?php foreach ($data['content'] as $content) : ?>

                        <div class="swiper-slide" >
                            <div class="box-card">
                                <img src="<?php echo URLROOT. '/public/image/exercice_banner.png';?>" alt=""
                                     class="shape
                                exerice_banner">
                                <div class="circls">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h3 class="box_title">
                                    <a href="<?php echo URLROOT ;?>/pages/pdf/<?php echo $content->id?>">
                                        استمارات الامتحان لجميع المواد للسنة الأولى من المرحلة الابتدائية
                                    </a>
                                </h3>
                                <div class="box_icon">
                                    <a href="<?php echo URLROOT ;?>/pages/pdf/<?php echo $content->id?>">
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                            <br>
                            <br>
                            <?php endforeach ;?>
                        <?php endif ;?>
                    </div>

                </div>
            </div>
        </div>
    </section>
</main>

<?php require APPROOT . '/views/inc/footer.php'; ?>
