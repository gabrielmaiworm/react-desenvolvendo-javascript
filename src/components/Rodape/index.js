import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a rel="noreferrer" href="https://www.facebook.com/gabriel.gomesmaiworm" target="_blank">
                        <img src="/assets/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a rel="noreferrer" href="https://twitter.com/gabrielgmaiworm" target="_blank">
                        <img src="/assets/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a rel="noreferrer" href="https://www.instagram.com/gabrielmaiworm/" target="_blank">
                        <img src='/assets/ig.png' alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/assets/logo.png" alt="Logo" />
        </section>
        <section>
            <p>
                Desenvolvido por Gabriel.
            </p>
        </section>
    </footer>)
}

export default Rodape