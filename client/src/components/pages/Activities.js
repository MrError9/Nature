import React from 'react'
import {Link} from 'react-router-dom'

function Activities() {
    return (
        <section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src={require('../../img/video.mp4')} type="video/mp4" />
                        <source src={require('../../img/video.webm')} type="video/webm" />
                        Your browser is not supported!
                    </video>
                </div>

                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>
                <div class="row">
                    <div class="story">
                        <div className="story__shape">
                            <img className='story__img' src="https://cdn.pixabay.com/photo/2017/10/25/12/13/landscapes-2887796_960_720.jpg" />
                        </div>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="story">
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-top-huge">
                    <Link to="" class="btn-text">Read all stories &rarr;</Link>
                </div>
            </section>
    )
}

export default Activities
