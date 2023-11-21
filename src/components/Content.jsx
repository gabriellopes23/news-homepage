import './Content.css'
import React, { useState } from 'react'
import ImgPrinc from '../assets/images/image-web-3-desktop.jpg'

export default props => {
    return (
        <div className='page1'>
            <div className="conteudo">
                <img src={ImgPrinc} alt="Imagem Principal" />
                <section className='title'>
                    <h1><strong>The Bright Future of Web 3.0?</strong></h1>
                    <section>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the
                            platform back into the hands of the people. But is it really fulfiling its promise?
                        </p>
                        <button>READ MORE</button>
                    </section>
                </section>
            </div>
            <div className="new">
                <h1>New</h1>
                <section>
                    <h3><a href="">Hydrogen Vs Electric Cars</a></h3>
                    <p>Will hydrogen-fuled cars ev catch up to EVs?</p>
                </section>
                <hr />
                <section>
                    <h3><a href="">The Downsides of Al Artistry</a></h3>
                    <p>What are the possible advse effects of on-demand Al image generation?</p>
                </section>
                <hr />
                <section>
                    <h3><a href="">Is VC Funding Drying Up?</a></h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </section>
            </div>
        </div>
    )
}