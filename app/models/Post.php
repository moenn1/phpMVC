<?php

class Post {
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }

    public function getPosts($id){

        $this->db->query('SELECT *,
                            posts.id as postId,
                            user.id as userId,
                            posts.created_at as postCreated,
                            user.created_at as userCreated
                            FROM posts
                            INNER JOIN user
                            ON posts.user_id = user.id
                            WHERE user.id = :id
                            ORDER BY posts.created_at DESC');
        $this->db->bind(':id', $id);
        $result = $this->db->resultSet();

        return $result;
    }
    public function getPostsAdmin(){
        $this->db->query('
        SELECT *, posts.id as postId, user.id as userId, posts.created_at as postCreated, user.created_at as userCreated FROM posts INNER JOIN user ON posts.user_id = user.id WHERE posts.status = "enAttends" ORDER BY posts.created_at DESC
        
        
        ');
        $result = $this->db->resultSet();

        return $result;
    }

    public function addPost($data){
        //Pull nbrposts from database and increment
        $this->db->query('SELECT nbPosts FROM user WHERE id = :id');
        $this->db->bind(':id', $data['user_id']);
        $nbPosts = $this->db->single();
        $nbPosts = $nbPosts->nbPosts + 1;
        //Update nbrPosts in database
        $this->db->query('UPDATE user SET nbPosts = :nbPosts WHERE id = :id');
        $this->db->bind(':nbPosts', $nbPosts);
        $this->db->bind(':id', $data['user_id']);
        $this->db->execute();
        $this->db->query('INSERT INTO posts(user_id, title, body,niveau,class,subject,file ,status, lessontype) VALUES (:user_id, :title, :body,:niveau,:class,:subject,:file, "enAttends", :lessonType)');
        $this->db->bind(':user_id', $data['user_id']);
        $this->db->bind(':title', $data['title']);
        $this->db->bind(':body', $data['body']);
        $this->db->bind(':niveau', $data['niveau']);
        $this->db->bind(':class', $data['class']);
        $this->db->bind(':subject', $data['subject']);
        $this->db->bind(':file', $data['file']);
        $this->db->bind(':lessonType', $data['lessonType']);
        
        //execute 
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }

    public function accepterPost($id){
        $this->db->query('UPDATE posts SET status = "accepter" WHERE id = :id');
        $this->db->bind(':id', $id);
        $this->db->execute();
        //Pull nbAccept from database and increment
        $this->db->query('SELECT nbAccept FROM user WHERE id = :id');
        $this->db->bind(':id', $_SESSION['user_id']);
        $nbAccept = $this->db->single();
        $nbAccept = $nbAccept->nbAccept + 1;
        //Update nbAccept in database
        $this->db->query('UPDATE user SET nbAccept = :nbAccept WHERE id = :id');
        $this->db->bind(':nbAccept', $nbAccept);
        $this->db->bind(':id', $_SESSION['user_id']);
        $this->db->execute();
        //execute 
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }

    public function refuserPost($id){
        $this->db->query('UPDATE posts SET status = "refuser" WHERE id = :id');
        $this->db->bind(':id', $id);
        $this->db->execute();
        //Pull nbrReject from database and increment
        $this->db->query('SELECT nbrReject FROM user WHERE id = :id');
        $this->db->bind(':id', $_SESSION['user_id']);
        $nbrReject = $this->db->single();
        $nbrReject = $nbrReject->nbrReject + 1;
        //Update nbrReject in database
        $this->db->query('UPDATE user SET nbrReject = :nbrReject WHERE id = :id');
        $this->db->bind(':nbrReject', $nbrReject);
        $this->db->bind(':id', $_SESSION['user_id']);
        $this->db->execute();
        //execute 
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }


    //count number of posts with status "enattends" from table posts
    public function countPosts(){
        $this->db->query("SELECT COUNT(id) as nbrPending FROM posts WHERE STATUS = 'enAttends'");
        $this->db->execute();
        return $this->db->single();
    }

    public function getPostById($id){
        $this->db->query('SELECT * FROM posts WHERE id = :id');
        $this->db->bind(':id', $id);
        $row = $this->db->single();

        return $row;
    }

    //Get post id by name
    public function getPostIdByName($name){
        $this->db->query('SELECT id FROM posts WHERE title = :name');
        $this->db->bind(':name', $name);
        $row = $this->db->single();

        return $row;
    }

    public function updatePost($data){
        $this->db->query('UPDATE posts SET title = :title, body = :body WHERE id = :id');
        $this->db->bind(':id', $data['id']);
        $this->db->bind(':title', $data['title']);
        $this->db->bind(':body', $data['body']);
        
        //execute 
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }

    //delete a post
    public function deletePost($id){
        $this->db->query('DELETE FROM posts WHERE id = :id');
        $this->db->bind(':id', $id);

        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }
}