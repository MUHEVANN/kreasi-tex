import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type TestimoniProps = {
    x: string;
    y: string;
    comment: string;
    name: string;
    profile: string;
};

function TestimoniCard({ x, y, comment, profile, name }: TestimoniProps) {
    return (
        <div
            className={`absolute  top-0 left-0 bg-white max-w-[420px] px-5 py-5 shadow-xl rounded-lg shadow-gray-100`}
            style={{
                transform: `translate(${x}, ${y})`,
            }}
        >
            <p className="text-xl opacity-75">{comment}</p>

            <div className="flex items-center gap-4 capitalize mt-[2rem]">
                <Avatar>
                    <AvatarImage src={`/storage/${profile}`} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-md tracking-[-1px]">
                    {name}
                </span>
            </div>

            <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>

            <div className="absolute inset-0 md:bg-transparent md:backdrop-blur-[1.5px] hover:backdrop-blur-0"></div>
        </div>
    );
}

export default TestimoniCard;
