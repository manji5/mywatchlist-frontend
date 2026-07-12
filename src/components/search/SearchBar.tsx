import { Search } from "lucide-react";
import { Input } from "@/ui/input";

export default function SearchBar() {
    return (
        <div className="relative mb-12">

            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

            <Input
                placeholder="Search movies, series or anime..."
                className="h-14 pl-12 text-lg"
            />

        </div>
    );
}