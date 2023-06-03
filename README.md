# Tasks App

Este é um aplicativo de tarefas simples desenvolvido em React Native usando Firebase como banco de dados. O aplicativo permite que os usuários criem, atualizem, excluam e marquem tarefas como concluídas. Ele também possui recursos de notificação para alertar os usuários sobre tarefas próximas do prazo.

## Como executar o projeto

Siga as instruções abaixo para configurar e executar o aplicativo localmente:

### Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

### Passo 1: Clone o repositório

Clone este repositório em sua máquina local:

git clone https://github.com/seu-usuario/tasks-app.git

### Passo 2: Instale as dependências

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

npm install

Passo 3: Configurar o Firebase
Crie um projeto no Firebase e configure o Firestore como banco de dados. Em seguida, copie as informações de configuração do Firebase para o arquivo firebaseconfig.ts localizado em config/firebaseconfig.ts.

Passo 4: Executar o aplicativo
Execute o seguinte comando para iniciar o aplicativo no emulador/simulador:

npm start

Isso abrirá o Metro Bundler, onde você pode escolher executar o aplicativo no emulador/simulador Android ou iOS.

Se você tiver um dispositivo físico, poderá escanear o código QR fornecido pelo Metro Bundler usando o aplicativo Expo Go para executar o aplicativo diretamente em seu dispositivo.

Contribuição
Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a licença MIT.
