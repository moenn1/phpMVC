
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
            <div class="header">

                <a href="<?php echo URLROOT. '/users/add';?>" class="header_btn">
                    Ajouter Professeur
                </a>
            </div>

            <div class="table_section">
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Nombre de postes</th>
                        <th>Nbr Accepté</th>
                        <th>Nbr Refus</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td><?php echo $data['user']->id ?></td>
                            <td><?php echo $data['user']->name ?></td>
                            <td><?php echo $data['user']->email ?></td>
                            <?php if ($data['user']->type==0):?>
                                <td><span class="badge">Professeur</span></td>
                            <?php else:?>
                                <td><span class="badge">Admin</span></td>
                            <?php endif;?>
                            <td>
                                <?php echo $data['user']->nbPosts ;?>
                            </td>
                            <td>
                                <?php echo $data['user']->nbAccept ;?>
                            </td>
                            <td>
                                <?php echo $data['user']->nbrReject ;?>
                            </td>
                            <td>

                                <form class="pull-center" action="<?php echo URLROOT ;?>/users/delete/<?php echo $data['user']->id ;?>" method="post">
                                    <input type="submit" class="btn btn-danger btn-block" value="Delete">
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </section>
</main>
<?php require APPROOT . '/views/inc/dashboardFooter2.php'; ?>
