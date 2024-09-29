
import { Sistema } from "./class/sistema";


let sistema = new Sistema();

let user1 = sistema.CadastrarUsurario("rndl", "12345", "Rafael", "Nunes", "03/04/1991", "Local B", "23346256");
let adm1 = sistema.CadastrarAdministrador("rndl1", "123456", "Ze", "Neto", "04/06/1995", "Local A", "235556");
let operador1 = sistema.CadastrarOperador("asfg", "123456", "abel", "guilhermino", "01/01/1990", "Local C", "212346");

user1.MostrarDados();
adm1.MostrarDados();
operador1.MostrarDados();

sistema.Logar(user1, "rndl", "12345");
sistema.Logar(adm1, "rndl1", "123456");
sistema.Logar(adm1, "rndl1", "12345");
sistema.LogarAdm(adm1, "rndl1", "123456", adm1.GetToken());

sistema.Atualizar(user1, "Local D", "111111");

user1.MostrarDados();

operador1.Operar();
adm1.Administrar();