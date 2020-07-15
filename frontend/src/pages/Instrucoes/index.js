import React from 'react';

// components
import { Button, Icon, List } from 'semantic-ui-react'

// styles
import { Container, InitialText, Description, CenterDiv} from './styles';

const Instrucoes = () => {
  return (
    <Container>
      <InitialText>
        Bem-vindo(a) ao teste da Voitto.
      </InitialText>
      <Description>Esse teste consiste em fazer um dashboard para administrar alunos e seus cursos. Nesse dashboard será possível listar, criar, editar e excluir alunos, bem como atribuir ou excluir cursos desses alunos.</Description>
      <Description>A seguir, serão descritos os itens que deverão ser desenvolvidos no teste. <br />
      Você poderá visualizar melhor o que é pedido visualizando a página onde será desenvolvido os itens. Para tal, você pode clicar no botão abaixo:</Description>
      <CenterDiv>
        <Button href="/admin" center icon negative floated='right' labelPosition='right'>
          Iniciar teste!
          <Icon name='rocket' />
        </Button>
      </CenterDiv>
      <InitialText>
        Itens a serem desenvolvidos:
      </InitialText>
      <List as='ol'>
        <List.Item as='li'>Listagem de alunos: já está praticamente feita, será usada como base para o desenvolvimento dos demais itens.</List.Item>
        <List.Item as='li'>Edição dos dados de um aluno:
          <List.List as='ol'>
            <List.Item as='li'>Ao clicar no botao de editar na seção de ações deverá ser aberto um modal (já implementado como base)</List.Item>
            <List.Item as='li'>No modal deverá ter um formulário com a possibilidade de edição de todos os dados do usuário</List.Item>
            <List.Item as='li'>Deverá ser feita a implementação de uma funcionalidade de autocompletar os dados de endereço do usuário a partir do CEP. Pode-se usar uma API externa para tal(Viacep, por exemplo).</List.Item>
            <List.Item as='li'>Implementação da funcionalidade de salvar as alterações.</List.Item>
          </List.List>
        </List.Item>
        <List.Item as='li'>Exclusão de aluno</List.Item>
        <List.Item as='li'>Atribuição de curso ao aluno:
          <List.List as='ol'>
            <List.Item as='li'>Ao clicar no botao de adicionar curso ao aluno na seção de ações deverá ser aberto um modal</List.Item>
            <List.Item as='li'>No modal deverá ter um select com uma listagem de todos os cursos cadastrados no banco.</List.Item>
            <List.Item as='li'>Implementação da funcionalidade de adicionar o curso ao usuário.</List.Item>
          </List.List>
        </List.Item>
      </List>
      <Description>Caso tenha dúvidas envie um email para:<br /><br /> andersonamorim939@gmail.com <br /><br />ruandsxavier@gmail.com</Description>
    </Container>
  );
};

export default Instrucoes;
