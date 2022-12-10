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
    
    // public function navbar(){
    //     $niveau = $this->niveauModel->getNiveau();
      
    //   foreach($niveau as $niv){
    //     $clas = $this->classeModel->getClassNiveau($niv->id);
    //     $dat[$niv->name] = $clas;
    //   }

    //   $this->view('inc/navbar', $dat);
    // }
  }
