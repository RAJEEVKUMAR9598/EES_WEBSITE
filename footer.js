class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <style>
            footer{
                position: absolute;
                left: 0;
                right: 0;
                background-color:  black;
                height: auto;
                width: 100vw;
                padding-top: 30px;
                color: white;
            }   
            footer{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
            footer h3{
                font-size: 1.8rem;
                font-weight:400;
                text-transform: uppercase;
                line-height: 3rem;
            }
            .social{
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 1rem 0 3rem 0;
            }
            .social li{
                margin: 0px 7px;
            }
            .social a{
                text-decoration: none;
                color: white;
            }
            .social a i{
                font-size: 28px;
                transition: color .4s ease;
            }
            .social a:hover{
                color: orange;
            }
            .copyright{
                background: #000;
                width: 100vw;
                padding: 10px 0;
                text-align: center;
            }
            .copyright p{
                font-size: 14px;
                word-spacing: 2px;
                text-transform: capitalize;
            }
        </style>
        
        <footer class="footer">
            <h3>Electrical Enigineering Society</h3>
            <ul class="social">
                <li><a href="https://www.instagram.com/ees_iet/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://m.facebook.com/100064187704911/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ees-iet-lucknow-4421a1186" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="mailto:ees.ietlko@gmail.com" target="_blank"><i class="fab fa-google"></i></a></li> 
            </ul>
            <div class="copy">copyright@2022</div>
        </footer>
      `;
    }
}

customElements.define('footer-component', Footer);