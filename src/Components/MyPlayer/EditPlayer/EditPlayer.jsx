import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const EditPlayer = () => {
    
    let obj = {
        name:'sd',
        age: '',
        shirt: '',
        nat: '',
        position: '',
        ovr: '',
        foot: ''
    };

    const { id } = useParams();
    const [loading,setLoading] = useState(true);
    const [name, setName] = useState('');
    const [shirt, setShirt] = useState('');
    const [age, setAge] = useState('');
    const [nat, setNat] = useState('');
    const [position, setPosition] = useState('');
    const [ovr, setOvr] = useState('');
    const [foot, setFoot] = useState('');

    const [player, setPlayer] = useState(null);

    const navigate = useNavigate();
    const baseURL = `http://localhost:8000/myplayer/${id}`;
    
    const [formData, setFormData] = useState(obj);

    const createForma = (e) => {
        e.preventDefault();
        setLoading(false);
        dataInput(name, shirt, age, nat, position, ovr, foot)
        navigate('/my-player');
    }


    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setName(response.data.name);  
                setShirt(response.data.shirt);
                setAge(response.data.age);
                setNat(response.data.nat);
                setPosition(response.data.position);
                setOvr(response.data.ovr);
                setFoot(response.data.foot);
            })

    }, []);


    const dataInput = async (name, shirt, age, nat, position, ovr, foot) => {
        axios.patch(baseURL, {
            name: name,
            age: age,
            shirt: shirt,
            nat: nat,
            position: position,
            ovr: ovr,
            foot: foot
        }).catch((error) => {
            console.error('Error creating player:', error);
        });
    }


  return (
    <div className='create'>
    <div class="form-container">
        <h2>Edit Player</h2>
        <form id="player-form" onSubmit={createForma}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="shirt">Shirt</label>
                <input type="number" id="shirt" name="shirt" value={shirt} onChange={(e) => setShirt(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="nat">Nationality</label>
                <input type="text" id="nat" name="nat" value={nat} onChange={(e) => setNat(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="position">Position</label>
                <input type="text" id="position" name="position" value={position} onChange={(e) => setPosition(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="ovr">Overall</label>
                <input type="number" id="ovr" name="ovr" value={ovr} onChange={(e) => setOvr(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="foot">Foot</label>
                <input type="text" id="foot" name="foot" value={foot} onChange={(e) => setFoot(e.target.value)} required />
            </div>
            <div class="form-group">
                {loading && <button type="submit">Save</button>}
                {!loading && <button type="submit">Save...</button>}
            </div>
        </form>
    </div>
</div>
  )
}

export default EditPlayer