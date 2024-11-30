import BlinkEyeAnimation from "@/components/animations/BlinkEyeAnimation";
import IntroTextAnimation from "@/components/animations/IntroTextAnimation";

export default function Intro() {
    return (
        <section>
            <IntroTextAnimation />
            <BlinkEyeAnimation />
            <div className="divider-line"></div>
        </section>
    );
}
