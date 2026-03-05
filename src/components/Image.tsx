interface IProps {
    imagURL: string;
    alt: string;
    className: string;
}

const Image = ({imagURL, alt, className}: IProps) => {
  return (
    <img src={imagURL} alt={alt} className={className} />
  )
}

export default Image