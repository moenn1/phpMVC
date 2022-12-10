
<?php require APPROOT . '/views/inc/dashboardNav.php'; ?>
<main>
    <section class="header-section container">
        <div class="text">Professeur</div>

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
    <div class="table_section">
    <table>
        <thead>
        <tr>
            <th>Titre</th>
            <th>Nom Professeur</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            <?php if($_SESSION['type']==1) : ?>
            <th>Actions</th>
            <?php endif ;?>
        </tr>
        </thead>
        <tbody>

            <tr>
                <td><?php echo  $data['post']->title ;?></td>
                <td><?php echo $data['user']->name;?></td>
                <td><?php echo  $data['post']->body ;?></td>
                <td><?php echo  $data['post']->created_at ;?></td>
                <td><span class="badge"><?php echo $data['post']->status;?></span></td>
                <td>
                    <?php if($_SESSION['type']==1) : ?>
                        <div class="row">
                            <div class="col">
                                <a href="<?php echo URLROOT ;?>/posts/accepter/<?php echo $data['post']->id ;?>"
                                   class="show_modal">ACCEPTER</a>

                                <a href="<?php echo URLROOT ;?>/posts/refuser/<?php echo $data['post']->id ;?>" class="show_modal">REFUSER</a>
                            </div>

                        </div>
                    <?php endif ;?>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
        </div>
    </section>
    <section class="matiere">
        <div class="container section ">
            <div class="matiere_container pdf_container grid">
                <embed src="<?php echo URLROOT;?>/public/subjectContent/<?php echo $data['post']->file ;?>" width="100%" height="600px"
                       type="">
            </div>
    </section>

</main>
<?php require APPROOT . '/views/inc/dashboardFooter2.php'; ?>
