<?php
class User {
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }

    //register new user
    public function register($data){
        $this->db->query('INSERT INTO user (name, email, password,tel,type,nbPosts,nbAccept,nbrReject) VALUES (:name, :email, :password,:tel,0,0,0,0)');
        $this->db->bind(':name', $data['name']);
        $this->db->bind(':tel', $data['tel']);
        $this->db->bind(':email', $data['email']);
        $this->db->bind(':password', $data['password']);

        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }
    //find user by email
    public function findUserByEmail($email){
        $this->db->query('SELECT * FROM user WHERE email = :email');
        $this->db->bind(':email', $email);

        $row = $this->db->single();

        //check the row 
        if($this->db->rowCount() > 0){
            return true;
        }else{
            return false;
        }
    }

    public function login($email, $password){
        $this->db->query('SELECT * FROM user where email = :email');
        $this->db->bind(':email', $email);
       
        $row = $this->db->single();

        $hash_password = $row->password;

        if(password_verify($password, $hash_password)){
            return $row;
        }else{
            return false;
        }
    }

    public function getUserById($id){
        $this->db->query('SELECT * FROM user WHERE id = :id');
        $this->db->bind(':id', $id);

        $row = $this->db->single();

        return $row;
    }

    //Count number of users
    public function countUsers(){
        $this->db->query("SELECT COUNT(id) as nbrProfs FROM user WHERE type = 0");
        $this->db->execute();
        return $this->db->single();
    }

    public function getAllProf(){
        $this->db->query('SELECT *
                            FROM user ');
        $result = $this->db->resultSet();

        return $result;
    }
    public function deleteUser($id){
        $this->db->query('DELETE FROM user WHERE id = :id');
        $this->db->bind(':id', $id);

        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }
}