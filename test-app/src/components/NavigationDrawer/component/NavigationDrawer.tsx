import * as React from 'react';
import { Container, Header, Title, Content, Footer, Button, Icon, Text, Left, Body } from 'native-base';

class NavigationDrawer extends React.Component<{}> {

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}

export default NavigationDrawer;