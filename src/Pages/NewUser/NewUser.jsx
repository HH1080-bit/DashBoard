import React from 'react';
import "./NewUser.css"
const NewUser = () => {
    return (
    
    <div className='newUser'>

            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
            <div className="newUserItem">
                    <label>UserName</label>
                    <input type="text" placeholder='John'/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='John Smith'/>
                </div>
                <div className="newUserItem">
                    <label>E-mail</label>
                    <input type="email" placeholder='John@gmail.com'/>
                </div>
                <div className="newUserItem">
                    <label>PassWord</label>
                    <input type="password" placeholder='password'/>
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+1 234 56 89'/>
                </div>
                <div className="newUserItem">
                    <label>Adress</label>
                    <input type="text" placeholder='New York | USA'/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                    <input type="radio" 
                            name='gender'
                            id='Male'
                            value='Male'
                    />
                    <label for="male">Male</label>
                    <input type="radio" 
                            name='gender'
                            id='Female'
                            value='Female'
                    />
                    <label for="Female">Female</label>
                    <input type="radio" 
                            name='gender'
                            id='Others'
                            value='Others'
                    />
                    <label for="Others">Others</label>

                    </div>
                    <div className="newUserItem">
                        <label>Active</label>
                        <select className='newUserSelect' id='active' name='active'>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>

                        </select>
                    </div>
                   
                </div>
            <button className="newUserButton">Create</button>
            </form>
    </div>
    
    );
}



export default NewUser;