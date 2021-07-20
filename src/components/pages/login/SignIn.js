import React, {useState} from 'react'
import { useForm }  from 'react-hook-form';

function SignIn() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit((data)=>{
        console.log(data);
    })
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center" > 
           <div className="max-w-md w-full mx-auto">
            <div className="text-center font-medium text-xl"> Something</div>
            <div className="text-3xl font-bold text-gray-900 mt-2 text-center">another text</div>
           </div>
           <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
               <form action="" className="space-y-6" onSubmit={onSubmit}>
                   <div>
                       <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                       {/* <input ref={register()} name="email" type="name" className="w-full p-2 border border-gray-300 rounded mt-1"/> */}
                       <input {...register("email", { required: true })} className="w-full p-2 border border-gray-300 rounded mt-1" />
                   </div>
                   <div>
                       <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
                       {/* <input ref={register()} name="password" type="text" className="w-full p-2 border border-gray-300 rounded mt-1"/> */}
                       <input {...register("password", { required: true, maxLength: 20 })} className="w-full p-2 border border-gray-300 rounded mt-1" />
                   </div>
                   <div className="flex items-center justify-between">
                       <div className="flex items-center">
                           <input  type="checkbox" className="h-4 w-4 text-blue-300 rounded"/>
                           <label htmlFor="" className="ml-2 text-sm text-gray-600">Remember me</label>
                       </div>
                       <a href="" className="font-medium text-sm text-blue-500"> Forget Password ?</a>
                   </div>
                   <div>
                       <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm"> Submit</button>
                   </div>
               </form>
           </div>
        </div>
    )
}

export default SignIn
