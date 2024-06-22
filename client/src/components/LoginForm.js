const LoginForm = () => {
    return (
        <form>
            <div className="mb-3 bg-warning p-2 rounded ">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" />
            </div>
            <div className="mb-3 bg-warning p-2 rounded">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    );
}

export default LoginForm;
