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
                <h2 class="header_content_title">List Professeurs : <?php echo count($data['users']);?></h2>
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
                        <th>Status</th>
                        <th>Nombre de poste</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php foreach ( $data['users'] as $user) : ?>
                     <tr>
                        <td><?php echo  $user->id;?></td>
                        <td><?php echo $user->name ?></td>
                         <td><?php echo  $user->email ;?></td>
                         <?php if ($user->type==0):?>
                        <td><span class="badge">Professeur</span></td>
                        <?php else:?>
                        <td><span class="badge">Admin</span></td>
                        <?php endif;?>
                        <td>
                            <?php echo $user->nbPosts ;?>
                        </td>
                         <td>
                             <a class="show_modal" href="<?php echo URLROOT ;?>/users/show/<?php echo $user->id ;?>" id="open-modal">
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
<?php require APPROOT . '/views/inc/dashboardFooter2.php'; ?>