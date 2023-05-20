import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

export default function Docs() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [docsData, setDocsData] = useState([]);
    const [title, setTitle] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addData = () => {
        // Your code to add data to the database or backend goes here
        // Replace the following code with your implementation
        // addDataToDatabase({ title, docsDesc });
        alert('Data Added');
        handleClose();
    };

    const getData = () => {
        // Your code to retrieve data from the database or backend goes here
        // Replace the following code with your implementation
        // const data = getDataFromDatabase();
        const dummyData = [
            { id: 1, title: 'Document 1', docsDesc: 'Description 1' },
            { id: 2, title: 'Document 2', docsDesc: 'Description 2' },
            { id: 3, title: 'Document 3', docsDesc: 'Description 3' },
        ];
        setDocsData(dummyData);
    };

    const getID = (id) => {
        navigate(`/editDocs/${id}`);
    };

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <div className='docs-main'>
            <h1>Docs Clone</h1>

            <button className='add-docs' onClick={handleOpen}>
                Add a Document
            </button>

            <div className='grid-main'>
                {docsData.map((doc) => (
                    <div className='grid-child' key={doc.id} onClick={() => getID(doc.id)}>
                        <p>{doc.title}</p>
                        <div dangerouslySetInnerHTML={{ __html: doc.docsDesc }} />
                    </div>
                ))}
            </div>

            <Modal open={open} setOpen={setOpen} title={title} setTitle={setTitle} addData={addData} />
        </div>
    );
}
