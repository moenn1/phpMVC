<?php
class niveau {
    private $db;
    public function __construct()
    {
        $this->db = new Database;
       
    }
    public function getNiveau(){
        $this->db->query('SELECT * from niveau order by id desc');
        $result = $this->db->resultSet();
        return $result;
    }
}

?>