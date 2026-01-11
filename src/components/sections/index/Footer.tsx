import Divider from "@/components/Divider";

export default function Footer() {
    return (
        <>
            <footer className="max-w-4xl w-full flex flex-col mx-auto pt-16 pb-8">
                <Divider />
                
                {/* Copyright */}
                <p className="text-center text-sm text-foreground/60 pt-6">
                    Copyright © 2022-2025 Bibhanshu Raj. All Rights Reserved.
                </p>
            </footer>
        </>
    );
}
