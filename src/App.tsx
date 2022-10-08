import Input from 'components/Input';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';

function App() {
    const phoneInnerDivRef = useRef<HTMLDivElement>(null);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const enabled = !!username && !!password;

    useEffect(() => {
        if (!phoneInnerDivRef || !phoneInnerDivRef.current) return;

        let images = phoneInnerDivRef.current.querySelectorAll('img'),
            total = images.length,
            current = 0;

        const startSlider = () => {
            if (current > 0) images[current - 1].classList.add('opacity-0');
            else images[total - 1].classList.add('opacity-0');

            images[current].classList.remove('opacity-0');
            current += 1;

            if (current === total) current = 0;
        };

        startSlider();
        const interval = setInterval(startSlider, 3000);

        return () => clearInterval(interval);
    }, [phoneInnerDivRef]);

    return (
        <div className="h-full flex flex-wrap overflow-auto items-center justify-center gap-x-8">
            <div className="hidden md:block relative h-[581px] w-[380px] bg-phone-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
                <div ref={phoneInnerDivRef} className="absolute w-[250px] h-[539px] top-[27px] right-[18px]">
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" className="w-full h-full absolute inset-0 opacity-0 transition-opacity duration-1000 ease-linear" />
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" className="w-full h-full absolute inset-0 opacity-0 transition-opacity duration-1000 ease-linear" />
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="" className="w-full h-full absolute inset-0 opacity-0 transition-opacity duration-1000 ease-linear" />
                    <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" className="w-full h-full absolute inset-0 opacity-0 transition-opacity duration-1000 ease-linear" />
                </div>
            </div>

            <div className="w-[350px] grid gap-y-2.5">
                <div className="bg-white border pt-[46px] px-[40px] pb-3.5">
                    <a href="#" className="flex justify-center mb-8">
                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Instagram logo" className="h-[51px]" />
                    </a>

                    <form className="grid gap-y-1.5">
                        <Input value={username} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} type="text" label="Telefon numarası, kullanıcı adı veya e-posta" />

                        <Input value={password} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} type="password" label="Şifre" />

                        <button type="submit" disabled={!enabled} className="h-[30px] rounded bg-brand font-semibold text-white text-sm mt-2 disabled:opacity-50">
                            Giriş Yap
                        </button>
                    </form>

                    <div className="flex items-center justify-center mt-3 mb-[18px]">
                        <div className="h-px bg-gray-300 flex-1" />
                        <span className="px-4 text-sm font-semibold text-gray-400 text-[13px]">YA DA</span>
                        <div className="h-px bg-gray-300 flex-1" />
                    </div>

                    <a href="#" className="flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook">
                        <AiFillFacebook size={20} />
                        <span>Facebook ile Giriş Yap</span>
                    </a>

                    <a href="#" className="text-xs text-link flex items-center justify-center mt-5">
                        Şifreni mi unuttun?
                    </a>
                </div>

                <div className="bg-white border p-4 text-sm text-center">
                    <span>Hesabın yok mu?</span> <span className="font-semibold text-brand">Kaydol</span>
                </div>
            </div>
        </div>
    );
}

export default App;
