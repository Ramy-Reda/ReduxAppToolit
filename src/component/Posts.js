import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addPosts, Delete, update } from '../redux/addUser';
import './post.css';

export default function Posts() {
    const [title, setTitle] = useState('');
    const [discription, setDiscription] = useState('');
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items);
    const [isEdite, setIsIdite] = useState(false);
    const [id, setId] = useState(null);
    const[updateTitle, setUpdateTitle] = useState("");
    const[updateDiscription, setUpdateDiscription] = useState("");
    return (
        <div>
            <div className="header">
                <h1>create a new post with react redux</h1>
            </div>
            <div className='form'>
                <input type='text' 
                placeholder='Enter Your Title'  value ={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input type='text' 
                placeholder='Enter Your Discription' value = {discription}
                onChange={(e) => setDiscription(e.target.value)}
                />

                <button onClick={ () => {
                            setDiscription("");
                            setTitle("");
                            dispatch(addPosts({id: posts.length + 1, title, discription}))
                    }
                }> Create</button>
            </div>
            <div className='posts'>
                {posts.length > 0 ? posts.map(post => <div key={post.id} className='post'>
                        <h3>{post.title}</h3>
                        <p>{post.discription}</p>
                        <button onClick= {() => 
                            { 
                                setIsIdite(true)
                                setId(post.id)
                            }
                            }>Edite</button>
                        <button onClick={() => dispatch(Delete({id : post.id}))}>Delete</button>
                        <br />
                        { isEdite && id === post.id &&
                            <>
                                <input type="text" placeholder="Update your title" onChange={(e) => setUpdateTitle(e.target.value)}/>
                                <input type="text" placeholder="Update your Description" onChange={(e) => setUpdateDiscription(e.target.value)} />
                                <button onClick={() => {
                                    dispatch(update({id : post.id, title : updateTitle, discription : updateDiscription}))
                                }}>Update</button>
                            </>
                        }
                    </div>): "ther is no posts"}
            </div>
        </div>
    )
}
