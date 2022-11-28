class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            header{
                top: 0;
                position: sticky;
                background-color: black;
                top: 0px;
            }  
 
            nav{
                display: flex;
                position: sticky;
            }
            
            nav ul{
                display: flex;
                justify-content: start;
                align-items: center;
                padding: 2px 7px;
            }
            nav ul li{
                list-style: none;
                padding: 7px;
                font-size: 27px;
            }
            nav ul li a{
                font-family: 'Comfortaa', cursive;
                color: white;
                text-decoration: none;
                padding: 5px;
            }
        </style>
        <header>
            <nav>
                <ul>
                    <li><a href="home.html" target="blank">Home</a></li>
                    <li><a href="about.html" target="blank">About</a></li>
                    <li><a href="contact.html" target="blank">Contact</a></li>
                    <li><a href="services.html" target="blank">Service</a></li>
                </ul>      
            </nav>
        </header>
      `;
    }
}

customElements.define('header-component', Header);