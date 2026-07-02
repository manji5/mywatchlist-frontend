import MediaCard from "src/components/media/MediaCard";
import type { MediaCardData } from "src/types/media";

interface Props {
    title: string;
    items: MediaCardData[];
}

export default function SearchSection({
    title,
    items,
}: Props) {

    if (items.length === 0) return null;

    return (
        <section className="mb-12">

            <h2 className="mb-5 text-2xl font-bold">
                {title}
            </h2>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

                {items.map((item) => (
                    <MediaCard
                        key={`${item.type}-${item.id}`}
                        media={item}
                    />
                ))}

            </div>

        </section>
    );
}