//  http://localhost:5000/user/register
// {username: "cathy123", password: "teamwork123"}
// POST GET PUT DELETE are the method types
export async function fetchData(route='', data={}, methodType) {
    //sending over out data to specified route in server
    const response = await fetch(`http://localhost:5000${route}`, {

        method: methodType,
        headers:{

            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  //converts data from the body into JSON string  
    });

    //dealing with response from server
    if(response.ok) {
    return await response.json();
    } else {
      throw await response.json();
    }
}