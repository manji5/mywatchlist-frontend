interface Props {
    poster: string | null;
}

export default function HeroPoster({ poster }: Props) {
    return (
        <div className="mx-auto shrink-0 lg:mx-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#151F2E] shadow-2xl">
                <img
                    src={poster ?? "/placeholder.png"}
                    alt="Poster"
                    className="w-64 transition duration-500 hover:scale-105 md:w-72"
                />
            </div>
        </div>
    );
}