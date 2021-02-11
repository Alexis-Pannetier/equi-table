

// STYLES
import 'antd/dist/antd.less';
import './res/styles/styles.less';

import { Button, Col, Input, Layout, Menu, Rate, Row } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

import { Screen } from './Screen/Screen';

import logoHeader from './res/images/logo2.png';
import phone from './res/images/phone.png';
import plat from './res/images/plat.png';
import platfin from './res/images/platfin.png';
import personne1 from './res/images/personne1.png';
import personne2 from './res/images/personne2.png';
import personne3 from './res/images/personne3.png';
import personne4 from './res/images/personne4.png';

function App() {
  const gutter = [24, 24];
  return (
    <Layout className="App" >

      <Layout.Header >
        <Row justify='space-between'>
          <a>
            <img src={logoHeader} href='/' className='logo' />
          </a>
          <Menu mode="horizontal">
            <Menu.Item key="nav 1">
              Nav 1
          </Menu.Item>
            <Menu.Item key="nav 2">
              Nav 2
          </Menu.Item>
            <Menu.Item key="contact">
              Contact
          </Menu.Item>
          </Menu>
        </Row>
      </Layout.Header>

      <Screen id='screen-1' justify='space-around' align='middle' className='vh-100'>

        <Row align='middle'>
          <Col span={14}>
            <Row gutter={gutter}>

              <Col span={24}>
                <h2>
                  Profitez de paniers composés de produits locaux et de qualité à prix abordable !
                </h2>
              </Col>

              <Col span={24}>
                <Row align='middle' gutter={gutter}>
                  <Col>
                    <Rate allowHalf defaultValue={4} disabled />
                  </Col>
                  <Col>
                    <span className='bold' >80% des clients sont satisfaits !</span>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Row justify='center'>
                  <Button>Devenez Beta-testeur</Button>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col span={10}>
            <img src={phone} />
          </Col>
        </Row>

      </Screen>

      <Screen id='screen-2' className='bg-secondary' style={{ height: '500px' }}>

        <Col span={10}>
          <Row justify='center' gutter={gutter}>
            <Col span={12}>
              <img className='circle' src={personne1} />
            </Col>
            <Col span={12}>
              <img className='circle' src={personne2} />
            </Col>
            <Col span={12}>
              <img className='circle' src={personne3} />
            </Col>
            <Col span={12}>
              <img className='circle' src={personne4} />
            </Col>
          </Row>
        </Col>

        <Col span={14}>
          <h2>Une application qui prend soin de vous et de vos finances</h2>
          <p>Nos utilisateurs disposent de paniers à prix réduits grâce à note politique d'achat en gros via des circuits-courts !</p>
        </Col>

      </Screen>

      <Screen id='screen-3' style={{ height: '750px' }}>
        <Col span={12}>
          <h2>Faites vos courses à moindre prix avec des produits de qualité</h2>
          <p>Nos paniers de produits sont composés de produits de votre région et sont à disposition dans des entrepots situés proche de chez-vous !
          Grâce à l’achat de ces produits en grande quantité, nous pouvons vous les proposer à un prix bas.</p>
        </Col>

        <Col span={12}>
          <img src={plat}>
          </img>
        </Col>
      </Screen>

      <Screen id='screen-4' className='bg-plateau' style={{ height: '300px' }}>
        <Col span={24}>
          <h2 style={{ color: 'white' }}>Rejoignez la communauté !</h2>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Button>Devenez beta-testeur</Button>
          </Row>
        </Col>
      </Screen>

      <Screen id='screen-5'>
        <h2>Ils vous donnent leur avis !</h2>
        <p>“ J’ai trouvé tous les produits que je souhaitait trouver à des prix incroyables !! Je recomande !”</p>
        <p>“ Grâce à Equi’table, je peux offrir à ma fille de la nourriture saine et bonne. Avant, c’était toujours compliqué en fin de mois”</p>
      </Screen>

      <Screen id='screen-6' className='bg-platfin' style={{ height: '500px' }}>
        <Row gutter={gutter}>
          <Col>
            <Row justify='center' align='middle'>
              <h2 className='white'>Profitez de 5% de réduction en devenant béta-testeur</h2>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify='center' align='middle'>
              <Input placeholder='Insérez votre adresse email' style={{ maxWidth: '300px' }} />
            </Row>
          </Col>
          <Col span={24}>
            <Row justify='center' align='middle'>
              <Button>S'inscrire</Button>
            </Row>
          </Col>
        </Row>
      </Screen>

      <Layout.Footer className='white'>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ maxWidth: '1200px' }}>
            <Row className='content' justify='space-between' style={{ fontSize: '18px' }}>

              <Col span={6}>
                <Row gutter={gutter}>
                  <Col span={24}>
                    <a href='/'>A propos de nous</a>
                  </Col>
                  <Col span={24}>
                    <a href='/'>Paiement sécurisé</a>
                  </Col>
                  <Col span={24}>
                    <a href='/'>Nous contacter</a>
                  </Col>
                  <Col span={24}>
                    <a href='/'>CGU</a>
                  </Col>
                </Row>
              </Col>

              <Col span={6}>
                <Row justify='end' gutter={gutter}>
                  <Col span={24}>
                    <p>Suivez-nous sur les réseaux sociaux !</p>
                  </Col>
                  <Col span={24}>
                    <Row justify='space-around'>
                      <Col>
                        <FacebookOutlined className='social-network' />
                      </Col>
                      <Col>
                        <InstagramOutlined className='social-network' />
                      </Col>
                      <Col>
                        <TwitterOutlined className='social-network' />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>

            </Row>

            <Row justify='center'>
              <p style={{ fontSize: '16px' }}>Copyright 2021 - Equi’table | Mentions légales</p>
            </Row>

          </Col>
        </Row>
      </Layout.Footer>

    </Layout >
  );
}

export default App;
