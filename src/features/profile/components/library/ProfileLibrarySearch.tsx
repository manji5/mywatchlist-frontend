import { Search } from "lucide-react";

interface Props {
    value: string;
    onChange: (value: string) => void;

    type: string;
    onTypeChange: (value: string) => void;

    status: string;
    onStatusChange: (value: string) => void;

    total: number;
}

export default function ProfileLibrarySearch({
    value,
    onChange,
    type,
    onTypeChange,
    status,
    onStatusChange,
    total,
}: Props) {
    return (
        <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

            <div className="flex flex-1 flex-col gap-4 md:flex-row">

                <div className="relative flex-1">

                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder="Search your library..."
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#151F2E] pl-11 pr-4 outline-none transition focus:border-sky-500"
                    />

                </div>

                <select
                    value={type}
                    onChange={(e) => onTypeChange(e.target.value)}
                    className="h-12 rounded-xl border border-white/10 bg-[#151F2E] px-4"
                >
                    <option value="ALL">All Types</option>
                    <option value="MOVIE">Movies</option>
                    <option value="TV_SERIES">Series</option>
                    <option value="ANIME">Anime</option>
                </select>

                <select
                    value={status}
                    onChange={(e) => onStatusChange(e.target.value)}
                    className="h-12 rounded-xl border border-white/10 bg-[#151F2E] px-4"
                >
                    <option value="ALL">All Status</option>
                    <option value="WATCHING">Watching</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="PLAN_TO_WATCH">Planned</option>
                    <option value="ON_HOLD">On Hold</option>
                    <option value="DROPPED">Dropped</option>
                </select>

            </div>

            <p className="text-sm text-slate-400">
                {total} Results
            </p>

        </div>
    );
}