import Image from 'next/image';
import { glassPanelClass, portraitFrameClass } from '@/lib/styles';
import { cn } from '@/lib/utils';

export function Footer() {
    return (
        <footer className="px-3 pb-6 pt-8 sm:px-6">
            <div className={cn(glassPanelClass, 'mx-auto max-w-6xl px-6 py-8 sm:px-8')}>
                <div className="text-center text-foreground md:text-left">
                    <div className="mb-3 flex items-center justify-center space-x-3 md:justify-start">
                        <div className={cn(portraitFrameClass, 'h-8 w-8 min-w-8')}>
                            <Image src="/images/personal.png" alt="" width={32} height={32} />
                        </div>
                        <span className="text-lg font-semibold">Adi Nata</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Software Engineer · Nature Enthusiast · Bookworm
                    </p>
                </div>
            </div>
        </footer>
    );
}
