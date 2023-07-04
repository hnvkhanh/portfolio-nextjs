import Image from 'next/image';
// import styles from './card.module.css';

export default function CardContent({src, header}) {
    return (
        <>
            <h3>{header} &rarr;</h3>
            <Image
                src={src} // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={284} // Desired size with correct aspect ratio
                alt="Page image"
            />
        </>

    )
}