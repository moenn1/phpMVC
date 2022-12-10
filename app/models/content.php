<?php
class content {
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }
    public function getClass(){
        $this->db->query('SELECT * from content');
        $result = $this->db->resultSet();

        return $result;
    }

    public function getSubjectContent($id){
        $this->db->query('SELECT subject.name AS namec, content.id AS id, content.file as fic, content.title as title, content.lessonType   
        from content
        INNER JOIN subject
        ON content.idSubject = subject.id
        WHERE subject.id = :id
      ');
        $this->db->bind(':id', $id);
        $result = $this->db->resultSet();

        return $result;
    }

    public function addContent($data){
        $this->db->query('INSERT INTO content(title, body,idCiveau,idSubject,idUser,file, idClass, lessonType) VALUES (:title, :body,:idCiveau,:idSubject,:idUser, :file,:idClass, :lessonType)');
        $this->db->bind(':title', $data['title']);
        $this->db->bind(':body', $data['body']);
        $this->db->bind(':idCiveau', $data['idCiveau']);
        $this->db->bind(':idSubject', $data['idSubject']);
        $this->db->bind(':idUser', $data['idUser']); 
        $this->db->bind(':idClass', $data['idClass']);
        $this->db->bind(':file', $data['file']);
        $this->db->bind(':lessonType', $data['lessonType']);
        
        //execute 
        if($this->db->execute()){
            return true;
        }else{
            return false;
        }
    }
}

?>