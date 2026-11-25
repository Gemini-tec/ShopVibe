function Upload(){

        const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch('http://127.0.0.1:8000/upload/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();

    alert(result.message);
    e.target.reset();

    };


    return(
        <div>

            <h2>Upload Product</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto enim fugiat similique sint ipsum atque quod repellat distinctio! Odit rerum eos fugit rem voluptate dolore id, fuga assumenda quis aliquam!
            Soluta deserunt suscipit hic, consequuntur quidem odio debitis corrupti in doloribus rerum repellendus, consectetur sunt est dolore adipisci eligendi illo atque repudiandae nisi nemo esse unde autem. Aspernatur, ducimus nisi.</p>

            <form action="" onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter name" className="form-control" required/>
                </div>


                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" name="quantity" id="quantity" placeholder="e.g 2" className="form-control" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" name="price" id="price" placeholder="e.g 500" className="form-control" required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Product Description</label>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>
                </div>


                <button type="submit" className="btn btn-success">Ulpoad Product</button>




            </form>




        </div>
    );

}

export default Upload;