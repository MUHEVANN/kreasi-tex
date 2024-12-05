import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type TestimoniProps = {
    x: string;
    y: string;
};

function TestimoniCard({ x, y }: TestimoniProps) {
    return (
        <div
            className={`absolute  top-0 left-0 bg-white max-w-[420px] px-5 py-5 shadow-xl rounded-lg shadow-gray-100`}
            style={{
                transform: `translate(${x}, ${y})`,
            }}
        >
            <p className="text-xl opacity-75">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae, maiores!
            </p>

            <div className="flex items-center gap-4 capitalize mt-[2rem]">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-md tracking-[-1px]">
                    Evan
                </span>
            </div>

            <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>
        </div>
    );
}

export default TestimoniCard;
