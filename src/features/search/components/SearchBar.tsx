import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";

import { Input } from "@/ui/input";
import { useDebounce } from "src/hooks/useDebounce";

import { useSearch } from "../hooks/useSearch";
import SearchTypeSelect from "./SearchTypeSelect";
import type { SearchType } from "../types";

export default function SearchBar() {
    const [type, setType] = useState<SearchType>("movie");
    const [query, setQuery] = useState("");

    const debouncedQuery = useDebounce(query, 400);

    const navigate = useNavigate();

    const {
        data = [],
        isLoading,
    } = useSearch(type, debouncedQuery);

    console.log(data);

    return (
        <div className="relative flex h-11 w-full">

            <SearchTypeSelect
                value={type}
                onChange={setType}
            />

            <div className="relative flex-1">

                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-500"
                />

                <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={`Search ${type}...`}
                    className="h-full rounded-l-none border-white/10 bg-white/5 pl-10"
                />

            </div>

            {debouncedQuery.length >= 4 && (
                <div className="absolute left-0 top-12 z-50 w-full rounded-xl border border-white/10 bg-[#101827] p-2 shadow-2xl">

                    {isLoading && (
                        <div className="px-3 py-2 text-sm text-slate-400">
                            Searching...
                        </div>
                    )}

                    {!isLoading && data.length === 0 && (
                        <div className="px-3 py-2 text-sm text-slate-400">
                            No results found.
                        </div>
                    )}

                    {!isLoading &&
                        data.map((item: any) => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    navigate(`/media/${item.type}/${item.id}`);
                                    setQuery("");
                                }}
                                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-white/10"
                            >
                                <img
                                    src={item.poster ?? "/placeholder.png"}
                                    alt={item.title}
                                    className="h-14 w-10 rounded object-cover"
                                />

                                <div>
                                    <p className="font-medium text-white">
                                        {item.title}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        {item.year ?? "-"}
                                    </p>
                                </div>

                            </div>
                        ))}

                </div>
            )}

        </div>
    );
}