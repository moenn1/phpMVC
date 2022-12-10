<?php
class Classe {
    private $db;
    public function __construct()
    {
        $this->db = new Database;
    }
    public function getClass(){
        $this->db->query('SELECT * from class');
        $result = $this->db->resultSet();

        return $result;
    }

    public function getClassNiveau($id){
        //Pull class from database where id = idNiveau
        $this->db->query('SELECT class.name AS namec, class.id AS  id   
            FROM class
            INNER JOIN niveau
            ON class.idNiveau = niveau.id
            WHERE :id = idNiveau
      ');
        $this->db->bind(':id', $id);
        $result = $this->db->resultSet();
        return $result;
    }


}

?>