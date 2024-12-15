import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import {motion} from 'framer-motion';

import StatCard from "../components/StatCard";
import Header from "../components/common/Header";
import ProductsTable from "../components/products/ProductsTable";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesTrendChart from "../components/products/SalesTrendChart";
import Footer from "../components/common/Footer";


const ProductsPage = () => {
  return (
  <div className='flex-1 overflow-auto relative z-10'>
    <Header title="Products"/>

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STAT */}
        <motion.div>
          <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <StatCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
            <StatCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
            <StatCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
            <StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
          </motion.div>
        </motion.div>

        <ProductsTable />

        {/* CHARTS */}
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default ProductsPage