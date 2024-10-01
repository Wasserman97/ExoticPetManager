# ExoticPetManager

Este projeto é um aplicativo mobile desenvolvido para gerenciamento de animais exóticos em criadouros comerciais. O aplicativo permite adicionar, listar e gerenciar informações como nome, espécie, pais, data de nascimento e registro dos animais. Ele foi desenvolvido utilizando **React Native** com o **Expo**, e faz uso de diversos componentes ensinados em aula, como navegação, armazenamento local com **AsyncStorage**, entre outros.

## Integrantes do Grupo:

- **552477** - Maria Eduarda Sousa de Oliveira
- **550712** - Matheus Wasserman Fernandes Silva
- **99396** - Guilherme Rocha Toledo dos Santos
- **552522** - Isadora Tatajuba Moreira Pinto

## Objetivo do Projeto:

O objetivo deste aplicativo é permitir que criadouros comerciais de animais exóticos, como cobras e lagartos, possam gerenciar seus animais com informações detalhadas sobre sua criação, pais, e registros.

## Funcionalidades:

- Adicionar um novo animal com nome, espécie, pai, mãe, data de nascimento e registro.
- Listar todos os animais cadastrados.
- Persistência de dados utilizando **AsyncStorage** para salvar os animais localmente.

## Como Rodar o Projeto:

1. **Clone o repositório**:

   
   git clone https://github.com/Wasserman97/ExoticPetManager.git
Instale as dependências:

Dentro da pasta do projeto, execute:


Copiar código
npm install
Execute o projeto:

Para iniciar o aplicativo, rode o comando:


Copiar código
npx expo start
Testar no dispositivo:

Escaneie o QR Code exibido no terminal com o aplicativo Expo Go para rodar o projeto no seu dispositivo móvel.

Componentes Utilizados
Navigation: Utilizamos a navegação por abas (Bottom Tab Navigator) e o Stack Navigation para navegar entre as diferentes telas do aplicativo.

View: Usado para estruturar o layout das telas e organizar os componentes de interface.

StackView: Usado para empilhar as telas e gerenciar a navegação de forma hierárquica (navegação entre telas).

Header: Implementado automaticamente pelo Stack Navigator para exibir o título da tela no topo, com opção de personalização.

Stack Navigation: Utilizado para navegar entre telas específicas, como a de Adicionar Animal e a de Lista de Animais, permitindo navegação hierárquica.

BottomTabNavigator: Implementado para criar a navegação entre as abas principais do aplicativo. As abas controlam a navegação entre as telas de Adicionar Animal e Listar Animais.

Text: Utilizado para exibir textos nas telas, como rótulos para os campos de entrada e títulos.

TextInput: Usado para permitir a entrada de dados do usuário. Por exemplo, campos como nome, espécie, data de nascimento, entre outros, utilizam esse componente.

Button: Utilizado para permitir a interação com o usuário. Um exemplo é o botão de Salvar Animal, que aciona a ação de salvar as informações no armazenamento local.

Alert: Usado para exibir mensagens de feedback ao usuário. Por exemplo, uma mensagem de sucesso ao adicionar um novo animal ou de erro caso ocorra algum problema.

AsyncStorage: Utilizado para salvar e carregar os dados dos animais no armazenamento local do dispositivo, garantindo que as informações persistam entre sessões.



Foi utilizado o Stack Navigation para empilhar e navegar entre diferentes telas do aplicativo, como a tela de adicionar um novo animal e a lista de animais.
O BottomTabNavigator foi utilizado para criar a navegação entre as abas principais do aplicativo: uma aba para adicionar animais e outra para listar os animais.
View, Text, TextInput, Button:

Componentes essenciais de interface para construir o layout. As Views organizam o layout das telas, os Text são usados para exibir rótulos e títulos, e os TextInput permitem a entrada de dados do usuário. O Button executa ações, como salvar os animais.
Alert:

Usado para fornecer feedback ao usuário. Por exemplo, ao adicionar um novo animal, um alerta é exibido informando se a operação foi bem-sucedida ou se ocorreu algum erro.
AsyncStorage:

Utilizado para salvar os dados dos animais localmente no dispositivo. Dessa forma, os animais cadastrados são persistidos mesmo após o aplicativo ser fechado.
