<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN - NEW HORIZON</title>
    <link rel="stylesheet" href="<?php echo URLROOT. '/public/css/main.css';?>">
    <link rel="shortcut icon" href="<?php echo URLROOT. '/public/image/favicon.png';?>" type="image/x-icon">
</head>
<body>
<section class="login">
    <div class="login_banner" style="background-image:linear-gradient(rgba(0,0,0,.87),rgba(0,0,0,.87)),url('<?php
    echo URLROOT. '/public/image/login_banner.jpg';?>');">
        <h2 class="login_banner_title">New horizon <br> dawat</h2>
    </div>
    <div class="login_content">
        <form action="<?php echo URLROOT ;?>/users/login" method="post" class="login_form">
            <div class="logo">
                <img src="<?php echo URLROOT. '/public/image/logo.png';?>" alt="">
            </div>
            <input type="email" name="email" placeholder="Email" required class="login_field" value="<?php echo $data['email'] ;?>">
            <input type="password" name="password" placeholder="Password" required class="login_field" value="<?php echo
            $data['password'] ;
            ?>">

        <!--    <input type="email" name="email" class="login_field <?php echo (!empty($data['email_err'])) ? 'is-invalid' : '' ;?>" value="<?php echo $data['email'] ;?>">
            <input type="password" name="password" class="login_field <?php echo (!empty($data['password_err'])) ? 'is-invalid' : '' ;?>" value="<?php echo $data['password'] ;?>">
        -->
            <button class="login_btn">
                Login
            </button>
        </form>
    </div>
</section>
</body>
</html>