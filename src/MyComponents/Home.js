import React from 'react';
import { Button } from 'react-bootstrap';

export const Home = () => {
    let paragraphStyling = {
        color: "white",
        backgroundImage: 'URL("https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg")',
        width: "100%",
        height: "90vh",
        textAlign: "justify",
        padding: "40px",



    }
    return (

        <div>
            <p className="paragraphStyling" style={paragraphStyling}>To travel from one place to another for different purposes is generally called travelling. People do not travel always for the same purposes. Someone travels to gain knowledge and experience, someone travels for pleasure, someone travels for business purposes etc. It has much educative value. It is a part of education. Our education and book knowledge remain imperfect without travelling. We can learn many things from travelling. It teaches us to trade and commerce, language, sociology, customs, culture, history, geography and so on. Therefore, the educative value of travelling beggars description. Besides this, there are some special benefits of travelling. If a man stays in one place for a long time, he becomes monotonous. Travelling removes our monotony and gives pleasure. It also broadens our outlook and refreshes our mind. A good traveller can easily educate others. He can give us first-hand knowledge of men and matters of another country. I like travelling very much.<br /> <br />

                <Button variant="light" size="lg">Explore!!</Button>{' '}

            </p>
        </div>
    )
}
