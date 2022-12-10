<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DASHBOARD</title>

    <link rel="stylesheet" href="<?php echo URLROOT. '/public/css/dashboard.css';?>">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
    <link rel="shortcut icon" href="<?php echo URLROOT. '/public/image/favicon.png';?>" type="image/x-icon">
</head>
<body>
<?php if (isset($_SESSION['type'])) : ?>
<div class="sidebar">
    <div class="logo-details">
        <div class="logo_name">NEW HORIZON</div>
        <i class='bx bx-menu' id="btn" ></i>
    </div>
    <ul class="nav-list">
        <?php if ($_SESSION['type'] == 0 || $_SESSION['type'] == 1) : ?>
            <li>
                <i class='bx bx-search' ></i>
                <input type="text" placeholder="Search...">
                <span class="tooltip">Search</span>
            </li>
            <li>
                <a href="<?php echo URLROOT. '/pages/dashboard';?>">
                    <i class='bx bx-grid-alt'></i>
                    <span class="links_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <?php if ($_SESSION['type'] == 1) : ?>
                <a href="<?php echo URLROOT. '/posts/indexAdmin';?>">
                    <?php else : ?>
                    <a href="<?php echo URLROOT. '/posts/index';?>">
                        <?php endif; ?>
                    <i class='bx bx-edit' ></i>
                    <span class="links_name">Post</span>
                </a>
                <span class="tooltip">Post</span>
            </li>
            <li>
                <a href="<?php echo URLROOT. '/posts/add';?>">
                    <i class='bx bx-time' ></i>
                    <span class="links_name">Demande</span>
                </a>
                <span class="tooltip">Demande</span>
            </li>
        <?php endif ?>
        <?php if ($_SESSION['type'] == 1) : ?>
            <li>
                <a href="<?php echo URLROOT. '/users/index';?>">
                    <i class='bx bx-user' ></i>
                    <span class="links_name">Professeurs</span>
                </a>
                <span class="tooltip">Professeurs</span>
            </li>
        <?php endif ?>
        <li class="profile">
            <div class="profile-details">
                <img src="<?php echo URLROOT. '/public/image/about1.jpg';?>" alt="profileImg">
                <div class="name_job">
                    <div class="name"><?php echo $_SESSION['name'];?></div>
                    <div class="job"><?php if($_SESSION['type']==1) echo "Admin"; else echo "Professeur";?></div>
                </div>
            </div>
            <a href="<?php echo URLROOT; ?>/users/logout"><i class='bx bx-log-out' id="log_out" ></i></a>
        </li>


    </ul>
</div>
<?php endif ?>