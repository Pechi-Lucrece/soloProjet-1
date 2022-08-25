import React from "react"


export default function App() {
    return (
        <div className="container">
          <header>
            <img className="profil" src="nina.jpg" alt="profil" width="200px" />
            <div>
              <h1>Péchi Lucrèce</h1>
              <h3>Developeur web</h3>
              <h4>travaille à son propre compte</h4>
            </div>
            <div className="iconeHaut">
              <div className="mail">
                <img src="mail.jpg" width ="20px" className="icone1"/>
                <span>E-mail</span>
              </div>
              <div className="linkedin">
                <img src="linkedin.png" width = "20px" className="icone2" />
                <span>Linkedin</span>
              </div>
            </div>
          </header>

          <main>
            <h2>About</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil iste laborum, consequatur non molestias dolores doloribus alias cum minus molestiae in quo dignissimos, corporis dolor vel accusamus quis ea tempora?</p>
            <h2>Interests</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, sit? Aperiam nostrum atque quibusdam voluptas mollitia repudiandae, blanditiis non dolores adipisci facere quo molestias eveniet velit praesentium quae aliquid fugit!</p>
          </main>

          <footer>
            <img src="tweeter.png" alt=""  width="30px" className="foot" />
            <img src="facebook.png" alt="" width ="30px" className="foot" />
            <img src="instagram.png" alt=""  width = "30px" className="foot" />
            <img src="github.png" alt=""  width="30px" className="foot" />
          </footer>
        </div>
    )
}