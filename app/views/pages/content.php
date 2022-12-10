<?php require APPROOT . '/views/inc/header.php'; ?>


<style>
        .items{
            height: 50px;
        }
</style>

    <div>
        <h1>الموقع الأول للدراسة في الجزائر: المستوى <?php echo $data['content'][0]->namec;?></h1> 
    </div>
    <div class="mx-auto row d-flex flex-wrap justify-content-center mt-5">
          <?php foreach($data['content'] as $subject): ?>
            <div class="text-white text-center items col-3 m-3 d-flex justify-content-center  rounded-3 pt-2 shadow-sm bg-primary">
                <h5 class="card-text"> <a href="<?php echo URLROOT;?>/subjectContent/<?php echo $subject->fic ;?>" target="_blank" download> <?php echo $subject->title; ?></h5> </a>
               
                
                

          </div>
            <?php endforeach; ?>
    </div>

<?php require APPROOT . '/views/inc/footer.php'; ?>