<header class="header">
    <nav class="nav container">

        <a href="<?php echo URLROOT. '/pages/index';?>"  class="logo">
            <img src="<?php echo URLROOT. '/public/image/logo.png';?>" alt="">
        </a>

        <div class="nav_menu">
            <div class="nav_top">
                <a href="<?php echo URLROOT. '/pages/index';?>" class="logo">
                    <img src="<?php echo URLROOT. '/public/image/logo.png';?>" alt="">
                </a>

                <div class="nav_close">
                    <i class='bx bx-x' ></i>
                </div>
            </div>
            <ul class="nav_list">

                <li>
                    <a href="#" class="nav_link"> <i class='bx bx-chevron-down'></i> التمهيدي</a>

                    <ul>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 1 ;?>" class="nav_link_down">
                                <i class='bx bx-left-arrow-alt'></i>
                                <span class="span" >التمهيدي</span>
                            </a>
                        </li>

                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 2 ;?>" class="nav_link_down">
                                <i class='bx bx-left-arrow-alt'></i>
                                <span class="span" > الإعدادي</span>
                            </a>
                        </li>
                    </ul>

                </li>

                <li>
                    <a href="#" class="nav_link" ><i class='bx bx-chevron-down'></i> الإبتدائي</a>

                    <ul class="dropdown">
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 4 ;?>" class="nav_link_down">
                                <i class='bx bx-left-arrow-alt'></i> <span class="span" >سنة أولى إبتدائي</span> </a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 5 ;?>" class="nav_link_down"><i
                                        class='bx bx-left-arrow-alt'></i><span class="span" >سنة الثانية إبتدائي</span> </a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 6 ;?>" class="nav_link_down"><i
                                        class='bx bx-left-arrow-alt'></i><span class="span" >سنة الثالثة إبتدائي</span> </a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 7 ;?>" class="nav_link_down"><i
                                        class='bx bx-left-arrow-alt'></i><span class="span" >سنة الرابعة إبتدائي</span> </a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lesson/<?php echo 8 ;?>" class="nav_link_down"><i
                                        class='bx bx-left-arrow-alt'></i><span class="span" >سنة الخامسة إبتدائي</span> </a>
                        </li>
                    </ul>

                </li>

                <li>
                    <a href="#" class="nav_link" > <i class='bx bx-chevron-down'></i> الإعدادي</a>

                    <ul class="college_down">
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/college1/<?php echo 10 ;?>" class="nav_link_down" >
                                <i class='bx bx-left-arrow-alt'></i>
                                <span class="span" >سنة أولى إعدادي</span>
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/college2/<?php echo 11 ;?>" class="nav_link_down"
                            ><i class='bx bx-left-arrow-alt'></i> <span class="span" >سنة الثانية إعدادي</span></a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/college3/<?php echo 12 ;?>" class="nav_link_down"
                            ><i class='bx bx-left-arrow-alt'></i> <span class="span" >سنة الثالثة إعدادي</span></a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/college4/<?php echo 13 ;?>" class="nav_link_down"
                            ><i class='bx
                            bx-left-arrow-alt'></i> <span class="span">سنة الرابعة إعدادي</span></a>
                        </li>
                    </ul>

                </li>

                <li>
                    <a href="#" class="nav_link"> <i class='bx bx-chevron-down'></i> الثانوي</a>

                    <ul class="lycee_drop">
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lycee1/<?php echo 15 ;?>" class="nav_link_down">
                                <i class='bx bx-left-arrow-alt'></i>
                                <span class="span">سنة أولى ثانوي</span>
                            </a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lycee2/<?php echo 16 ;?>" class="nav_link_down"><i class='bx bx-left-arrow-alt'></i> <span class="span">سنة الثانية ثانوي</span></a>
                        </li>
                        <li>
                            <a href="<?php echo URLROOT ;?>/pages/lycee2/<?php echo 17 ;?>" class="nav_link_down"><i
                                        class='bx bx-left-arrow-alt'></i> <span class="span">سنة الثالثة ثانوي</span></a>
                        </li>
                    </ul>

                </li>

                <li>
                    <a href="<?php echo URLROOT. '/pages/about';?>" class="nav_link">من نحن؟</a>
                </li>
            </ul>
        </div>

        <div class="nav_actions">

            <div class="select_wrap">
                <ul class="default_option">
                    <li>
                        <div class="option ice">
                            <img src="<?php echo URLROOT. '/public/image/algeria.png';?>" alt="">
                            <i class='bx bx-chevron-down'></i>
                        </div>
                    </li>
                </ul>
                <ul class="select_ul">
                    <li>
                        <div class="option pizza">
                            <a href="#" class="fr">
                                <img src="<?php echo URLROOT. '/public/image/france.png';?>" alt="">
                                <span>FR</span>
                            </a>
                            <i class='bx bx-chevron-down'></i>
                        </div>
                    </li>
                    <li>
                        <div class="option burger">
                            <a href="#" class="en">
                                <img src="<?php echo URLROOT. '/public/image/united-states.png';?>" alt="">
                                <span>
                                        EN
                                    </span>
                            </a>
                            <i class='bx bx-chevron-down'></i>
                        </div>
                    </li>
                    <li>
                        <div class="option ice">
                            <a href="#" class="ar">
                                <img src="<?php echo URLROOT. '/public/image/algeria.png';?>" alt="">
                                <span>
                                        AR
                                    </span>
                            </a>
                            <i class='bx bx-chevron-down'></i>
                        </div>
                    </li>
                </ul>
            </div>

            <button class="nav_toggle">
                <i class='bx bx-menu' ></i>
            </button>

        </div>

        <div class="overlay"></div>
    </nav>
</header>