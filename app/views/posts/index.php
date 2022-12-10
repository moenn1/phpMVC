<?php require APPROOT . '/views/inc/dashboardNav.php'; ?>


<main>
    <section class="header-section container">
        <div class="text">Demande</div>

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
        <div class="container demande_container grid">
            <div class="header">
                <h2 class="header_content_title">List Demandes : 23</h2>
                <a href="<?php echo URLROOT ;?>/posts/add" class="header_btn">
                    Ajouter Post
                </a>
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
    </section>
</main>
<?php require APPROOT . '/views/inc/dashboardFooter.php'; ?>
