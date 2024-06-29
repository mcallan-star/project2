
const LoginForm = () => {
    return (
        <form>
            <div className="mb-3 bg-warning p-2 rounded ">
                <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputUsername" 
                name="usernameHelp" 
                required
                />
            </div>
            <div className="mb-3 bg-warning p-2 rounded">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password1" 
                className="form-control" 
                id="exampleInputPassword1"
                required />
            </div>
            <button type="submit" className="btn btn-danger">Login</button>
        </form>
    );
}

export default LoginForm;
