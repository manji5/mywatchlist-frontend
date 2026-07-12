import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

import { useRegister } from "src/features/auth/hooks";

const registerSchema = z
    .object({
        username: z
            .string()
            .min(3, "Username must be at least 3 characters.")
            .max(30, "Username must be at most 30 characters.")
            .regex(
                /^[a-zA-Z0-9_]+$/,
                "Username can only contain letters, numbers and underscores."
            ),

        email: z.email("Please enter a valid email."),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters."),

        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match.",
    });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
    const navigate = useNavigate();

    const registerMutation = useRegister();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    async function onSubmit(data: RegisterFormData) {
        console.log(data);
        try {
            await registerMutation.mutateAsync({
                username: data.username,
                email: data.email,
                password: data.password,
            });

            toast.success("Account created successfully.");

            navigate("/login");
        } catch (error: any) {
            console.log(error);

            toast.error(
                error?.response?.data?.message ?? "Registration failed."
            );
        }
    }

    return (
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <h1 className="text-3xl font-bold">
                Create Account
            </h1>

            <p className="mt-2 text-slate-400">
                Start tracking everything you watch.
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-5"
            >
                <Input
                    placeholder="Username"
                    {...register("username")}
                />
                {errors.username && (
                    <p className="text-sm text-red-500">
                        {errors.username.message}
                    </p>
                )}

                <Input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}

                <Input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
                {errors.password && (
                    <p className="text-sm text-red-500">
                        {errors.password.message}
                    </p>
                )}

                <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                    <p className="text-sm text-red-500">
                        {errors.confirmPassword.message}
                    </p>
                )}

                <Button
                    type="submit"
                    className="h-12 w-full"
                    disabled={registerMutation.isPending}
                >
                    {registerMutation.isPending ? "Creating..." : "Create Account"}
                </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-semibold text-sky-400"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}