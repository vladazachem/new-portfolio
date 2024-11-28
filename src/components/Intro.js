export default function Intro() {
    return (
        <section>
            <div className="flex flex-col gap-10 py-32">
                <h1>
                    <b className="font-medium text-[60px]">I&apos;m a </b>
                    Junior Front-End
                </h1>
                <h1>Developer &</h1>
                <h1 className="text-center">Web Designer</h1>
            </div>
            <div className="z-0 absolute top-[340px] right-[50px]">
                <svg id="point" width="380" height="380" viewBox="0 0 244 244" fill="none"
                     xmlns="http://www.w3.org/2000/svg" className="z-0">
                    <circle cx="122" cy="122" r="122" fill="#2570BB"/>
                    <circle cx="122" cy="122" r="88" fill="#F06543"/>
                    <circle cx="121.5" cy="121.5" r="52.5" fill="#EDE8E4"/>
                    <circle cx="122" cy="123" r="14" fill="#181410"/>
                </svg>
            </div>

            <div className="divider-line"></div>
        </section>
    );
}
