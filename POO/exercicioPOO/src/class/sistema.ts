import { Usuario } from "./usuario";
import { Administrador } from "./administrador";
import { Operador } from "./operador";
import { ICadastro } from "../interface/ICadastro";
import { ILogin } from "../interface/ILogin";

export class Sistema implements ICadastro, ILogin
{
    public Logar(userObj : Usuario, user : string, password : string) : void
    {
        if (userObj.VerificaCredenciais(user, password))
        {
            console.log("Usuario Logado!");
        }
        else
        {
            console.log("Credenciais erradas!");
        }
    }

    public LogarAdm(userObj : Administrador, user : string, password : string, token : number) : void
    {
        if ( userObj.VerificaCredenciaisAdministrador(user, password, token))
        {
            console.log("Administrador Logado!");
        }
        else
        {
            console.log("Credenciais erradas!");
        }
    }

    public CadastrarUsurario(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Usuario
        {
            return new Usuario(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
        }

    public CadastrarAdministrador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Administrador
        {
            return new Administrador(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
        }

    public CadastrarOperador(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Operador
        {
            return new Operador(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
        }

    public Atualizar(userObj : Usuario, endereco : string, telefone : string) : void
    {
        userObj.AtualizaCadastro(endereco, telefone);
    }
}