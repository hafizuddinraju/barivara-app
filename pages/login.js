import Head from 'next/head'

import Link from 'next/link'
import styles from './styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react"
import { useFormik } from 'formik';
import login_validate from '../lib/validate';
import { useRouter } from 'next/router';
import LayoutLogin from '../layout/layoutLogin';
import { updateUser } from '../lib/helperUser';


export default function Login(){
   const {data:session} = useSession()
//    console.log(session?.user?.email);

    const [show, setShow] = useState(false)
    const router = useRouter()
    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate : login_validate,
        onSubmit
    })

   

    async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/"
        })

        if(status.ok) router.push(status.url)
        
    }

    // Google Handler function
    // async function handleGoogleSignin(){
        
    //     // console.log('click')
    //     // const rl={
    //     //     username:session?.user?.name,
    //     //     email:session?.user?.email,
    //     //     role:'user'
    //     // }
    //     // console.log(rl);
    //     signIn('google',{
    //         role:'user'
    //     })
     
    // //   await  updateUser(session?.user?.email, rl )
        
      
    // }

    // // Github Login 
    // async function handleGithubSignin(){
    //     signIn('github', { callbackUrl : "/"})
    // }

    return (
        <LayoutLogin>

        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Dynamically evisculate integrated data rather than distinctive materials.</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                   
                </div>
                {formik.errors.email && formik.touched.email ? <span className='text-rose-500 font-bold text-sm'>{formik.errors.email}</span> : <></>}

                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                   
                </div>

                {formik.errors.password && formik.touched.password ? <span className='text-rose-500 font-bold text-sm'>{formik.errors.password}</span> : <></>}
                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                {/* <div className="input-button border border-green-50">
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div> */}
                
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link href={'/signup'}><span className='text-blue-700'>Sign Up</span></Link>
            </p>
        </section>
        </LayoutLogin>

        
    )
}