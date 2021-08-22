interface Sidebar {
  id: string;
}

const Sidebar: React.FC<Sidebar> = ({ id }: Sidebar) => {
  return <div>{id}</div>;
};

export default Sidebar;
