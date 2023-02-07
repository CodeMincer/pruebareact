import React from 'react'
import Footer from '../componentes/footer/indexfooter'
import { Icon } from '../componentes/icons/styles/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Sobre nosotros</Footer.Title>
                    <Footer.Link href="#">Historia</Footer.Link>
                    <Footer.Link href="#">Nuestro compromiso</Footer.Link>
                    <Footer.Link href="#">Opiniones</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Legal</Footer.Title>
                    <Footer.Link href="#">Politica de privacidad</Footer.Link>
                    <Footer.Link href="#">Cookies</Footer.Link>
                    <Footer.Link href="#">Condiciones generales de venta</Footer.Link>
                    <Footer.Link href="#">Envíos y devoluciones</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contacta con nosotros</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Redes sociales</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}