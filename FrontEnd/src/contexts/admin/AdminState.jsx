import { useState, useEffect } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
    const [admin, setAdmin] = useState({});
    const [token, setToken] = useState(() => {
        // Retrieve token from Local Storage on initialization
        return localStorage.getItem('adminToken') || '';
    });

    const adminSignup = async (name, email, password) => {
        const response = await fetch('http://localhost:5000/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
    };

    const adminLogin = async (name, email, password) => {
        const response = await fetch('http://localhost:5000/admin/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        if (json.token) {
            setToken(json.token); // Update state
            localStorage.setItem('adminToken', json.token); // Persist token in Local Storage
        }
        console.log(json.token);
    };

    const fetchAdmin = async () => {
        const storedToken = localStorage.getItem('adminToken'); // Use token from Local Storage
        if (!storedToken) {
            console.error("No token found. Please log in.");
            return;
        }

        const response = await fetch('http://localhost:5000/admin/fetchadmin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'token': storedToken
            },
        });
        const json = await response.json();
        console.log(json);
        setAdmin(json);
    };

    useEffect(() => {
        // If token changes, update Local Storage
        if (token) {
            localStorage.setItem('adminToken', token);
        } else {
            localStorage.removeItem('adminToken'); // Clear token if it becomes empty
        }
    }, [token]);

    return (
        <AdminContext.Provider value={{ admin, setAdmin, adminSignup, adminLogin, fetchAdmin, token }}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminState;
