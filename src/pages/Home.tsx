import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Figure } from "../components/Figure";
import { Contact } from "../components/Contact";
import  image1  from "../assets/image-1.jpg";
import  image3  from "../assets/image-3.jpg";
import  image4  from "../assets/image-4.jpg";
import  iconScreen  from "../assets/icons8-imac-100.png";
import  iconMenu  from "../assets/icons8-menu-100.png";
import  iconChecked  from "../assets/icons8-checked-100.png";
import  iconFacebook  from "../assets/icons8-facebook-48.png";
import  iconTwitter from "../assets/icons8-twitter-48.png";
import  iconInstagram from "../assets/icons8-instagram-50.png";

export function Home() {
    return (
        <>
            <header>
                <Banner className="container-fluid d-flex justify-content-center align-items-center text-center">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white">Minha Primeira Página Com React</h1>
                        </div>
                    </div>
                </Banner>
            </header>

            <main>
                <Container $display="flex" $padding="100px" $justifyContent="center" $wrap>
                    <Card>
                        <img className="w-25" src= {iconScreen} alt="" />
                        <h5>Somente para desktop</h5>
                        <small>Vamos aprender como utilizar um framework</small>
                    </Card>                 
                    <Card>
                        <img className="w-25" src= {iconMenu} alt="" />

                        <h5>Criado com componentes</h5>
                        <small>Utilizamos o Styled Components</small>
                    </Card>                 
                    <Card>
                        <img className="w-25" src= {iconChecked} alt="" />

                        <h5>Fácil aproveitamento</h5>
                        <small>Estamos no caminho</small>
                    </Card>                 
                </Container>
                
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 p-0">
                        <Figure className="w-100" $imageUrl= {image1} ></Figure>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <h2>lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nulla impedit excepturi molestiae asperiores, qui repellendus voluptatibus autem maxime obcaecati, iure voluptate aliquid laudantium provident vel perferendis sapiente quaerat! Nobis!
                            Rerum, laudantium corrupti quaerat commodi fugiat beatae nobis nulla non sit necessitatibus voluptate officia doloribus provident odit facere sequi rem, iusto harum a eos ducimus. Laboriosam velit nihil aliquam reprehenderit!
                            Illum perferendis illo reiciendis veniam nesciunt exercitationem suscipit voluptates vero dolorem eligendi, et eaque quo modi? Soluta accusantium nisi explicabo! Ex neque amet maxime debitis quam id obcaecati, sint fuga.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex flex-row-reverse">
                        <div className="col-12 col-md-6 p-0 ">
                        <Figure className="w-100" $imageUrl= {image3} ></Figure>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <h2>lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nulla impedit excepturi molestiae asperiores, qui repellendus voluptatibus autem maxime obcaecati, iure voluptate aliquid laudantium provident vel perferendis sapiente quaerat! Nobis!
                            Rerum, laudantium corrupti quaerat commodi fugiat beatae nobis nulla non sit necessitatibus voluptate officia doloribus provident odit facere sequi rem, iusto harum a eos ducimus. Laboriosam velit nihil aliquam reprehenderit!
                            Illum perferendis illo reiciendis veniam nesciunt exercitationem suscipit voluptates vero dolorem eligendi, et eaque quo modi? Soluta accusantium nisi explicabo! Ex neque amet maxime debitis quam id obcaecati, sint fuga.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-12 col-md-6 p-0 ">
                            <Figure className="w-100" $imageUrl= {image4} ></Figure>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                            <h2>lorem ipsum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, nulla impedit excepturi molestiae asperiores, qui repellendus voluptatibus autem maxime obcaecati, iure voluptate aliquid laudantium provident vel perferendis sapiente quaerat! Nobis!
                            Rerum, laudantium corrupti quaerat commodi fugiat beatae nobis nulla non sit necessitatibus voluptate officia doloribus provident odit facere sequi rem, iusto harum a eos ducimus. Laboriosam velit nihil aliquam reprehenderit!
                            Illum perferendis illo reiciendis veniam nesciunt exercitationem suscipit voluptates vero dolorem eligendi, et eaque quo modi? Soluta accusantium nisi explicabo! Ex neque amet maxime debitis quam id obcaecati, sint fuga.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Contact $display="flex" $alignItems="center" $justifyContent="center" $height="200px" $fluid>
                    <h1>Contato</h1>
                </Contact>

                <Container $display="flex" $direction="row"  $height="200px" $alignItems="center" $fluid $wrap>
                    <Container  $display="flex" $widht="400px" $wrap $gap="10px">
                        <span><a href="#">About</a></span>
                        <span>◾</span>
                        <span><a href="#">Contacts</a></span>
                        <span>◾</span>
                        <span><a href="#">Terms of Use</a></span>
                        <span>◾</span>
                        <span><a href="#">Privacy Policy</a></span>
                        <span className="opacity-75">©Your Website 2020. All Rights Reserved.</span>
                    </Container>

                    <Container $display="flex" $gap="20px">
                        <span><a href="#"><img src={iconFacebook} alt="" /></a></span>
                        <span><a href="#"><img src={iconTwitter} alt="" /></a></span>
                        <span><a href="#"><img src={iconInstagram} alt="" /></a></span>
                    </Container>
                </Container>
            </footer>
        </>
    )
}