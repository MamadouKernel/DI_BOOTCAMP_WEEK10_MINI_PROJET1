package com.kernelmk.userproject.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Users implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull(message = "Le champ 'FirstName' est obligatoire")
    @NotBlank(message = "Le champ 'FirstName' ne peut être vide")
    @Column(name = "first_name", length = 50)
    private String firstName;

    @NotNull(message = "Le champ 'LastName' est obligatoire")
    @NotBlank(message = "Le champ 'LastName' ne peut être vide")
    @Column(name = "last_name")
    private String lastName;

    @NotNull(message = "Le champ 'Email' est obligatoire")
    @NotBlank(message = "Le champ 'Email' ne peut être vide")
    @Email(message = "Adresse email incorrecte")
    @Column(length = 50)
    private String email;
}
