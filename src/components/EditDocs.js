import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';

export default function EditDocs() {
    let params = useParams();
    const [documentTitle, setDocumentTitle] = useState('');
    const [docsDesc, setDocsDesc] = useState('');
    const [editing, setEditing] = useState(false);

    const getQuillData = (value) => {
        setDocsDesc(value);
    };

    const startEditing = () => {
        setEditing(true);
    };

    const saveDocument = () => {
        // Your code to save the document to the database or backend goes here
        // Replace the following code with your implementation
        // updateDocumentInDatabase(params.id, { docsDesc });
        toast.success('Document Saved', {
            autoClose: 2000,
        });
        setEditing(false);
    };

    const cancelEditing = () => {
        // Reload the document content from the database or backend
        getData();
        setEditing(false);
    };

    const getData = () => {
        // Your code to retrieve the document from the database or backend goes here
        // Replace the following code with your implementation
        // const document = getDocumentFromDatabase(params.id);
        const dummyDocument = {
            title: 'Document Title',
            docsDesc: '<p>This is the document description.</p>',
        };
        setDocumentTitle(dummyDocument.title);
        setDocsDesc(dummyDocument.docsDesc);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='editDocs-main'>
            <Sidebar />
            <ToastContainer />
            <div className='editDocs-sidebar'>
            </div>
            <div className='editDocs-content'>
                <div className='editDocs-header'>
                    {editing ? (
                        <>
                            <input
                                className='editDocs-title'
                                value={documentTitle}
                                onChange={(e) => setDocumentTitle(e.target.value)}
                            />
                            <div className='editDocs-buttons'>
                                <button className='editDocs-cancel' onClick={cancelEditing}>
                                    Cancel
                                </button>
                                <button className='editDocs-save' onClick={saveDocument}>
                                    Save
                                </button>
                                <button className='editDocs-option'>File</button>
                                <button className='editDocs-option'>Edit</button>
                                <button className='editDocs-option'>Insert</button>
                                <button className='editDocs-option'>Format</button>
                                <button className='editDocs-option'>Tools</button>
                                <button className='editDocs-option'>Extension</button>
                                <button className='editDocs-option'>Help</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>{documentTitle}</h1>
                            <button className='editDocs-edit' onClick={startEditing}>
                                Edit
                            </button>
                        </>
                    )}
                </div>
                <div className='editDocs-inner'>
                    <ReactQuill
                        className='react-quill'
                        value={docsDesc}
                        onChange={getQuillData}
                        readOnly={!editing}
                    />
                </div>
            </div>
        </div>
    );
}
