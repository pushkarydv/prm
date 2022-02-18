import Icon from "../components/Icons";
export default function FeatureBox(props) {
  return (
    <div className="basis-1/2 p-6 flex items-center md:max-w-sm md:mx-auto lg:max-w-lg xl:max-w-xl">
      <div className="shrink-0">
        <Icon name={props.icon} cls={props.class} />
      </div>
      <div className="pl-4">
        <div className="text-2xl font-medium text-cyan-800 pb-1">
          {props.name}
        </div>
        <p className="text-slate-500 text-lg">{props.description}</p>
      </div>
    </div>
  );
}
