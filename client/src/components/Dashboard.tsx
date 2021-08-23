import Sidebar from './Sidebar';

interface DashboardProps {
  id: string;
}
const Dashboard: React.FC<DashboardProps> = ({
  id,
}: DashboardProps): JSX.Element => {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;
