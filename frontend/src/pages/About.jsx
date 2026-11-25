//Internal CSS

function About(){

    const headingstyles = {
        color:"red", 
        fontWeight:"bold",
        fontSize:"60px"
    }

    const paragraphStyles = {
        fontStyle:"italic"
    }

    const imageStyles = {
        width: "400px",
        height: "200px",
        borderRadius: "10px"
    }


    return(
        <div>
            <h1 style={headingstyles}>About ShopVibe</h1>

            <marquee behavior="" direction="" style={paragraphStyles}>Want to Knnow more?</marquee>

            <p style={paragraphStyles}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In quas perferendis nesciunt sit consequatur, quam accusantium optio illo amet sunt modi, voluptas aliquid. Quia minus, quisquam in quos necessitatibus placeat?
            Enim illo delectus exercitationem repellat quisquam rem ipsa earum ea incidunt fugit odio totam eius aut ullam aliquid dolorem est saepe, quo harum ad rerum maiores soluta illum quod! Obcaecati?
            Voluptatum consequatur eius commodi totam temporibus minus ullam suscipit quod debitis consectetur, nulla atque quia. Aperiam commodi quam voluptates magnam, eaque incidunt quod nemo animi iusto voluptatum, nobis quae consectetur!</p>

            <img src="images/car2.png" alt="" style={imageStyles}/>

        </div>
    )


}

export default About;