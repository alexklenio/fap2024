import { Administrador } from "../class/administrador";
import { Operador } from "../class/operador";
import { Usuario } from "../class/usuario";


export interface ICadastro
{
    CadastrarUsurario(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Usuario;
    CadastrarAdministrador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Administrador;
    CadastrarOperador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Operador;
}