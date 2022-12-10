<?php
class subject {
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }
    public function getSubject(){
        $this->db->query('SELECT * from subject');
        $result = $this->db->resultSet();

        return $result;
    }
    
    public function getSubjectClass($id){
        //Pull class from database where id = idNiveau
        $this->db->query('SELECT subject.name AS namec, subject.id AS id, class.name as namep    
        FROM subject
        INNER JOIN class
        ON class.id = subject.idClass
        WHERE class.id = :id  
      ');
        $this->db->bind(':id', $id);
        $result = $this->db->resultSet();
        return $result;
    }

}

?>