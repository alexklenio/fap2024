import { Administrador } from "../class/administrador";
import { Usuario } from "../class/usuario";

export interface ILogin
{
    Logar(userObj : Usuario, user : string, password : string) : void;
    LogarAdm(userObj : Administrador, user : string, password : string, token : number) : void;
}