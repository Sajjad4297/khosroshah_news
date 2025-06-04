'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './LoginForm.css';

function generateCaptcha(length = 5) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

export default function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [captcha, setCaptcha] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');

    useEffect(() => {
        setCaptcha(generateCaptcha());
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (captchaInput.toUpperCase() !== captcha) {
            setError('Incorrect CAPTCHA code.');
            return;
        } else
            setError()

        try {
            const res = await fetch('https://backend.navayetabriz.ir/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include', // Cookie will be sent automatically

            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Login failed');
            }
            const data = await res.json();
            console.log(data)

            router.push('/admin');
        } catch (err) {
            setError(err.message);
        }
    };

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setCaptchaInput('');
    };

    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <div>
                    <label>User Name</label>
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>

                    <label>Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Toggle password visibility"
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.318.264-2.577.739-3.73m2.122-2.122A9.956 9.956 0 0112 3c5.523 0 10 4.477 10 10 0 1.318-.264 2.577-.739 3.73m-2.122 2.122A9.956 9.956 0 0112 21a9.956 9.956 0 01-7.07-2.93M15 12a3 3 0 11-6 0 3 3 0 016 0zM3 3l18 18" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
                <div>
                    <label>Enter CAPTCHA:</label>
                    <div className="captcha-box">
                        <div className="captcha-text">{captcha}</div>
                        <button type="button" className="refresh-button" onClick={refreshCaptcha}>
                            🔄
                        </button>
                    </div>
                    <input
                        type="text"
                        required
                        value={captchaInput}
                        onChange={(e) => setCaptchaInput(e.target.value)}
                    />

                    {error && <p className="error-text">{error}</p>}
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}
