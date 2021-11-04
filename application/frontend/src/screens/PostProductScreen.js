import './PostProductScreen.css';


const PostProductScreen = () => {

    //const [selectedFile, setSelectedFile] = useState();
    //const [isFilePicked, setIsFilePicked] = useState(false);



    return (
        <>
            <div id="details_box">

                <form action="/" method="POST" enctype="multipart/form-data">

                    <div id="img_upload">
                        <label for="image">Upload Image: </label>
                        <input type="file" id="image"
                            name="image" value="" required />
                    </div>



                    <div id="listing_name" class="product_details">
                        <label for="name">Listing Title: </label>
                        <input type="text" id="name" placeholder="Name"
                            value="" name="name" required />
                    </div>

                    <div id="department" class="product_details">
                        <label for="name">Department: </label>
                        <input type="text" id="name" placeholder="Name"
                            value="" name="name" required />
                    </div>

                    <div id="description" class="product_details">
                        <label for="desc">Product Description:</label>
                        <textarea id="desc" name="desc" value="" rows="2"
                            placeholder="Description" required>
                        </textarea>
                    </div>

                </form>
            </div>



        </>
    );
};

export default PostProductScreen;