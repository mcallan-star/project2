const RegisterForm = () => {
    return (
        <form>
            <div className="mb-3 p-2 rounded ">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 p-2 rounded">
                <label htmlFor="exampleInputFname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="exampleInputFname" aria-describedby="fnameHelp" />
            </div>
            <div className="mb-3 p-2 rounded">
                <label htmlFor="exampleInputLname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="exampleInputLname" aria-describedby="lnameHelp" />
            </div>
            <div className="mb-3 p-2 rounded bg-warning">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" />
            </div>
            <div className="mb-3 p-2 rounded bg-warning">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 p-2 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I accept the terms and conditions</label>
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    );
}

export default RegisterForm;
