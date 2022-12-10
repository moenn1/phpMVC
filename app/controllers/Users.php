<?php
class Users extends Controller{
    public function __construct()
    {
        $this->userModel = $this->model('User');
    }

    public function register(){
        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
           // process form
           $_POST = filter_input_array(INPUT_POST); 
            $data = [
                'name' => trim($_POST['name']),
                'email' => trim($_POST['email']),
                'tel' => trim($_POST['tel']),
                'password' => trim($_POST['password']),
                'confirm_password' => trim($_POST['confirm_password']),
                'name_err' => '',
                'email_err' => '',
                'password_err' => '',
                'confirm_password_err' => '' 
            ];

            //valide name
            if(empty($data['name'])){
                $data['name_err'] = 'Please enter name';
            }

            //validate email
            if(empty($data['email'])){
                $data['email_err'] = 'Please enter email';
            }else{
                //check for email
                if($this->userModel->findUserByEmail($data['email'])){
                    $data['email_err'] = 'Email already exist';
                }
            }

            //validate password 
            if(empty($data['password'])){
                $data['password_err'] = 'Please enter your password';
            }elseif(strlen($data['password']) < 6){
                $data['password_err'] = 'Password must be atleast six characters';
            }

            //validate confirm password
            if(empty($data['confirm_password'])){
                $data['confirm_password_err'] = 'Please confirm password';
            }else{
                if($data['password'] != $data['confirm_password'])
                {
                    $data['confirm_password_err'] = 'Password does not match';
                }
            }

            //make sure error are empty
            if(empty($data['name_err']) && empty($data['email_err']) && empty($data['password_err']) && empty($data['password_confirm_err'])){
                $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
                if($this->userModel->register($data)){
                    flash('register_success', 'you are registerd you can login now');
                    redirect('users/login');
                }
            }else{
                $this->view('users/register', $data);
            }
        }else{
            //init data
            $data = [
                'name' => '',
                'email' => '',
                'password' => '',
                'tel' => '',
                'confirm_password' => '',
                'name_err' => '',
                'email_err' => '',
                'password_err' => '',
                'confirm_password_err' => '' 
            ];
            //load view
            $this->view('users/register', $data);          
        }
    }

    public function login(){
        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
           // process form
           $_POST = filter_input_array(INPUT_POST); 
           $data = [
               'email' => trim($_POST['email']),
               'password' => trim($_POST['password']),
               'email_err' => '',
               'password_err' => ''
           ];

            //validate email
            if(empty($data['email'])){
                $data['email_err'] = 'Please enter email';
            }else{
                if($this->userModel->findUserByEmail($data['email'])){
                    //user found
                }else{
                    $data['email_err'] = 'User not found';
                }
            }

            //validate password 
            if(empty($data['password'])){
                $data['password_err'] = 'Please enter your password';
            }elseif(strlen($data['password']) < 6){
                $data['password_err'] = 'Password must be atleast six characters';
            }
            
            //make sure error are empty
            if(empty($data['email_err']) && empty($data['password_err'])){
                $loggedInUser = $this->userModel->login($data['email'], $data['password']);
                if($loggedInUser){
                    //create session
                    $this->createUserSession($loggedInUser);
                }else{
                    $data['password_err'] = 'Password incorrect';
                    $this->view('users/login', $data);
                }
            }else{
                $this->view('users/login', $data);
            }

        }else{
            //init data f f
            $data = [
                'email' => '',
                'password' => '',
                'email_err' => '',
                'password_err' => ''
            ];
            //load view
            $this->view('users/login', $data);          
        }
    }
    public function add(){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        if ($_SERVER['REQUEST_METHOD'] == 'POST'){
            // process form
            $_POST = filter_input_array(INPUT_POST); 
             $data = [
                 'name' => trim($_POST['name']),
                 'email' => trim($_POST['email']),
                 'tel' => trim($_POST['tel']),
                 'password' => trim($_POST['password']),
                 'confirm_password' => trim($_POST['confirm_password']),
                 'name_err' => '',
                 'email_err' => '',
                 'password_err' => '',
                 'confirm_password_err' => '' 
             ];
 
             //valide name
             if(empty($data['name'])){
                 $data['name_err'] = 'Please enter name';
             }
 
             //validate email
             if(empty($data['email'])){
                 $data['email_err'] = 'Please enter email';
             }else{
                 //check for email
                 if($this->userModel->findUserByEmail($data['email'])){
                     $data['email_err'] = 'Email already exist';
                 }
             }
 
             //validate password 
             if(empty($data['password'])){
                 $data['password_err'] = 'Please enter your password';
             }elseif(strlen($data['password']) < 6){
                 $data['password_err'] = 'Password must be atleast six characters';
             }
 
             //validate confirm password
             if(empty($data['confirm_password'])){
                 $data['confirm_password_err'] = 'Please confirm password';
             }else{
                 if($data['password'] != $data['confirm_password'])
                 {
                     $data['confirm_password_err'] = 'Password does not match';
                 }
             }
 
             //make sure error are empty
             if(empty($data['name_err']) && empty($data['email_err']) && empty($data['password_err']) && empty($data['password_confirm_err'])){
                 $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
                 if($this->userModel->register($data)){
                     flash('register_success', 'the new prof added successfully');
                     redirect('users/index');
                 }
             }else{
                 $this->view('users/add', $data);
             }
         }else{
             //init data
             $data = [
                 'name' => '',
                 'email' => '',
                 'password' => '',
                 'tel' => '',
                 'confirm_password' => '',
                 'name_err' => '',
                 'email_err' => '',
                 'password_err' => '',
                 'confirm_password_err' => ''
             ];
             //load view
             $this->view('users/add', $data);          
         }
    }}

    //setting user section variable
    public function createUserSession($user){
        $_SESSION['user_id'] = $user->id;
        $_SESSION['name'] = $user->name;
        $_SESSION['email'] = $user->email;
        $_SESSION['type'] = $user->type;
        $_SESSION['nbPosts'] = $user->nbPosts;
        $_SESSION['nbAccept'] = $user->nbAccept;
        
        redirect('pages/dashboard');
        
    }
    public function index(){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        $users = $this->userModel->getAllProf();
        $data = [
            'users' => $users
        ];

        $this->view('users/index', $data);
    } }
    public function show($id){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        $user = $this->userModel->getUserById($id);
        $data = [
            'user' => $user
        ];

        $this->view('users/show', $data);
    }}
    public function delete($id){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            //check for owner
            $post = $this->userModel->getUserById($id);
            
            //call delete method from post model
            if($this->userModel->deleteUser($id)){
                flash('post_message', 'User Removed');
                redirect('users');
            }else{
                die('something went wrong');
            }
        }else{
            redirect('users');
        }
    }}
    //logout and destroy user session
    public function logout(){
        if (!isLoggedIn())
            redirect('users/login');
        else{
        unset($_SESSION['user_id']);
        unset($_SESSION['name']);
        unset($_SESSION['email']);
        session_destroy();
        redirect('/');}
    }
}