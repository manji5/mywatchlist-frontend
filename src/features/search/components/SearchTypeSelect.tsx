import type { SearchType } from "../types";

interface Props {
    value: SearchType;
    onChange: (value: SearchType) => void;
}

export default function SearchTypeSelect({
    value,
    onChange,
}: Props) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value as SearchType)}
            className="h-full rounded-l-xl border border-r-0 border-white/10 bg-[#101827] px-4 text-sm font-medium text-white outline-none transition hover:bg-[#182133]"
        >
            <option value="movie">🎬 Movie</option>
            <option value="series">📺 Series</option>
            <option value="anime">🌸 Anime</option>
        </select>
    );
}