'use client'
import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import {Field, FieldValues,SubmitHandler,useForm} from "react-hook-form"
import useRegisterModal from "@/app/hooks/useRegisterModal"
import { useState } from "react"
import Modal from "./Modal"
import Heading from "../Heading"
import Inputs from "../inputs/Inputs"

const RegisterModal = () => {
    const registerModal=useRegisterModal()
    const [isLoading,setIsLoading]=useState(false)
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    }=useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    })

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true)
        axios.post("/api/register",data)
        .then(()=>{
            registerModal.onClose
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    const bodyContent=(
        <div className="flex flex-col gap-4">
            <Heading title="Welcome to AirBnb" subtitle="Create an Account"/>
            <Inputs 
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Register"
        actionLabel="Continue"
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
    />
  )
}

export default RegisterModal