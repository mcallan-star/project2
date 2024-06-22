const user = [
    {
        id: 1,
        username: "maddog1999"
    }
];

const foods = [
    {
        id: 858930,
        title: "Garden Kale and Frozen Blueberry smoothie"
    },
    {
        id: 1111,
        title: "Shrimp Quesadillas with fresh Pico de Gallo"
    },
    {
        id: 5555,
        title: "Chicken Teriyaki with Udon Noodles"
    },
    {
        id: 33333,
        title: "Iced Caramel Latte with Almond Milk"
    },
    {
        id: 22222,
        title: "Hot Pumpkin Spice Latte with Whipped Cream"
    },
    {
        id: 44444,
        title: "Pumpkin Cinnamon scone"
    },
    {
        id: 6662,
        title: "Spicy Garden Salsa with Tortilla Chips"
    },
    {
        id: 12,
        title: "Iced Cold Brew with Lavender Cold Foam <3"
    },
    {
        id: 13,
        title: "Hot Black Coffee"
    }
];

const Foods = (props) => {
    return (
        <div className="food-container">
            <h2>A few of {user[0].username}'s favorite foods</h2>
            <ul>
                {props.foods.map((food) => (
                    <li key={food.id}>{food.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Foods;
