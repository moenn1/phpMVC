<?php
  class Pages extends Controller {
    public function __construct(){
      $this->niveauModel = $this->model('niveau');
      $this->classeModel = $this->model('classe');
      $this->subjectModel = $this->model('subject');
      $this->contentModel = $this->model('content');
      $this->postModel = $this->model('post');
      $this->userModel = $this->model('user');
    }
    
    public function index(){
      if(isLoggedIn()){
        redirect('posts');
      }
      $niveau = $this->niveauModel->getNiveau();
      
      foreach($niveau as $niv){
        $classe = $this->classeModel->getClassNiveau($niv->id);
        $data[$niv->name] = $classe;
      }
      $_SESSION['navbar'] = $data;
      $this->view('pages/index', $data);
    }



    //Function to display about page
    public function about(){
      $this->view('pages/about');
    }


    //Function cours to display the cours page
    public function cours($id){
      //Get from table subject where id = $id
      $subject = $this->subjectModel->getSubjectClass($id);
      $data = [
        'subject' => $subject
      ];
      $this->view('pages/cours', $data);
    }

    public function lesson($id){
        $content = $this->contentModel->getSubjectContent($id);
        $data = [
            'content' => $content
        ];
        $this->view('pages/lesson', $data);
    }

      public function chapitre($id){
          $subject = $this->subjectModel->getSubjectClass($id);
          $data = [
              'subject' => $subject
          ];
          $this->view('pages/chapitre', $data);
      }

      public function college1(){
          $subject = $this->subjectModel->getSubjectClass(10);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/college1', $data);
      }

      public function college2(){
          $subject = $this->subjectModel->getSubjectClass(11);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/college2', $data);
      }

      public function college3(){
          $subject = $this->subjectModel->getSubjectClass(12);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/college3', $data);
      }

      public function college4(){
          $subject = $this->subjectModel->getSubjectClass(13);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/college4', $data);
      }

      public function lycee1(){
          $subject = $this->subjectModel->getSubjectClass(15);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/lycee1', $data);
      }


      public function lycee2(){
          $subject = $this->subjectModel->getSubjectClass(16);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/lycee2', $data);
      }


      public function lycee3(){
          $subject = $this->subjectModel->getSubjectClass(17);
          $data = [
              'subject' => $subject,
          ];

          $this->view('pages/lycee3', $data);
      }


      //Function content to display the content page
    public function pdf($id){
      $content = $this->contentModel->getSubjectContent($id);

      $data = [
        'content' => $content
      ];
      $this->view('pages/pdf', $data);
    }

    //Function to display the dashboard page
    public function dashboard(){
        if (!isLoggedIn())
            redirect('users/login');
        else{
      // Count posts using the countPosts function in the post model
      $nbrPending = $this->postModel->countPosts();
      $nbrProfs = $this->userModel->countUsers();
      $posts = $this->postModel->getPosts($_SESSION['user_id']);
      $data = [
        'nbrPending' => $nbrPending,
        'nbrProfs' => $nbrProfs,
          'posts' => $posts
      ];

      $this->view('pages/dashboard', $data);
    }
    }




  }