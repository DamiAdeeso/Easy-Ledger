import { useState } from "react";
import BusinessLoginForm from "../components/forms/business-login";
import StaffLoginForm from "../components/forms/staff-login";

const Login = () => {
    const [loginAs, setLoginAs] = useState<'business' | 'staff'>('business')

    const base =
        "pb-1 text-lg font-medium text-center whitespace-nowrap text-black";
    const selected = "text-text border-primary border-b-2";

    return (
        <main className="w-full min-h-screen flex items-center justify-center bg-white/10">
            <section className="w-[90%] max-w-2xl my-14 mx-auto p-10 bg-background rounded-lg shadow-lg border border-white flex items-stretch justify-center flex-col gap-4">
                <nav className="inline-flex items-center justify-around w-full gap-4 pt-5">
                    <button
                        type="button"
                        className={`${base} ${loginAs === 'business' && selected}`}
                        onClick={() => {
                            setLoginAs('business')
                        }}
                    >
                        Business
                    </button>
                    <button
                        type="button"
                        className={`${base} ${loginAs === 'staff' && selected}`}
                        onClick={() => {
                            setLoginAs('staff')
                        }}
                    >
                        Staff
                    </button>
                </nav>
                {loginAs === 'business' && <BusinessLoginForm />}
                {loginAs === 'staff' && <StaffLoginForm />}
            </section>
        </main>

    );
};

export default Login