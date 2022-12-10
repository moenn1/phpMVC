<?php 
class Posts extends Controller{

    public function __construct()
    {
        if (!isLoggedIn()) {
            redirect('users/login');
        } else {
            //new model instance
            $this->postModel = $this->model('Post');
            $this->userModel = $this->model('User');
            $this->classeModel = $this->model('classe');
            $this->contentModel = $this->model('content');
            $this->niveauModel = $this->model('niveau');
            $this->subjectModel = $this->model('subject');
        }
    }

    public function index(){
        if (!isLoggedIn())
            redirect('users/login');
        else{
            $posts = $this->postModel->getPosts($_SESSION['user_id']);
            $data = [
                'posts' => $posts
            ];

            $this->view('posts/index', $data);
        }

    }

    public function indexAdmin(){
  if (!isLoggedIn())
            redirect('users/login');
        else{
            $posts = $this->postModel->getPostsAdmin();
            $data = [
                'posts' => $posts,
                'nbrPending' => $this->postModel->countPosts()
            ];

            $this->view('posts/indexAdmin', $data);
        }

    }


    //add new post
    public function add(){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        $_POST = filter_input_array(INPUT_POST);
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            //$path = URLROOT . "/public/subjectContent/" . $_FILES['file']['name'];
            $path =  'subjectContent/'.$_FILES['file']['name'];
            //$path = 'http://localhost/newHZ/public/subjectContent/' . $_FILES['file']['name'];
            //$path = 'C:\laragon\www\newHZ\public\subjectContent';
	        move_uploaded_file($_FILES['file']['tmp_name'], $path);
           
            $data = [
                'title' => trim($_POST['title']),
                'body' => trim($_POST['body']),
                'niveau' => intval($_POST['niveau']),
                'class' => intval($_POST['class']),
                'subject' => intval($_POST['subject']),
                'user_id' => intval($_SESSION['user_id']),
                'file' => $_FILES['file']['name'],
                'lessonType' => trim($_POST['lessonType']),
                'title_err' => '',
                'body_err' => '',
                
            ];

            if(empty($data['title'])){
                $data['title_err'] = 'Please enter post title';
            }
            if(empty($data['body'])){
                $data['body_err'] = 'Please enter the post content';
            }

            //validate error free
            if(empty($data['title_err']) && empty($data['body_err'])){
                if($this->postModel->addPost($data)){
                    flash('post_message', 'Your post have been added');
                    redirect('posts');
                }else{
                    die('something went wrong');
                }
               
                

            }else{
                $this->view('posts/add', $data);
            }
        }else{
            $class=$this->classeModel->getClass();
            $niveau=$this->niveauModel->getNiveau();
            $subject=$this->subjectModel->getSubject();
            $data = [
                'class' => $class,
                'niveau' =>$niveau,
                'subject' =>$subject,
                'title' => (isset($_POST['title']) ? trim($_POST['title']) : ''),
                'body' =>  (isset($_POST['body'])? trim($_POST['body']) : '')
            ];


            $this->view('posts/add', $data);
        }
    } }


    //show single post 
    public function show($id){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        $post = $this->postModel->getPostById($id);
        $user = $this->userModel->getUserById($post->user_id);

        $data = [
            'post' => $post,
            'user' => $user
        ];

        $this->view('posts/show', $data);
    }}

     //edit post
     public function edit($id){
         if (!isLoggedIn())
             redirect('users/login');
         else{
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $_POST = filter_input_array(INPUT_POST);
            $data = [
                'id' => $id,
                'title' => trim($_POST['title']),
                'body' => trim($_POST['body']),
                'user_id' => $_SESSION['user_id'],
                'title_err' => '',
                'body_err' => '',
            ];
            //validate the title
            if(empty($data['title'])){
                $data['title_err'] = 'Please enter post title';
            }
            //validate the body
            if(empty($data['body'])){
                $data['body_err'] = 'Please enter the post content';
            }

            //validate error free
            if(empty($data['title_err']) && empty($data['body_err'])){
                if($this->postModel->updatePost($data)){
                    flash('post_message', 'Your post have been updated');
                    redirect('posts');
                }else{
                    die('something went wrong');
                }
               
                //laod view with error
            }else{
                $this->view('posts/edit', $data);
            }
        }else{
            //check for the owner and call method from post model
            $post = $this->postModel->getPostById($id);
            if($post->user_id != $_SESSION['user_id']){
                redirect('posts');
            }
            $data = [
                'id' => $id,
                'title' => $post->title,
                'body' => $post->body
            ];

            $this->view('posts/edit', $data);
        }
    }}
    
    public function accepter($id)
    {
        if (!isLoggedIn())
            redirect('users/login');
        else{
        if($this->postModel->accepterPost($id)){
            //Move data from post to content
            $post = $this->postModel->getPostById($id);
            $data = [
                'title' => $post->title,
                'body' => $post->body,
                'idCiveau' => $post->niveau,
                'idClass' => $post->class,
                'idSubject' => $post->subject,
                'idUser' => $post->user_id,
                'file' => $post->file,
                'lessonType' => $post->lessonType
            ];
            $this->contentModel->addContent($data);
            flash('post_message', 'Demande approuvée');
            redirect('posts/indexAdmin');
        }else{
            die('something went wrong');
        }
    }}
    
    public function refuser($id)
    {
        if (!isLoggedIn())
            redirect('users/login');
        else{
        if($this->postModel->refuserPost($id)){
            flash('post_message', 'Demande refusée');
            redirect('posts/indexAdmin');
        }else{
            die('something went wrong');
        }
    }}




    //delete post
    public function delete($id){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            //check for owner
            $post = $this->postModel->getPostById($id);
            if($post->user_id != $_SESSION['user_id']){
                redirect('posts');
            }
            
            //call delete method from post model
            if($this->postModel->deletePost($id)){
                flash('post_message', 'Post Removed');
                redirect('posts');
            }else{
                die('something went wrong');
            }
        }else{
            redirect('posts');
        }}
    }

    

}                            
                        