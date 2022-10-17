import SearchIcon from '../public/icons/search.svg';

const iconTypes: any = {
  search: SearchIcon
};

const IconComponent = ({ name, ...props }: any) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;