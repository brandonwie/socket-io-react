import Sidebar from './Sidebar';

interface DashboardProps {
  id: string;
}
const Dashboard: React.FC<DashboardProps> = ({
  id,
}: DashboardProps): JSX.Element => {
  return <Sidebar id={id} />;
};

export default Dashboard;
