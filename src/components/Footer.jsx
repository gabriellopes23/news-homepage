import './Footer.css'
import React from "react";
import RetroPcs from '../assets/images/image-retro-pcs.jpg'
import Laptops from '../assets/images/image-top-laptops.jpg'
import Gaming from '../assets/images/image-gaming-growth.jpg'

export default props => {
    return (
        <div className="posts">
            <div className="post">
                <section className='post-meta'>
                    <img src={RetroPcs} alt="" />
                    <section>
                        <h1>01</h1>
                        <h3>Reviving Retro Pcs</h3>
                        <p>What happens when old PCs are given modern upgrade?</p>
                    </section>
                </section>
            </div>
            <div className="post">
                <section className='post-meta'>
                    <img src={Laptops} alt="" />
                    <section>
                        <h1>02</h1>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picksfor various needsand budgets</p>
                    </section>
                </section>
            </div>
            <div className="post">
                <section className='post-meta'>
                    <img src={Gaming} alt="" />
                    <section>
                        <h1>03</h1>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities</p>
                    </section>
                </section>
            </div>
        </div>
    )
}