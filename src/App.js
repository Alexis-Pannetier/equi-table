

// STYLES
import 'antd/dist/antd.less';
import './res/styles/styles.less';

import { Button, Card, Col, Input, Layout, Menu, message, Rate, Row } from 'antd';
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

function handleClick() {
  message.success("Site Web Demo: Vous avez contribué au projet !");
}

function App() {
  const gutter = [24, 24];
  return (
    <Layout className="App" >

      <Layout.Header >
        <Row justify='space-between'>
          <Col>
            <a href='/'>
              <img src={logoHeader} href='/' className='logo' alt='logo' />
            </a>
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item key="about-us">
                <a href='#screen-2'>À propos de nous</a>
              </Menu.Item>
              <Menu.Item key="contact">
                <a href='#screen-6'>Contact</a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>

      <Screen id='screen-1' justify='space-around' align='middle' className='page'>

        <Row align='middle' gutter={gutter}>
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
                    <span className='bold'>80% des clients sont satisfaits !</span>
                  </Col>
                </Row>
              </Col>

              {/* Small screen */}
              <Col lg={0} md={24} sm={24} xs={24}>
                <Row justify='center'>
                  <Button onClick={handleClick}>Devenez Beta-testeur</Button>
                </Row>
              </Col>

              {/* Large screen */}
              <Col lg={24} md={0} sm={0} xs={0}>
                <Row >
                  <Button onClick={handleClick}>Devenez Beta-testeur</Button>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={10} md={24}>
            <Row justify='center'>
              <img src={phone} alt={phone} />
            </Row>
          </Col>
        </Row>

      </Screen>

      <Screen id='screen-2' className='bg-secondary' style={{ minHeight: '500px' }}>

        <Col lg={10} md={24}>
          <Row justify='center' align='middle' gutter={gutter}>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne1} alt='people 1' />
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne2} alt='people 2' />
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne3} alt='people 3' />
              </Row>
            </Col>
            <Col span={12}>
              <Row justify='center'>
                <img className='circle' src={personne4} alt='people 4' />
              </Row>
            </Col>
          </Row>
        </Col>

        <Col lg={14} md={24}>
          <h2>Une application qui vous aide à manger localement et sainement en contrôlant votre budget</h2>
          <p>Nos utilisateurs disposent de paniers à prix réduits grâce à note politique d'achat en gros via des circuits courts !</p>
        </Col>

      </Screen>

      <Screen id='screen-3' style={{ minHeight: '750px' }}>
        <Col lg={12} md={24}>
          <h2>Faites vos courses à moindre prix avec des produits de qualité</h2>
          <p>Nos paniers de produits sont composés de produits de votre région et sont à disposition dans des entrepôts situés proche de chez-vous !
          Grâce à l’achat de ces produits en grande quantité, nous pouvons vous les proposer à un prix bas.</p>
        </Col>

        <Col lg={12} md={24}>
          <Row justify='center'>
            <img src={plat} alt='plat cuisiné' style={{ maxWidth: '100vw' }} />
          </Row>
        </Col>
      </Screen>

      <Screen id='screen-4' className='bg-plateau' style={{ minHeight: '300px' }}>
        <Col span={24}>
          <h2 className='center' style={{ color: 'white' }}>Rejoignez la communauté !</h2>
        </Col>
        <Col span={24}>
          <Row justify='center'>
            <Button onClick={handleClick}>Devenez beta-testeur</Button>
          </Row>
        </Col>
      </Screen>

      <Screen id='screen-5' style={{ minHeight: '600px' }}>
        <Col>
          <Row>
            <h2 className='center'>Nos utilisateurs disposent de paniers à prix fixes et réduits</h2>
          </Row>
        </Col>

        <Col>
          <Row justify='space-around' gutter={gutter}>

            <Col md={12} sm={24}>
              <Card>
                <Row justify='center' align='middle' gutter={[8, 16]} className='center'>
                  <Col xl={9} lg={12} md={24}>
                    <img className='circle' src={avis1} style={{ maxWidth: '100px' }} alt='avis 1' />
                    <p>Elise Watz</p>
                    <p style={{ fontSize: '12px' }}>Étudiante en droit social</p>
                  </Col>

                  <Col xl={15} lg={12} md={24}>
                    <p>“Cette application pourrait nous permettre de mieux manger plus facilement même avec un petit budget"”</p>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={12} sm={24}>
              <Card>
                <Row justify='center' align='middle' gutter={[8, 16]} className='center'>
                  <Col xl={9} lg={12} md={24}>
                    <img className='circle' src={avis2} style={{ maxWidth: '100px' }} alt='avis 2' />
                    <p>Jeanne Corma</p>
                    <p style={{ fontSize: '12px' }}>En reconversion professionnelle</p>
                  </Col>

                  <Col xl={15} lg={12} md={24}>
                    <p>“C'est compliqué de manger à la fin de chaque mois avec le prix des courses en grande surface, grâce au concept "Equi'table", je n'aurais plus besoin de penser aux fins de mois”</p>
                  </Col>
                </Row>
              </Card>
            </Col>

          </Row>
        </Col>
      </Screen>

      <Screen id='screen-6' className='bg-plat-cuisine' style={{ minHeight: '500px' }}>
        <Row justify='center' align='middle' gutter={gutter}>
          <Col>
            <Row>
              <h3 className='white center'>Profitez de 5% de réduction en devenant béta-testeur</h3>
            </Row>
          </Col>
          <Col span={24}>
            <Row justify='center' align='middle'>
              <Input placeholder='Insérez votre adresse email' style={{ maxWidth: '300px' }} />
            </Row>
          </Col>
          <Col span={24}>
            <Row justify='center' align='middle'>
              <Button onClick={handleClick}>S'inscrire</Button>
            </Row>
          </Col>
        </Row>
      </Screen>

      <Layout.Footer>
        <Screen id='footer' className='white'>
          <Row justify='space-between' align='middle' gutter={[0, 64]} style={{ fontSize: '18px' }}>

            <Col lg={6} md={12} sm={24}>
              <Row gutter={gutter}>
                <Col span={24}>
                  <a href='#screen-2'>À propos de nous</a>
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

            <Col lg={6} md={12} sm={24}>
              <Row justify='center' align='middle' gutter={gutter}>
                <Col span={24}>
                  <p className='center'>Suivez-nous sur les réseaux sociaux !</p>
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

            <Col span={24}>
              <Row justify='center'>
                <p style={{ fontSize: '16px' }}>Copyright 2021 - Equi’table | Mentions légales</p>
              </Row>
            </Col>
          </Row>

        </Screen>
      </Layout.Footer>

    </Layout >
  );
}

export default App;
