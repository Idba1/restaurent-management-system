import { useQuery } from '@tanstack/react-query';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    });

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    });

    return (
        <div className="container mx-auto px-6 py-8">
            <h2 className="text-4xl font-semibold mb-6 text-center">
                <span>Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Revenue Stat */}
                <div className="stat bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="stat-figure text-blue-500 text-3xl">
                        <FaDollarSign />
                    </div>
                    <div className="stat-content">
                        <div className="stat-title  text-black text-lg font-medium">Revenue</div>
                        <div className="stat-value  text-black text-xl font-semibold">${stats.revenue}</div>
                        <div className="stat-desc  text-sm text-gray-500">Jan 1st - Feb 1st</div>
                    </div>
                </div>

                {/* Users Stat */}
                <div className="stat bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="stat-figure text-green-500 text-3xl">
                        <FaUsers />
                    </div>
                    <div className="stat-content">
                        <div className="stat-title text-black text-lg font-medium">Users</div>
                        <div className="stat-value text-black text-xl font-semibold">{stats.users}</div>
                        <div className="stat-desc text-sm text-gray-500">↗︎ 400 (22%)</div>
                    </div>
                </div>

                {/* Menu Items Stat */}
                <div className="stat bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="stat-figure text-yellow-500 text-3xl">
                        <FaBook />
                    </div>
                    <div className="stat-content">
                        <div className="stat-title text-black text-lg font-medium">Menu Items</div>
                        <div className="stat-value text-black text-xl font-semibold">{stats.menuItems}</div>
                        <div className="stat-desc text-sm text-gray-500">↗︎ 400 (22%)</div>
                    </div>
                </div>

                {/* Orders Stat */}
                <div className="stat bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
                    <div className="stat-figure text-orange-500 text-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-content">
                        <div className="stat-title text-black text-lg font-medium">Orders</div>
                        <div className="stat-value text-black text-xl font-semibold">{stats.orders}</div>
                        <div className="stat-desc text-sm text-gray-500">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Bar Chart */}
                <div className="w-full lg:w-2/5">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* Pie Chart */}
                <div className="w-full lg:w-2/5">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;