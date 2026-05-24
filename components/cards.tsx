// components/Cards.tsx
export interface ServiceCardProps {
    image: any;
    secondaryImage?: any;
    titleLines: string[];
    description: string;
    imagePosition?: 'top' | 'left';
    textAlign?: 'left' | 'center';
    className?: string;
}

export function ServiceCard({
    image,
    secondaryImage,
    titleLines,
    description,
    imagePosition = 'top',
    className = ''
}: ServiceCardProps) {
    const isHorizontal = imagePosition === 'left';

    return (
        <div className={`bg-[#F5F8FA] w-full rounded-2xl p-6 flex flex-col ${className}`}>
            <div className={`p-4 ${isHorizontal ? 'flex flex-col sm:flex-row gap-5' : 'flex flex-col'}`}>
                <div className="flex flex-col items-start">
                    <img
                        src={image.src}
                        alt="Reinigungsdienst"
                        className={`${isHorizontal ? 'lg:w-16 lg:h-16 xl:w-auto xl:h-auto' : 'lg:w-12 lg:h-12 xl:w-auto xl:h-auto'}`}
                    />
                </div>
                <div className={`${isHorizontal ? 'flex-1' : 'mt-5'}`}>
                    {secondaryImage && (
                        <img
                            src={secondaryImage.src}
                            alt="Reinigungsdienst"
                            className="pb-6 lg:w-10 lg:h-10 xl:w-auto xl:h-auto"
                        />
                    )}
                    {titleLines.map((line, index) => (
                        <p
                            key={index}
                            className="font-bold text-xl sm:text-2xl lg:text-lg xl:text-xl leading-snug break-words text-left"
                        >
                            {line}
                        </p>
                    ))}
                    <p className="pt-4 text-sm sm:text-base lg:text-xs xl:text-sm leading-relaxed text-left">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}