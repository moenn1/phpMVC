<?php require APPROOT . '/views/inc/dashboardNav.php'; ?>

<?php echo $_SESSION['user_id'] ?>
<main>
    <section class="header-section container">
        <div class="text">Dashboard</div>

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
        <div class="container content_container grid">
            <div class="left_container">
                <div class="banner section">
                    <p class="banner_subtitle">Good morning <?php echo $_SESSION['name'];?></p>
                    <h2 class="banner_title">
                        Les demandes
                    </h2>
                </div>

                <div class="table_section">
                    <table>
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Nom Professeur</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <?php foreach ($data['posts'] as $post) : ?>
                            <tr>
                                <td><?php echo  $post->title ;?></td>
                                <td><?php echo $post->name;?></td>
                                <td><?php echo  $post->postCreated ;?></td>
                                <td><span class="badge"><?php echo $post->status;?></span></td>
                                <td>
                                    <a class="show_modal" href="<?php echo URLROOT ;?>/posts/show/<?php echo $post->postId ;?>" id="open-modal1">
                                        <i class='bx bx-show' ></i>
                                    </a>
                                </td>
                            </tr>
                        <?php endforeach ;?>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="right_container">
                <div class="calendar">
                    <div class="calendar-header">
                        <span class="month-picker" id="month-picker">February</span>
                        <div class="year-picker">
                            <span class="year-change" id="prev-year">
                                <pre></pre>
                            </span>
                            <span id="year">2021</span>
                            <span class="year-change" id="next-year">
                                <pre>></pre>
                            </span>
                        </div>
                    </div>
                    <div class="calendar-body">
                        <div class="calendar-week-day">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div class="calendar-days"></div>
                    </div>

                    <div class="month-list"></div>
                </div>

                <div class="actualite">
                    <div class="actialite_list">

                        <div class="actualite_card">
                            <div class="card_icon">
                                <i class='bx bxs-info-circle'></i>
                            </div>
                            <div class="card_wrapper">
                                <h3 class="card_title">Nombre De Professeurs: </h3>
                                <span class="numbers"><?php echo $data['nbrProfs']->nbrProfs ?></span>
                            </div>
                        </div>

                        <div class="actualite_card">
                            <div class="card_icon">
                                <i class='bx bxs-edit-alt' ></i>
                            </div>
                            <div class="card_wrapper">
                                <h3 class="card_title">Nombre de demandes en attente: </h3>
                                <span class="numbers"><?php echo $data['nbrPending']->nbrPending ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>
<?php require APPROOT . '/views/inc/dashboardFooter.php'; ?>
