

// STYLES
import 'antd/dist/antd.less';
import './res/styles/styles.less';

import { Button, Card, Col, Divider, Input, Layout, Menu, Rate, Row } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

import { Screen } from './Screen/Screen';

import logoHeader from './res/images/logo2.png';
import phone from './res/images/phone.png';
import plat from './res/images/plat.png';
import personne1 from './res/images/personne1.png';
import personne2 from './res/images/personne2.png';
import personne3 from './res/images/personne3.png';
import personne4 from './res/images/personne4.png';
import avis1 from './res/images/avis1.png';
import avis2 from './res/images/avis2.png';

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
            <Menu.Item key="about-us">
              <a href='#screen-2'>À propos de nous</a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href='#screen-6'>Contact</a>
            </Menu.Item>
          </Menu>
        </Row>
      </Layout.Header>

      <Screen id='screen-1' justify='space-around' align='middle' className='page'>

        <Row align='middle'>
          <Col lg={14} md={24}>
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

          <Col lg={10} md={24}>
            <Row justify='center'>
              <img src={phone} />
            </Row>
          </Col>
        </Row>

      </Screen>

      <Screen id='screen-2' className='bg-secondary' style={{ minHeight: '500px' }}>

        <Col lg={10} md={24}>
          <Row justify='center' align='middle' gutter={gutter}>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne1} />
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne2} />
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne3} />
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne4} />
              </Row>
            </Col>
          </Row>
        </Col>

        <Col lg={14} md={24}>
          <h2>Une application qui prend soin de vous et de vos finances</h2>
          <p>Nos utilisateurs disposent de paniers à prix réduits grâce à note politique d'achat en gros via des circuits-courts !</p>
        </Col>

      </Screen>

      <Screen id='screen-3' style={{ minHeight: '750px' }}>
        <Col lg={12} md={24}>
          <h2>Faites vos courses à moindre prix avec des produits de qualité</h2>
          <p>Nos paniers de produits sont composés de produits de votre région et sont à disposition dans des entrepots situés proche de chez-vous !
          Grâce à l’achat de ces produits en grande quantité, nous pouvons vous les proposer à un prix bas.</p>
        </Col>

        <Col lg={12} md={24}>
          <Row justify='center'>
            <img src={plat} />
          </Row>
        </Col>
      </Screen>

      <Screen id='screen-4' className='bg-plateau' style={{ minHeight: '300px' }}>
        <Col span={24}>
          <Row justify='center'>
            <h2 style={{ color: 'white' }}>Rejoignez la communauté !</h2>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Button>Devenez beta-testeur</Button>
          </Row>
        </Col>
      </Screen>

      <Screen id='screen-5' style={{ minHeight: '600px' }}>
        <Col>
          <Row>
            <h2>Ils vous donnent leur avis !</h2>
          </Row>
        </Col>

        <Col>
          <Row justify='space-around'>

            <Col span={10}>
              <Card className='dark'>
                <Row justify='center' align='middle'>
                  <Col xl={9} lg={12} md={24}>
                    <Row justify='center' align='middle'>
                      <Col>
                        <img className='circle' src={avis1} style={{ maxWidth: '120px' }} />
                      </Col>
                      <Col span={24}>
                        <p>Elise Watz</p>
                      </Col>
                      <Col span={24}>
                        <p style={{ fontSize: '12px' }}>Étudiante en droit social</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col xl={15} lg={12} md={24}>
                    <p>“ J’ai trouvé tous les produits que je souhaitait trouver à des prix incroyables !! Je recomande !”</p>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col span={10}>
              <Card className='dark'>
                <Row justify='center' align='middle'>
                  <Col xl={9} lg={12} md={24}>
                    <Row justify='center' align='middle'>
                      <Col>
                        <img className='circle' src={avis2} style={{ maxWidth: '120px' }} />
                      </Col>
                      <Col span={24}>
                        <p>Jeanne Corma</p>
                      </Col>
                      <Col span={24}>
                        <p style={{ fontSize: '12px' }}>En reconversion professionnelle</p>
                      </Col>
                      {/* </> */}
                    </Row>
                  </Col>
                  <Col xl={15} lg={12} md={24}>
                    <p>“ Grâce à Equi’table, je peux offrir à ma fille de la nourriture saine et bonne. Avant, c’était toujours compliqué en fin de mois”</p>
                  </Col>
                </Row>
              </Card>
            </Col>

          </Row>
        </Col>
      </Screen>

      <Screen id='screen-6' className='bg-platfin' style={{ minHeight: '500px' }}>
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

      <Layout.Footer id='footer' className='white'>
        <Row justify='center' align='middle'>
          <Col span={24} style={{ maxWidth: '1200px' }}>
            <Row className='content' justify='space-between' style={{ fontSize: '18px' }}>

              <Col span={6}>
                <Row gutter={gutter}>
                  <Col span={24}>
                    <a href='#screen-2'>A propos de nous</a>
                  </Col>
                  <Col span={24}>
                    <a href='/'>Paiement sécurisé</a>
                  </Col>
                  <Col span={24}>
                    <a href='#screen-6'>Nous contacter</a>
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