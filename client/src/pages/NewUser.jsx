import "./newUser.css";

export default function NewUser() {

    /* OnClick Submit show alert. e.preventDefault */
    return (
        <div className="newUser">
            <h1 className="userTitle">Edit User</h1>
            <form className="newUserForm">
                {/* <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div> */}
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                {/* <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div> */}
                <div className="newUserItem">
                </div>
                <div className="newUserButtonDiv">
                    <button className="newUserButton">Send Email</button>
                </div>
                <div className="newUserItem">
                </div>
                {/* <div className="newUserItem">
                    <label>Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div> */}
                
                
                
                
            </form>
        </div>
    );
}