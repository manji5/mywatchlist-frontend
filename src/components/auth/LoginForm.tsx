import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

import { useLogin } from "src/features/auth/hooks";
import { useAuth } from "src/hooks/useAuth";

const loginSchema = z.object({
    email: z.email("Please enter a valid email."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    rememberMe: z.boolean(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const navigate = useNavigate();

    const { login } = useAuth();

    const loginMutation = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            rememberMe: true,
        },
    });

    async function onSubmit(data: LoginFormData) {
        try {
            const response = await loginMutation.mutateAsync(data);

            login(response);

            toast.success(response.message);

            navigate("/");
        } catch {
            toast.error("Invalid email or password.");
        }
    }

    return (
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <h1 className="text-3xl font-bold">
                Welcome Back
            </h1>

            <p className="mt-2 text-slate-400">
                Sign in to continue to your watchlist.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >
                <div>
                    <Input
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <Input
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-slate-400">
                        <input
                            type="checkbox"
                            className="h-4 w-4 accent-sky-500"
                            {...register("rememberMe")}
                        />
                        Remember me
                    </label>

                    <button
                        type="button"
                        className="text-sm text-sky-400 hover:underline"
                    >
                        Forgot password?
                    </button>
                </div>

                <Button
                    type="submit"
                    className="h-12 w-full"
                    disabled={loginMutation.isPending}
                >
                    {loginMutation.isPending ? "Signing in..." : "Login"}
                </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-semibold text-sky-400"
                >
                    Register
                </Link>
            </p>
        </div>
    );
}