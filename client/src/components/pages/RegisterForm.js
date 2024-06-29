import { fetchData } from "../../main"; 
import { useState } from "react";
const RegisterForm = () => {
    const [user, setUser] = useState({
        email: '',
        username: '',
        fname: '',
        lname: '',
        password1: '',
        password2: ''
    });

    const {email, username, fname, lname, password1, password2} = user;                       //destructuring user object for RegisterForm

    const onChange = (e) => setUser({...user,[e.target.name]: e.target.value})                //each time a user types in the input field who includes onChange, the state is updated

    const onSubmit = (e) => {
        e.preventDefault();         //prevents the refreshing of the page after submission (default behavior)
        if(password1 !== password2) {
            console.log('Passwords do not match');
        } else {
            console.log("success");
            console.log(password1, password2)
        }

        console.log(user);

        fetchData('/user/register',    //sends data from client to server
            {
              email,
              username,
              fname,
              lname,
              password: password1    //password was on server but password1 is on client
            }, 
            'POST')
            .then((data) => {
                if(!data.message) {
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3 p-2 rounded ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                name= 'email'
                onChange = {onChange}
                value = {email}        //value is the state of the user object at each render
                required
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 p-2 rounded">
                <label htmlFor="exampleInputFname" className="form-label">First Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputFname" 
                name="fname"
                onChange={onChange}
                value={fname}
                required
                />
            </div>
            <div className="mb-3 p-2 rounded">
                <label htmlFor="exampleInputLname" className="form-label">Last Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputLname" 
                name="lname" 
                onChange={onChange}  //onChange is a function that updates the state of the user object
                value={lname}     //value is the state of the user object
                required
                />
            </div>
            <div className="mb-3 p-2 rounded bg-warning">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputUsername" 
                name="username" 
                onChange={onChange}
                value={username}  
                required
                />
            </div>
            <div className="mb-3 p-2 rounded bg-warning">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password1" 
                className="form-control" 
                id="exampleInputPassword1"
                name="password1"
                onChange={onChange}
                value={password1}
                required
                 />
            </div>
            <div className="mb-3 p-2 rounded bg-warning">
                <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                <input 
                type="password2" 
                className="form-control" 
                id="exampleInputPassword2" 
                name="password2"
                onChange={onChange}
                value={password2}
                required
                />
            </div>
            <div className="mb-3 p-2 form-check">
                <input 
                type="checkbox" 
                className="form-check-input" 
                id="exampleCheck1" 
                required
                />
                <label className="form-check-label" htmlFor="exampleCheck1">I accept the Terms and Conditions</label>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    );
}

export default RegisterForm;
