import HeroActions from "./HeroActions";
import HeroInfo from "./HeroInfo";
import HeroPoster from "./HeroPoster";

import type { Media, MediaType } from "../../types";

interface Props {
    media: Media;
    type: MediaType;
}

export default function MediaHero({
    media,
    type,
}: Props) {
    return (
        <section className="relative min-h-[70vh] overflow-hidden">
            {media.backdrop && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${media.backdrop})`,
                    }}
                />
            )}

            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B101B] via-[#0B101Bee] to-[#0B101B66]" />

            <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 py-16">
                <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-end">
                    <HeroPoster poster={media.poster} />

                    <div className="flex flex-1 flex-col gap-8">
                        <HeroInfo media={media} />

                        <HeroActions
                            media={media}
                            type={type}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}