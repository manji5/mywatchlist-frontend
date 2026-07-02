import RegisterForm from "src/components/auth/RegisterForm";

export default function Register() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle,#38bdf81a,transparent_60%)]" />

            <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
                <div className="hidden lg:block">
                    <h1 className="text-6xl font-bold leading-tight">
                        Create your
                        <span className="block text-sky-400">
                            account.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
                        Join MyWatchlist and organize your movies, TV series and anime in one place.
                    </p>
                </div>

                <RegisterForm />
            </div>
        </section>
    );
}