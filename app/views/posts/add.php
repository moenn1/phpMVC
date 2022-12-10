<?php require APPROOT . '/views/inc/dashboardNav.php'; ?>

<main>
    <section class="header-section container">
        <div class="text">Ajouter Post</div>

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
                <i class='bx bx-moon' id="theme_button" ></i>
            </button>
        </div>
    </section>

    <section class="section content">
        <div class="container post_container grid">

            <form action="<?php echo URLROOT ;?>/Posts/add" enctype="multipart/form-data" method="POST" class="post_form">
                <div class="input_box">
                    <label for="input_field">Titre</label>
                    <input name="title" type="text" placeholder="Entrer Le Title" id="input_field" class="input_field">
                </div>
                <div class="input_box">
                    <label for="input_field">Niveau</label>
                    <select id="input_field" class="input_field" aria-label="Default select
                    example" name="niveau">
                        <?php foreach ($data['niveau'] as $niveau) :?>
                            <option  value="<?php echo $niveau->id ;?>"><?php
                                echo $niveau->name ;?></option>
                        <?php endforeach ;?>
                    </select>
                </div>
                <div class="input_box">
                    <label for="input_field">Classe</label>
                    <select id="input_field" class="input_field" aria-label="Default select
                    example" name="class">
                        <?php foreach ($data['class'] as $niveau) :?>
                            <option  value="<?php echo $niveau->id ;?>"><?php
                                echo $niveau->name ;?></option>
                        <?php endforeach ;?>
                    </select>
                </div>
                <div class="input_box">
                    <label for="input_field">Sujet</label>
                    <select id="input_field" class="input_field" aria-label="Default select
                    example" name="subject">
                        <?php foreach ($data['subject'] as $niveau) :?>
                            <option  value="<?php echo $niveau->id ;?>"><?php
                                echo $niveau->name ;?></option>
                        <?php endforeach ;?>
                    </select>
                </div>
                <div class="input_box">
                    <label for="input_field">Type</label>
                    <select id="input_field" class="input_field" aria-label="Default select
                    example" name="lessonType">

                        <option  value="book">كتب تعليمية</option>
                        <option  value="lesson">الدروس والملاحظات</option>
                        <option  value="test"> الإمتحانات و التمارين</option>

                    </select>
                </div>
                <div class="upload-files-container">
                    <div class="drag-file-area">
                        <i class='bx bx-upload' ></i>
                        <h3 class="dynamic-message"> Drag & drop any file here </h3>
                        <label class="label"> or <span class="browse-files"> <input type="file" name="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label>
                    </div>
                    <span class="cannot-upload-message"> <i class='bx bxs-error' ></i> Please select a file first <i class='bx bx-x' ></i> </span>
                    <div class="file-block">
                        <div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span class="file-name"> </span> | <span class="file-size">  </span> </div>
                        <span class="material-icons remove-file-icon">delete</span>
                        <div class="progress-bar"> </div>
                    </div>
                </div>
                <div class="input_box">
                    <label for="input_field">Description</label>
                    <textarea name="body" id="" cols="30" placeholder="Enter Your Description" rows="10" class="input_field"></textarea>
                </div>
                <button type="submit" class="btn">Submit</button>

            </form>

        </div>
    </section>
</main>
<?php require APPROOT . '/views/inc/dashboardFooter.php'; ?>
