interface Props {
    username: string;
    avatar?: string | null;
}

export default function ProfileAvatar({
    username,
    avatar,
}: Props) {

    if (avatar) {
        return (
            <img
                src={avatar}
                alt={username}
                className="h-40 w-40 rounded-3xl border border-white/10 object-cover shadow-xl"
            />
        );
    }

    return (
        <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-sky-500 text-6xl font-bold text-white shadow-xl">
            {username.charAt(0).toUpperCase()}
        </div>
    );
}