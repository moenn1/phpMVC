<?php require APPROOT . '/views/inc/dashboardNav.php'; ?>
<main>
    <section class="header-section container">
        <div class="text">Ajouter Professeur</div>

        <form action="" class="search_form">
            <i class='bx bx-search'></i>
            <input type="text" placeholder="Search" class="search_field">
        </form>

        <div class="header_action">
            <div class="notification">
                <i class='bx bx-bell' >
                    <span class="span"></span>
                </i>
            </div>
            <button class="dark">
                <i class='bx bx-moon' id="theme_button"></i>
            </button>
        </div>
    </section>

    <section class="section content">
        <div class="container post_container grid">

            <form action="<?php echo URLROOT ;?>/Users/add" enctype="multipart/form-data" method="post" class="post_form"  >
                <div class="input_box">
                    <label for="name">Nom</label>
                    <input type="text" placeholder="Entrer Le Nom" id="name" name="name" class="input_field">
                </div>
                <div class="input_box">
                    <label for="email">Email</label>
                    <input type="email" placeholder="Entrer L'Email" id="email"  name="email" class="input_field">
                </div>
                <div class="input_box">
                    <label for="tel">Telephone</label>
                    <input type="text" placeholder="Entrer numero Telephone" id="tel"  name="tel" class="input_field">
                </div>
                <div class="input_box">
                    <label for="password">Mot De Pass</label>
                    <input type="password" placeholder="Entrer Le Mot De Pass" id="password" name="password" class="input_field">
                </div>
                <div class="confirm_password">
                    <label for="confirm_password">Confirmer Mot de Pass</label>
                    <input type="password" placeholder="Confirmer Mot de Pass" id="confirm_password" name="confirm_password" class="input_field">
                </div>

                <button type="submit" class="btn">Submit</button>

            </form>

        </div>
    </section>
</main>
<?php require APPROOT . '/views/inc/dashboardFooter.php'; ?>