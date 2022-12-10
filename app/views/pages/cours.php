<?php require APPROOT . '/views/inc/header.php'; ?>

    <style>
        .items{
            height: 50px;
        }
    </style>

    <div>
        <h1>الموقع الأول للدراسة في الجزائر: المستوى <?php echo $data['subject'][0]->namep;?></h1> 
    </div>
    <div class="mx-auto row d-flex flex-wrap justify-content-center mt-5">
          <?php foreach($data['subject'] as $subject): ?>
            <div class="text-white text-center items col-3 m-3 d-flex justify-content-center  rounded-3 pt-2 shadow-sm bg-primary">
                <h5 class="card-text"> <a href="<?php echo URLROOT ;?>/pages/content/<?php echo $subject->id ;?>"> <?php echo $subject->namec; ?></h5> </a>
          </div>
           
            <?php endforeach; ?>

    </div>

    <br><br><br>

<?php require APPROOT . '/views/inc/footer.php'; ?>