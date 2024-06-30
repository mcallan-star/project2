import { useLocation } from "react-router-dom";
import { fetchData } from '../../main';
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../context/userContext";

const Foods = (props) => {

    const { user } = useContext(UserContext)    //we are using the UserContext to get the user object

    const navigate = useNavigate();

    const location = useLocation();

    const [title, setTitle] = useState('');  //empty string for title

    const [description, setDescription] = useState('');  //empty string for description

    const [recipes, setRecipes] = useState([]); //state to store recipes

    useEffect(() => {
        console.log("user changed", user);
        if (!user._id) {
            console.log("User not authenticated", "Redirecting to login");
            navigate('/login');
        } else {
            getRecipes();
        }
    }, [user._id]);

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
                    setTitle('');
                    setDescription('');
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
                        placeholder="Title of a recipe . . . "
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Write about it!"
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
