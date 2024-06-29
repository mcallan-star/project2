import { useLocation } from "react-router-dom";
import { fetchData } from '../../main';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Foods = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    const [recipes, setRecipes] = useState([]); //state to store recipes

    const user = location.state?.user;
    // ?. is optional chaining operator   
    // example: disney.garfield?.friends?.donald  // returns undefined because garfield is not a property of disney  

    if (!user) { // if we're not logged in, redirect to login page
        navigate('/login');
    }

    useEffect(() => {
        // Call the function to fetch recipes when component(in this case this page) mounts
        getRecipes();
    }, []); // Empty dependency array means this effect runs only once on mount


    function addRecipe(e) {   //client side function to add a recipe
        e.preventDefault();
        console.log("Recipe added");
        const userId = user._id;

        fetchData('/recipe/createRecipe', //route's endpoint
            {
                title,
                description,
                userId
            },
            'POST')
            .then((data) => {
                if (!data.message) {
                    console.log(data);
                    getRecipes()
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function getRecipes() {    //client side function which uses route's endpoint

        // Fetch all recipes by the user. This is a query parameter and a query on the endpoint
        fetchData(`/recipe/getAllRecipesByUser?userId=${user?._id}`     //  ?userId=667f959718591e0fc771814c 
            , 'GET')
            .then((data) => {
                if (!data.message) {
                    console.log(data);
                    setRecipes(data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return ( // return the JSX of the page, with bootstrap classes
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>{user?.username}'s CookBook</h2>
                    <ul className="list-group">
                        {recipes.map((recipe) => (
                            <li key={recipe._id} className="list-group-item">
                                {recipe.title} - {recipe.description}
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-4">
                        Add a Recipe
                    </h2>
                    <input 
                        type="text" 
                        className="form-control my-2" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} />
                    <input 
                        type="text"
                        className="form-control my-2" 
                        placeholder="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} />
                    <button className="btn btn-primary" onClick={addRecipe}>
                        Add Your Recipe!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Foods;
