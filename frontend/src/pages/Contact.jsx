import '../css/Contact.css'

function Contact() {

    return(
        <div>
            <h1 >Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestiae ipsum deserunt dolorem sequi inventore, modi, quasi amet aliquam et provident soluta? Culpa porro beatae quae doloremque repellat. Asperiores, laborum!
            Veritatis adipisci perspiciatis suscipit obcaecati amet natus ullam corrupti temporibus officia illum porro iure, unde vitae itaque eum ipsam vero. Omnis eligendi aspernatur fugit perspiciatis et voluptatem, voluptates corporis veniam?</p>

            <table className='table table-bordered' >
                <tr className='table-dark'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Accomodation</th>
                    <th>Payment</th>
                </tr>

                <tr>
                    <td>Samuel Tod </td>
                    <td>samuel@gmail.com </td>
                    <td>0709808787</td>
                    <td>Yes </td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>Jane Kariuki </td>
                    <td>jane@gmail.com </td>
                    <td>0709808787</td>
                    <td>Yes </td>
                    <td>Paid</td>
                </tr>

                <tr>
                    <td>Damaris Wong </td>
                    <td>wong@gmail.com </td>
                    <td>0700000000</td>
                    <td>Yes </td>
                    <td>Pending</td>
                </tr>

                <tr>
                    <td>Brian Famba Tod </td>
                    <td>yobra@gmail.com </td>
                    <td>0750009932</td>
                    <td>NO </td>
                    <td>Pending</td>
                </tr>

                <tr>
                    <td>Edwin Ruger </td>
                    <td>edwin@gmail.com </td>
                    <td>0789231343</td>
                    <td>Yes </td>
                    <td>Paid</td>
                </tr>
            </table>
        </div>
    );
    
}

export default Contact;