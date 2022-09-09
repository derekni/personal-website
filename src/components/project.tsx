interface Props {
  image: string;
  link: string;
  name: string;
  description: string;
}

// eslint-disable-next-line react/prop-types
const Project: React.FC<Props> = ({ image, link, name, description }) => (
  <>
    <a href={link}>
      <div className="mx-5 my-5 text-xl max-w-xs rounded-lg bg-white border-gray-100 border-2">
        <img src={image} className="rounded-md" />
        <p className="font-medium text-2xl py-2 px-4">{name}</p>
        <p className="text-base font-normal pb-5 px-4">{description}</p>
      </div>
    </a>
  </>
);
export default Project;
