# mvc_controller
## Progresso do Desenvolvimento

### Status das Rotas
Quando o usuário clica no botão principal do sistema, a ação é capturada pelo arquivo `main.js`, que envia a solicitação para o `NavigationController.js`. O controller identifica qual ação foi realizada, executa a lógica correspondente e retorna uma resposta para a interface.

### Feedback ao Usuário
O sistema avisa o usuário que a ação foi concluída por meio de uma mensagem visual na tela. Além disso, ocorre uma mudança temporária na cor de fundo da página, reforçando visualmente que a operação foi realizada com sucesso.

### Dificuldades Técnicas
Uma das principais dificuldades encontradas foi separar corretamente a lógica de comportamento em JavaScript da estrutura HTML. No início, os eventos estavam muito misturados com os elementos da interface, mas depois a organização ficou melhor ao centralizar a lógica no controller e manter a view mais limpa.
