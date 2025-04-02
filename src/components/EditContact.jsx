import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../db";

function EditContact() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({ firstName: "", lastName: "", email: "" });

    useEffect(() => {
        const fetchContact = async () => {
            const snapshot = await getDoc(doc(db, "contacts", id));
            if (snapshot.exists()) {
                setContact(snapshot.data());
            }
        };
        fetchContact();
    }, [id]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "contacts", id), contact);
        navigate(`/contact/${id}`);
    };

    return (
        <div className="edit-contact-container">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} placeholder="First Name" required />
                <input type="text" name="lastName" value={contact.lastName} onChange={handleChange} placeholder="Last Name" required />
                <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" required />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditContact;
