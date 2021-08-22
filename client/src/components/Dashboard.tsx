interface DashboardProps {
  id: string;
}
const Dashboard: React.FC<DashboardProps> = ({
  id,
}: DashboardProps): JSX.Element => {
  return <div>{id}</div>;
};

export default Dashboard;
