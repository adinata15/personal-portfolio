import { ctaSecondaryClass } from '@/lib/styles';
import { cn } from '@/lib/utils';

export function ResumeDownloadButton({ className }: { className?: string }) {
    return (
        <a
            href="/pdfs/resume.pdf"
            download="AdiNata's resume.pdf"
            className={cn(ctaSecondaryClass, 'w-48 shrink-0', className)}
        >
            Download PDF
        </a>
    );
}
