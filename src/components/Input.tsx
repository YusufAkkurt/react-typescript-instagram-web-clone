import { useEffect, useRef, useState } from 'react';

const Input = ({ type, label, ...props }: any) => {
    const [show, setShow] = useState<boolean>(false);
    const [inputType, setInputType] = useState<string>(type || 'text');

    useEffect(() => {
        if (show) setInputType('text');
        else setInputType('password');
    }, [show]);

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
            <input {...props} type={type === 'password' ? inputType : type} required className=" w-full h-[38px] outline-none text-xs px-2 peer valid:pt-[10px]" />

            <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none -translate-y-1/2 text-xs text-gray-500 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>

            {type === 'password' && props.value && (
                <div onClick={() => setShow((_show) => !_show)} className="h-full flex items-center text-sm font-semibold pr-2 cursor-pointer select-none">
                    {show ? 'Gizle' : 'Göster'}
                </div>
            )}
        </label>
    );
};

export default Input;
