import React from 'react';
import s from './style.module.sass';
import { useForm } from "react-hook-form";


export default function SingIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log('error:', errors)

    const onSubmit = ({ login, password }) => {
        const payload = {
            email: login,
            password
        }

        fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

        return (
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        placeholder='Enter login'
                        {...register("login", {
                            required: 'Field cannot be empty',
                            maxLength: {
                                value: 20,
                                message: 'Login is too long'
                            }
                        })}
                    />
        
                    {
                        errors.login
                            ? <p className={s.error_message}>{errors.login.message}</p>
                            : ''
                    }

                    {/* {
                errors.login?.type === 'maxLength' && <p className={s.error_message}>Field is filled incorrectly</p>
            } */}
                
                </div>
        
                <div>
                    <input
                        type="password"
                        placeholder='Enter password'
                        {...register("password", {
                            required: 'Field cannot be empty',
                            minLength: {
                                value: 8,
                                message: 'Слишком короткий пароль'
                            },
                            maxLength: {
                                value: 25,
                                message: 'Слишком длинный пароль'
                            },
                            pattern: {
                                value: /^[a-z0-9]+$/i,
                                message: 'Пароль может состоять только из цифр и латинских букв'
                            }
                        })}
                    />

                    {
                        errors.password
                            ? <p className={s.error_message}>{errors.password.message}</p>
                            : ''
                    }

                    {/* {
                errors.password?.type === 'maxLength' && <p className={s.error_message}>Field is filled incorrectly</p>
            } */}
                </div>
                <button>Log in</button>
            </form>
        )
    }
