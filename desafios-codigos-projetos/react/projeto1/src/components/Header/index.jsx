import React from 'react';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = () => {
  return (
    <Wrapper>
        <Container>
          <Row>
            <img src='#' alt='Logo Dio' />
            <BuscarInputContainer>
              <Input placeholder='Buscar...' />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </Row>
            <Row>
                <MenuRight href="#"></MenuRight>
                <Button title='Entrar'></Button>
                <Button title='Cadastrar'></Button>
            </Row>
        </Container>
    </Wrapper>
  )
  }


export { Header }