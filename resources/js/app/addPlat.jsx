import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"

export default function AddPlat() {

    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [supplements, setSupplements] = useState([])
    const [garnitures, setGarnitures] = useState([])

    const getAllGarnitures = async() => {
        try {
            await axios.get('/api/garnitures')
            .then(res => {
                setGarnitures(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    const getAllSupplements = async() => {
        try {
            await axios.get('/api/supplements')
            .then(res => {
                setSupplements(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    const getAllCategories = async() => {
        try {
            await axios.get('/api/categories')
            .then(res => {
                setCategories(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllCategories()
        getAllGarnitures()
        getAllSupplements()
    }, [])

    const onSubmit = async(data) => {

        setLoading(true)

        try {
            const formData = new FormData()

            formData.append("nom", data.nom)
            formData.append("prix", data.prix)
            formData.append("categorie", data.categorie)
            formData.append("description", data.description)
            formData.append("image", data.image[0])
            formData.append("supplements", data.supplements)
            formData.append("garnitures", data.garnitures)

            await axios.post("/api/addPlat", formData)
            .then(res => {
                if(res.status == 200) {
                    toast.success("Votre plat a été enregister avec success !")
                    document.getElementById("form").reset();
                }
                console.log(res)
            })

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            style={{ display: "flex", flexDirection: "column", alignItems: "center"}}
            id='form'
        >
            <div style={{ width: "70%"}}>
                <input 
                    type="text"   
                    {...register("nom", { required: true })}
                    placeholder='Entrer le nom'
                    style={{ width: "100%", height: "7vh", margin: "0.5em 0", padding: "0.5em" }}
                />
            </div>
            <div style={{ width: "70%"}}>
                <input 
                    type="number"  
                    {...register("prix", { required: true })}
                    placeholder='Entrer le prix'
                    style={{ width: "100%", height: "7vh", margin: "0.5em 0", padding: "0.5em" }}
                />
            </div>
            <div style={{ width: "70%"}}>
                <input 
                    type="file"  
                    {...register("image", { required: true })}
                    style={{ width: "100%", height: "7vh", margin: "0.5em 0", padding: "0.5em" }}
                />
            </div>
            <div style={{ width: "70%"}}>
                <textarea 
                    name="" id="" 
                    {...register("description", { required: true })}
                    style={{ width: "100%", height: "7vh", margin: "0.5em 0", padding: "0.5em" }}
                >
                </textarea>
            </div>
            <div style={{ width: "70%"}}>
                <select 
                    name="" id=""
                    {...register("categorie", { required: true })}
                    style={{ width: "100%", height: "7vh", margin: "0.5em 0", padding: "0.5em" }}
                >
                    <option value="">Select</option>
                    {categories.map(item => (
                        <option value={item.id} key={item.id}>{item.nom}</option>
                    ))}
                </select>
            </div>
            <div style={{ width: "70%"}}>
                <select 
                    name="" id="" multiple
                    {...register("garnitures", { required: true })}
                    style={{ width: "100%", height: "20vh", margin: "0.5em 0", padding: "0.5em" }}
                >
                    <option value="">Select</option>
                    {garnitures.map(item => (
                        <option value={item.id} key={item.id}>{item.nom}</option>
                    ))}
                </select>
            </div>
            <div style={{ width: "70%"}}>
                <select 
                    name="" id="" multiple
                    {...register("supplements", { required: true })}
                    style={{ width: "100%", height: "20vh", margin: "0.5em 0", padding: "0.5em" }}
                >
                    <option value="">Select</option>
                    {supplements.map(item => (
                        <option value={item.id} key={item.id}>{item.nom}</option>
                    ))}
                </select>
            </div>
            <button 
                style={{ width: "70%", height: "6vh", cursor: "pointer", marginBottom: "1em"}}>
                Ajouter un plat
            </button>
        </form>
    )
}
