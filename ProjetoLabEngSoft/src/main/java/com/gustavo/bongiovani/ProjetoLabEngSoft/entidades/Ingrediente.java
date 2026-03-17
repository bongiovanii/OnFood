package com.gustavo.bongiovani.ProjetoLabEngSoft.entidades; // Isso é um package, ele é criado utilizando pastas dentro de pastas e serve para organizar e facilitar as coisas
import jakarta.persistence.Entity; //Isso aqui é do hibernate
import jakarta.persistence.Id;

@Entity //  Isso é necessário para que a classe seja reconhecida como uma entidade do banco de dados.
public class Ingrediente {
    @Id
    Long id;
    String nome;
}
