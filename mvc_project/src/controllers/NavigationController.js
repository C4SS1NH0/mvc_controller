// NavigationController.js
class NavigationController {
  handleAction(action) {
    switch (action) {
      case "cadastrar":
        console.log("Validando dados do cadastro...");
        return "Usuário cadastrado com sucesso!";

      case "comprar":
        console.log("Processando compra...");
        return "Produto adicionado ao carrinho com sucesso!";

      case "contato":
        console.log("Abrindo contato...");
        return "Redirecionando para contato.";

      default:
        return "Ação não reconhecida.";
    }
  }
}

const navigationController = new NavigationController();
export default navigationController;
